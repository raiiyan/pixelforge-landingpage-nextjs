# 🎨 PixelForge Studio

**PixelForge Studio** is a fictional creative agency specializing in modern frontend design, UI/UX, and development for startups and small businesses. Built with **Next.js**, **Tailwind CSS**, and **Framer Motion**, this project showcases a professional, responsive, and animated landing page with modern web design principles.

## 🚀 Features

- ✨ **Beautiful Hero Section**  
  Eye-catching intro with soft gradients, animated headlines, and call-to-action buttons.

- 🛠️ **Services Showcase**  
  Cards with hover effects that explain key offerings (UI/UX, Frontend, Branding, etc.)

- 📁 **Portfolio Preview**  
  Scrollable or grid layout showing past projects with category tags.

- 👥 **Meet the Team**  
  A modern, responsive section with photos, roles, and social links.

- 💬 **Client Testimonials**  
  Realistic quotes and avatars displayed in a carousel or grid.

- 📬 **Call to Action**  
  High-converting section prompting users to start a project.

- 📰 **Newsletter Signup**  
  Simple email subscription form.

- 📱 **Mobile Responsive**  
  Fully optimized for all screen sizes.

- 💅 **Modern UI Techniques**  
  Glassmorphism, gradients, Framer Motion, custom fonts, and sticky navigation.

## 🧰 Built With

- [Next.js 14](https://nextjs.org/)
- [Tailwind CSS 3](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [TypeScript](https://www.typescriptlang.org/)
- [Google Fonts (Oswald)](https://fonts.google.com/specimen/Oswald)

## 📂 Project Structure

```
/app
  ├── Components/        # Reusable UI components (Navbar, Footer, etc.)
  ├── page.tsx           # Main landing page
  ├── layout.tsx         # Root layout with font imports
  ├── globals.css        # Tailwind base styles
  └── fonts.ts           # Custom Google Fonts setup

/public
  ├── images/            # Backgrounds, team photos, etc.

/utils
  └── data.ts            # Centralized content/data arrays
```

## 🖌️ Customization

- 🔤 **Fonts:** Oswald is imported via `@next/font/google` and applied via Tailwind’s `font-oswald` utility class.
- 🖼️ **Hero Background Image:** Can be changed by replacing the image in the `public` folder and updating the CSS `background-image` in the Hero section.
- 🎨 **Colors & Gradients:** Easily editable via Tailwind classes or `tailwind.config.js` if extended.
- ⚙️ **Animations:** Use Framer Motion for custom animations across sections.

## 📦 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/raiiyan/pixelforge-landingpage-nextjs
cd pixelforge-studio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` to view the site locally.

## 🌐 Deployment

PixelForge Studio can be deployed on any platform that supports Next.js:

- [Vercel (recommended)](https://vercel.com/)
- Netlify
- GitHub Pages (via static export)
- Your own VPS

## ✨ Credits

- **UI Design:** Inspired by modern agency trends and portfolio designs.
- **Icons:** [Lucide](https://lucide.dev/)
- **Fonts:** [Oswald – Google Fonts](https://fonts.google.com/specimen/Oswald)
- **Hero Illustration/Assets:** Replaceable with your custom 3D renders or Lottie animations.

## 📬 Contact

Have questions or want to collaborate?

**Email:** raiyanhossain93@gmail.com  
**Website:** [https://raiyan-hossain.vercel.app](https://raiyan-hossain.vercel.app)

## 📝 License

This project is open-source and free to use for educational or portfolio purposes. For commercial use, please credit the original author.
