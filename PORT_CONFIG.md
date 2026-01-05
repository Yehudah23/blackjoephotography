# Port Configuration Guide

## Current Setup
- **Backend (Laravel)**: Port 8001
- **Frontend (Vue)**: Auto-selects available port (8080, 8081, 8082, etc.)

## How to Change Backend Port

If your Laravel server runs on a different port, simply update the `.env` file:

```bash
# Edit .env file
VUE_APP_BACKEND_PORT=8002  # Change to your Laravel port
```

Then restart the Vue dev server:
```bash
npm run serve
```

## Port Auto-Detection

✅ **Vue Dev Server**: Automatically finds next available port if 8080 is busy
✅ **Backend Proxy**: Reads port from VUE_APP_BACKEND_PORT environment variable

## Access Your App

Always access through the Vue dev server URL shown in terminal:
```
App running at:
  - Local:   http://localhost:8081/  <-- Use this URL
```

**DO NOT** access directly from Laravel server (port 8001) - this bypasses the proxy and causes 404 errors.

## Troubleshooting

If you get 404 on login:
1. Check which port Laravel is running on (look for "PHP Development Server" message)
2. Update `VUE_APP_BACKEND_PORT` in `.env` to match
3. Restart Vue dev server: `npm run serve`
4. Access app through Vue dev server URL (check terminal output)
