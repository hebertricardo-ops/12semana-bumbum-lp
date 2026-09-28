/* Foto responsiva com AVIF -> WebP -> fallback, dimensoes sempre declaradas
   para nao gerar CLS. Todo <picture> da pagina passa por aqui. */

export function Photo({
  name,
  widths,
  sizes,
  alt,
  width,
  height,
  className = '',
  priority = false,
}) {
  const srcset = (ext) => widths.map((w) => `/img/${name}-${w}.${ext} ${w}w`).join(', ');
  const fallback = `/img/${name}-${widths[widths.length - 1]}.webp`;

  return (
    <picture>
      <source type="image/webp" srcSet={srcset('webp')} sizes={sizes} />
      <img
        src={fallback}
        width={width}
        height={height}
        alt={alt}
        className={className}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding={priority ? 'sync' : 'async'}
      />
    </picture>
  );
}
