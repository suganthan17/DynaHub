import { Monitor } from "lucide-react"
import CategoryPage from "./CategoryPage"

const items = [
  { name:"VS Code", url:"https://code.visualstudio.com", desc:"Code editor", icon:"https://www.google.com/s2/favicons?domain=code.visualstudio.com" },
  { name:"Figma", url:"https://figma.com", desc:"UI design tool", icon:"https://www.google.com/s2/favicons?domain=figma.com" },
  { name:"Notion", url:"https://notion.so", desc:"Productivity app", icon:"https://www.google.com/s2/favicons?domain=notion.so" },
]

export default function Software() {
  return <CategoryPage title="Software" icon={Monitor} items={items} />
}