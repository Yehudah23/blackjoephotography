# BlackJoe Photography Portfolio

A professional photography portfolio website built with Vue 3, featuring a responsive design, dark mode support, and admin panel for content management.

## Features

- 🎨 Modern, responsive design with dark mode
- 📸 Portfolio gallery with category filtering
- 🎬 Support for both images and videos
- 🔐 Secure admin panel for content uploads
- 🌐 Social media sharing integration
- ⚡ Optimized for performance
- 🔄 API-driven content management

## Project Setup

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Backend API server (Laravel recommended)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd blackjoephotography
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
```bash
cp .env.example .env
```

4. Update the `.env` file with your backend API URL:
```
VUE_APP_API_URL=http://127.0.0.1:8000
```

### Development

Start the development server with hot-reload:
```bash
npm run serve
```

The application will be available at `http://localhost:8080`

### Production Build

Compile and minify for production:
```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

### Linting

Lint and fix code style issues:
```bash
npm run lint
```

## Project Structure

```
blackjoephotography/
├── public/              # Static assets
├── src/
│   ├── assets/          # Images and media files
│   ├── components/      # Vue components
│   │   ├── AboutMe.vue
│   │   ├── ContactMe.vue
│   │   ├── MyFooter.vue
│   │   ├── MyHeader.vue
│   │   ├── MyHero.vue
│   │   ├── MyPortfolio.vue
│   │   ├── SocialShare.vue
│   │   └── SocialSidebar.vue
│   ├── router/          # Vue Router configuration
│   ├── views/           # Page components
│   │   ├── Home.vue
│   │   └── Admin.vue
│   ├── api.js           # API utilities
│   ├── bus.js           # Event bus
│   ├── config.js        # Centralized API configuration
│   ├── App.vue          # Root component
│   └── main.js          # Application entry point
├── .env                 # Environment variables (local)
├── .env.example         # Environment variables template
├── vue.config.js        # Vue CLI configuration
└── package.json         # Dependencies and scripts
```

## Configuration

### API Configuration

The project uses a centralized API configuration in `src/config.js`:

```javascript
// API endpoints are configured through environment variables
VUE_APP_API_URL=http://127.0.0.1:8000
```

Available endpoints:
- `/api/portfolio` - Portfolio items (GET, POST)
- `/api/user` - User authentication check (GET)
- `/api/admin/login` - Admin login (POST)
- `/api/admin/logout` - Admin logout (POST)
- `/sanctum/csrf-cookie` - CSRF token (GET)

### Proxy Configuration

The development server includes proxy configuration in `vue.config.js` to handle CORS during development:

```javascript
proxy: {
  '/api': {
    target: 'http://127.0.0.1:8000',
    changeOrigin: true
  }
}
```

## Admin Panel

Access the admin panel at `/admin` to:
- Upload new images and videos
- Categorize portfolio items
- Manage content

Default categories:
- Wedding
- Portrait
- Nature
- Street
- Event
- Videography

## Recent Fixes & Improvements

✅ **Centralized API Configuration**: All API URLs now use a single configuration source
✅ **Environment Variables**: Added `.env` support for flexible configuration
✅ **Proxy Setup**: Configured development proxy to avoid CORS issues
✅ **Schema Warnings Fixed**: Removed problematic JSON schema references
✅ **Build Optimization**: Added production build optimizations
✅ **Code Quality**: Verified with ESLint with zero errors
✅ **Build Verification**: Successfully builds with all optimizations

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

The project can be deployed to:
- Netlify
- Vercel
- AWS S3 + CloudFront
- GitHub Pages
- Any static hosting service

See [Vue CLI Deployment Guide](https://cli.vuejs.org/guide/deployment.html) for detailed instructions.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is private and proprietary.

## Contact

For inquiries, visit [@themaskguyy](https://www.instagram.com/themaskguyy) on Instagram.

