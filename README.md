# Portfolio Developer - Complete Project Structure

## 📁 Project Structure
```
portfolio-developer/
├── public/
│   ├── vite.svg
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header/
│   │   │   ├── Header.tsx
│   │   │   └── Header.styles.ts
│   │   ├── Hero/
│   │   │   ├── Hero.tsx
│   │   │   └── Hero.styles.ts
│   │   ├── About/
│   │   │   ├── About.tsx
│   │   │   └── About.styles.ts
│   │   ├── Skills/
│   │   │   ├── Skills.tsx
│   │   │   └── Skills.styles.ts
│   │   ├── Projects/
│   │   │   ├── Projects.tsx
│   │   │   └── Projects.styles.ts
│   │   ├── Contact/
│   │   │   ├── Contact.tsx
│   │   │   └── Contact.styles.ts
│   │   └── Footer/
│   │       ├── Footer.tsx
│   │       └── Footer.styles.ts
│   ├── hooks/
│   │   └── useScrollAnimation.ts
│   ├── utils/
│   │   └── scrollToSection.ts
│   ├── styles/
│   │   ├── GlobalStyles.ts
│   │   ├── theme.ts
│   │   └── animations.ts
│   ├── types/
│   │   └── index.ts
│   ├── data/
│   │   └── portfolio.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md
```

## 🚀 Quick Start

### 1. Utwórz projekt
```bash
npm create vite@latest portfolio-developer -- --template react-ts
cd portfolio-developer
```

### 2. Zainstaluj zależności
```bash
npm install styled-components
```

### 3. Uruchom projekt
```bash
npm run dev
```

## 📦 Dependencies
- React 18
- TypeScript
- Vite
- Styled Components

## 🎨 Features
- ✅ Responsive Design
- ✅ TypeScript Support
- ✅ Minimalist Animations
- ✅ Professional Styling
- ✅ Modular Architecture
- ✅ Smooth Scrolling