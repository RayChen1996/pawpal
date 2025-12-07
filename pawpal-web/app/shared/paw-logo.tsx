export function PawLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      className={`text-emerald-500 ${className ?? ""}`}
      aria-hidden
      focusable={false}
    >
      <circle cx="20" cy="20" r="10" fill="currentColor" opacity="0.8" />
      <circle cx="44" cy="20" r="10" fill="currentColor" opacity="0.8" />
      <circle cx="20" cy="42" r="10" fill="currentColor" opacity="0.8" />
      <circle cx="44" cy="42" r="10" fill="currentColor" opacity="0.8" />
      <path
        d="M18 36c0 6 6 12 14 12s14-6 14-12-6-8-14-8-14 2-14 8Z"
        fill="currentColor"
        opacity="0.9"
      />
    </svg>
  );
}
