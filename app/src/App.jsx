import { useCallback } from 'react';
import { IconSprite } from './components/Icon';
import { Dock, ProgressBar } from './components/Dock';
import { PagesCarousel } from './components/Carousel';
import { Hero } from './sections/Hero';
import { Thoughts, Blame } from './sections/Problem';
import { Method, Steps } from './sections/Method';
import { Pricing } from './sections/Pricing';
import {
  Fit,
  Testimonials,
  Anchor,
  Guarantee,
  Standstill,
  Faq,
  Footer,
  AnchorSummary,
  FinalCta,
} from './sections/Close';

/* Destino do checkout ainda nao existe. Todo CTA passa por aqui: quando o
   link sair, basta trocar CHECKOUT e a pagina inteira aponta para ele. */
const CHECKOUT = {
  basico: null,
  completo: null,
};

export default function App() {
  const handleCta = useCallback((plano) => {
    const url = CHECKOUT[plano];

    // Evento para o pixel do Meta, disparado antes do redirecionamento.
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'InitiateCheckout', { content_name: plano });
    }

    if (url) {
      window.location.href = url;
      return;
    }

    // Sem checkout configurado: leva a leitora ao bloco de precos em vez de
    // deixar o clique morrer em um link vazio.
    document.getElementById('preco')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return (
    <>
      <IconSprite />
      <ProgressBar />

      <main>
        <Hero onCta={handleCta} />
        <PagesCarousel />
        <Thoughts />
        <Blame />
        <Method />
        <Steps />

        {/* Depoimentos, ancoragem e garantia vem antes do preco: a leitora ve prova,
            o valor da oferta e o risco removido antes de decidir. */}
        <Testimonials />
        <Anchor />
        <Fit />
        <Guarantee />

        <div data-preco>
          <Pricing
            id="preco"
            titulo={<span>Escolha <span style={{ color: 'var(--color-brand)' }}>por onde começar</span></span>}
            subtitulo="Dois jeitos de começar. A diferença entre eles é de vinte reais."
            onCta={handleCta}
          />
        </div>

        <AnchorSummary />
        <Standstill />

        <FinalCta onCta={handleCta} />

        <Faq />
      </main>

      <Footer />
      <Dock onCta={handleCta} />
    </>
  );
}
