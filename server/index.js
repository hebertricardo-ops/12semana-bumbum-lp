import express from 'express';
import compression from 'compression';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(__dirname, '..', 'dist');
const PORT = process.env.PORT || 3000;

const app = express();

app.disable('x-powered-by');
app.use(compression());

/* Os assets com hash no nome sao imutaveis: cache longo.
   O HTML nunca e cacheado, para que um deploy novo chegue na hora. */
app.use(
  '/assets',
  express.static(path.join(DIST, 'assets'), {
    immutable: true,
    maxAge: '1y',
  }),
);

app.use(
  express.static(DIST, {
    maxAge: '7d',
    setHeaders(res, filePath) {
      if (filePath.endsWith('.html')) {
        res.setHeader('Cache-Control', 'no-cache');
      }
    },
  }),
);

app.get('/healthz', (_req, res) => res.json({ ok: true }));

// Pagina unica: qualquer rota devolve o index.
app.get('*', (_req, res) => {
  res.setHeader('Cache-Control', 'no-cache');
  res.sendFile(path.join(DIST, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`12 planilhas rodando em http://localhost:${PORT}`);
});
