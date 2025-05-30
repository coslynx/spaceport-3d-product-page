<div class="hero-icon" align="center">
  <img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
</div>

<h1 align="center">
3D Landing Page
</h1>
<h4 align="center">Visually engaging 3D landing page for a SaaS product showcasing interactive models</h4>
<h4 align="center">Developed with the software and tools below.</h4>
<div class="badges" align="center">
<img src="https://img.shields.io/badge/Framework-React-61DAFB?logo=react&logoColor=black" alt="React">
<img src="https://img.shields.io/badge/3D-Three.js-3D758A?logo=three.js&logoColor=white" alt="Three.js">
<img src="https://img.shields.io/badge/Language-TypeScript-3178C6?logo=typescript&logoColor=white" alt="TypeScript">
<img src="https://img.shields.io/badge/Animation-GSAP-88CE02?logo=greensock&logoColor=black" alt="GSAP">
<img src="https://img.shields.io/badge/Styling-Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind CSS">
</div>
<div class="badges" align="center">
<img src="https://img.shields.io/github/last-commit/coslynx/spaceport-3d-product-page?style=flat-square&color=5D6D7E" alt="git-last-commit" />
<img src="https://img.shields.io/github/commit-activity/m/coslynx/spaceport-3d-product-page?style=flat-square&color=5D6D7E" alt="GitHub commit activity" />
<img src="https://img.shields.io/github/languages/top/coslynx/spaceport-3d-product-page?style=flat-square&color=5D6D7E" alt="GitHub top language" />
</div>

## 📑 Table of Contents
- 📍 Overview
- 📦 Features
- 📂 Structure
- 💻 Installation
- 🏗️ Usage
- 🌐 Hosting
- 📄 License
- 👏 Authors

## 📍 Overview
This project implements a visually engaging 3D landing page for a SaaS product using React, Three.js, and GSAP. It showcases interactive 3D models, smooth animations, and parallax scrolling effects, providing an innovative user experience.

## 📦 Features

|    | Feature            | Description                                                                                                        |
|----|--------------------|--------------------------------------------------------------------------------------------------------------------|
| 🧊 | **3D Rendering**   | Utilizes Three.js and React Three Fiber for efficient 3D scene management and rendering.             |
| ✨ | **Animations**   | Leverages GSAP for smooth, high-performance animations and transitions.                                         |
| ⬆️ | **Parallax**  | Implements parallax scrolling effects to create a sense of depth and immersion. |
| 📱 | **Responsiveness**     | Adapts seamlessly to different screen sizes and devices using Tailwind CSS.                                        |
| 🧱 | **Modularity**     | Built with reusable React components for easy maintenance and scalability.   |
| ♿ | **Accessibility**        | Designed with accessibility in mind, following best practices.                               |
| 🚀 | **Performance** | Memory management, adaptive quality, and optimized assets for 60 FPS |
| 🎨 | **Theming**        | Integrated theming system with light and dark modes.        |

## 📂 Structure

```
3D-Landing-Page/
├── public/                      # Static assets (images, fonts, models etc)
│   └── favicon.svg
├── src/                         # Source code
│   ├── components/              # Reusable UI components
│   │   ├── ui/                   # UI component suite
│   │   │   ├── Bounded.tsx        # Layout wrapper for consistent spacing
│   │   │   ├── Button.tsx         # Reusable button component
│   │   │   └── TextSplitter.tsx   # Text animation component
│   ├── hooks/                   # Custom React hooks
│   │   └── use3DAnimation.ts     # 3D animation helpers
│   ├── lib/                     # Utility functions
│   │   └── utils.ts             # Utility functions for class management
│   ├── slices/                  # Main content sections
│   │   ├── Carousel/            # Interactive 3D model carousel
│   │   │   └── index.tsx
│   │   ├── Contact/             # Contact information and interactions
│   │   │   └── index.tsx
│   │   ├── Hero/                # Hero section with 3D background
│   │   │   └── index.tsx
│   │   ├── ScrollExperience/    # Scroll-triggered 3D effects
│   │   │   └── index.tsx
│   │   └── index.ts             # Exports all slices for easy import
│   ├── store/                   # Global state management
│   │   └── useStore.ts          # Centralized state management
│   ├── App.tsx                  # Main application component
│   ├── index.css                # Global styles and CSS imports
│   ├── main.tsx                 # React application entry point
│   └── vite-env.d.ts            # TypeScript ambient declarations
├── tailwind.config.js         # Tailwind CSS configuration
├── postcss.config.js          # PostCSS configuration
├── eslint.config.js           # ESLint configuration
├── tsconfig.json              # TypeScript configuration
├── tsconfig.app.json          # Application specific TypeScript config
├── tsconfig.node.json         # Node specific TypeScript config
├── vite.config.ts             # Vite configuration
├── package.json               # Project dependencies and scripts
├── .gitignore                 # Git ignore patterns
└── README.md                  # Project documentation
```

## 💻 Installation
  > [!WARNING]
  > ### 🔧 Prerequisites
  > - Node.js v18 or higher
  > - npm 6 or higher
  
  ### 🚀 Setup Instructions
  1. Clone the repository:
     ```bash
     git clone <repository_url>
     cd 3d-landing-page
     ```
  2. Install dependencies:
     ```bash
     npm install
     ```
     or
     ```bash
     yarn install
     ```
     or
     ```bash
     pnpm install
     ```

## 🏗️ Usage
### 🚀 Running the project
1.  Start the development server:
    ```bash
    npm run dev
    ```
    or
    ```bash
    yarn dev
    ```
    or
    ```bash
    pnpm dev
    ```
2. Access the application in your browser at `http://localhost:5173`
    > [!TIP]
    > This will start a local development server with hot reloading.
  
### ⚙️ Configuration

### ⚙️ Configuration
-Detailed explanation of configuration files and their purposes
-Instructions on how to modify key settings
-Any environment-specific configurations
```typescript
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
```

## 🌐 Hosting
### 🚀 Deployment Instructions
1.  Build the project for production:
    ```bash
    npm run build
    ```
  
2.  Deploy the `dist` folder to your preferred hosting platform.
    > [!NOTE]
    > This project can be easily deployed to platforms like Netlify, Vercel, or GitHub Pages.

## 📄 License & Attribution

### 📄 License
This Minimum Viable Product (MVP) is licensed under the [GNU AGPLv3](https://choosealicense.com/licenses/agpl-3.0/) license.

### 🤖 AI-Generated MVP
This MVP was entirely generated using artificial intelligence through [CosLynx.com](https://coslynx.com).

No human was directly involved in the coding process of the repository: spaceport-3d-product-page

### 📞 Contact
For any questions or concerns regarding this AI-generated MVP, please contact CosLynx at:
- Website: [CosLynx.com](https://coslynx.com)
- Twitter: [@CosLynxAI](https://x.com/CosLynxAI)

<p align="center">
<h1 align="center">🌐 CosLynx.com</h1>
</p>
<p align="center">
<em>Create Your Custom MVP in Minutes With CosLynxAI!</em>
</p>
<div class="badges" align="center">
<img src="https://img.shields.io/badge/Developers-Drix10,_Kais_Radwan-red" alt="">
<img src="https://img.shields.io/badge/Website-CosLynx.com-blue" alt="">
<img src="https://img.shields.io/badge/Backed_by-Google,_Microsoft_&_Amazon_for_Startups-red" alt="">
<img src="https://img.shields.io/badge/Finalist-Backdrop_Build_v4,_v6-black" alt="">
</div>