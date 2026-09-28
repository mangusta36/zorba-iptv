import { access, mkdir, writeFile } from 'node:fs/promises';
import sharp from 'sharp';

const photos = [
  ['hero-football', 'photo-1517927033932-b3d18e61fb3a', 1900],
  ['football-action', 'photo-1431324155629-1a6deb1dec8d', 1000],
  ['basketball', 'photo-1612768875331-0447b960fa40', 1000],
  ['cinema-crowd', 'photo-1485095329183-d0797cdc5676', 1000],
  ['tennis', 'photo-1554068865-24cecd4e34b8', 1000],
  ['diving', 'photo-1544551763-46a013bb70d5', 1000],
  ['film-set', 'photo-1612544409025-e1f6a56c1152', 1000],
  ['concert', 'photo-1459749411175-04bf5292ceea', 1000],
  ['night-street', 'photo-1601042879364-f3947d3f9c16', 1000],
  ['desert', 'photo-1682687980961-78fa83781450', 1000],
  ['family-film', 'photo-1665827491450-c6f329f2285c', 1300],
  ['racing', 'photo-1572359642202-3cc832e60700', 1000],
  ['portrait', 'photo-1669309935770-f9eb944c6fd6', 1000],
  ['street-crowd', 'photo-1517328894681-0f5dfabd463c', 1000],
  ['city-night', 'photo-1513061379709-ef0cd1695189', 1300],
  ['stage-singer', 'photo-1517230878791-4d28214057c2', 1000],
  ['lion', 'photo-1614027164847-1b28cfe1df60', 1000],
  ['ocean', 'photo-1616141893496-fbc65370493e', 1000],
  ['urban-portrait', 'photo-1671915010344-d837b3e2b557', 1000],
  ['television', 'photo-1593784991095-a205069470b6', 1300],
  ['sports-night', 'photo-1519766304817-4f37bda74a26', 1300],
  ['hero-candidate-a', 'photo-1657957746418-6a38df9e1ea7', 1700],
  ['hero-candidate-b', 'photo-1517466787929-bc90951d0974', 1700],
  ['hero-candidate-c', 'photo-1583214499157-ce8d6f368fef', 1700],
  ['hero-candidate-d', 'photo-1550171362-62bca9e5ad4e', 1700],
  ['guitarist', 'photo-1498038432885-c6f3f1b912ee', 1000],
  ['theater-show', 'photo-1576724196706-3f23f51ea351', 1000],
  ['stadium-crowd', 'photo-1665413811870-5b29a250f64a', 1000],
  ['dancer', 'photo-1547153760-18fc86324498', 1000],
  ['home-viewing', 'photo-1555041469-10ba46e6c62e', 1000],
];

await mkdir('public/media', { recursive: true });
for (const [name, id, width] of photos) {
  try { await access(`public/media/${name}.webp`); continue; } catch { /* download missing asset */ }
  const url = `https://images.unsplash.com/${id}?fit=max&w=${width}&q=85`;
  const response = await fetch(url);
  if (!response.ok) throw new Error(`${name}: ${response.status} ${url}`);
  const buffer = Buffer.from(await response.arrayBuffer());
  const info = await sharp(buffer).metadata();
  if (!info.width || info.width < 400) throw new Error(`${name}: insufficient resolution`);
  await writeFile(`public/media/${name}.webp`, await sharp(buffer).webp({ quality: 83 }).toBuffer());
  console.log(`${name}: ${info.width}x${info.height}`);
}
