export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 164 40" fill="none" role="img" aria-label="ZORBA" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 6h26L4 34h26M40 7.5c-8 0-13 5.5-13 12.5S32 32.5 40 32.5 53 27 53 20 48 7.5 40 7.5ZM63 34V6h12c8 0 12 3.5 12 9s-4 9-12 9H63m12 0 13 10M99 34V6h13c7 0 11 2.8 11 8 0 4-2.5 6.6-7 7.2 5.5.5 8.5 3 8.5 7.1 0 5-4.2 7.7-11.5 7.7H99Zm0-13h14M133 34l12-28 12 28m-20-9h16" stroke="currentColor" strokeWidth="4.2" strokeLinecap="square" strokeLinejoin="round" />
      <path d="m34 5-5 5" stroke="var(--accent)" strokeWidth="4.2" strokeLinecap="square" />
    </svg>
  );
}
