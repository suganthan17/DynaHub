import { Tv } from "lucide-react"
import CategoryPage from "./CategoryPage"

const items = [
  {
    name: "YouTube",
    url: "https://youtube.com",
    desc: "Videos & streaming",
    icon: "https://www.google.com/s2/favicons?sz=64&domain=youtube.com"
  },
  {
    name: "Flixer",
    url: "https://flixer.su",
    desc: "Free movies & TV shows",
    icon: "https://www.google.com/s2/favicons?sz=64&domain=flixer.su"
  },
  {
    name: "Cineby",
    url: "https://cineby.app",
    desc: "Stream movies & series free",
    icon: "https://www.google.com/s2/favicons?sz=64&domain=cineby.app"
  },
  {
    name: "JioHotstar",
    url: "https://www.jiohotstar.com",
    desc: "Indian movies, sports & shows",
    icon: "https://www.google.com/s2/favicons?sz=64&domain=jiohotstar.com"
  },
  {
    name: "NetMirror",
    url: "https://netmirror.app",
    desc: "Mirror stream Netflix content",
    icon: "https://www.google.com/s2/favicons?sz=64&domain=netmirror.app"
  },
  {
    name: "AniWatch",
    url: "https://aniwatch.to",
    desc: "Free anime streaming",
    icon: "https://www.google.com/s2/favicons?sz=64&domain=aniwatch.to"
  },
]

export default function Streaming() {
  return <CategoryPage title="Streaming" icon={Tv} items={items} />
}