<script>
export default {
  props: {
    isAdminMode: Boolean
  },
  data() {
    return {
      isMobileMenuOpen: false,
      logoUrl: require('../assets/blackjoe logo.png'),
      newLogo: '',
      logoError: ''
    };
  },
  methods: {
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      this.isMobileMenuOpen = false;
    },
    toggleAdminMode() {
      // Navigate to admin page
      // Use the named route so router resolution is explicit
      this.$router.push({ name: 'Admin' });
      this.isMobileMenuOpen = false;
    },
    handleLogoUpload(event) {
      const file = event.target.files[0];
      if (!file) return;
      if (!file.type.startsWith('image/')) {
        this.logoError = 'Please upload a valid image file.';
        return;
      }
      const reader = new FileReader();
      reader.onload = (e) => {
        this.logoUrl = e.target.result;
      };
      reader.readAsDataURL(file);
      this.logoError = '';
    }
  }
};
</script>

<template>
  <header class="main-header">
    <div class="header-container">
      <div class="flex justify-between items-center py-4">
        <div class="flex items-center gap-3">
          <img :src="logoUrl" alt="" class="logo-img" />
          <span class="brand-name">Blackjoe Photography</span>
        </div>
        <nav class="nav-desktop">
          <button @click="scrollToSection('home')" class="nav-btn">Home</button>
          <button @click="scrollToSection('portfolio')" class="nav-btn">Portfolio</button>
          <button @click="scrollToSection('about')" class="nav-btn">About</button>
          <button @click="scrollToSection('contact')" class="nav-btn">Contact</button>
          <div class="header-social-icons">
            <a href="https://www.instagram.com/themaskguyy?igsh=MTlhNDlidDVrcTg4dA==" target="_blank" rel="noopener noreferrer" class="header-social-icon" title="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/joseph-king-oluwakolade" target="_blank" rel="noopener noreferrer" class="header-social-icon" title="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-13h4v2.5a3.5 3.5 0 0 1 3.5-1.75z"></path>
                <rect x="2" y="9" width="4" height="11"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="https://x.com/themaskguyy?s=21&t=c8EMCc3yV0fmzbKmLXyBLQ" target="_blank" rel="noopener noreferrer" class="header-social-icon" title="X">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
          </div>
          <button @click="toggleAdminMode" class="admin-btn">
            Admin
          </button>
        </nav>
        <button class="menu-toggle" @click="isMobileMenuOpen = !isMobileMenuOpen">
          <span v-if="isMobileMenuOpen">✖</span>
          <span v-else>☰</span>
        </button>
      </div>

      <div v-if="isMobileMenuOpen" class="nav-mobile">
        <nav class="flex flex-col gap-4">
          <button @click="scrollToSection('home')" class="nav-btn">Home</button>
          <button @click="scrollToSection('portfolio')" class="nav-btn">Portfolio</button>
          <button @click="scrollToSection('about')" class="nav-btn">About</button>
          <button @click="scrollToSection('contact')" class="nav-btn">Contact</button>
          <div class="mobile-social-icons">
            <h4 class="mobile-social-title">Follow Me</h4>
            <div class="flex gap-3 mt-2">
              <a href="https://www.instagram.com/themaskguyy?igsh=MTlhNDlidDVrcTg4dA==" target="_blank" rel="noopener noreferrer" class="mobile-social-icon" title="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/joseph-king-oluwakolade" target="_blank" rel="noopener noreferrer" class="mobile-social-icon" title="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-13h4v2.5a3.5 3.5 0 0 1 3.5-1.75z"></path>
                  <rect x="2" y="9" width="4" height="11"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="https://x.com/themaskguyy?s=21&t=c8EMCc3yV0fmzbKmLXyBLQ" target="_blank" rel="noopener noreferrer" class="mobile-social-icon" title="X">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="https://wa.me/2348082787210" target="_blank" rel="noopener noreferrer" class="mobile-social-icon" title="WhatsApp">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </a>
              <a href="https://www.instagram.com/themaskguyy?igsh=MTlhNDlidDVrcTg4dA==" target="_blank" rel="noopener noreferrer" class="mobile-social-icon" title="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
            </div>
          </div>
          <button @click="toggleAdminMode" class="admin-btn">
            Admin
          </button>
        </nav>
      </div>

      <div v-if="isAdminMode" class="logo-upload-card">
        <label class="block mb-2 font-semibold">Change Logo (Admin Only):</label>
        <input type="file" accept="image/*" @change="handleLogoUpload" class="logo-input" />
        <div v-if="logoError" class="text-red-600 mt-1">{{ logoError }}</div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.main-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: transparent;
  /* component-level background removed so App.vue flat-lay shows through */
  color: var(--text);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid #e5e7eb;
  z-index: 50;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,0.04);
}
.main-header * {
  color: var(--text) !important;
}
.header-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}
.logo-img {
  width: 56px;
  height: 56px;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0 4px 16px 0 rgba(0,0,0,0.12);
  background: transparent;
}
.brand-name {
  font-size: 1.25rem;
  font-weight: 700;
  color: #2563eb;
  letter-spacing: 1px;
}

