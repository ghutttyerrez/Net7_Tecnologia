import { useEffect, useRef } from "react";
import { useTheme } from "../hooks/useTheme";

function HeroParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;

    // Ajuste para alta densidade de pixels sem acumular escala
    const DPR = Math.min(2, window.devicePixelRatio || 1);
    function resize() {
      const { clientWidth, clientHeight } = canvas;
      canvas.width = clientWidth * DPR;
      canvas.height = clientHeight * DPR;
      // Resetar transform e aplicar escala de uma vez para evitar acumular
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      ctx.imageSmoothingEnabled = true;
    }

    const onResize = () => resize();
    window.addEventListener("resize", onResize);
    resize();

    // Partículas animadas (reforço de visibilidade no tema claro)
    const COUNT = theme === "light" ? 110 : 72;
    const particles = Array.from({ length: COUNT }, () => ({
      x: Math.random() * canvas.clientWidth,
      y: Math.random() * canvas.clientHeight,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      r:
        (theme === "light" ? 1.2 : 1) +
        Math.random() * (theme === "light" ? 2.8 : 2.2),
    }));

    function step() {
      ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);

      // Cores adaptativas por tema (mais fortes para melhor visibilidade)
      const fill =
        theme === "light"
          ? "rgba(37, 99, 235, 0.75)"
          : "rgba(96, 165, 250, 0.8)";

      // glow sutil somente no tema claro para dar mais presença
      if (theme === "light") {
        ctx.shadowColor = "rgba(37, 99, 235, 0.35)";
        ctx.shadowBlur = 6;
      } else {
        ctx.shadowColor = "transparent";
        ctx.shadowBlur = 0;
      }

      ctx.fillStyle = fill;

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.clientWidth) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.clientHeight) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // linhas de conexão sutis no tema claro (melhora percepção sem poluir)
      if (theme === "light") {
        ctx.save();
        ctx.lineWidth = 0.6;
        ctx.strokeStyle = "rgba(37, 99, 235, 0.18)";
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const a = particles[i];
            const b = particles[j];
            const dx = a.x - b.x;
            const dy = a.y - b.y;
            const d2 = dx * dx + dy * dy;
            if (d2 < 120 * 120) {
              const alpha = 1 - Math.sqrt(d2) / 120;
              if (alpha > 0.05) {
                ctx.globalAlpha = alpha * 0.6;
                ctx.beginPath();
                ctx.moveTo(a.x, a.y);
                ctx.lineTo(b.x, b.y);
                ctx.stroke();
              }
            }
          }
        }
        ctx.restore();
      }

      raf = requestAnimationFrame(step);
    }

    step();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-300 ${
        theme === "light" ? "opacity-60" : "opacity-70"
      } z-0`}
    />
  );
}

export default HeroParticles;
