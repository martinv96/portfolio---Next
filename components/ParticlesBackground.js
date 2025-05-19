import { useRef, useEffect } from "react";

export default function ParticlesBackground() {
  const canvasRef = useRef(null);
  const particlesArray = useRef([]);
  const mouse = useRef({ x: null, y: null, radius: 100 }); // zone d'influence de la souris

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    // Suivi position souris
    function handleMouseMove(e) {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    }
    window.addEventListener("mousemove", handleMouseMove);

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 1.5;
        this.speedY = (Math.random() - 0.5) * 1.5;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Rebonds
        if (this.x < 0 || this.x > canvas.width) this.speedX = -this.speedX;
        if (this.y < 0 || this.y > canvas.height) this.speedY = -this.speedY;

        // Interaction souris : pousse les particules proches
        const dx = this.x - mouse.current.x;
        const dy = this.y - mouse.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.current.radius) {
          const forceDirectionX = dx / dist;
          const forceDirectionY = dy / dist;
          const maxDistance = mouse.current.radius;
          const force = (maxDistance - dist) / maxDistance; // force proportionnelle à la distance

          // On applique la force en augmentant la vitesse
          this.speedX += forceDirectionX * force * 2; // multiplier pour plus d'effet
          this.speedY += forceDirectionY * force * 2;
        }

        // Limiter la vitesse max pour éviter des particules trop rapides
        const maxSpeed = 3;
        this.speedX = Math.min(Math.max(this.speedX, -maxSpeed), maxSpeed);
        this.speedY = Math.min(Math.max(this.speedY, -maxSpeed), maxSpeed);
      }
      draw() {
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function init() {
      particlesArray.current = [];
      for (let i = 0; i < 80; i++) {
        particlesArray.current.push(new Particle());
      }
    }
    init();

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particlesArray.current.length; i++) {
        for (let j = i + 1; j < particlesArray.current.length; j++) {
          const dx = particlesArray.current[i].x - particlesArray.current[j].x;
          const dy = particlesArray.current[i].y - particlesArray.current[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 120) {
            ctx.strokeStyle = `rgba(255,255,255,${1 - distance / 120})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray.current[i].x, particlesArray.current[i].y);
            ctx.lineTo(particlesArray.current[j].x, particlesArray.current[j].y);
            ctx.stroke();
          }
        }
      }

      particlesArray.current.forEach((p) => {
        p.update();
        p.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    }
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 10,
        backgroundColor: "transparent",
        pointerEvents: "none",
      }}
    />
  );
}
