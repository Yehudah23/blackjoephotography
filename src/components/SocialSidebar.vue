<template>
  <div class="social-sidebar">
  <a href="https://www.instagram.com/blackjoefilms_?igsi=YTFxbmlrYmZtNXh2" target="_blank" rel="noopener noreferrer" class="sidebar-icon" title="Follow on Instagram">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    </a>
  <a href="https://www.linkedin.com/in/joseph-king-oluwakolade" target="_blank" rel="noopener noreferrer" class="sidebar-icon" title="Follow on LinkedIn">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-13h4v2.5a3.5 3.5 0 0 1 3.5-1.75z"></path>
        <rect x="2" y="9" width="4" height="11"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg>
    </a>
  <a href="https://x.com/themaskguyy?s=11&t=c8EMCc3yV0fmzbKmLXyBLQ" target="_blank" rel="noopener noreferrer" class="sidebar-icon" title="Follow on Twitter">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
      </svg>
    </a>
  <a href="https://www.instagram.com/blackjoefilms_?igsi=YTFxbmlrYmZtNXh2" target="_blank" rel="noopener noreferrer" class="sidebar-icon" title="Instagram">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
      </svg>
    </a>
  <a href="https://wa.me/2348082787210" target="_blank" rel="noopener noreferrer" class="sidebar-icon" title="Contact on WhatsApp">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
      </svg>
    </a>
    <div class="sidebar-line"></div>
    <div class="sidebar-text">Follow</div>
  </div>
</template>

<script>
export default {
  name: 'SocialSidebar'
}
</script>

<style scoped>
.social-sidebar {
  position: fixed;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  z-index: 40;
}

.sidebar-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.15);
  color: var(--text);
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.sidebar-icon:hover {
  background: #2563eb;
  color: white;
  transform: translateX(5px);
}

.sidebar-line {
  width: 1px;
  height: 50px;
  background: rgba(255, 255, 255, 0.3);
  margin: 0.5rem 0;
}

.sidebar-text {
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  font-size: 0.8rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--text);
  opacity: 0.7;
}


@media (max-width: 1024px) {
  .social-sidebar {
    display: none;
  }
}


@media (min-width: 1025px) {
  .social-sidebar {
    display: flex;
  }
}
</style>