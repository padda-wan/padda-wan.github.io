import { useEffect, useRef, useState } from 'react';

interface TiltValues {
  rotateX: number;
  rotateY: number;
}

export function useTilt() {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState<TiltValues>({ rotateX: 0, rotateY: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Calculate position relative to element center
      const x = e.clientX - rect.left - centerX;
      const y = e.clientY - rect.top - centerY;

      // Calculate tilt angles (very subtle: max 0.5 degrees)
      const rotateY = (x / centerX) * 0.5;
      const rotateX = -(y / centerY) * 0.5;

      setTilt({ rotateX, rotateY });
    };

    const handleMouseLeave = () => {
      setTilt({ rotateX: 0, rotateY: 0 });
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return {
    ref,
    style: {
      transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
      transition: 'transform 0.1s ease-out',
    },
  };
}