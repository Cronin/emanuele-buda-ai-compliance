'use client';

import { useEffect, useRef } from 'react';

export default function CryptographicRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = 400;

    const binary = '01';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];

    // Initialize drops
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
    }

    const draw = () => {
      // Semi-transparent black to create trail effect
      ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#000000';
      ctx.font = `${fontSize}px JetBrains Mono, monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = binary[Math.floor(Math.random() * binary.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.globalAlpha = 0.1;
        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-x-0 top-0 pointer-events-none"
    />
  );
}
