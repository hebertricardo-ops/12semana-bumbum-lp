import { useState, useEffect } from 'react';
import { useReducedMotion } from 'motion/react';

/* ---------- CARROSSEL DE PAGINAS ----------
   Marquee horizontal continuo: 10 "paginas" do produto deslizando.
   Pausa no hover; com prefers-reduced-motion fica estatico. */
const PAGES = Array.from({ length: 10 }, (_, i) => ({
  src: `/img/carousel-${i + 1}.webp`,
  alt: `Página ${i + 1} do método`,
}));

export function PagesCarousel() {
  const reduce = useReducedMotion();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let mounted = true;
    const imagePromises = PAGES.map((p) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = resolve;
        img.onerror = resolve;
        img.src = p.src;
      });
    });

    Promise.all(imagePromises).then(() => {
      if (mounted) {
        setLoaded(true);
      }
    });

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section className="band band-tight" style={{ '--phase': 'var(--color-phase-1)' }}>
      <div className="wrap">
        <h2 className="display-lg mx-auto text-center">Dá uma olhada <span style={{ color: 'var(--color-brand)' }}>por dentro</span></h2>
      </div>

      <div className="carousel-fade mt-8">
        {!loaded ? (
          // Skeleton animado durante o carregamento
          <div className="carousel-track">
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className="carousel-card"
                role="status"
                aria-label="Carregando imagens"
              >
                <div className="w-full h-full bg-[var(--color-paper-alt)] animate-pulse" />
              </div>
            ))}
          </div>
        ) : (
          // Marquee só inicia após carregamento
          <div
            className={`carousel-track${reduce ? '' : ' carousel-run'}`}
            style={reduce ? undefined : { animationDuration: '46s' }}
          >
            {[...PAGES, ...PAGES].map((p, i) => (
              <div
                key={i}
                className="carousel-card"
                aria-hidden={i >= PAGES.length ? 'true' : undefined}
              >
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* CTA pós-carrossel: primeira oportunidade de conversão na página.
         Texto conecta a curiosidade ("olhou por dentro") com a próxima ação. */}
      <div className="wrap mt-8 text-center">
        <button
          type="button"
          onClick={() => document.getElementById('preco')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
          className="btn btn-primary px-8 text-[1rem]"
          style={{ minHeight: 50 }}
        >
          Quero ver os planos
        </button>
      </div>
    </section>
  );
}