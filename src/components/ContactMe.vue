<template>
  <section id="contact" class="contact-section">
    <div class="contact-layout">
      <div class="contact-card">
        <h3 class="text-2xl font-bold mb-6 text-blue-700">Book a Session</h3>
        <form @submit.prevent="handleSubmit">
          <div class="form-row">
            <div>
              <label for="name">Full Name *</label>
              <input id="name" required v-model="formData.name" placeholder="Your full name" class="input" />
            </div>
            <div>
              <label for="email">Email *</label>
              <input id="email" type="email" required v-model="formData.email" placeholder="your@email.com" class="input" />
            </div>
          </div>
          <div class="form-row">
            <div>
              <label for="phone">Phone Number</label>
              <input id="phone" type="tel" v-model="formData.phone" placeholder="(555) 123-4567" class="input" />
            </div>
            <div>
              <label for="service" class="service-label">Service Type *</label>
              <select id="service" required v-model="formData.service" class="input service-select">
                <option value="" disabled>Select a service</option>
                <option value="wedding">Wedding Photography</option>
                <option value="portrait">Portrait Session</option>
                <option value="event">Event Photography</option>
                <option value="corporate">Corporate Headshots</option>
                <option value="family">Family Photos</option>
                <option value="videography">Videography</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <div>
            <label for="date">Preferred Date</label>
            <input id="date" type="date" v-model="formData.date" class="input" />
          </div>
          <div>
            <label for="message">Message</label>
            <textarea
              id="message"
              v-model="formData.message"
              placeholder="Tell me about your photography needs, venue, special requests, etc."
              rows="4"
              class="input"
            ></textarea>
          </div>
          <div>
            <label for="video">Upload Video (optional)</label>
            <input id="video" type="file" accept="video/*" @change="handleVideoUpload" class="input" />
            <div v-if="formData.videoName" style="font-size:0.95em; color:#2563eb; margin-top:0.25rem;">Selected: {{ formData.videoName }}</div>
          </div>
          <button type="submit" class="submit-btn" :disabled="isSubmitting">
            {{ isSubmitting ? "Sending..." : "Send Inquiry" }}
          </button>
        </form>
      </div>
      <div class="space-y-8">
        <div class="contact-card">
          <h3 class="text-xl font-bold mb-4 text-blue-700">Contact Information</h3>
          <div class="contact-info">
            <div><strong>📧 Email:</strong> jking3509@gmail.com</div>
            <div><strong>📞 Phone:</strong> (+234)8082787210</div>
            <div><strong>📍 Location:</strong> Obanikoro Lagos State, Nigeria</div>
            <div><strong>⏰ Response Time:</strong> Within 24 hours</div>
          </div>

          <div class="social-connect">
            <h4 class="text-lg font-semibold mt-4 mb-2">Connect With Me</h4>
            <div class="social-icons">
              <a href="https://www.instagram.com/themaskguyy?igsh=MTlhNDlidDVrcTg4dA==" target="_blank" rel="noopener noreferrer" class="social-icon" title="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <span>Instagram</span>
              </a>
              <a href="https://www.linkedin.com/in/joseph-king-oluwakolade" target="_blank" rel="noopener noreferrer" class="social-icon" title="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-13h4v2.5a3.5 3.5 0 0 1 3.5-1.75z"></path>
                  <rect x="2" y="9" width="4" height="11"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                <span>LinkedIn</span>
              </a>
              <a href="https://wa.me/2348082787210" target="_blank" rel="noopener noreferrer" class="social-icon" title="WhatsApp">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
        <div class="contact-card faq-block">
          <h3>Frequently Asked Questions</h3>
          <div>
            <h4>How far in advance should I book?</h4>
            <p>
              For weddings, I recommend booking 6-12 months in advance. Portrait sessions
              can typically be scheduled 2-4 weeks ahead.
            </p>
          </div>
          <div>
            <h4>Do you travel for shoots?</h4>
            <p>
              Yes! I'm available for destination weddings and shoots. Travel fees may apply
              depending on the location.
            </p>
          </div>
          <div>
            <h4>What's included in your packages?</h4>
            <p>
              All packages include professional editing, online gallery access, and
              high-resolution downloads. Specific inclusions vary by package type.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { submitInquiry } from '../firebase';

export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        phone: '',
        service: '',
        date: '',
        message: '',
        video: null,
        videoName: ''
      },
      isSubmitting: false
    }
  },
  methods: {
    async handleSubmit() {
      this.isSubmitting = true;

      try {
        console.log('Submitting inquiry...');
        await submitInquiry(this.formData);
        alert('Thank you! Your inquiry has been sent successfully. I will get back to you within 24 hours.');
        this.resetForm();
      } catch (error) {
        console.error('Form submission error:', error);

        // Fallback: Open email client
        this.openEmailClient();
      } finally {
        this.isSubmitting = false;
      }
    },

    openEmailClient() {
      // Fallback: Open email client with pre-filled data
      const subject = encodeURIComponent(`Photography Inquiry - ${this.formData.service}`);
      const body = encodeURIComponent(
        `Name: ${this.formData.name}\n` +
        `Email: ${this.formData.email}\n` +
        `Phone: ${this.formData.phone}\n` +
        `Service: ${this.formData.service}\n` +
        `Preferred Date: ${this.formData.date}\n\n` +
        `Message:\n${this.formData.message}`
      );

      window.location.href = `mailto:jking3509@gmail.com?subject=${subject}&body=${body}`;

      alert('Opening your email client. Please send the email to complete your inquiry.');
      this.resetForm();
    },

    resetForm() {
      this.formData = {
        name: '',
        email: '',
        phone: '',
        service: '',
        date: '',
        message: '',
        video: null,
        videoName: ''
      };
    },

    handleVideoUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.formData.video = file;
        this.formData.videoName = file.name;
      } else {
        this.formData.video = null;
        this.formData.videoName = '';
      }
    }
  }
}
</script>

