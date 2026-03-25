import { Monitor } from "lucide-react"
import CategoryPage from "./CategoryPage"

const items = [
  {
    name: "VS Code",
    url: "https://code.visualstudio.com",
    desc: "Powerful code editor",
    icon: "https://www.google.com/s2/favicons?domain=code.visualstudio.com",
  },
  {
    name: "Figma",
    url: "https://figma.com",
    desc: "UI/UX design tool",
    icon: "https://www.google.com/s2/favicons?domain=figma.com",
  },

  /* 🚀 DEPLOYMENT / HOSTING */
  {
    name: "Vercel",
    url: "https://vercel.com",
    desc: "Frontend deployment platform",
    icon: "https://www.google.com/s2/favicons?domain=vercel.com",
  },
  {
    name: "Render",
    url: "https://render.com",
    desc: "Backend hosting platform",
    icon: "https://www.google.com/s2/favicons?domain=render.com",
  },
  {
    name: "Railway",
    url: "https://railway.app",
    desc: "Cloud app deployment",
    icon: "https://www.google.com/s2/favicons?domain=railway.app",
  },

  /* 💻 DEV PLATFORMS */
  {
    name: "GitHub",
    url: "https://github.com",
    desc: "Code hosting & collaboration",
    icon: "https://www.google.com/s2/favicons?domain=github.com",
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com",
    desc: "Practice coding problems",
    icon: "https://www.google.com/s2/favicons?domain=leetcode.com",
  },
  {
    name: "HackerRank",
    url: "https://hackerrank.com",
    desc: "Coding challenges & interviews",
    icon: "https://www.google.com/s2/favicons?domain=hackerrank.com",
  },

  /* ⚙️ TOOLS */
  {
    name: "Postman",
    url: "https://postman.com",
    desc: "API testing tool",
    icon: "https://www.google.com/s2/favicons?domain=postman.com",
  },
  {
    name: "Docker",
    url: "https://docker.com",
    desc: "Containerization platform",
    icon: "https://www.google.com/s2/favicons?domain=docker.com",
  },
]

export default function Software() {
  return <CategoryPage title="Software" icon={Monitor} items={items} />
}