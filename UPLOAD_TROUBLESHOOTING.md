# Image/Video Upload Troubleshooting Guide

## Why Images and Videos Won't Upload

### Common Issues & Solutions

---

## 1. **Backend Endpoint Missing** ⚠️ MOST COMMON

**Problem**: The Laravel backend doesn't have a `POST /api/portfolio` endpoint.

**Check if endpoint exists:**
```bash
curl -X POST http://127.0.0.1:8000/api/portfolio \
  -H "Content-Type: multipart/form-data" \
  -F "file=@test.jpg" \
  -F "category=Wedding" \
  -F "title=Test"
```

**Solution**: Create the endpoint in Laravel.

### Laravel Implementation:

**Step 1: Create Controller**

Create `app/Http/Controllers/PortfolioController.php`:

```php
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class PortfolioController extends Controller
{
    public function index()
    {
        // Return list of portfolio items
        $portfolios = \App\Models\Portfolio::all();
        return response()->json($portfolios);
    }
    
    public function store(Request $request)
    {
        // Validate the upload
        $request->validate([
            'file' => 'required|file|mimes:jpg,jpeg,png,gif,mp4,mov,avi|max:51200', // 50MB max
            'category' => 'required|string',
            'title' => 'required|string'
        ]);
        
        // Check if admin is logged in
        if (!session('admin_logged_in')) {
            return response()->json([
                'status' => 401,
                'message' => 'Unauthorized. Please login first.'
            ], 401);
        }
        
        // Get uploaded file
        $file = $request->file('file');
        $category = $request->input('category');
        $title = $request->input('title');
        
        // Store file
        $path = $file->store('portfolio', 'public');
        $url = Storage::url($path);
        
        // Determine if it's a video or image
        $isVideo = in_array($file->getClientOriginalExtension(), ['mp4', 'mov', 'avi']);
        
        // Save to database
        $portfolio = \App\Models\Portfolio::create([
            'title' => $title,
            'category' => $category,
            'imageUrl' => $isVideo ? null : $url,
            'videoUrl' => $isVideo ? $url : null,
            'description' => ''
        ]);
        
        return response()->json([
            'status' => 201,
            'message' => 'Upload successful',
            'data' => $portfolio
        ], 201);
    }
}
```

**Step 2: Create Model**

Create `app/Models/Portfolio.php`:

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Portfolio extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'title',
        'category',
        'imageUrl',
        'videoUrl',
        'description'
    ];
}
```

**Step 3: Create Migration**

```bash
php artisan make:migration create_portfolios_table
```

Edit the migration:

```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('portfolios', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('category');
            $table->string('imageUrl')->nullable();
            $table->string('videoUrl')->nullable();
            $table->text('description')->nullable();
            $table->timestamps();
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('portfolios');
    }
};
```

Run migration:
```bash
php artisan migrate
```

**Step 4: Add Routes**

In `routes/api.php`:

```php
use App\Http\Controllers\PortfolioController;

Route::get('/portfolio', [PortfolioController::class, 'index']);
Route::post('/portfolio', [PortfolioController::class, 'store']);
```

**Step 5: Link Storage**

```bash
php artisan storage:link
```

This creates a symbolic link from `public/storage` to `storage/app/public`.

---

## 2. **File Size Too Large**

**Problem**: File exceeds PHP upload limits.

**Check current limits:**
```bash
php -i | grep -E "upload_max_filesize|post_max_size"
```

**Solution**: Update `php.ini`:

```ini
upload_max_filesize = 50M
post_max_size = 50M
max_execution_time = 300
memory_limit = 256M
```

Restart PHP/server after changes.

---

## 3. **Permission Issues**

**Problem**: Laravel can't write to storage directory.

**Solution**:
```bash
cd your-laravel-project
chmod -R 775 storage
chmod -R 775 bootstrap/cache
chown -R www-data:www-data storage
chown -R www-data:www-data bootstrap/cache
```

Or for development:
```bash
chmod -R 777 storage
```

---

## 4. **CORS Issues**

**Problem**: CORS blocking the upload request.

**Check**: Look in browser console for CORS errors.

**Solution**: Already configured in Vue proxy, but ensure Laravel CORS is set up:

`config/cors.php`:
```php
'paths' => ['api/*', 'sanctum/csrf-cookie'],
'allowed_origins' => ['http://localhost:8080', 'http://127.0.0.1:8080'],
'supports_credentials' => true,
```

---

## 5. **Not Logged In**

**Problem**: User not authenticated as admin.

**Solution**: Make sure you're logged in before uploading:
1. Go to `/admin`
2. Enter password
3. Wait for "You are signed in as admin" message
4. Then upload files

---

## 6. **File Input Not Clearing**

**Problem**: Same file can't be uploaded twice.

**Solution**: Reset input after upload by adding this to Admin.vue:

```javascript
// In addPhoto() after successful upload:
const fileInput = document.querySelector('input[type="file"][accept="image/*"]');
if (fileInput) fileInput.value = '';

// In addVideo() after successful upload:
const videoInput = document.querySelector('input[type="file"][accept="video/*"]');
if (videoInput) videoInput.value = '';
```

---

## Debugging Steps

### 1. Check Browser Console (F12)

Look for detailed error messages. The improved error handler now shows:
- HTTP status codes
- Server error messages
- Network issues

### 2. Check Laravel Logs

```bash
tail -f storage/logs/laravel.log
```

### 3. Test Upload Endpoint Directly

```bash
# Test with curl
curl -X POST http://127.0.0.1:8000/api/portfolio \
  -F "file=@/path/to/test-image.jpg" \
  -F "category=Wedding" \
  -F "title=Test Upload" \
  -H "Cookie: laravel_session=your-session-cookie"
```

### 4. Check Network Tab

1. Open DevTools (F12)
2. Go to Network tab
3. Try uploading
4. Look at the POST request to `/api/portfolio`:
   - Status code
   - Request headers
   - Request payload
   - Response

### 5. Verify File Format

Accepted formats:
- **Images**: jpg, jpeg, png, gif
- **Videos**: mp4, mov, avi

---

## What Was Fixed in This Update

✅ **Better Error Messages**: Shows exact error from server  
✅ **Console Logging**: Logs upload progress for debugging  
✅ **File Object Upload**: Uses actual File object instead of data URL (more efficient)  
✅ **Status Code Handling**: Accepts both 200 and 201 responses  
✅ **Detailed Error Context**: Shows HTTP status, error message, and error type  

---

## Testing Checklist

- [ ] Laravel backend is running (`php artisan serve`)
- [ ] Vue dev server is running (`npm run serve`)
- [ ] Storage linked (`php artisan storage:link`)
- [ ] Storage folder is writable
- [ ] Admin logged in
- [ ] Category selected
- [ ] File size < 50MB
- [ ] File format is supported
- [ ] Browser console shows no errors
- [ ] `/api/portfolio` endpoint exists

---

## Still Not Working?

1. **Open browser console** (F12) → You'll see detailed error messages
2. **Check Laravel logs**: `tail -f storage/logs/laravel.log`
3. **Test endpoint**: Use curl or Postman to test the API directly
4. **Check permissions**: Make sure `storage` folder is writable
5. **Try a small file**: Test with a tiny image (< 1MB) first

The new error messages will tell you **exactly** what's wrong! 🎯
