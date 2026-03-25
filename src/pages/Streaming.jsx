import { Tv } from "lucide-react"
import CategoryPage from "./CategoryPage"

const items = [
  { name:"YouTube", url:"https://youtube.com", desc:"Videos & streaming", icon:"https://www.google.com/s2/favicons?domain=youtube.com" },
  { name:"Twitch", url:"https://twitch.tv", desc:"Live streaming", icon:"https://www.google.com/s2/favicons?domain=twitch.tv" },
]

export default function Streaming() {
  return <CategoryPage title="Streaming" icon={Tv} items={items} />
}