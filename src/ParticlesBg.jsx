import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBg() {
  const init = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={init}
      options={{
        background: { color: { value: "#0a0a0f" } },
        fpsLimit: 60,
        particles: {
          number: { value: 120, density: { enable: true, area: 800 } },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: {
            value: { min: 0.1, max: 0.9 },
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0,
              sync: false,
              startValue: "random",
              destroy: "min",
            },
          },
          size: {
            value: { min: 0.5, max: 2 },
          },
          move: {
            enable: true,
            speed: { min: 8, max: 20 },
            direction: "bottom-left",
            straight: true,
            outModes: { default: "out" },
            trail: {
              enable: true,
              length: 8,
              fillColor: "#0a0a0f",
            },
          },
          rotate: {
            value: 45,
            direction: "clockwise",
            animation: { enable: false },
          },
          tilt: {
            enable: true,
            value: { min: 45, max: 45 },
          },
          wobble: { enable: false },
          links: { enable: false },
          life: {
            duration: { sync: false, value: 3 },
            count: 0,
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
          },
          modes: {
            repulse: { distance: 80 },
            push: { quantity: 5 },
          },
        },
        emitters: [
          {
            position: { x: 110, y: -10 },
            rate: { quantity: 3, delay: 0.15 },
            size: { width: 30, height: 0 },
            particles: {
              move: {
                direction: "bottom-left",
                speed: { min: 10, max: 22 },
                straight: true,
                trail: {
                  enable: true,
                  length: 12,
                  fillColor: "#0a0a0f",
                },
              },
              opacity: { value: { min: 0.4, max: 1 } },
              size: { value: { min: 1, max: 2.5 } },
              color: { value: ["#ffffff", "#ccffdd", "#aaffcc"] },
            },
          },
        ],
        detectRetina: true,
      }}
    />
  );
}
