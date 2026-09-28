import { cn } from "@/lib/utils";

export function Section({
  eyebrow,
  title,
  text,
  children,
  className
}: {
  eyebrow?: string;
  title?: string;
  text?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("py-16 sm:py-20", className)}>
      <div className="container-x">
        {(eyebrow || title || text) && (
          <div className="mb-10 max-w-3xl">
            {eyebrow && <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-gold">{eyebrow}</p>}
            {title && <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">{title}</h2>}
            {text && <p className="mt-4 text-base leading-7 text-mist sm:text-lg">{text}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
