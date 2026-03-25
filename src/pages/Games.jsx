import { Gamepad2 } from "lucide-react"
import CategoryPage from "./CategoryPage"

const items = [
  {
    name:"Miniclip",
    url:"https://miniclip.com",
    desc:"Classic browser games",
    icon:"https://www.google.com/s2/favicons?sz=64&domain=miniclip.com"
  },
  {
    name:"Poki",
    url:"https://poki.com",
    desc:"Free online games",
    icon:"https://www.google.com/s2/favicons?sz=64&domain=poki.com"
  },
  {
    name:"CrazyGames",
    url:"https://crazygames.com",
    desc:"Trending games",
    icon:"https://www.google.com/s2/favicons?sz=64&domain=crazygames.com"
  },
  {
    name:"itch.io",
    url:"https://itch.io",
    desc:"Indie games",
    icon:"https://www.google.com/s2/favicons?sz=64&domain=itch.io"
  },
  {
    name:"Kongregate",
    url:"https://kongregate.com",
    desc:"Community games",
    icon:"https://www.google.com/s2/favicons?sz=64&domain=kongregate.com"
  },
  {
    name:"Coolmath Games",
    url:"https://coolmathgames.com",
    desc:"Logic games",
    icon:"https://www.google.com/s2/favicons?sz=64&domain=coolmathgames.com"
  },
]

export default function Games() {
  return <CategoryPage title="Games" icon={Gamepad2} items={items} />
}