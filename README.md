# Cuddles Website

A beautiful, Bumble-inspired landing page for the Cuddles dating app - focused on comfort, safety, and genuine connections.

## 🌸 Features

- **Hero Section** - Eye-catching intro with app mockup and download CTA
- **Key Features** - Card grid highlighting app benefits
- **How It Works** - Step-by-step user journey
- **Testimonials** - Social proof with user stories
- **FAQ Section** - Interactive accordion with safety info
- **Footer** - Links, social media, and secondary CTA

## 🎨 Design

- Warm purple color palette
- Rounded, friendly UI elements
- Soft shadows and gradients
- Fully responsive (mobile-first)
- Smooth hover animations
- Typography: Nunito + Quicksand fonts

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Navigate to the project
cd cuddles-website

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
cuddles-website/
├── public/
│   └── cuddles-icon.svg
├── src/
│   ├── App.jsx          # All components
│   ├── index.css        # Global styles
│   └── main.jsx         # Entry point
├── index.html
├── package.json
└── vite.config.js
```

## 🎯 Customization

### Colors
Edit CSS variables in `src/index.css`:

```css
:root {
  --purple-deep: #6B4C7A;
  --purple-main: #9B6B9E;
  --rose-blush: #E8B4BC;
  /* ... */
}
```

### Content
Update text content directly in `src/App.jsx` in the respective component arrays.

## 📱 Responsive Breakpoints

- Desktop: 1024px+
- Tablet: 768px - 1023px
- Mobile: 480px - 767px
- Small Mobile: < 480px

## 🛡️ Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

Made with 💜 for Cuddles


