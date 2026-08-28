import { resolve } from 'node:path';
import { readFileSync } from 'node:fs';
import sizeOf from 'image-size';

function getWidth(img?: string) {
  if (!img) return 0;

  const path = resolve('public', img.replace(/^\//, ''));
  const buffer = readFileSync(path);

  return sizeOf(buffer).width;
}

export function sortLinks(a: any, b: any) {
  const widthA = getWidth(a.data.img);
  const widthB = getWidth(b.data.img);

  return (
    widthB - widthA ||
    (a.data.name < b.data.name ? -1 : a.data.name > b.data.name ? 1 : 0)
  );
}
