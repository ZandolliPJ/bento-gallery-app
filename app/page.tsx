import InteractiveImageBentoGallery from "@/components/ui/bento-gallery"

const imageItems = [
  {
    id: 1,
    title: "Mountain Vista",
    desc: "Serenity above the clouds.",
    url: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=800&q=80",
    span: "sm:col-span-2 sm:row-span-2",
  },
  {
    id: 2,
    title: "Coastal Arch",
    desc: "Where the land meets the sea.",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    span: "",
  },
  {
    id: 3,
    title: "Forest Canopy",
    desc: "Sunlight filtering through leaves.",
    url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
    span: "",
  },
  {
    id: 4,
    title: "Desert Dunes",
    desc: "Golden sands under the sun.",
    url: "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?w=800&q=80",
    span: "sm:row-span-2",
  },
  {
    id: 5,
    title: "City at Night",
    desc: "A vibrant urban landscape.",
    url: "https://images.unsplash.com/photo-1506606401543-2e73709cebb4?w=800&q=80",
    span: "",
  },
  {
    id: 6,
    title: "Misty Lake",
    desc: "Morning fog over calm waters.",
    url: "https://images.unsplash.com/photo-1634023233766-0c16b151bfb0?w=800&q=80",
    span: "sm:col-span-2",
  },
  {
    id: 7,
    title: "Balade Tropicale",
    desc: "Un moment magique sur la plage au coucher du soleil.",
    url: "/baladetropicale.png",
    span: "sm:col-span-2 sm:row-span-2",
  },
  {
    id: 8,
    title: "BurdDy Love",
    desc: "Un moment de complicité et d'amour partagé.",
    url: "/burddy.jpg",
    span: "sm:col-span-2",
  },
]

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="flex flex-col items-center justify-center py-20 px-4 text-center bg-gradient-to-b from-background to-muted/30">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-4">
          Bento Gallery
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
          A stunning interactive image gallery built with Next.js, shadcn/ui, and Framer Motion.
        </p>
        <div className="mt-8 flex gap-4 text-sm text-muted-foreground">
          <span className="px-3 py-1 rounded-full bg-secondary">Next.js 15</span>
          <span className="px-3 py-1 rounded-full bg-secondary">TypeScript</span>
          <span className="px-3 py-1 rounded-full bg-secondary">Tailwind CSS</span>
          <span className="px-3 py-1 rounded-full bg-secondary">Framer Motion</span>
        </div>
      </section>

      <InteractiveImageBentoGallery
        imageItems={imageItems}
        title="Curated Moments"
        description="A collection of stunning landscapes and precious memories. Click to expand."
      />

      <footer className="py-12 text-center text-sm text-muted-foreground border-t">
        <p>Built with Next.js + shadcn/ui + Framer Motion</p>
      </footer>
    </main>
  )
}
