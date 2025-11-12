import { useEffect, useState } from 'react';

const LoadingAnimation = () => {
  const [position, setPosition] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => {
        const newPos = prev + (direction * 2);
        if (newPos >= 100) {
          setDirection(-1);
          return 100;
        }
        if (newPos <= 0) {
          setDirection(1);
          return 0;
        }
        return newPos;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [direction]);

  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
      <div className="w-full max-w-2xl px-8">
        <div className="mb-8 text-center">
          <div className="text-3xl font-bold mb-2">
            <span className="text-primary">Move</span>
            <span className="text-foreground">Line</span>
          </div>
          <p className="text-muted-foreground text-sm">Loading...</p>
        </div>

        <div className="relative h-32 bg-gradient-to-b from-transparent via-muted/20 to-muted/40 rounded-lg overflow-hidden">
          <div className="absolute bottom-8 left-0 right-0 h-1 bg-border" />

          <div
            className="absolute bottom-0 transition-all duration-300 ease-linear"
            style={{
              left: `${position}%`,
              transform: direction === -1 ? 'scaleX(-1)' : 'scaleX(1)'
            }}
          >
            <svg width="120" height="80" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g className="animate-[bounce_0.5s_ease-in-out_infinite]" style={{ transformOrigin: 'center bottom' }}>
                <rect x="20" y="15" width="15" height="15" rx="2" fill="#142" className="opacity-80"/>
                <rect x="38" y="10" width="18" height="20" rx="2" fill="#D4AF37" className="opacity-90"/>
                <path d="M 58 18 L 62 12 L 68 12 L 72 18 Z" fill="#4CAF50" className="opacity-80"/>
              </g>

              <rect x="15" y="35" width="75" height="30" rx="3" fill="#006241"/>
              <rect x="15" y="35" width="75" height="8" rx="2" fill="#00796B"/>

              <rect x="25" y="45" width="55" height="15" rx="2" fill="#D4AF37" className="opacity-20"/>

              <path d="M 15 48 L 8 48 L 8 58 L 15 58 Z" fill="#004D40"/>

              <rect x="85" y="40" width="20" height="25" rx="2" fill="#00796B"/>
              <rect x="88" y="43" width="14" height="8" rx="1" fill="#4DD0E1" className="opacity-60"/>

              <circle cx="30" cy="68" r="8" fill="#1a1a1a"/>
              <circle cx="30" cy="68" r="5" fill="#424242"/>
              <circle cx="30" cy="68" r="2" fill="#757575" className="animate-spin" style={{ animationDuration: '0.6s' }}/>

              <circle cx="75" cy="68" r="8" fill="#1a1a1a"/>
              <circle cx="75" cy="68" r="5" fill="#424242"/>
              <circle cx="75" cy="68" r="2" fill="#757575" className="animate-spin" style={{ animationDuration: '0.6s' }}/>

              {direction === 1 && position > 5 && (
                <>
                  <ellipse cx="8" cy="72" rx="6" ry="2" fill="#9E9E9E" className="opacity-30 animate-pulse"/>
                  <ellipse cx="3" cy="73" rx="4" ry="1.5" fill="#BDBDBD" className="opacity-20 animate-pulse" style={{ animationDelay: '0.2s' }}/>
                </>
              )}
              {direction === -1 && position < 95 && (
                <>
                  <ellipse cx="112" cy="72" rx="6" ry="2" fill="#9E9E9E" className="opacity-30 animate-pulse"/>
                  <ellipse cx="117" cy="73" rx="4" ry="1.5" fill="#BDBDBD" className="opacity-20 animate-pulse" style={{ animationDelay: '0.2s' }}/>
                </>
              )}
            </svg>
          </div>

          <div className="absolute top-4 left-8 animate-float" style={{ animationDelay: '0s' }}>
            <svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="20" cy="12" rx="18" ry="10" fill="white" className="opacity-70"/>
              <ellipse cx="15" cy="10" rx="12" ry="7" fill="white" className="opacity-50"/>
            </svg>
          </div>

          <div className="absolute top-6 right-16 animate-float" style={{ animationDelay: '1s' }}>
            <svg width="50" height="28" viewBox="0 0 50 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="25" cy="14" rx="22" ry="12" fill="white" className="opacity-60"/>
              <ellipse cx="20" cy="12" rx="15" ry="8" fill="white" className="opacity-40"/>
            </svg>
          </div>

          <div className="absolute top-8 left-1/3 animate-float" style={{ animationDelay: '2s' }}>
            <svg width="35" height="20" viewBox="0 0 35 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="17" cy="10" rx="16" ry="9" fill="white" className="opacity-50"/>
            </svg>
          </div>
        </div>

        <div className="mt-8">
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary via-primary-glow to-primary rounded-full transition-all duration-300"
              style={{ width: `${Math.abs(position)}%` }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default LoadingAnimation;
