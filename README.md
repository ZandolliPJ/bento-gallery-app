# Bento Gallery App

A beautiful interactive image gallery built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, **shadcn/ui**, and **Framer Motion**.

## Features

- **Drag-to-explore** horizontal gallery
- **Click-to-expand** modal with backdrop blur
- **Scroll-triggered** fade and slide animations
- **Keyboard accessible** (Tab + Enter navigation)
- **Responsive design** with bento-style grid layout
- **Dark mode ready** with CSS variables

## Tech Stack

| Technology | Version |
|------------|---------|
| Next.js | 15.3.0 |
| React | 19.0.0 |
| TypeScript | 5.7.0 |
| Tailwind CSS | 4.0.0 |
| Framer Motion | 12.0.0 |
| Lucide React | 0.460.0 |

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the gallery.

### 3. Build for production

```bash
npm run build
```

The static export will be generated in the `out/` directory.

## Project Structure

```
bento-gallery-app/
├── app/
│   ├── globals.css          # Tailwind CSS + CSS variables
│   ├── layout.tsx           # Root layout with fonts
│   └── page.tsx             # Demo page with gallery
├── components/
│   └── ui/
│       └── bento-gallery.tsx # Main gallery component
├── lib/
│   └── utils.ts             # cn() utility function
├── public/                  # Static assets
├── next.config.ts           # Next.js configuration
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies
```

## Component Usage

```tsx
import InteractiveImageBentoGallery from "@/components/ui/bento-gallery"

const imageItems = [
  {
    id: 1,
    title: "Mountain Vista",
    desc: "Serenity above the clouds.",
    url: "https://images.unsplash.com/photo-...",
    span: "md:col-span-2 md:row-span-2",
  },
  // ...more items
]

export default function MyPage() {
  return (
    <InteractiveImageBentoGallery
      imageItems={imageItems}
      title="My Gallery"
      description="A beautiful collection of images."
    />
  )
}
```

### Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `imageItems` | `ImageItem[]` | Yes | Array of image objects |
| `title` | `string` | Yes | Section heading |
| `description` | `string` | Yes | Subtitle text |

### ImageItem Type

```ts
type ImageItem = {
  id: number | string
  title: string
  desc: string
  url: string
  span: string  // Tailwind grid classes
}
```

## License

MIT
