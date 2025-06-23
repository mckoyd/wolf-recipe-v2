# $PROJECT

> A pnpm-powered React+TS boilerplate with Sass modules, Redux Toolkit,
> HashRouter, normalize.css, components & config folders. 🐺

## 🚀 Quick Start
\`\`\`bash
git clone <repo-url>
cd ~/Projects/$PROJECT
pnpm install
pnpm dev
\`\`\`

## 📁 Folder Structure
\`\`\`
$PROJECT/
├ src/
│  ├ assets/
│  │  ├ fonts/
│  │  └ images/
│  ├ components/
│  ├ pages/
│  │  ├ Home.tsx
│  │  └ About.tsx
│  ├ store/
│  │  ├ counterSlice.ts
│  │  └ store.ts
│  ├ styles/
│  │  ├ index.scss
│  │  ├ App.module.scss
│  │  └ Home.module.scss
│  ├ config/
│  ├ App.tsx
│  └ index.tsx
├ .gitignore
├ README.md
└ package.json
\`\`\`

## 🏗️ Component Architecture
\`\`\`
src/components/ComponentName/
├ index.ts                    # re-export
├ ComponentName.tsx           # component
├ ComponentName.module.scss   # styles
└ config.ts                   # component-specific config
\`\`\`

Happy hacking! 🐺
