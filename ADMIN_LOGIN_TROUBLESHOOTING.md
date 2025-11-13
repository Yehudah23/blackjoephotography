# Admin Login Troubleshooting Guide

## Common Issue: Admin Login Not Working

### Problem
The admin page won't login even when Laravel backend is running on port 8000.

### Root Causes & Solutions

#### 1. **CORS Configuration Issue** ⚠️ MOST COMMON

**Problem**: Laravel CORS is configured for `http://localhost` but Vue runs on `http://localhost:8080`

**Solution A - Fix Laravel CORS** (Recommended):

Edit your Laravel project's `config/cors.php`:

```php
return [
    'paths' => ['api/*', 'sanctum/csrf-cookie'],
    
    'allowed_methods' => ['*'],
    
    'allowed_origins' => [
        'http://localhost:8080',     // ← Add this
        'http://127.0.0.1:8080',     // ← Add this
        'http://localhost',
        'http://127.0.0.1',
    ],
    
    'allowed_origins_patterns' => [],
    
    'allowed_headers' => ['*'],
    
    'exposed_headers' => [],
    
    'max_age' => 0,
    
    'supports_credentials' => true,  // ← Must be true for withCredentials
];
```

**Solution B - Use Vue Proxy** (Already configured):

The Vue app is already configured with a proxy in `vue.config.js`. This means:
- Requests go to `http://localhost:8080/api/...` 
- Vue proxy forwards to `http://127.0.0.1:8000/api/...`
- CORS sees requests from same origin ✓

To use the proxy, update `src/config.js`:

```javascript
// Change from:
const API_BASE_URL = process.env.VUE_APP_API_URL || 'http://127.0.0.1:8000';

// To (for development):
const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? (process.env.VUE_APP_API_URL || 'http://127.0.0.1:8000')
  : ''; // Empty string = use same origin (proxy)
```

---

#### 2. **Laravel Sanctum Configuration**

Make sure your Laravel `.env` has:

```env
SESSION_DRIVER=cookie
SESSION_DOMAIN=localhost
SANCTUM_STATEFUL_DOMAINS=localhost:8080,127.0.0.1:8080
```

---

#### 3. **CSRF Token Issues**

**Check if `/sanctum/csrf-cookie` endpoint works:**

```bash
curl -v http://127.0.0.1:8000/sanctum/csrf-cookie
```

Should return `204 No Content` with `Set-Cookie` headers.

**If it fails**, check Laravel route:
```php
// routes/web.php or routes/api.php should have:
Route::get('/sanctum/csrf-cookie', [CsrfCookieController::class, 'show']);
```

---

#### 4. **Admin Login Endpoint Not Found**

**Test the endpoint:**

```bash
curl -X POST http://127.0.0.1:8000/api/admin/login \
  -H "Content-Type: application/json" \
  -d '{"password":"your-password"}'
```

**If 404**, create the route in Laravel:

```php
// routes/api.php
Route::post('/admin/login', [AdminController::class, 'login']);
Route::post('/admin/logout', [AdminController::class, 'logout']);
Route::get('/user', [AdminController::class, 'user'])->middleware('auth');
```

**Create AdminController:**

```php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AdminController extends Controller
{
    public function login(Request $request)
    {
        $password = $request->input('password');
        $adminPassword = env('ADMIN_PASSWORD', 'admin123');
        
        if ($password === $adminPassword) {
            session(['admin_logged_in' => true]);
            return response()->json(['status' => 200, 'message' => 'Login successful']);
        }
        
        return response()->json(['status' => 401, 'msg' => 'Invalid password'], 401);
    }
    
    public function logout(Request $request)
    {
        session()->forget('admin_logged_in');
        return response()->json(['status' => 200, 'message' => 'Logged out']);
    }
    
    public function user(Request $request)
    {
        if (session('admin_logged_in')) {
            return response()->json(['status' => 200, 'user' => 'admin']);
        }
        return response()->json(['status' => 401], 401);
    }
}
```

Add to Laravel `.env`:
```env
ADMIN_PASSWORD=your-secure-password
```

---

#### 5. **Browser Console Errors**

Open browser DevTools (F12) and check for errors:

**CORS Error:**
```
Access to XMLHttpRequest blocked by CORS policy
```
→ Fix Laravel CORS (see Solution 1)

**Network Error:**
```
ERR_CONNECTION_REFUSED
```
→ Backend not running. Start Laravel:
```bash
php artisan serve
```

**401 Unauthorized:**
```
401 Unauthorized
```
→ Wrong password or session not working

**419 CSRF Token Mismatch:**
```
419 Page Expired
```
→ CSRF cookie not being sent. Check `withCredentials: true` in axios calls (already done ✓)

---

## Quick Debug Checklist

Run these checks in order:

1. **✓ Backend Running?**
   ```bash
   curl http://127.0.0.1:8000
   ```

2. **✓ CSRF Cookie Working?**
   ```bash
   curl -v http://127.0.0.1:8000/sanctum/csrf-cookie 2>&1 | grep "Set-Cookie"
   ```

3. **✓ Login Endpoint Exists?**
   ```bash
   curl -X POST http://127.0.0.1:8000/api/admin/login \
     -H "Content-Type: application/json" \
     -d '{"password":"test"}'
   ```

4. **✓ CORS Headers Present?**
   ```bash
   curl -v http://127.0.0.1:8000/api/admin/login \
     -H "Origin: http://localhost:8080" 2>&1 | grep "Access-Control"
   ```

5. **✓ Check Vue App Network Tab:**
   - Open http://localhost:8080/admin
   - Open DevTools → Network tab
   - Try to login
   - Look at the `/sanctum/csrf-cookie` and `/api/admin/login` requests
   - Check Status, Headers, and Response

---

## Testing After Fixes

1. **Clear browser cache and cookies:**
   - Chrome: Ctrl+Shift+Del → Clear browsing data
   - Or use Incognito mode

2. **Restart Laravel:**
   ```bash
   php artisan serve
   ```

3. **Restart Vue dev server:**
   ```bash
   npm run serve
   ```

4. **Test login:**
   - Go to http://localhost:8080/admin
   - Open DevTools (F12) → Console tab
   - Try logging in
   - Check for detailed error messages (now improved!)

---

## Still Not Working?

If you've tried everything above, check:

1. **Firewall blocking local ports?**
2. **Antivirus blocking connections?**
3. **Using wrong password?**
4. **Session driver not working?** (Try `SESSION_DRIVER=file` in Laravel)
5. **Multiple Laravel instances running?** (Check with `ps aux | grep php`)

---

## Need More Help?

The admin login error handler has been improved to show detailed error messages. Check the red error text on the admin page after attempting login - it will tell you exactly what's wrong!
