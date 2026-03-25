import { useCallback } from "react"
import Particles from "@tsparticles/react"
import { loadFull } from "tsparticles"

export default function ParticlesBg() {
  const init = useCallback(async (engine) => {
    await loadFull(engine)
  }, [])

  return (
    <Particles
      id="tsparticles"
      init={init}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 0,
        width: "100%",
        height: "100%",
      }}
      options={{
        background: { color: "#0a0a0f" },

        particles: {
          number: { value: 90 },
          color: { value: ["#00f5ff", "#ff3b00"] },

          links: {
            enable: true,
            color: "#00f5ff",
            distance: 140,
            opacity: 0.2,
          },

          move: {
            enable: true,
            speed: 1.2,
          },

          size: { value: { min: 1, max: 3 } },
          opacity: { value: { min: 0.3, max: 0.8 } },
        },

        interactivity: {
          events: {
            onHover: { enable: true, mode: "grab" },
            onClick: { enable: true, mode: "push" },
          },
          modes: {
            grab: { distance: 140 },
            push: { quantity: 4 },
          },
        },
      }}
    />
  )
}