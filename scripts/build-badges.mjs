import sharp from 'sharp';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'app', 'public', 'img');

/* Selos pequenos com fundo transparente: mesmo tratamento do hero (aparar
   pela transparencia real, nunca assumir fundo branco), em tamanhos menores
   porque sao exibidos pequenos (selo circular). */
const badges = [{ name: 'garantia-7dias', src: path.join(ROOT, 'public', 'garantia-7dias.png'), widths: [160, 240, 360] }];

for (const badge of badges) {
  const src = sharp(badge.src);
  const meta = await src.metadata();

  if (!meta.hasAlpha) {
    console.warn(`[build-badges] AVISO: ${badge.name} nao tem canal alfa.`);
  }

  const trimmed = await src.trim({ threshold: 8 }).toBuffer({ resolveWithObject: true });
  console.log(badge.name, 'trimmed', trimmed.info.width, 'x', trimmed.info.height);

  for (const w of badge.widths) {
    const pipe = () => sharp(trimmed.data).resize({ width: w, withoutEnlargement: true });

    await pipe().avif({ quality: 62, effort: 7 }).toFile(path.join(OUT, `${badge.name}-${w}.avif`));
    await pipe()
      .webp({ quality: 84, effort: 6, alphaQuality: 90 })
      .toFile(path.join(OUT, `${badge.name}-${w}.webp`));
    console.log('wrote', `${badge.name}-${w}`);
  }
}
