export function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  const text = tone === "light" ? "text-white" : "text-navy";
  return (
    <span className={`inline-flex items-center gap-2.5 ${text}`}>
      <svg width="30" height="30" viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="16" cy="16" r="15" fill="none" stroke="currentColor" strokeOpacity=".25" />
        <path d="M16 3a13 13 0 0 1 0 26" fill="none" stroke="#F5A623" strokeWidth="2.4" strokeLinecap="round" />
        <circle cx="16" cy="16" r="5.5" fill="#F5A623" />
      </svg>
      <span className="display text-[1.35rem] leading-none font-medium tracking-tight">
        Potiguar <span className="italic text-sun">Solar</span>
      </span>
    </span>
  );
}
