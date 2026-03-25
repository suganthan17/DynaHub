import { Gamepad2 } from "lucide-react";
import CategoryPage from "./CategoryPage";

const items = [
  {
    name: "Poki",
    url: "https://poki.com",
    desc: "Free online games",
    icon: "https://www.google.com/s2/favicons?sz=64&domain=poki.com",
  },
  {
    name: "CrazyGames",
    url: "https://crazygames.com",
    desc: "Trending browser games",
    icon: "https://www.google.com/s2/favicons?sz=64&domain=crazygames.com",
  },
  {
    name: "FitGirl Repacks",
    url: "https://fitgirl-repacks.site",
    desc: "Compressed PC game repacks",
    icon: "https://www.google.com/s2/favicons?sz=64&domain=fitgirl-repacks.site",
  },
  {
    name: "DODI Repacks",
    url: "https://dodi-repacks.site",
    desc: "Free PC game repacks",
    icon: "https://www.google.com/s2/favicons?sz=64&domain=dodi-repacks.site",
  },
  {
    name: "StreamUnlocked",
    url: "https://streamunlocked.net",
    desc: "Free game streaming",
    icon: "https://www.google.com/s2/favicons?sz=64&domain=streamunlocked.net",
  },
  {
    name: "Richup.io",
    url: "https://richup.io",
    desc: "Online Monopoly-style game",
    icon: "https://www.google.com/s2/favicons?sz=64&domain=richup.io",
  },
  {
    name: "2048",
    url: "https://play2048.co",
    desc: "Classic 2048 puzzle game",
    icon: "https://www.google.com/s2/favicons?sz=64&domain=play2048.co",
  },
];

export default function Games() {
  return <CategoryPage title="Games" icon={Gamepad2} items={items} />;
}