@media (min-width: 640px) {
  .brand-name {
    font-size: 1.5rem;
  }
}

/* Make logo responsive on small screens */
@media (max-width: 480px) {
  .logo-img {
    width: 48px;
    height: 48px;
  }
  .brand-name {
    font-size: 1.1rem;
  }
  .header-container {
    padding: 0 1rem;
  }
}
.nav-desktop {
  display: none;
}

.menu-toggle {
  display: block;
  cursor: pointer;
}

@media (min-width: 768px) {
  .nav-desktop {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }
  .menu-toggle {
    display: none;
  }
  /* larger logo on wider screens */
  .logo-img {
    width: 72px;
    height: 72px;
  }
}

/* Better spacing on smaller tablets */
@media (min-width: 768px) and (max-width: 1024px) {
  .nav-desktop {
    gap: 1rem;
  }
  .nav-btn {
    padding: 0.4rem 0.8rem;
    font-size: 0.9rem;
  }
  .header-social-icons {
    gap: 0.5rem;
    margin-right: 0.5rem;
  }
}
.nav-btn {
  background: none;
  border: none;
  font-size: 1rem;
  color: #334155;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  transition: background 0.2s, color 0.2s;
  cursor: pointer;
}
.nav-btn:hover {
  background: #2563eb;
  color: #fff;
}
.admin-btn {
  margin-left: 1rem;
  background: #fff;
  border: 1px solid #2563eb;
  color: #2563eb;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: background 0.2s, color 0.2s;
}
.admin-btn:hover {
  background: #2563eb;
  color: #fff;
}
.header-social-icons {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-right: 1rem;
}
.header-social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  transition: all 0.3s ease;
}
.header-social-icon:hover {
  background: #2563eb;
  color: white;
  transform: translateY(-3px);
}
.menu-toggle {
  background: #fff;
  border: 1px solid #cbd5e1;
  padding: 0.5rem 0.8rem;
  border-radius: 0.5rem;
  font-size: 1.3rem;
  color: #2563eb;
  transition: background 0.2s, color 0.2s;
}
.menu-toggle:hover {
  background: #2563eb;
  color: #fff;
}
.nav-mobile {
  background: rgba(248, 250, 252, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 0.75rem;
  box-shadow: 0 4px 20px 0 rgba(0,0,0,0.15);
  margin-top: 1rem;
  padding: 1.5rem 1rem;
  animation: slideDown 0.3s ease-out;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.nav-mobile .nav-btn {
  width: 100%;
  text-align: left;
  padding: 0.75rem 1rem;
  margin: 0.25rem 0;
}
.mobile-social-title {
  font-size: 1rem;
  font-weight: 600;
  margin-top: 1rem;
  color: #334155;
}
.mobile-social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(37, 99, 235, 0.1);
  color: #2563eb;
  transition: all 0.3s ease;
}
.mobile-social-icon:hover {
  background: #2563eb;
  color: white;
  transform: translateY(-3px);
}
.logo-upload-card {
  margin-top: 1.5rem;
  background: #f1f5f9;
  border-radius: 0.75rem;
  padding: 1rem 1.5rem;
  box-shadow: 0 2px 8px 0 rgba(0,0,0,0.04);
  max-width: 350px;
}
.logo-input {
  width: 100%;
  margin-top: 0.5rem;
  padding: 0.5rem;
  border: 1px solid #cbd5e1;
  border-radius: 0.5rem;
  background: #fff;
}
</style>