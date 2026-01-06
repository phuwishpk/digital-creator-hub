import { useEffect, useRef } from "react";

interface Line {
  x: number;
  y: number;
  length: number;
  speed: number;
  opacity: number;
  color: string;
  direction: "horizontal" | "vertical";
  trail: { x: number; y: number }[];
}

interface Node {
  x: number;
  y: number;
  size: number;
  pulsePhase: number;
  connections: number[];
}

const FloatingParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const linesRef = useRef<Line[]>([]);
  const nodesRef = useRef<Node[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const colors = [
      "hsl(198, 93%, 55%)",   // primary blue
      "hsl(260, 80%, 60%)",   // secondary purple
      "hsl(280, 80%, 60%)",   // accent purple
    ];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initElements = () => {
      // Initialize grid nodes
      const gridSpacing = 100;
      nodesRef.current = [];
      
      for (let x = gridSpacing; x < canvas.width; x += gridSpacing) {
        for (let y = gridSpacing; y < canvas.height; y += gridSpacing) {
          if (Math.random() > 0.6) {
            nodesRef.current.push({
              x: x + (Math.random() - 0.5) * 20,
              y: y + (Math.random() - 0.5) * 20,
              size: Math.random() * 2 + 1,
              pulsePhase: Math.random() * Math.PI * 2,
              connections: [],
            });
          }
        }
      }

      // Create connections between nearby nodes
      nodesRef.current.forEach((node, i) => {
        nodesRef.current.forEach((other, j) => {
          if (i !== j) {
            const dx = node.x - other.x;
            const dy = node.y - other.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < 150 && Math.random() > 0.5) {
              node.connections.push(j);
            }
          }
        });
      });

      // Initialize flowing lines
      const lineCount = 15;
      linesRef.current = [];

      for (let i = 0; i < lineCount; i++) {
        const isHorizontal = Math.random() > 0.5;
        linesRef.current.push({
          x: isHorizontal ? -100 : Math.random() * canvas.width,
          y: isHorizontal ? Math.random() * canvas.height : -100,
          length: Math.random() * 100 + 50,
          speed: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.3,
          color: colors[Math.floor(Math.random() * colors.length)],
          direction: isHorizontal ? "horizontal" : "vertical",
          trail: [],
        });
      }
    };

    const drawElements = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw grid connections (static lines)
      nodesRef.current.forEach((node) => {
        node.connections.forEach((connectionIndex) => {
          const other = nodesRef.current[connectionIndex];
          if (other) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = "hsla(198, 93%, 55%, 0.08)";
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      // Draw and animate nodes with pulse effect
      const time = Date.now() * 0.001;
      nodesRef.current.forEach((node) => {
        const pulse = Math.sin(time * 2 + node.pulsePhase) * 0.5 + 0.5;
        const size = node.size + pulse * 1;
        
        ctx.beginPath();
        ctx.arc(node.x, node.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(198, 93%, 55%, ${0.3 + pulse * 0.3})`;
        ctx.fill();

        // Glow effect
        ctx.beginPath();
        ctx.arc(node.x, node.y, size + 3, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(198, 93%, 55%, ${0.05 + pulse * 0.05})`;
        ctx.fill();
      });

      // Draw and animate flowing lines (data streams)
      linesRef.current.forEach((line) => {
        // Update position
        if (line.direction === "horizontal") {
          line.x += line.speed;
          if (line.x > canvas.width + 100) {
            line.x = -line.length;
            line.y = Math.random() * canvas.height;
          }
        } else {
          line.y += line.speed;
          if (line.y > canvas.height + 100) {
            line.y = -line.length;
            line.x = Math.random() * canvas.width;
          }
        }

        // Draw line with gradient trail
        const gradient = line.direction === "horizontal"
          ? ctx.createLinearGradient(line.x - line.length, line.y, line.x, line.y)
          : ctx.createLinearGradient(line.x, line.y - line.length, line.x, line.y);

        gradient.addColorStop(0, "transparent");
        gradient.addColorStop(0.5, line.color.replace(")", `, ${line.opacity * 0.5})`).replace("hsl", "hsla"));
        gradient.addColorStop(1, line.color.replace(")", `, ${line.opacity})`).replace("hsl", "hsla"));

        ctx.beginPath();
        if (line.direction === "horizontal") {
          ctx.moveTo(line.x - line.length, line.y);
          ctx.lineTo(line.x, line.y);
        } else {
          ctx.moveTo(line.x, line.y - line.length);
          ctx.lineTo(line.x, line.y);
        }
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.lineCap = "round";
        ctx.stroke();

        // Draw head glow
        ctx.beginPath();
        ctx.arc(
          line.direction === "horizontal" ? line.x : line.x,
          line.direction === "horizontal" ? line.y : line.y,
          3,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = line.color.replace(")", `, ${line.opacity})`).replace("hsl", "hsla");
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(drawElements);
    };

    resizeCanvas();
    initElements();
    drawElements();

    window.addEventListener("resize", () => {
      resizeCanvas();
      initElements();
    });

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
      style={{ background: "transparent" }}
    />
  );
};

export default FloatingParticles;