import React, { useRef, useEffect } from "react";

// Animation simple de "réseau neuronal" (points et lignes animés)
export default function NeuralNetworkBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;


    // Générer des points
    const POINTS = 192;
    const points = Array.from({ length: POINTS }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5
    }));

    // Neurone souris
    let mouse = { x: width / 2, y: height / 2 };
    function handleMouseMove(e) {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    }
    window.addEventListener('mousemove', handleMouseMove);

    function draw() {
        ctx.clearRect(0, 0, width, height);
        // Fond dégradé bleu foncé -> bleu clair
        ctx.save();
        ctx.globalAlpha = 1;
        const gradient = ctx.createRadialGradient(width / 2, height / 2, 200, width / 2, height / 2, height - 100);
        gradient.addColorStop(0, "#000725ff");
        gradient.addColorStop(0.5, "#050d33ff");
        gradient.addColorStop(1, "#0a1338ff");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
        ctx.restore();
      // Lignes entre points proches (points)
      for (let i = 0; i < POINTS; i++) {
        for (let j = i + 1; j < POINTS; j++) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.strokeStyle = `rgba(37, 99, 235, ${1 - dist / 120})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
            ctx.stroke();
          }
        }
        // Lignes entre chaque point et la souris
        const dxm = points[i].x - mouse.x;
        const dym = points[i].y - mouse.y;
        const distm = Math.sqrt(dxm * dxm + dym * dym);
        if (distm < 140) {
          ctx.strokeStyle = `rgba(255,255,255,${1 - distm / 140})`;
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(points[i].x, points[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }
      // Points
      for (let p of points) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 4, 0, 2 * Math.PI);
        ctx.fillStyle = "#2563eb"; // bleu-700
        ctx.shadowColor = "#60a5fa"; // bleu-400
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
      // Neurone souris (point blanc)
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, 7, 0, 2 * Math.PI);
      ctx.fillStyle = "#fff";
      ctx.shadowColor = "#60a5fa";
      ctx.shadowBlur = 16;
      ctx.fill();
      ctx.shadowBlur = 0;
    }

    function animate() {
      for (let p of points) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
      }
      draw();
      requestAnimationFrame(animate);
    }

    animate();
    function handleResize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none"
      }}
      width={window.innerWidth}
  height={window.innerHeight}
      aria-hidden="true"
    />
  );
}
