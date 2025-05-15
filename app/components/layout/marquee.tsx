export function Marquee() {
  return (
    <div className="marquee__container overflow-hidden py-3">
      <div className="marquee__content animate-marquee whitespace-nowrap">
        {[...Array(24)].map((_, i) => (
          <span key={i} className="text-primary-foreground mx-4 text-3xl font-baloo">
            Grow
          </span>
        ))}
        {[...Array(24)].map((_, i) => (
          <span key={i} className="text-primary-foreground mx-4 text-3xl font-baloo">
            Grow
          </span>
        ))}
      </div>
    </div>
  );
}
