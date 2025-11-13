<template>
  <section class="admin-page py-12 px-6">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-2xl font-bold mb-4">Admin — Manage Media</h2>

      <div v-if="!loggedIn" class="mb-6">
        <p class="mb-2">Please sign in as admin to upload files.</p>
        <form @submit.prevent="login" autocomplete="off" novalidate>
          <input
            v-model="password"
            type="password"
            name="admin-password"
            placeholder="Admin password"
            class="input mb-2"
            autocomplete="new-password"
            autocapitalize="off"
            spellcheck="false"
          />
          <div><button type="submit" class="submit-btn">Sign in</button></div>
        </form>
        <p v-if="authError" class="text-red-600 mt-2">{{ authError }}</p>
      </div>

      <div v-else>
        <!-- Upload Section -->
        <div class="upload-section mb-8 p-6 bg-white rounded-lg shadow">
          <h3 class="text-xl font-semibold mb-4">Upload New Media</h3>
          <div class="mb-3">
            <label class="block text-sm mb-1">Category</label>
            <select v-model="uploadCategory" class="input">
              <option value="">Select category...</option>
              <option v-for="cat in uploadCategories" :key="cat" :value="cat">{{ cat }}</option>
            </select>
          </div>
          <div class="mb-3">
            <label class="block text-sm mb-1">Title (optional)</label>
            <input v-model="uploadTitle" type="text" placeholder="Enter title..." class="input" />
          </div>
          <input type="file" accept="image/*" @change="handleImageUpload" class="input mb-2" ref="imageInput" />
          <input type="file" accept="video/*" @change="handleVideoUpload" class="input mb-2" ref="videoInput" />
          <div v-if="newImageUrl" class="mt-4"><img :src="newImageUrl" alt="Preview" class="w-40 h-40 object-cover rounded shadow" /></div>
          <div v-if="newVideoUrl" class="mt-4"><video :src="newVideoUrl" controls class="w-64 h-40 rounded shadow" /></div>
          <div v-if="uploadError" class="text-red-600 mt-2">{{ uploadError }}</div>
          <div class="mt-4 flex gap-2">
            <button class="submit-btn" @click="addPhoto">Add Image</button>
            <button class="submit-btn" @click="addVideo">Add Video</button>
            <button class="submit-btn bg-gray-500" @click="logout">Sign out</button>
          </div>
        </div>

        <!-- Manage Existing Media Section -->
        <div class="manage-section">
          <h3 class="text-xl font-semibold mb-4">Manage Existing Media</h3>
          <div class="mb-4">
            <label class="block text-sm mb-1">Filter by Category</label>
            <select v-model="filterCategory" class="input max-w-xs">
              <option value="">All Categories</option>
              <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
            </select>
          </div>

          <div v-if="loading" class="text-center py-8">Loading...</div>
          
          <div v-else-if="filteredPortfolio.length === 0" class="text-center py-8 text-gray-500">
            No items found.
          </div>

          <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div v-for="item in filteredPortfolio" :key="item.id" class="portfolio-item bg-white rounded-lg shadow overflow-hidden">
              <div class="aspect-square overflow-hidden relative">
                <template v-if="editingId === item.id">
                  <!-- Edit Mode -->
                  <div class="p-4 bg-gray-50 h-full">
                    <div class="mb-3">
                      <label class="block text-sm mb-1">Title</label>
                      <input v-model="editForm.title" type="text" class="input-sm" />
                    </div>
                    <div class="mb-3">
                      <label class="block text-sm mb-1">Category</label>
                      <select v-model="editForm.category" class="input-sm">
                        <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
                      </select>
                    </div>
                    <div class="mb-3">
                      <label class="block text-sm mb-1">Description</label>
                      <textarea v-model="editForm.description" class="input-sm" rows="2"></textarea>
                    </div>
                  </div>
                </template>
                <template v-else>
                  <!-- Display Mode -->
                  <img v-if="item.imageUrl" :src="item.imageUrl" :alt="item.title" class="w-full h-full object-cover" />
                  <video v-else-if="item.videoUrl" :src="item.videoUrl" class="w-full h-full object-cover" />
                </template>
              </div>
              
              <div class="p-4">
                <h4 class="font-semibold text-sm mb-1">{{ editingId === item.id ? editForm.title : item.title }}</h4>
                <p class="text-xs text-gray-600 mb-2">{{ editingId === item.id ? editForm.category : item.category }}</p>
                <p v-if="item.description" class="text-xs text-gray-500 mb-3">{{ editingId === item.id ? editForm.description : item.description }}</p>
                
                <div class="flex gap-2">
                  <template v-if="editingId === item.id">
                    <button @click="saveEdit(item.id)" class="btn-sm btn-primary">Save</button>
                    <button @click="cancelEdit" class="btn-sm btn-secondary">Cancel</button>
                  </template>
                  <template v-else>
                    <button @click="startEdit(item)" class="btn-sm btn-primary">Edit</button>
                    <button @click="deleteItem(item.id)" class="btn-sm btn-danger">Delete</button>
                  </template>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import { API_ENDPOINTS } from '../config';

