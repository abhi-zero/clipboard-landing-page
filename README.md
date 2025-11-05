# Clipboard Landing Page

A modern, responsive landing page for the Clipboard app, built with Vite and featuring smooth GSAP animations. This project showcases the app's features for tracking and organizing copied snippets across devices.

## Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: GSAP-powered scroll-triggered animations for enhanced user experience
- **Modern UI**: Clean, professional design with custom CSS variables
- **Fast Development**: Built with Vite for quick development and hot reloading

## Tech Stack

- **Frontend Framework**: Vite
- **JavaScript Library**: GSAP (GreenSock Animation Platform)
- **Styling**: Custom CSS with CSS Variables
- **HTML5**: Semantic markup

## Project Structure

```
clipboard-landing-page/
├── public/
│   └──images/          # Static images and icons
├── src/
│   ├── main.js          # Main JavaScript file with GSAP animations
│   └── style.css        # Main stylesheet
├── index.html           # Main HTML file
├── package.json         # Project dependencies and scripts
├── package-lock.json    # Lockfile for dependencies
└── .gitignore           # Git ignore rules
```

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/abhi-zero/clipboard-landing-page.git
   cd clipboard-landing-page
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

### Development

Start the development server:
```bash
npm run dev
```

This will start the Vite development server, typically at `http://localhost:5173`.

### Build for Production

Build the project for production:
```bash
npm run build
```

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## Key Components

### Animations (main.js)
- Hero section entrance animations
- Scroll-triggered section animations
- Brand logo floating animations
- Staggered element reveals

### Styling (style.css)
- CSS custom properties for consistent theming
- Responsive grid layouts
- Hover effects and transitions
- Mobile-first responsive design

### HTML Structure (index.html)
- Semantic HTML5 structure
- Multiple sections showcasing app features
- Accessible image alt texts
- Proper meta tags for SEO


## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request
