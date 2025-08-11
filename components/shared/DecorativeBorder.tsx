export default function DecorativeBorder({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg className="w-full h-8" viewBox="0 0 400 32" preserveAspectRatio="none">
        <pattern id="stitch" x="0" y="0" width="40" height="32" patternUnits="userSpaceOnUse">
          <path 
            d="M0 16 L10 8 L20 16 L30 8 L40 16" 
            stroke="currentColor" 
            strokeWidth="1" 
            fill="none" 
            opacity="0.3"
          />
          <circle cx="20" cy="16" r="2" fill="currentColor" opacity="0.2" />
        </pattern>
        <rect width="400" height="32" fill="url(#stitch)" />
      </svg>
    </div>
  )
}

export function QuiltPattern({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="quiltPattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <rect width="30" height="30" fill="currentColor" opacity="0.02" />
            <rect x="30" y="30" width="30" height="30" fill="currentColor" opacity="0.02" />
            <path d="M0,0 L30,30 M30,0 L0,30 M30,30 L60,60 M60,30 L30,60" 
                  stroke="currentColor" strokeWidth="0.5" opacity="0.05" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#quiltPattern)" />
      </svg>
    </div>
  )
}