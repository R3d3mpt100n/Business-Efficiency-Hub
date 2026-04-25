export function EarlyAccessNote({ className = "" }: { className?: string }) {
  return (
    <p className={`text-xs text-amber-500/80 leading-relaxed ${className}`}>
      Early access pricing is live now.
      <br />
      This is the lowest price Ledgely Pro will ever be.
    </p>
  );
}
