export default function Logo({ className = "h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Decorative quilt pattern */}
      <g opacity="0.15">
        <path d="M5 10L15 20L5 30" stroke="currentColor" strokeWidth="1" />
        <path d="M15 10L25 20L15 30" stroke="currentColor" strokeWidth="1" />
        <path d="M5 20h20" stroke="currentColor" strokeWidth="1" />
      </g>
      
      {/* Main text */}
      <text x="35" y="28" fill="currentColor" className="font-serif text-2xl font-medium">
        Quiltefryd
      </text>
      
      <text x="35" y="45" fill="currentColor" className="text-sm" opacity="0.8">
        Marit Aslesen
      </text>
      
      {/* Decorative line */}
      <line x1="35" y1="50" x2="140" y2="50" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    </svg>
  )
}