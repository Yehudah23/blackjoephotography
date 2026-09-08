<template>
  <section id="portfolio" class="portfolio-section py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl mb-4 font-bold text-blue-700">Portfolio</h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          A collection of my favorite work spanning various photography styles and subjects.
        </p>
      </div>

      <div class="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
        <div class="flex flex-wrap gap-2">
          <button
            v-for="category in categories"
            :key="category"
            :class="['px-4 py-2 rounded category-btn', selectedCategory === category ? 'selected' : '']"
            @click="selectCategory(category)"
          >
            {{ category }}
          </button>
        </div>
      </div>

  <!-- Upload UI moved to /admin for safety. Admin uploads are persisted to the backend. -->

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="item in getFilteredPortfolio()" :key="item.id" class="group overflow-hidden bg-white rounded shadow">
          <div class="p-0 relative">
            <div class="aspect-square overflow-hidden">
              <template v-if="item.videoUrl">
                <video :src="item.videoUrl" controls class="w-full h-full object-cover rounded" />
              </template>
              <template v-else>
                <img :src="item.imageUrl" :alt="item.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </template>
            </div>
            <div class="p-4">
              <h3 class="font-medium">{{ item.title }}</h3>
              <p class="text-sm opacity-90">{{ item.description }}</p>
              <div class="flex justify-between items-center mt-2">
                <span class="inline-block px-2 py-1 bg-gray-200 rounded text-xs">{{ item.category }}</span>
                <div class="share-buttons">
                  <button @click="shareOnSocial(item, 'linkedin')" class="share-btn" title="Share on LinkedIn">
                    <!-- LinkedIn icon -->
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-13h4v2.5a3.5 3.5 0 0 1 3.5-1.75z"></path>
                      <rect x="2" y="9" width="4" height="11"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </button>
                  <button @click="shareOnSocial(item, 'twitter')" class="share-btn" title="Share on Twitter">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </button>
                  <button @click="shareOnSocial(item, 'whatsapp')" class="share-btn" title="Share on WhatsApp">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                    </svg>
                  </button>
                  <button v-if="item.imageUrl" @click="shareOnSocial(item, 'pinterest')" class="share-btn" title="Share on Pinterest">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M8 12a4 4 0 0 1 8 0c0 2.5-2 4-4 4s-4-1.5-4-4 2-4 4-4 4 1.5 4 4"></path>
                      <line x1="12" y1="16" x2="12" y2="21"></line>
                      <line x1="12" y1="8" x2="12" y2="8.01"></line>
                    </svg>
                  </button>
                  <button @click="shareOnSocial(item, 'instagram')" class="share-btn" title="View on Instagram">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="getFilteredPortfolio().length === 0" class="text-center py-12">
        <p class="text-gray-500">No photos found in this category.</p>
      </div>
    </div>
  </section>
</template>

<script>
import { getPortfolio } from '../firebase';

