# Edit & Delete Media - Laravel Backend Implementation

## Overview

The Vue frontend now supports editing and deleting portfolio items. You need to add these endpoints to your Laravel backend.

## Required Laravel Endpoints

### 1. **PUT /api/portfolio/{id}** - Update item
### 2. **DELETE /api/portfolio/{id}** - Delete item

---

## Implementation Guide

### Step 1: Update PortfolioController

Add these methods to `app/Http/Controllers/PortfolioController.php`:

```php
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Models\Portfolio;

class PortfolioController extends Controller
{
    /**
     * Display a listing of portfolio items
     */
    public function index()
    {
        $portfolios = Portfolio::orderBy('created_at', 'desc')->get();
        
        // Add full URLs for storage paths
        $portfolios = $portfolios->map(function($item) {
            if ($item->imageUrl && !str_starts_with($item->imageUrl, 'http')) {
                $item->imageUrl = asset($item->imageUrl);
            }
            if ($item->videoUrl && !str_starts_with($item->videoUrl, 'http')) {
                $item->videoUrl = asset($item->videoUrl);
            }
            return $item;
        });
        
        return response()->json($portfolios);
    }
    
    /**
     * Store a new portfolio item
     */
    public function store(Request $request)
    {
        // Validate the upload
        $request->validate([
            'file' => 'required|file|mimes:jpg,jpeg,png,gif,webp,mp4,mov,avi,webm|max:51200', // 50MB max
            'category' => 'required|string',
            'title' => 'nullable|string'
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
        $title = $request->input('title', 'Untitled');
        
        // Store file
        $path = $file->store('portfolio', 'public');
        $url = Storage::url($path);
        
        // Determine if it's a video or image
        $isVideo = in_array($file->getClientOriginalExtension(), ['mp4', 'mov', 'avi', 'webm']);
        
        // Save to database
        $portfolio = Portfolio::create([
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
    
    /**
     * Update an existing portfolio item
     */
    public function update(Request $request, $id)
    {
        // Check if admin is logged in
        if (!session('admin_logged_in')) {
            return response()->json([
                'status' => 401,
                'message' => 'Unauthorized. Please login first.'
            ], 401);
        }
        
        // Validate input
        $request->validate([
            'title' => 'nullable|string|max:255',
            'category' => 'nullable|string|max:100',
            'description' => 'nullable|string|max:1000'
        ]);
        
        // Find the item
        $portfolio = Portfolio::find($id);
        
        if (!$portfolio) {
            return response()->json([
                'status' => 404,
                'message' => 'Portfolio item not found'
            ], 404);
        }
        
        // Update fields
        if ($request->has('title')) {
            $portfolio->title = $request->input('title');
        }
        if ($request->has('category')) {
            $portfolio->category = $request->input('category');
        }
        if ($request->has('description')) {
            $portfolio->description = $request->input('description');
        }
        
        $portfolio->save();
        
        return response()->json([
            'status' => 200,
            'message' => 'Updated successfully',
            'data' => $portfolio
        ], 200);
    }
    
    /**
     * Delete a portfolio item
     */
    public function destroy($id)
    {
        // Check if admin is logged in
        if (!session('admin_logged_in')) {
            return response()->json([
                'status' => 401,
                'message' => 'Unauthorized. Please login first.'
            ], 401);
        }
        
        // Find the item
        $portfolio = Portfolio::find($id);
        
        if (!$portfolio) {
            return response()->json([
                'status' => 404,
                'message' => 'Portfolio item not found'
            ], 404);
        }
        
        // Delete associated files from storage
        if ($portfolio->imageUrl) {
            $path = str_replace('/storage/', '', $portfolio->imageUrl);
            if (Storage::disk('public')->exists($path)) {
                Storage::disk('public')->delete($path);
            }
        }
        
        if ($portfolio->videoUrl) {
            $path = str_replace('/storage/', '', $portfolio->videoUrl);
            if (Storage::disk('public')->exists($path)) {
                Storage::disk('public')->delete($path);
            }
        }
        
        // Delete from database
        $portfolio->delete();
        
        return response()->json([
            'status' => 200,
            'message' => 'Deleted successfully'
        ], 200);
    }
}
```

