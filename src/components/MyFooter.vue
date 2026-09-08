<template>
  <footer class="site-footer">
    <div class="footer-container">
      <div class="footer-content">
        <div class="footer-brand">
          <img :src="logoUrl" alt="BlackJoe Photography" class="footer-logo" />
          <h3 class="footer-title">BlackJoe Photography</h3>
          <p class="footer-tagline">Capturing moments that last forever</p>
        </div>

        <div class="footer-links">
          <h4>Quick Links</h4>
          <nav>
            <button @click="scrollToSection('home')" class="footer-link">Home</button>
            <button @click="scrollToSection('portfolio')" class="footer-link">Portfolio</button>
            <button @click="scrollToSection('about')" class="footer-link">About</button>
            <button @click="scrollToSection('contact')" class="footer-link">Contact</button>
          </nav>
        </div>

        <div class="footer-contact">
          <h4>Contact Info</h4>
          <div class="contact-item">
            <span class="contact-icon">📧</span>
            <span>jking3509@gmail.com</span>
          </div>
          <div class="contact-item">
            <span class="contact-icon">📞</span>
            <span>(+234)8082787210</span>
          </div>
          <div class="contact-item">
            <span class="contact-icon">📍</span>
            <span>8B Reeve Road, Ikoyi, Lagos</span>
          </div>
        </div>

        <div class="footer-social">
          <h4>Follow Me</h4>
          <div class="social-icons">
            <a href="https://www.instagram.com/blackjoefilms_?igsi=YTFxbmlrYmZtNXh2" target="_blank" rel="noopener noreferrer" class="social-icon" title="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/joseph-king-oluwakolade" target="_blank" rel="noopener noreferrer" class="social-icon" title="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-13h4v2.5a3.5 3.5 0 0 1 3.5-1.75z"></path>
                <rect x="2" y="9" width="4" height="11"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="https://x.com/themaskguyy?s=11&t=c8EMCc3yV0fmzbKmLXyBLQ" target="_blank" rel="noopener noreferrer" class="social-icon" title="X">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
            <a href="https://www.instagram.com/blackjoefilms_?igsi=YTFxbmlrYmZtNXh2" target="_blank" rel="noopener noreferrer" class="social-icon" title="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
              </svg>
            </a>
            <a href="https://wa.me/2348082787210" target="_blank" rel="noopener noreferrer" class="social-icon" title="WhatsApp">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} BlackJoe Photography. All rights reserved.</p>
        <p>
          <a href="#" class="footer-link-small">Privacy Policy</a> |
          <a href="#" class="footer-link-small">Terms of Service</a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'MyFooter',
  data() {
    return {
      logoUrl: require('../assets/blackjoe logo.png'),
      currentYear: new Date().getFullYear()
    };
  },
  methods: {
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
};
</script>

<style scoped>
.site-footer {
  background: var(--card-bg);
  backdrop-filter: blur(10px);
  padding: 3rem 0 1.5rem;
  margin-top: 4rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
}

@media (min-width: 640px) {
  .footer-content {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .footer-content {
    grid-template-columns: repeat(4, 1fr);
  }
}

.footer-brand {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.footer-logo {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-bottom: 1rem;
}

.footer-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: var(--text);
}

.footer-tagline {
  color: var(--muted);
  font-size: 0.95rem;
}

.footer-links h4,
.footer-contact h4,
.footer-social h4 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text);
}

.footer-link {
  display: block;
  margin-bottom: 0.75rem;
  color: var(--muted);
  background: none;
  border: none;
  padding: 0;
  text-align: left;
  cursor: pointer;
  transition: color 0.2s;
}

.footer-link:hover {
  color: var(--accent);
}

.contact-item {
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
  color: var(--muted);
}

.contact-icon {
  margin-right: 0.75rem;
  font-size: 1.1rem;
}

.social-icons {
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  color: var(--text);
  transition: all 0.3s ease;
}

.social-icon:hover {
  background: var(--accent);
  color: white;
  transform: translateY(-3px);
}

.footer-bottom {
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: var(--muted);
  font-size: 0.9rem;
}

@media (min-width: 640px) {
  .footer-bottom {
    flex-direction: row;
    justify-content: space-between;
  }
}

.footer-link-small {
  color: var(--muted);
  transition: color 0.2s;
}

.footer-link-small:hover {
  color: var(--accent);
}
</style>