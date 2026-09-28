import { Button } from "./button";

export function PageHero({
  eyebrow,
  title,
  text,
  cta
}: {
  eyebrow: string;
  title: string;
  text: string;
  cta?: { label: string; href: string };
}) {
  return (
    <section className="border-b border-white/10 py-20 sm:py-28">
      <div className="container-x">
        <p className="page-label">{eyebrow}</p>
        <h1 className="page-title max-w-4xl">{title}</h1>
        <p className="page-lead mt-6">{text}</p>
        {cta && (
          <div className="mt-8">
            <Button href={cta.href}>{cta.label}</Button>
          </div>
        )}
      </div>
    </section>
  );
}
