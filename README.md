# Fenri-Lunaedge Portfolio

> Professional portfolio website for Iramam Silva - Senior BI Analyst & Data Intelligence Architect

## 🌟 Live Demo

Visit the live portfolio at: [https://fenri-lunaedge.github.io](https://fenri-lunaedge.github.io)

## 🚀 Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D Graphics**: Three.js, React Three Fiber
- **Charts**: Recharts, Chart.js
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions

## 🎨 Design Features

- **Dark Mode Data-Driven Theme**: Professional dark theme optimized for data visualization
- **Neon Accent Colors**: Cyan, blue, and purple gradients for visual impact
- **Terminal-Style Components**: Authentic developer/data analyst aesthetic
- **Glassmorphism**: Modern glass effects on cards and containers
- **Responsive Design**: Mobile-first approach with breakpoints for all devices
- **Smooth Animations**: Framer Motion powered transitions and effects
- **Performance Optimized**: Lazy loading, code splitting, and optimized assets

## 📂 Project Structure

```
Fenri-Lunaedge.github.io/
├── src/
│   ├── app/                  # Next.js app directory
│   │   ├── layout.tsx       # Root layout with fonts and metadata
│   │   └── page.tsx         # Main page with all sections
│   ├── components/
│   │   ├── sections/        # Page sections (Hero, About, Experience, etc.)
│   │   ├── ui/              # Reusable UI components
│   │   └── 3d/              # Three.js 3D components
│   ├── data/
│   │   └── portfolio.ts     # All content data (centralized)
│   ├── styles/
│   │   └── globals.css      # Global styles and Tailwind config
│   ├── lib/                 # Utility functions
│   ├── types/               # TypeScript type definitions
│   └── utils/               # Helper utilities
├── public/                   # Static assets
│   ├── images/              # Images and graphics
│   ├── icons/               # Icons and favicons
│   └── data/                # Static data files
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Pages deployment workflow
├── next.config.mjs          # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
└── package.json             # Dependencies and scripts
```

## 🛠️ Installation & Setup

### Prerequisites

- Node.js 20+ and npm/yarn/pnpm

### Local Development

```bash
# Clone the repository
git clone https://github.com/Fenri-Lunaedge/Fenri-Lunaedge.github.io.git
cd Fenri-Lunaedge.github.io

# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000 in your browser
```

### Build for Production

```bash
# Create optimized production build
npm run build

# The static files will be generated in the /out directory
```

## 📝 Customization Guide

### Updating Content

All content is centralized in `src/data/portfolio.ts`. Edit this file to update:

- Personal information
- Work experience
- Education
- Projects
- Skills
- Testimonials

### Changing Theme Colors

Edit `tailwind.config.ts` to customize the color palette:

```typescript
colors: {
  dark: { /* background colors */ },
  neon: { /* accent colors */ },
  data: { /* data visualization colors */ },
}
```

### Adding New Sections

1. Create a new component in `src/components/sections/`
2. Import and add it to `src/app/page.tsx`
3. Add corresponding data to `src/data/portfolio.ts`

## 🚢 Deployment

The site automatically deploys to GitHub Pages when you push to the `main` branch.

### Manual Deployment

```bash
# Build the project
npm run build

# The /out directory contains the static site
# Push to GitHub and enable GitHub Pages
```

### GitHub Pages Setup

1. Go to repository Settings > Pages
2. Source: GitHub Actions
3. The deployment workflow will run automatically

## 🎯 Features Roadmap

- [x] Responsive hero section with terminal animation
- [x] Professional experience timeline
- [x] Featured projects showcase
- [x] Skills visualization
- [x] Contact section
- [ ] 3D data visualizations
- [ ] Interactive dashboards with real data
- [ ] Blog section with MDX
- [ ] Dark/Light theme toggle
- [ ] Multi-language support (PT/EN)
- [ ] Analytics integration

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 👤 Author

**Iramam Silva** (Fenri-Lunaedge)
- LinkedIn: [iramamasilva](https://linkedin.com/in/iramamasilva)
- GitHub: [@Fenri-Lunaedge](https://github.com/Fenri-Lunaedge)
- Email: jralencars@gmail.com

---

**⭐ If you like this project, please give it a star!**
