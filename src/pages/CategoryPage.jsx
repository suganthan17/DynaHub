import { ArrowLeft, ExternalLink } from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function CategoryPage({
  title,
  icon: Icon,
  color = "#00f5ff",
  items = [],
}) {
  const navigate = useNavigate()

  return (
    <div
      className="page"
      style={{
        padding: "40px 20px",
        maxWidth: 1100,
        margin: "0 auto",
      }}
    >
      {/* HEADER */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          marginBottom: 48,
        }}
      >
        {/* BACK */}
        <button
          onClick={() => navigate(-1)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#666",
            display: "flex",
            alignItems: "center",
            gap: 8,
            fontSize: 12,
            letterSpacing: 3,
            textTransform: "uppercase",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#00f5ff")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#666")}
        >
          <ArrowLeft size={16} /> BACK
        </button>

        <div
          style={{
            flex: 1,
            height: 1,
            background: "rgba(0,245,255,0.12)",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          {Icon && <Icon size={22} color="#00f5ff" />}
          <span
            style={{
              color: "#00f5ff",
              fontSize: 14,
              letterSpacing: 3,
              textShadow: "0 0 10px #00f5ff",
            }}
          >
            {title}
          </span>
        </div>
      </div>

      {/* GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 32,
        }}
      >
        {items.map((item, i) => (
          <a
            key={i}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <div
              style={{
                borderRadius: 16,
                padding: "28px 24px",
                cursor: "pointer",
                transition: "all 0.3s ease",
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(0,245,255,0.08)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px) scale(1.02)"
                e.currentTarget.style.boxShadow =
                  "0 12px 40px rgba(0,245,255,0.25)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)"
                e.currentTarget.style.boxShadow = "none"
              }}
            >
              {/* ICON */}
              <img
                src={item.icon}
                alt={item.name}
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                  marginBottom: 14,
                  boxShadow: "0 0 12px rgba(0,245,255,0.25)",
                }}
              />

              {/* TITLE */}
              <p style={{ fontSize: 16, fontWeight: 700, color: "#fff" }}>
                {item.name}
              </p>

              {/* DESC */}
              <p style={{ fontSize: 13, color: "#888", marginTop: 6 }}>
                {item.desc}
              </p>

              {/* ACTION */}
              <div
                style={{
                  marginTop: 14,
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  fontSize: 13,
                  color: "#00f5ff",
                }}
              >
                Visit <ExternalLink size={15} />
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}