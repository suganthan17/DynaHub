import { Wrench } from "lucide-react"
import CategoryPage from "./CategoryPage"

const items = [
  { name:"TinyPNG", url:"https://tinypng.com", desc:"Compress images", icon:"https://www.google.com/s2/favicons?domain=tinypng.com" },
  { name:"Squoosh", url:"https://squoosh.app", desc:"Image optimizer", icon:"https://www.google.com/s2/favicons?domain=squoosh.app" },
]

export default function Tools() {
  return <CategoryPage title="Tools" icon={Wrench} items={items} />
}