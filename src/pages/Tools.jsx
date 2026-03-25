import { Wrench } from "lucide-react"
import CategoryPage from "./CategoryPage"

const items = [
  {
    name: "ChatGPT",
    url: "https://chat.openai.com",
    desc: "AI chatbot by OpenAI",
    icon: "https://www.google.com/s2/favicons?sz=64&domain=chat.openai.com"
  },
  {
    name: "Claude",
    url: "https://claude.ai",
    desc: "AI assistant by Anthropic",
    icon: "https://www.google.com/s2/favicons?sz=64&domain=claude.ai"
  },
  {
    name: "Gemini",
    url: "https://gemini.google.com",
    desc: "Google's AI assistant",
    icon: "https://www.google.com/s2/favicons?sz=64&domain=gemini.google.com"
  },
  {
    name: "Perplexity",
    url: "https://perplexity.ai",
    desc: "AI-powered search engine",
    icon: "https://www.google.com/s2/favicons?sz=64&domain=perplexity.ai"
  },
  {
    name: "Midjourney",
    url: "https://midjourney.com",
    desc: "AI image generation",
    icon: "https://www.google.com/s2/favicons?sz=64&domain=midjourney.com"
  },
  {
    name: "ElevenLabs",
    url: "https://elevenlabs.io",
    desc: "AI voice & text to speech",
    icon: "https://www.google.com/s2/favicons?sz=64&domain=elevenlabs.io"
  },
  {
    name: "Runway",
    url: "https://runwayml.com",
    desc: "AI video generation",
    icon: "https://www.google.com/s2/favicons?sz=64&domain=runwayml.com"
  },
  {
    name: "Suno",
    url: "https://suno.com",
    desc: "AI music generation",
    icon: "https://www.google.com/s2/favicons?sz=64&domain=suno.com"
  },
  {
    name: "Lovable",
    url: "https://lovable.dev",
    desc: "AI full-stack app builder",
    icon: "https://www.google.com/s2/favicons?sz=64&domain=lovable.dev"
  },
  {
    name: "v0",
    url: "https://v0.dev",
    desc: "AI UI component generator",
    icon: "https://www.google.com/s2/favicons?sz=64&domain=v0.dev"
  },
]

export default function Tools() {
  return <CategoryPage title="Tools" icon={Wrench} items={items} />
}