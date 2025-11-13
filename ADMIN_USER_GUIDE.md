# Admin Panel User Guide

## Accessing the Admin Panel

Navigate to: `http://localhost:8080/admin`

---

## Features Overview

### 🔐 Login
1. Enter your admin password
2. Click "Sign in"
3. You'll see "You are signed in as admin" when successful

### 📤 Upload New Media

1. **Select Category** - Choose from: Wedding, Portrait, Nature, Street, Event, Videography
2. **Enter Title** (optional) - Give your media a descriptive name
3. **Choose File** - Select either:
   - Image file (JPG, PNG, GIF, WEBP)
   - Video file (MP4, MOV, AVI, WEBM)
4. **Preview** - See thumbnail before uploading
5. **Click "Add Image"** or **"Add Video"** to upload
6. Wait for confirmation message

### 📋 Manage Existing Media

#### View Portfolio Items
- All uploaded items are displayed below the upload form
- Items show: thumbnail, title, category, description

#### Filter by Category
- Use the "Filter by Category" dropdown
- Select a category to show only those items
- Select "All Categories" to see everything

#### ✏️ Edit an Item
1. Click the **"Edit"** button on any item
2. The item switches to edit mode with text fields
3. Modify:
   - **Title** - Change the display name
   - **Category** - Move to different category
   - **Description** - Add or update description
4. Click **"Save"** to confirm changes
5. Click **"Cancel"** to discard changes

**Note**: You cannot change the actual image/video file. To replace media, delete the item and upload a new one.

#### 🗑️ Delete an Item
1. Click the **"Delete"** button on any item
2. Confirm the deletion in the dialog
3. Item is permanently removed (cannot be undone!)

**Warning**: This deletes both the database entry AND the file from storage.

### 🚪 Sign Out
- Click **"Sign out"** button at any time
- You'll need to login again to upload/edit/delete

---

## Tips & Best Practices

### ✅ Do's
- ✅ Use descriptive titles for better organization
- ✅ Choose the correct category for each item
- ✅ Add descriptions to provide context
- ✅ Preview images/videos before uploading
- ✅ Use the category filter to find items quickly
- ✅ Sign out when you're done

### ❌ Don'ts
- ❌ Don't upload files larger than 50MB
- ❌ Don't use special characters in titles
- ❌ Don't delete items without confirming first
- ❌ Don't leave browser tab open if someone else uses computer

---

## Supported File Formats

### Images
- JPEG/JPG
- PNG
- GIF
- WEBP

### Videos
- MP4 (recommended)
- MOV
- AVI
- WEBM

### File Size Limits
- **Maximum**: 50MB per file
- **Recommended**: Keep images under 5MB for faster loading

---

## Workflow Example

### Uploading a Wedding Photo

1. Login to admin panel
2. Select **"Wedding"** from category dropdown
3. Enter title: **"Sarah & Michael - First Dance"**
4. Click image file input and select your photo
5. Preview appears - verify it's the right image
6. Click **"Add Image"**
7. Wait for "Image uploaded successfully!" message
8. Photo appears in the management section below

### Editing an Item

1. Scroll to the management section
2. Find the item you want to edit
3. Click **"Edit"** button
4. Change title to: **"Sarah & Michael - First Dance (Evening)"**
5. Update description: **"Beautiful moment captured during the sunset"**
6. Click **"Save"**
7. Changes are applied immediately

### Deleting an Item

1. Find the item in the management section
2. Click **"Delete"** button
3. Confirm: **"Are you sure you want to delete this item?"**
4. Click **OK**
5. Item is removed from the list

---

## Troubleshooting

### Can't Login
- **Check password** - Make sure it's correct
- **Check backend** - Laravel must be running on port 8000
- **Check console** - Open browser DevTools (F12) for error messages

### Upload Fails
- **File too large** - Reduce file size or compress image
- **Wrong format** - Check supported formats above
- **Not logged in** - Make sure you see "You are signed in as admin"
- **Backend issue** - Check Laravel logs

### Edit/Delete Not Working
- **Not logged in** - Session may have expired, try logging in again
- **Backend missing** - Laravel needs PUT/DELETE endpoints (see EDIT_DELETE_BACKEND.md)
- **Item not found** - Refresh page and try again

### Nothing Shows in Management Section
- **No items uploaded** - Upload some media first
- **Filter active** - Check if category filter is hiding items
- **Backend issue** - Check if Laravel is returning data

---

## Keyboard Shortcuts

- **Tab** - Navigate between fields
- **Enter** - Submit login form / Save edit
- **Escape** - Cancel edit (when in edit mode)

---

## Security Notes

- 🔒 Always sign out when finished
- 🔒 Don't share your admin password
- 🔒 Close browser when using shared computers
- 🔒 Session expires after inactivity

---

## Need Help?

Check these files for more information:
- **UPLOAD_TROUBLESHOOTING.md** - Upload issues
- **ADMIN_LOGIN_TROUBLESHOOTING.md** - Login problems
- **EDIT_DELETE_BACKEND.md** - Backend setup
- **Browser Console (F12)** - Detailed error messages

---

**Happy managing! 📸**
