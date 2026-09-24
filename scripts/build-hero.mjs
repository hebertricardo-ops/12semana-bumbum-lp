import sharp from 'sharp';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.join(ROOT, 'public', 'hero.png');
const OUT = path.join(ROOT, 'app', 'public', 'img');

/* O arquivo fonte (public/hero.png) e entregue com fundo ja transparente
   (alfa real, nao um fundo branco solido). Este script SO precisa:
     1. Confirmar que a transparencia existe (senao, avisar em vez de
        assumir fundo branco e recortar errado).
     2. Aparar a margem totalmente transparente ao redor do conteudo.
     3. Exportar AVIF/WebP preservando o canal alfa original, sem
        reprocessar cor por cor (reprocessamento e desnecessario e arrisca
        estragar uma transparencia que ja esta correta). */

const src = sharp(SRC);
const meta = await src.metadata();

if (!meta.hasAlpha) {
  console.warn(
    '[build-hero] AVISO: public/hero.png nao tem canal alfa (nao e transparente).\n' +
      '  Este script espera um PNG ja recortado com fundo transparente.\n' +
      '  Gerando mesmo assim, mas o mockup vai aparecer com fundo solido na pagina.',
  );
}

// Aparar so pixels 100% transparentes nas bordas (bounding box real do
// conteudo), sem tocar em cor. `trim()` sem `background` usa o alfa quando
// o formato tem canal alfa.
const trimmed = await src.trim({ threshold: 8 }).toBuffer({ resolveWithObject: true });
console.log('trimmed', trimmed.info.width, 'x', trimmed.info.height);

for (const w of [640, 960, 1280]) {
  const pipe = () => sharp(trimmed.data).resize({ width: w, withoutEnlargement: true });

  await pipe().avif({ quality: 58, effort: 7 }).toFile(path.join(OUT, `hero-${w}.avif`));
  await pipe()
    .webp({ quality: 82, effort: 6, alphaQuality: 90 })
    .toFile(path.join(OUT, `hero-${w}.webp`));
  console.log('wrote hero-' + w);
}