export default {
  name: 'AdminPage',

  data() {
    return {
      password: '',
      loggedIn: false,
      authError: '',
      uploadCategory: '',
      uploadTitle: '',
      categories: ['Wedding', 'Portrait', 'Nature', 'Street', 'Event', 'Videography'],
      newImageUrl: '',
      newVideoUrl: '',
      uploadError: '',
      selectedImageFile: null,
      selectedVideoFile: null,
      portfolio: [],
      loading: false,
      filterCategory: '',
      editingId: null,
      editForm: {
        title: '',
        category: '',
        description: ''
      }
    };
  },

  computed: {
    uploadCategories() {
      return this.categories;
    },
    filteredPortfolio() {
      if (!this.filterCategory) return this.portfolio;
      return this.portfolio.filter(item => item.category === this.filterCategory);
    }
  },

  mounted() {
    this.checkSession();
  },

  methods: {
    dataURLtoBlob(dataurl) {
      const parts = dataurl.split(',');
      const header = parts[0];
      const data = parts[1];
      const mimeMatch = header.match(/:(.*?);/);
      const mime = mimeMatch ? mimeMatch[1] : 'application/octet-stream';

      const binary = atob(data);
      const len = binary.length;
      const u8arr = new Uint8Array(len);
      for (let i = 0; i < len; i += 1) { u8arr[i] = binary.charCodeAt(i); }
      return new Blob([u8arr], { type: mime });
    },

    checkSession() {
      axios.get(API_ENDPOINTS.user, { withCredentials: true })
        .then(() => {
          this.loggedIn = true;
          this.authError = '';
          this.fetchPortfolio();
        })
        .catch(() => {
          this.loggedIn = false;
        });
    },

    login() {
      this.authError = '';
      if (!this.password) {
        this.authError = 'Enter admin password.';
        return;
      }

      const payload = { password: this.password };

      axios.get(API_ENDPOINTS.csrfCookie, { withCredentials: true })
        .then(() => {
          return axios.post(API_ENDPOINTS.adminLogin, payload, { withCredentials: true });
        })
        .then(response => {
          if ((response && response.status === 200) || (response.data && response.data.status === 200)) {
            this.loggedIn = true;
            this.authError = '';
            this.checkSession();
          } else {
            this.authError = (response.data && response.data.msg) || 'Login failed';
          }
        })
        .catch(error => {
          console.error('Login error:', error);
          if (error.response) {
            // Server responded with error
            this.authError = error.response.data?.message || error.response.data?.msg || `Login failed: ${error.response.status}`;
          } else if (error.request) {
            // Request made but no response (CORS/Network issue)
            this.authError = 'Cannot connect to server. Check if backend is running and CORS is configured.';
          } else {
            this.authError = 'Login failed: ' + error.message;
          }
        });
    },

    logout() {
      axios.post(API_ENDPOINTS.adminLogout, {}, { withCredentials: true }).catch(() => {});
      this.loggedIn = false;
      this.password = '';
      this.uploadCategory = '';
      this.newImageUrl = '';
      this.newVideoUrl = '';
      this.uploadError = '';
      this.selectedImageFile = null;
      this.selectedVideoFile = null;
    },

    handleImageUpload(event) {
      const file = event.target.files && event.target.files[0];
      if (!file) return;
      if (!file.type.startsWith('image/')) {
        this.uploadError = 'Please upload a valid image file.';
        return;
      }
      // Store the actual file for upload, not just the data URL
      this.selectedImageFile = file;
      
      const reader = new FileReader();
      reader.onload = (e) => { this.newImageUrl = e.target.result; };
      reader.readAsDataURL(file);
      this.uploadError = '';
      console.log('Image selected:', file.name, file.size, 'bytes');
    },

    handleVideoUpload(event) {
      const file = event.target.files && event.target.files[0];
      if (!file) return;
      if (!file.type.startsWith('video/')) {
        this.uploadError = 'Please upload a valid video file.';
        return;
      }
      // Store the actual file for upload, not just the data URL
      this.selectedVideoFile = file;
      
      const reader = new FileReader();
      reader.onload = (e) => { this.newVideoUrl = e.target.result; };
      reader.readAsDataURL(file);
      this.uploadError = '';
      console.log('Video selected:', file.name, file.size, 'bytes');
    },

    addPhoto() {
      if (!this.newImageUrl) { this.uploadError = 'Please upload an image.'; return; }
      if (!this.uploadCategory) { this.uploadError = 'Please choose a category.'; return; }
      this.uploadError = '';
      
      try {
        const form = new FormData();
        
        // Use actual file if available, otherwise convert data URL to blob
        if (this.selectedImageFile) {
          form.append('file', this.selectedImageFile, this.selectedImageFile.name);
          console.log('Uploading file:', this.selectedImageFile.name);
        } else {
          const blob = this.dataURLtoBlob(this.newImageUrl);
          form.append('file', blob, `image_${Date.now()}.png`);
          console.log('Uploading blob');
        }
        
        form.append('category', this.uploadCategory);
        form.append('title', this.uploadTitle || 'Uploaded Image');

        console.log('Posting to:', API_ENDPOINTS.portfolio);

        axios.post(API_ENDPOINTS.portfolio, form, { 
          headers: { 'Content-Type': 'multipart/form-data' }, 
          withCredentials: true 
        })
          .then(response => {
            console.log('Upload response:', response);
            if ((response && response.status === 200) || (response && response.status === 201) || (response.data && (response.data.status === 200 || response.data.status === 201))) {
              this.newImageUrl = '';
              this.selectedImageFile = null;
              this.uploadTitle = '';
              if (this.$refs.imageInput) this.$refs.imageInput.value = '';
              alert('Image uploaded successfully!');
              this.uploadError = '';
              this.fetchPortfolio(); // Refresh the list
            } else {
              this.uploadError = (response.data && response.data.msg) || (response.data && response.data.message) || 'Upload failed';
            }
          })
          .catch(error => {
            console.error('Upload error:', error);
            if (error.response) {
              // Server responded with error
              this.uploadError = `Upload failed: ${error.response.data?.message || error.response.data?.msg || error.response.statusText} (${error.response.status})`;
            } else if (error.request) {
              // Request made but no response
              this.uploadError = 'No response from server. Check if backend is running and endpoint exists.';
            } else {
              this.uploadError = 'Upload failed: ' + error.message;
            }
          });
      } catch (err) {
        console.error('Exception during upload:', err);
        this.uploadError = 'Upload failed: ' + err.message;
      }
    },

    addVideo() {
      if (!this.newVideoUrl) { this.uploadError = 'Please upload a video.'; return; }
      if (!this.uploadCategory) { this.uploadError = 'Please choose a category.'; return; }
      this.uploadError = '';
      
      try {
        const form = new FormData();
        
        // Use actual file if available, otherwise convert data URL to blob
        if (this.selectedVideoFile) {
          form.append('file', this.selectedVideoFile, this.selectedVideoFile.name);
          console.log('Uploading file:', this.selectedVideoFile.name);
        } else {
          const blob = this.dataURLtoBlob(this.newVideoUrl);
          form.append('file', blob, `video_${Date.now()}.mp4`);
          console.log('Uploading blob');
        }
        
        form.append('category', this.uploadCategory);
        form.append('title', this.uploadTitle || 'Uploaded Video');

        console.log('Posting to:', API_ENDPOINTS.portfolio);

        axios.post(API_ENDPOINTS.portfolio, form, { 
          headers: { 'Content-Type': 'multipart/form-data' }, 
          withCredentials: true 
        })
          .then(response => {
            console.log('Upload response:', response);
            if ((response && response.status === 200) || (response && response.status === 201) || (response.data && (response.data.status === 200 || response.data.status === 201))) {
              this.newVideoUrl = '';
              this.selectedVideoFile = null;
              this.uploadTitle = '';
              if (this.$refs.videoInput) this.$refs.videoInput.value = '';
              alert('Video uploaded successfully!');
              this.uploadError = '';
              this.fetchPortfolio(); // Refresh the list
            } else {
              this.uploadError = (response.data && response.data.msg) || (response.data && response.data.message) || 'Upload failed';
            }
          })
          .catch(error => {
            console.error('Upload error:', error);
            if (error.response) {
              // Server responded with error
              this.uploadError = `Upload failed: ${error.response.data?.message || error.response.data?.msg || error.response.statusText} (${error.response.status})`;
            } else if (error.request) {
              // Request made but no response
              this.uploadError = 'No response from server. Check if backend is running and endpoint exists.';
            } else {
              this.uploadError = 'Upload failed: ' + error.message;
            }
          });
      } catch (err) {
        console.error('Exception during upload:', err);
        this.uploadError = 'Upload failed: ' + err.message;
      }
    },

    fetchPortfolio() {
      this.loading = true;
      axios.get(API_ENDPOINTS.portfolio, { withCredentials: true })
        .then(response => {
          if (Array.isArray(response.data)) {
            this.portfolio = response.data;
          } else if (response.data && Array.isArray(response.data.data)) {
            this.portfolio = response.data.data;
          } else {
            this.portfolio = [];
          }
          this.loading = false;
        })
        .catch(error => {
          console.error('Fetch portfolio error:', error);
          this.portfolio = [];
          this.loading = false;
        });
    },

    startEdit(item) {
      this.editingId = item.id;
      this.editForm = {
        title: item.title || '',
        category: item.category || '',
        description: item.description || ''
      };
    },

    cancelEdit() {
      this.editingId = null;
      this.editForm = {
        title: '',
        category: '',
        description: ''
      };
    },

    saveEdit(id) {
      const payload = {
        title: this.editForm.title,
        category: this.editForm.category,
        description: this.editForm.description
      };

      console.log('Updating item:', id, payload);

      axios.put(`${API_ENDPOINTS.portfolio}/${id}`, payload, { withCredentials: true })
        .then(response => {
          console.log('Update response:', response);
          if (response && (response.status === 200 || response.status === 204)) {
            // Update local data
            const index = this.portfolio.findIndex(item => item.id === id);
            if (index !== -1) {
              this.portfolio[index] = { ...this.portfolio[index], ...payload };
            }
            this.cancelEdit();
            alert('Updated successfully!');
            this.fetchPortfolio(); // Refresh to get server data
          } else {
            alert('Update failed: ' + (response.data?.message || 'Unknown error'));
          }
        })
        .catch(error => {
          console.error('Update error:', error);
          if (error.response) {
            alert(`Update failed: ${error.response.data?.message || error.response.statusText} (${error.response.status})`);
          } else if (error.request) {
            alert('No response from server. Check if backend is running.');
          } else {
            alert('Update failed: ' + error.message);
          }
        });
    },

    deleteItem(id) {
      if (!confirm('Are you sure you want to delete this item? This action cannot be undone.')) {
        return;
      }

      console.log('Deleting item:', id);

      axios.delete(`${API_ENDPOINTS.portfolio}/${id}`, { withCredentials: true })
        .then(response => {
          console.log('Delete response:', response);
          if (response && (response.status === 200 || response.status === 204)) {
            // Remove from local data
            this.portfolio = this.portfolio.filter(item => item.id !== id);
            alert('Deleted successfully!');
          } else {
            alert('Delete failed: ' + (response.data?.message || 'Unknown error'));
          }
        })
        .catch(error => {
          console.error('Delete error:', error);
          if (error.response) {
            alert(`Delete failed: ${error.response.data?.message || error.response.statusText} (${error.response.status})`);
          } else if (error.request) {
            alert('No response from server. Check if backend is running.');
          } else {
            alert('Delete failed: ' + error.message);
          }
        });
    }
  }
};</script>

<style scoped>
.admin-page { min-height: 100vh; padding-top: 120px; color: var(--text); }
.input { width: 100%; padding: 0.75rem 1rem; border: 2px solid rgba(37,99,235,0.3); border-radius: 0.5rem; background: rgba(255,255,255,0.9); color: #1e293b; }
.input-sm { width: 100%; padding: 0.5rem 0.75rem; border: 1px solid rgba(37,99,235,0.3); border-radius: 0.375rem; background: rgba(255,255,255,0.9); color: #1e293b; font-size: 0.875rem; }
.submit-btn { padding: 0.75rem 1.5rem; background: #2563eb; color: white; border-radius: 0.5rem; cursor: pointer; border: none; }
.submit-btn.bg-gray-500 { background: #6b7280; }
.btn-sm { padding: 0.375rem 0.75rem; border-radius: 0.375rem; font-size: 0.875rem; cursor: pointer; border: none; }
.btn-primary { background: #2563eb; color: white; }
.btn-secondary { background: #6b7280; color: white; }
.btn-danger { background: #dc2626; color: white; }
.upload-section { background: var(--card-bg); }
.portfolio-item { background: var(--card-bg); }
</style>
