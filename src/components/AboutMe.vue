
<script>
import SocialShare from './SocialShare.vue';

export default {
  components: {
    SocialShare
  },
  data() {
    return {
      stats: [
        { icon: '📷', value: '20+', label: 'Photos Taken' },
        { icon: '😊', value: '20+', label: 'Happy Clients' },
        { icon: '🏆', value: '2', label: 'Awards Won' },
        { icon: '📅', value: '3', label: 'Years Experience' }
      ],
      services: [
        {
          title: 'Wedding Photography',
          description: 'Complete wedding day coverage including engagement sessions, ceremony, reception, and detail shots.'
        },
        {
          title: 'Portrait Sessions',
          description: 'Professional headshots, family portraits, maternity, and senior photos in studio or outdoor settings.'
        },
        {
          title: 'Event Photography',
          description: 'Corporate events, parties, graduations, and special celebrations documented with professional quality.'
        },
        {
          title: 'Videography',
          description: 'Capturing moments in motion, from promotional videos to event coverage, bringing your story to life.'
        }
      ]
    };
  }
};
</script>

<template>
  <section id="about" class="about-section">
    <div class="about-container">
      <div class="about-grid">
        <div class="about-profile">
          <img src="/WhatsApp%20Image%202026-09-08%20at%2021.37.22.jpeg" alt="Joseph King, photographer" class="profile-img" />
          <h2 class="about-title">About Joseph King</h2>
          <div class="about-description">
            <p>
              Hello! I'm Joseph King, a professional photographer and Videographer and the founder of Blackjoe Photography and i'm currently based in Lagos State. I have a deep passion for capturing life's most beautiful moments through my lens.
            </p>
            <p>
              With over 3 years of experience in professional photography and videography, I specialize in capturing the authentic emotions and beautiful moments that make each event unique. My passion for storytelling through images drives me to create timeless memories for my clients.
            </p>
            <p>
              From intimate portrait sessions to grand wedding celebrations, I bring a creative eye and technical expertise to every shoot. I believe that every photograph should tell a story and evoke emotion, whether it's the joy of a wedding day or the quiet beauty of a landscape.
            </p>
            <p>
              Based in the heart of the city, I'm available for local and destination shoots. I work closely with each client to understand their vision and ensure that their special moments are captured perfectly.
            </p>

            <div class="photographer-social">
              <h4>Connect With Me</h4>
              <div class="social-links">
                <a href="https://www.instagram.com/blackjoefilms_?igsi=YTFxbmlrYmZtNXh2" target="_blank" rel="noopener noreferrer" class="social-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  <span>@themaskguyy</span>
                </a>
                <a href="https://www.linkedin.com/in/joseph-king-oluwakolade" target="_blank" rel="noopener noreferrer" class="social-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-13h4v2.5a3.5 3.5 0 0 1 3.5-1.75z"></path>
                    <rect x="2" y="9" width="4" height="11"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  <span>BlackJoe Photography</span>
                </a>
                <a href="https://x.com/themaskguyy?s=11&t=c8EMCc3yV0fmzbKmLXyBLQ" target="_blank" rel="noopener noreferrer" class="social-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                  <span>@blackjoephoto</span>
                </a>
                <a href="https://wa.me/2348082787210" target="_blank" class="social-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                  <span>WhatsApp</span>
                </a>
                <a href="https://www.instagram.com/blackjoefilms_?igsi=YTFxbmlrYmZtNXh2" target="_blank" rel="noopener noreferrer" class="social-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                  </svg>
                  <span>YouTube</span>
                </a>
              </div>

              <SocialShare
                title="Share My Profile"
                customTitle="Check out Joseph King's photography portfolio at BlackJoe Photography"
                :showLabels="true"
              />
            </div>
          </div>
        </div>
        <div class="about-stats">
          <div v-for="stat in stats" :key="stat.label" class="stat-card">
            <div class="stat-icon">{{ stat.icon }}</div>
            <div class="stat-value">{{ stat.value }}</div>
            <div class="stat-label">{{ stat.label }}</div>
          </div>
        </div>
      </div>
      <div class="about-services">
        <h3 class="services-title">Services Offered</h3>
        <div class="services-grid">
          <div v-for="service in services" :key="service.title" class="service-card">
            <h4 class="service-title">{{ service.title }}</h4>
            <p class="service-desc">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  padding: 2rem 0 4rem;
}
.about-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}
.about-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(320px, 0.85fr);
  gap: 2rem;
  align-items: stretch;
}
.about-profile {
  min-width: 0;
  padding: clamp(1.5rem, 3vw, 2.5rem);
  border: 1px solid var(--border);
  border-radius: 1.25rem;
  background: var(--card-bg);
  box-shadow: 0 18px 45px rgba(15, 23, 42, 0.1);
  text-align: left;
}
.profile-img {
  display: block;
  width: 148px;
  height: 148px;
  object-fit: cover;
  border-radius: 50%;
  margin: 0 auto 1.5rem;
  box-shadow: 0 10px 25px rgba(15, 23, 42, 0.18);
  border: 4px solid var(--accent);
}
 .about-title {
   font-size: clamp(1.8rem, 3vw, 2.35rem);
   font-weight: 900;
   color: var(--text);
   text-align: center;
   margin: 0 0 1.2rem;
 }
 .about-description p {
   color: var(--muted);
   font-size: 1rem;
   margin: 0 0 1rem;
   line-height: 1.75;
 }
.about-stats {
  min-width: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  align-content: center;
}
.stat-card {
  min-height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: var(--card-bg) !important;
  border: 1px solid var(--border);
  border-radius: 1rem;
  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.08);
  padding: 1.5rem 1.2rem;
  text-align: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.stat-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 18px 35px rgba(15, 23, 42, 0.14);
}
.stat-icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}
.stat-value {
  font-size: 1.65rem;
  font-weight: 600;
  color: var(--accent);
}
.stat-label {
  font-size: 1rem;
  color: var(--muted);
}
.about-services {
  margin-top: 2rem;
}
.services-title {
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--text);
  text-align: center;
  margin-bottom: 2rem;
}
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
}
.service-card {
  background: var(--card-bg) !important;
  border: 1px solid var(--border);
  border-radius: 1rem;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,0.07);
  padding: 2rem 1.2rem;
}
.service-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--text);
}
.service-desc {
  color: var(--muted);
  font-size: 1rem;
}

.photographer-social {
  margin-top: 2rem;
  text-align: left;
}

.photographer-social h4 {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 1rem;
}

.social-links {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  background: rgba(148, 163, 184, 0.12);
  color: var(--text);
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: #2563eb;
  transform: translateX(5px);
}

.social-link svg {
  flex-shrink: 0;
}
@media (max-width: 900px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  .about-stats {
    align-content: stretch;
  }
}

@media (max-width: 520px) {
  .about-container {
    padding: 0 1rem;
  }

  .about-stats {
    grid-template-columns: 1fr;
  }

  .stat-card {
    min-height: 120px;
  }
}
</style>