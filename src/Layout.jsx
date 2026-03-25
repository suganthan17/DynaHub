import { Link, useLocation } from "react-router-dom"
import {
  Home,
  Gamepad2,
  Monitor,
  Tv,
  Wrench,
  ShieldCheck,
  Music2,
} from "lucide-react"
import ParticlesBg from "./ParticlesBg"

const navItems = [
  { path: "/", label: "Home", icon: Home },
  { path: "/games", label: "Games", icon: Gamepad2 },
  { path: "/software", label: "Software", icon: Monitor },
  { path: "/streaming", label: "Stream", icon: Tv },
  { path: "/tools", label: "Tools", icon: Wrench },
  { path: "/security", label: "Security", icon: ShieldCheck },
]

export default function Layout({ children }) {
  const { pathname } = useLocation()

  return (
    <div style={{ background: "#0a0a0f", minHeight: "100vh" }}>
      
      <ParticlesBg />

      <main style={{ position: "relative", zIndex: 2, paddingBottom: 90 }}>
        {children}
      </main>

      {/* BOTTOM NAV */}
      <nav
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 10,
          background: "rgba(10,10,15,0.9)",
          backdropFilter: "blur(20px)",
          borderTop: "1px solid rgba(0,245,255,0.2)",
          display: "flex",
          justifyContent: "center",
          gap: 10,
          padding: "10px",
        }}
      >
        {navItems.map(({ path, label, icon: Icon }) => (
          <Link
            key={path}
            to={path}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              fontSize: 11,
              color: pathname === path ? "#00f5ff" : "#666",
              textDecoration: "none",
            }}
          >
            <Icon size={20} />
            {label}
          </Link>
        ))}
      </nav>
    </div>
  )
}