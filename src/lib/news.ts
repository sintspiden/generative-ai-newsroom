import { getCollection } from 'astro:content';

export type NewsItem = Awaited<ReturnType<typeof getNewsItems>>[number];

const slugify = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

const toDayKey = (iso: string) => iso.slice(0, 10);

export async function getNewsItems() {
  const entries = await getCollection('news');
  return entries
    .map((entry) => ({
      ...entry,
      data: {
        ...entry.data,
        tags: entry.data.tags || [],
        entities: entry.data.entities || [],
      },
    }))
    .sort((a, b) => {
      const dateDiff = new Date(b.data.date).getTime() - new Date(a.data.date).getTime();
      if (dateDiff !== 0) return dateDiff;
      const importanceDiff = (b.data.importance ?? 0) - (a.data.importance ?? 0);
      if (importanceDiff !== 0) return importanceDiff;
      return a.data.title.localeCompare(b.data.title);
    });
}

export async function getLatestDayItems() {
  const items = await getNewsItems();
  if (!items.length) return { latestDay: null, items: [] as typeof items };
  const latestDay = toDayKey(items[0].data.date);
  return { latestDay, items: items.filter((item) => toDayKey(item.data.date) === latestDay) };
}

export async function getCategoryMap() {
  const items = await getNewsItems();
  const map = new Map<string, NewsItem[]>();
  for (const item of items) {
    const key = item.data.category;
    if (!map.has(key)) map.set(key, []);
    map.get(key)!.push(item);
  }
  return map;
}

export async function getSourceMap() {
  const items = await getNewsItems();
  const map = new Map<string, NewsItem[]>();
  for (const item of items) {
    if (!item.data.source) continue;
    const key = item.data.source;
    if (!map.has(key)) map.set(key, []);
    map.get(key)!.push(item);
  }
  return map;
}

export async function getDayMap() {
  const items = await getNewsItems();
  const map = new Map<string, NewsItem[]>();
  for (const item of items) {
    const key = toDayKey(item.data.date);
    if (!map.has(key)) map.set(key, []);
    map.get(key)!.push(item);
  }
  return map;
}

export async function getMonthlyMap() {
  const dayMap = await getDayMap();
  const monthly = new Map<string, { day: string; count: number }[]>();
  for (const [day, items] of dayMap) {
    const month = day.slice(0, 7);
    if (!monthly.has(month)) monthly.set(month, []);
    monthly.get(month)!.push({ day, count: items.length });
  }
  for (const [, entries] of monthly) {
    entries.sort((a, b) => b.day.localeCompare(a.day));
  }
  return monthly;
}

export { slugify, toDayKey };
