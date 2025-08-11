# Quiltefryd - Quilt- og sømtjenester

Static website for Marit Aslesen's quilting and sewing services in Tønsberg, Norway.

## 🚀 Technology Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Hosting:** GitHub Pages
- **Form Handling:** Formspree
- **CI/CD:** GitHub Actions

## 📁 Project Structure

```
/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with header/footer
│   ├── page.tsx           # Home page
│   ├── tjenester/         # Services page
│   ├── priser/            # Pricing page
│   ├── om/                # About page
│   └── kontakt/           # Contact page
├── components/
│   ├── layout/            # Header, Footer, Navigation
│   ├── home/              # Home page components
│   └── shared/            # Shared components
├── public/
│   └── images/            # Static images
└── .github/
    └── workflows/         # GitHub Actions deployment

```

## 🛠 Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production
```bash
npm run build
```
This creates a static export in the `out` directory.

## 🚀 Deployment

The site automatically deploys to GitHub Pages when pushing to the `main` branch.

### Manual Deployment
1. Build the static site: `npm run build`
2. The `out` directory contains the static files
3. GitHub Actions handles the deployment

### Custom Domain
The site is configured to use `quiltefryd.no`. The CNAME file is in the public directory.

## 📧 Contact Form

The contact form uses Formspree. To configure:
1. Create a Formspree account
2. Create a new form
3. Replace `YOUR_FORM_ID` in `components/shared/ContactForm.tsx` with your Formspree form ID

## 🎨 Design System

### Colors
- Burgundy: `#7B2C2C`
- Forest Green: `#3F5546`
- Beige: `#E6DDC7`
- Cream: `#FAF8F5`
- Gold: `#C8A583`

### Typography
- Headings: Georgia (serif)
- Body: System font stack (sans-serif)

## 📝 Content Updates

### Updating Prices
Edit the pricing information in `app/priser/page.tsx`

### Updating Services
Edit service descriptions in `app/tjenester/page.tsx`

### Adding Images
1. Add images to `public/images/`
2. Reference them in components using `/images/filename.ext`

## 🔧 Configuration

### SEO
- Meta tags are set in each page's metadata export
- JSON-LD schema is in `app/layout.tsx`

### Static Export
Configuration is in `next.config.js`:
- `output: 'export'` enables static export
- `images.unoptimized: true` for GitHub Pages compatibility

## 📄 License

© 2024 Quiltefryd - Marit Aslesen. All rights reserved.