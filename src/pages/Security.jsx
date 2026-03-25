import { ShieldCheck } from "lucide-react"
import CategoryPage from "./CategoryPage"

const items = [
  { name:"ProtonVPN", url:"https://protonvpn.com", desc:"Secure VPN", icon:"https://www.google.com/s2/favicons?domain=protonvpn.com" },
  { name:"Bitwarden", url:"https://bitwarden.com", desc:"Password manager", icon:"https://www.google.com/s2/favicons?domain=bitwarden.com" },
]

export default function Security() {
  return <CategoryPage title="Security" icon={ShieldCheck} items={items} />
}