<style scoped>
/* Modern, friendly UI styles */
.contact-section, .contact-card, .faq-block {
  background-color: transparent;
}
.contact-section {
  width: min(100% - 3rem, 1200px);
  margin: 0 auto;
}
.contact-layout {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(280px, 0.85fr);
  gap: 2rem;
  align-items: start;
}
.form-row {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}
.contact-card form > div > div,
.contact-card form > div:not(.grid) {
  min-width: 0;
}
/* Inputs: use theme card background and text variable to ensure visibility on page background */
.input {
  display: block !important; /* ensure block, not flex */
  width: 100%;
  max-width: none;
  min-width: 0;
  padding: 0.55rem 0.75rem;
  border: 1px solid var(--border);
  border-radius: 0.5rem;
  margin-top: 0.25rem;
  margin-bottom: 0.75rem;
  font-size: 0.95rem;
  background: var(--card-bg) !important;
  color: var(--text) !important;
  transition: border 0.2s, background 0.2s, color 0.2s;
}
.input:focus {
  border-color: var(--accent);
  outline: none;
  background: color-mix(in srgb, var(--card-bg) 85%, black 15%);
}

/* Service Type Dropdown - Extra Visible */
.service-label {
  font-weight: 700 !important;
  font-size: 1.1rem !important;
  color: var(--text) !important;
  margin-bottom: 0.5rem !important;
  display: block;
}

.service-select {
  padding: 1rem 1.25rem !important;
  border: 1px solid var(--accent) !important;
  border-radius: 0.5rem !important;
  background: var(--card-bg) !important;
  color: var(--text) !important;
  font-size: 1.125rem !important;
  font-weight: 600 !important;
  cursor: pointer !important;
  transition: all 0.2s ease !important;
  box-shadow: 0 2px 8px rgba(37, 99, 235, 0.15) !important;
  max-width: 100% !important;
  appearance: none !important;
  -webkit-appearance: none !important;
  -moz-appearance: none !important;
}

.service-select:hover {
  border-color: #1d4ed8 !important;
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.25) !important;
}

.service-select:focus {
  outline: none !important;
  border-color: #1d4ed8 !important;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.2) !important;
}

.service-select option {
  padding: 0.75rem;
  font-size: 1.1rem;
  font-weight: 600;
  background: var(--card-bg) !important;
  color: var(--text) !important;
}

.service-select option:disabled {
  color: #9ca3af !important;
  font-style: italic;
}

.service-select option:not(:disabled) {
  color: #000000 !important;
}

/* Small screens: inputs become full-width for better layout */
@media (max-width: 640px) {
  .input {
    width: 100% !important;
    max-width: 100% !important;
    min-width: 0 !important;
  }
}
 .contact-section {
  background: none;
  padding-top: 2rem;
  padding-bottom: 2rem;
  color: var(--text);
 }
 .contact-section * {
   color: var(--text) !important;
 }

.contact-card {
  background: var(--card-bg) !important;
  border-radius: 1rem;
  box-shadow: 0 4px 24px 0 rgba(0,0,0,0.07);
  padding: 2rem;
  color: var(--text) !important;
}
.contact-info {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  font-size: 1.1rem;
  color: var(--text) !important;
}
.contact-info strong {
  min-width: 120px;
  display: inline-block;
}
.faq-block {
  margin-top: 2rem;
}
.faq-block h3 {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
}
.faq-block h4 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
}
.faq-block p {
  color: var(--muted) !important;
  margin-bottom: 1rem;
}
.submit-btn {
  width: 100%;
  background: #2563eb;
  color: #ffffffa2;
  padding: 0.75rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  margin-top: 1rem;
  transition: background 0.2s;
}
.submit-btn:disabled {
  background: #94a3b8;
  cursor: not-allowed;
}

@media (max-width: 1024px) {
  .contact-section {
    width: min(100% - 2rem, 760px);
  }

  .contact-layout {
    grid-template-columns: minmax(0, 1fr) !important;
    gap: 2rem !important;
  }
}

@media (max-width: 640px) {
  .form-row {
    grid-template-columns: 1fr;
    gap: 0;
  }
}

.social-connect {
  margin-top: 1.5rem;
}

.social-icons {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 0.5rem;
}

.social-icon {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  color: var(--text);
  transition: all 0.3s ease;
  text-decoration: none;
}

.social-icon:hover {
  background: var(--accent);
  color: white;
  transform: translateX(3px);
}

.social-icon svg {
  flex-shrink: 0;
}
</style>