---

### Step 2: Update Routes

In `routes/api.php`, add the new routes:

```php
use App\Http\Controllers\PortfolioController;

// Portfolio routes
Route::get('/portfolio', [PortfolioController::class, 'index']);
Route::post('/portfolio', [PortfolioController::class, 'store']);
Route::put('/portfolio/{id}', [PortfolioController::class, 'update']);
Route::delete('/portfolio/{id}', [PortfolioController::class, 'destroy']);
```

Or use resource routing (recommended):

```php
Route::apiResource('portfolio', PortfolioController::class);
```

---

### Step 3: Update Portfolio Model (if needed)

Make sure `app/Models/Portfolio.php` allows mass assignment:

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
    
    // Optional: Cast to proper types
    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];
}
```

---

### Step 4: Ensure Storage is Linked

Make sure storage is linked:

```bash
php artisan storage:link
```

---

### Step 5: Set Proper Permissions

```bash
chmod -R 775 storage
chown -R www-data:www-data storage  # or your web server user
```

---

## Testing the Endpoints

### Test Update Endpoint

```bash
curl -X PUT http://127.0.0.1:8000/api/portfolio/1 \
  -H "Content-Type: application/json" \
  -H "Cookie: laravel_session=your-session-cookie" \
  -d '{
    "title": "Updated Title",
    "category": "Portrait",
    "description": "New description"
  }'
```

### Test Delete Endpoint

```bash
curl -X DELETE http://127.0.0.1:8000/api/portfolio/1 \
  -H "Cookie: laravel_session=your-session-cookie"
```

---

## Frontend Features

### ✅ Edit Mode
- Click "Edit" button on any portfolio item
- Inline editing of title, category, and description
- Click "Save" to update or "Cancel" to discard changes

### ✅ Delete Function
- Click "Delete" button on any portfolio item
- Confirmation dialog prevents accidental deletion
- Item removed from both frontend and backend

### ✅ Category Filter
- Filter portfolio items by category
- Makes it easier to find specific items

### ✅ Upload with Title
- New optional title field when uploading
- Falls back to "Uploaded Image" or "Uploaded Video" if empty

### ✅ Auto-Refresh
- Portfolio list refreshes after upload, edit, or delete
- Always shows current state

---

## Error Handling

The frontend now provides detailed error messages for:
- **401 Unauthorized** - User not logged in
- **404 Not Found** - Item doesn't exist
- **500 Server Error** - Backend issue
- **Network Errors** - Backend not responding

All errors are logged to console and shown to user via alerts.

---

## Security Considerations

1. **Authentication Check**: All edit/delete operations check for admin session
2. **Validation**: Input is validated before processing
3. **File Cleanup**: Files are deleted from storage when item is deleted
4. **CSRF Protection**: Already handled by Sanctum
5. **Confirmation Dialog**: Prevents accidental deletion

---

## Database Schema

Make sure your `portfolios` table has these columns:

```sql
CREATE TABLE portfolios (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    category VARCHAR(100) NOT NULL,
    imageUrl VARCHAR(500) NULL,
    videoUrl VARCHAR(500) NULL,
    description TEXT NULL,
    created_at TIMESTAMP NULL,
    updated_at TIMESTAMP NULL
);
```

---

## Common Issues

### Issue: "Unauthorized" when editing/deleting

**Solution**: Make sure you're logged in as admin. The session must be maintained.

### Issue: Files not deleting from storage

**Solution**: Check file paths and storage permissions. The code assumes files are in `storage/app/public/portfolio/`.

### Issue: 404 Not Found

**Solution**: 
- Check that routes are registered
- Clear route cache: `php artisan route:clear`
- Verify item ID exists in database

---

## Next Steps

1. **Implement the Laravel endpoints** (copy code above)
2. **Test in Postman/curl** to ensure they work
3. **Login to admin panel** in Vue app
4. **Try editing and deleting** items

The Vue frontend is now ready to use these features! 🎉
