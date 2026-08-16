/** Lightweight, CSS-only basketball ambience: court lines + floating balls. */
export function Ball({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <circle cx="50" cy="50" r="48" className="fill-accent/25" />
      <g className="stroke-accent/50" strokeWidth="2.5" fill="none">
        <circle cx="50" cy="50" r="48" />
        <path d="M2 50h96M50 2v96" />
        <path d="M18 12c14 22 14 54 0 76M82 12c-14 22-14 54 0 76" />
      </g>
    </svg>
  );
}

export function BasketballBg({ dense = false }: { dense?: boolean }) {
  const balls = dense
    ? [
        { s: 90, l: "6%", t: "12%", d: "0s", dur: "17s" },
        { s: 46, l: "78%", t: "22%", d: "-4s", dur: "21s" },
        { s: 130, l: "62%", t: "68%", d: "-9s", dur: "25s" },
        { s: 34, l: "28%", t: "78%", d: "-2s", dur: "19s" },
      ]
    : [
        { s: 70, l: "10%", t: "20%", d: "-3s", dur: "22s" },
        { s: 40, l: "84%", t: "62%", d: "-8s", dur: "26s" },
      ];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="court-lines absolute inset-0 opacity-[0.55]" />
      {balls.map((b, i) => (
        <div
          key={i}
          className="absolute animate-float-ball"
          style={{
            width: b.s,
            height: b.s,
            left: b.l,
            top: b.t,
            animationDelay: b.d,
            animationDuration: b.dur,
          }}
        >
          <Ball className="h-full w-full animate-spin-slow opacity-30" />
        </div>
      ))}
    </div>
  );
}
