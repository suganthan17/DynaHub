import { useCallback } from "react";
import { Link } from "react-router-dom";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import {
  Gamepad2,
  Monitor,
  Tv,
  Wrench,
  ShieldCheck,
  Music2,
} from "lucide-react";

const categories = [
  {
    name: "Games",
    icon: Gamepad2,
    path: "/games",
    desc: "Top free & browser games collection",
  },
  {
    name: "Software",
    icon: Monitor,
    path: "/software",
    desc: "Tools, apps & productivity software",
  },
  {
    name: "Streaming",
    icon: Tv,
    path: "/streaming",
    desc: "Movies, shows & live streams",
  },
  {
    name: "Tools",
    icon: Wrench,
    path: "/tools",
    desc: "Dev tools & utilities",
  },
];

export default function Home() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div style={{ background: "#0a0a0f", minHeight: "100vh", color: "white" }}>
      {/* PARTICLES */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          particles: {
            number: { value: 80 },
            color: { value: ["#00f5ff", "#8b5cf6"] },
            links: {
              enable: true,
              color: "#00f5ff",
              opacity: 0.2,
              distance: 120,
            },
            move: { enable: true, speed: 1 },
            size: { value: { min: 1, max: 3 } },
            opacity: { value: { min: 0.3, max: 0.8 } },
          },
        }}
      />

      <nav
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 100,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "18px 48px",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(0,245,255,0.08)",
        }}
      >
        {/* LEFT - BRAND */}
        <div
          style={{
            fontSize: 20,
            fontWeight: 800,
            letterSpacing: 4,
            color: "#00f5ff",
            textShadow: "0 0 10px #00f5ff",
          }}
        >
          DYNA<span style={{ color: "white" }}>HUB</span>
        </div>
      </nav>

      {/* HERO */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "0 20px",
        }}
      >
        <h1
          className="neon-text font-bold"
          style={{
            fontSize: "clamp(60px, 10vw, 110px)",
            letterSpacing: 10,
          }}
        >
          DYNAHUB
        </h1>

        <p
          style={{
            marginTop: 20,
            color: "#777",
            letterSpacing: 4,
            textTransform: "uppercase",
            fontSize: 14,
          }}
        >
          Your gateway to everything
        </p>

        <div style={{ marginTop: 40 }}>
          <a
            href="#categories"
            style={{
              padding: "14px 40px",
              border: "1.5px solid #00f5ff",
              color: "#00f5ff",
              textDecoration: "none",
              letterSpacing: 2,
              transition: "all 0.3s",
              background: "rgba(0,245,255,0.05)",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "rgba(0,245,255,0.15)";
              e.target.style.boxShadow = "0 0 20px rgba(0,245,255,0.2)";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "rgba(0,245,255,0.05)";
              e.target.style.boxShadow = "none";
            }}
          >
            Explore
          </a>
        </div>
      </section>

      {/* CATEGORIES */}
      <section
        id="categories"
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "80px 20px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#00f5ff",
            marginBottom: 60,
            letterSpacing: 4,
            textTransform: "uppercase",
            fontSize: 14,
          }}
        >
          Browse Categories
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
          }}
        >
          {categories.map(({ name, icon: Icon, path, desc }) => (
            <Link key={name} to={path} style={{ textDecoration: "none" }}>
              <div
                className="glass-card"
                style={{
                  borderRadius: 12,
                  padding: "28px 24px",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 30px rgba(0,245,255,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <Icon size={30} color="#00f5ff" />

                <h3
                  style={{
                    fontSize: 16,
                    fontWeight: 700,
                    letterSpacing: 2,
                    color: "#fff",
                    margin: "14px 0 8px",
                    textTransform: "uppercase",
                  }}
                >
                  {name}
                </h3>

                <p style={{ fontSize: 13, color: "#666", lineHeight: 1.6 }}>
                  {desc}
                </p>

                <span
                  style={{
                    marginTop: 16,
                    display: "inline-block",
                    fontSize: 12,
                    color: "#00f5ff",
                    letterSpacing: 2,
                  }}
                >
                  Explore →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