export default {
  props: {
    isAdminMode: Boolean
  },
  data() {
    return {
      portfolio: [
        {
          id: '1',
          title: 'Sarah & Michael Wedding',
          category: 'Wedding',
          imageUrl: 'https://images.unsplash.com/photo-1533091090875-1ff4acc497dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcGhvdG9ncmFpaHxlbnwxfHx8fDE3NTcwNzY0ODh8MHw&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          description: 'A beautiful summer wedding at Sunset Gardens'
        },
        {
          id: '2',
          title: 'Emma Portrait Session',
          category: 'Portrait',
          imageUrl: 'https://images.unsplash.com/photo-1544124094-8aea0374da93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc1NzE0ODExNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          description: 'Professional headshots for a rising artist'
        }
      ],

     
      selectedCategory: 'All',

     
      categories: ['All', 'Wedding', 'Portrait', 'Nature', 'Street', 'Event', 'Videography']
    };
  },
  methods: {
    selectCategory(category) {
      this.selectedCategory = category;
    },
    getFilteredPortfolio() {
      if (this.selectedCategory === 'All') return this.portfolio;
      return this.portfolio.filter(item => item.category === this.selectedCategory);
    },
    shareOnSocial(item, platform) {
      const websiteUrl = window.location.origin;
      const title = `Check out this amazing ${item.category.toLowerCase()} by BlackJoe Photography: ${item.title}`;
  const hashtags = 'photography,themaskguyy,portfolio';
      
      let shareUrl = '';
      
      switch(platform) {
        case 'linkedin':
          shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(websiteUrl)}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(title)}&source=${encodeURIComponent(window.location.hostname)}`;
          break;
        case 'twitter':
          shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(websiteUrl)}&hashtags=${hashtags}`;
          break;
        case 'whatsapp':
          shareUrl = `https://wa.me/?text=${encodeURIComponent(title + ' ' + websiteUrl)}`;
          break;
        case 'instagram':
          
          shareUrl = 'https://www.instagram.com/themaskguyy?igsh=MTlhNDlidDVrcTg4dA==';
          break;
        case 'pinterest':
          
          if (item.imageUrl) {
            shareUrl = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(websiteUrl)}&media=${encodeURIComponent(item.imageUrl)}&description=${encodeURIComponent(title)}`;
          }
          break;
        default:
          return;
      }
      
      window.open(shareUrl, '_blank', 'width=600,height=400');
    },

    fetchPortfolio() {
      getPortfolio()
        .then(items => { this.portfolio = items; })
        .catch(error => {
          console.log('fetch portfolio error', error);
          this.portfolio = [];
        });
    }
  },
  mounted() {
    this.fetchPortfolio();
  },
  beforeUnmount() {},
  computed: {
    uploadCategories() {
      return this.categories.filter(c => c !== 'All');
    }
  }
};
</script>

<style scoped>
.portfolio-section {
  background: none;
  min-height: 100vh;
  color: var(--text);
}
.portfolio-section * {
  color: var(--text) !important;
}

.portfolio-section .group.bg-white,
.portfolio-section .upload-card,
.portfolio-section .stat-card,
.portfolio-section .service-card {
  background: var(--card-bg) !important;
  color: var(--text) !important;
}


.category-btn {
  background: transparent;
  color: var(--text) !important;
  border: 1px solid var(--accent);
  transition: background 150ms ease, color 150ms ease, transform 120ms ease;
}
.category-btn:hover {
  background: rgba(96,165,250,0.08);
}
.category-btn.selected {
  background: var(--accent) !important;
  color: var(--bg) !important;
  transform: translateY(-1px);
}


.portfolio-section .inline-block.bg-gray-200 {
  background: rgba(255,255,255,0.06) !important;
  color: var(--text) !important;
}


.portfolio-section .input {
  background: rgba(255,255,255,0.06) !important;
  color: var(--text) !important;
  border-color: rgba(255,255,255,0.08) !important;
}


.portfolio-section .text-gray-600,
.portfolio-section .text-gray-500,
.portfolio-section p {
  color: var(--text) !important;
}
.input {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #cbd5e1;
  border-radius: 0.5rem;
  margin-top: 0.25rem;
  margin-bottom: 0.75rem;
  font-size: 1rem;
  background: #f8fafcfd;
  transition: border 0.2s;
}
.upload-card input[type="file"] {
  width: auto;
  padding: 0.35rem 0.5rem;
  font-size: 0.875rem;
  border-radius: 0.375rem;
  background: rgba(255,255,255,0.06);
  display: inline-block;
  margin-right: 0.5rem;
  border: 1px solid rgba(255,255,255,0.08);
}

.upload-card .submit-btn {
  width: auto !important;
  padding: 0.35rem 0.6rem !important;
  font-size: 0.875rem !important;
  display: inline-block !important;
  margin-top: 0.5rem !important;
}
.upload-card .submit-btn.ml-2 {
  margin-left: 0.5rem !important;
}
.input:focus {
  border-color: #2563eb;
  outline: none;
  background: #ffffff00;
}
.submit-btn {
  width: 100%;
  background: #2563eb;
  color: #fff;
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

.share-buttons {
  display: flex;
  gap: 0.5rem;
}

.share-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  color: var(--text);
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.share-btn:hover {
  background: var(--accent);
  color: white;
  transform: translateY(-2px);
}


@media (max-width: 640px) {
  .portfolio-section {
    padding: 3rem 1rem !important;
  }
  .portfolio-section h2 {
    font-size: 2rem !important;
  }
  .category-btn {
    padding: 0.5rem 1rem !important;
    font-size: 0.875rem !important;
  }
  .portfolio-item h3 {
    font-size: 1.125rem !important;
  }
}

@media (max-width: 480px) {
  .portfolio-section {
    padding: 2rem 0.75rem !important;
  }
  .category-btn {
    padding: 0.4rem 0.8rem !important;
    font-size: 0.8rem !important;
  }
}
</style>