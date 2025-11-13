# Quick Start Guide - BlackJoe Photography

## 🚀 Getting Started (5 minutes)

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment
```bash
# Copy the example environment file
cp .env.example .env

# Edit .env and set your API URL
# VUE_APP_API_URL=http://127.0.0.1:8000
```

### 3. Start Development Server
```bash
npm run serve
```

Visit: http://localhost:8080

---

## 📝 Common Commands

| Command | Description |
|---------|-------------|
| `npm install` | Install all dependencies |
| `npm run serve` | Start development server with hot-reload |
| `npm run build` | Build for production |
| `npm run lint` | Check and fix code style |

---

## 🔧 Configuration Quick Reference

### API Configuration (src/config.js)
```javascript
// All API URLs are centralized here
// Configured via VUE_APP_API_URL in .env
```

### Environment Variables (.env)
```bash
# Your backend API URL
VUE_APP_API_URL=http://127.0.0.1:8000

# Application info
VUE_APP_TITLE=BlackJoe Photography
VUE_APP_DESCRIPTION=Professional Photography Portfolio
```

### Development Proxy (vue.config.js)
Automatically proxies `/api` and `/sanctum` requests to your backend during development.

---

## 🎯 Key Features

- ✅ **Responsive Design** - Works on all devices
- ✅ **Dark Mode** - Toggle with button in top-right
- ✅ **Admin Panel** - Upload photos/videos at `/admin`
- ✅ **Social Sharing** - Share portfolio items on social media
- ✅ **Category Filtering** - Filter by Wedding, Portrait, Nature, etc.

---

## 🔐 Admin Access

1. Navigate to `/admin`
2. Enter admin password
3. Upload images or videos
4. Select category
5. Click "Add Image" or "Add Video"

---

## 📁 Important Files

| File | Purpose |
|------|---------|
| `src/config.js` | API configuration (centralized) |
| `src/views/Admin.vue` | Admin upload page |
| `src/components/MyPortfolio.vue` | Portfolio gallery |
| `.env` | Environment variables (local) |
| `vue.config.js` | Vue CLI & webpack config |

---

## 🐛 Troubleshooting

### CORS Errors
- Make sure your backend allows requests from `http://localhost:8080`
- Check that proxy is configured in `vue.config.js`

### API Connection Issues
- Verify `VUE_APP_API_URL` in `.env` matches your backend
- Ensure backend server is running
- Check browser console for detailed errors

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Port Already in Use
```bash
# Use a different port
npm run serve -- --port 8081
```

---

## 📚 Need More Help?

- **Full Documentation**: See `README.md`
- **Changes Log**: See `CHANGELOG.md`
- **Code Issues**: Check browser console (F12)

---

## ✅ Project Status

**All Systems Operational** ✨

- Zero lint errors
- Build successful
- All configuration files in place
- API centralized
- Documentation complete

---

**Ready to develop!** 🎉
