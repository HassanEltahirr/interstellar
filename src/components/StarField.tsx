import React, { useEffect, useRef } from 'react';
import './StarField.css'; // Ensure you have a CSS file for styles

const StarField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to window size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Star properties
    const stars: { x: number; y: number; size: number; speed: number }[] = [];
    const meteors: { x: number; y: number; radius: number; speed: number }[] = [];
    const numStars = Math.floor((window.innerWidth * window.innerHeight) / 2000);
    const numMeteors = 7; // Number of meteors

    // Initialize stars
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2,
        speed: Math.random() * 0.5 + 0.1,
      });
    }

    // Initialize meteors
    for (let i = 0; i < numMeteors; i++) {
      meteors.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 10 + 5,
        speed: Math.random() * 2 + 1,
      });
    }

    // Animation loop
    let animationFrameId: number;
    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw and update stars
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.3 + 0.7})`;
        ctx.fill();

        // Move stars
        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      });

      // Draw and update meteors
      meteors.forEach((meteor) => {
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(
          meteor.x, meteor.y, 0,
          meteor.x, meteor.y, meteor.radius
        );
        gradient.addColorStop(0, 'rgba(255, 200, 200, 1)');
        gradient.addColorStop(1, 'rgba(255, 200, 200, 0)');
        ctx.fillStyle = gradient;
        ctx.arc(meteor.x, meteor.y, meteor.radius, 0, Math.PI * 2);
        ctx.fill();

        // Move meteors
        meteor.x -= meteor.speed;
        meteor.y += meteor.speed;

        if (meteor.x < -meteor.radius || meteor.y > canvas.height + meteor.radius) {
          meteor.x = canvas.width + meteor.radius;
          meteor.y = Math.random() * canvas.height * 0.5;
          meteor.radius = Math.random() * 10 + 5;
          meteor.speed = Math.random() * 2 + 1;
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0" />; // Fixed position and lower z-index
};

export default StarField;
