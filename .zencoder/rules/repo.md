---
description: Repository Information Overview
alwaysApply: true
---

# BlackJoe Photography Information

## Summary
A Vue.js-based photography portfolio website for BlackJoe Photography. The site features a responsive design with light and dark mode support, showcasing photography services and portfolio.

## Structure
- **public/**: Contains the HTML entry point and static assets
- **src/**: Main source code directory
  - **assets/**: Images and static resources
  - **components/**: Reusable Vue components
  - **router/**: Vue Router configuration
  - **views/**: Page components rendered by the router
- **babel.config.js**: Babel configuration for JavaScript transpilation
- **vue.config.js**: Vue CLI configuration file
- **jsconfig.json**: JavaScript configuration for editor support

## Language & Runtime
**Language**: JavaScript, Vue.js
**Version**: Vue 3.2.13
**Build System**: Vue CLI (Vue CLI Service 5.0.0)
**Package Manager**: npm

## Dependencies
**Main Dependencies**:
- vue: ^3.2.13 - Progressive JavaScript framework
- vue-router: ^4.0.13 - Official router for Vue.js
- axios: ^1.11.0 - Promise-based HTTP client
- core-js: ^3.8.3 - JavaScript polyfills

**Development Dependencies**:
- @vue/cli-service: ~5.0.0 - Development server and build tools
- @vue/cli-plugin-babel: ~5.0.0 - Babel integration
- @vue/cli-plugin-eslint: ~5.0.0 - ESLint integration
- eslint: ^7.32.0 - JavaScript linter
- @babel/core: ^7.12.16 - JavaScript compiler

## Build & Installation
```bash
# Install dependencies
npm install

# Serve with hot-reload for development
npm run serve

# Build for production
npm run build

# Lint and fix files
npm run lint
```

## Main Files
**Entry Point**: src/main.js
**App Component**: src/App.vue
**Router Configuration**: src/router/index.js
**Main Views**:
- Home (src/views/Home.vue)
- Admin (src/views/Admin.vue)

**Key Components**:
- MyHeader (src/components/MyHeader.vue)
- MyHero (src/components/MyHero.vue)
- MyPortfolio (src/components/MyPortfolio.vue)
- AboutMe (src/components/AboutMe.vue)
- ContactMe (src/components/ContactMe.vue)