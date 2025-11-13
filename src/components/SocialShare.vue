<template>
  <div class="social-share">
    <h4 class="share-title">{{ title }}</h4>
    <div class="share-buttons">
      <button @click="shareOnSocial('linkedin')" class="share-btn" title="Share on LinkedIn">
        <!-- LinkedIn icon -->
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-13h4v2.5a3.5 3.5 0 0 1 3.5-1.75z"></path>
          <rect x="2" y="9" width="4" height="11"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
        <span v-if="showLabels">LinkedIn</span>
      </button>
      <button @click="shareOnSocial('twitter')" class="share-btn" title="Share on Twitter">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
        </svg>
        <span v-if="showLabels">Twitter</span>
      </button>
      <button @click="shareOnSocial('whatsapp')" class="share-btn" title="Share on WhatsApp">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
        <span v-if="showLabels">WhatsApp</span>
      </button>
      <button v-if="imageUrl" @click="shareOnSocial('pinterest')" class="share-btn" title="Share on Pinterest">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M8 12a4 4 0 0 1 8 0c0 2.5-2 4-4 4s-4-1.5-4-4 2-4 4-4 4 1.5 4 4"></path>
          <line x1="12" y1="16" x2="12" y2="21"></line>
          <line x1="12" y1="8" x2="12" y2="8.01"></line>
        </svg>
        <span v-if="showLabels">Pinterest</span>
      </button>
      <button @click="copyLink" class="share-btn" title="Copy Link">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
        </svg>
        <span v-if="showLabels">Copy Link</span>
      </button>
    </div>
    <div v-if="linkCopied" class="copy-notification">Link copied to clipboard!</div>
  </div>
</template>

<script>
export default {
  name: 'SocialShare',
  props: {
    title: {
      type: String,
      default: 'Share This'
    },
    customTitle: {
      type: String,
      default: ''
    },
    customUrl: {
      type: String,
      default: ''
    },
    imageUrl: {
      type: String,
      default: ''
    },
    showLabels: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      linkCopied: false
    }
  },
  methods: {
    shareOnSocial(platform) {
      const websiteUrl = this.customUrl || window.location.href;
      const title = this.customTitle || document.title || 'Check out BlackJoe Photography';
  const hashtags = 'photography,themaskguyy,portfolio';
      
      let shareUrl = '';
      
      switch(platform) {
        case 'linkedin':
          // LinkedIn sharing URL
          shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(websiteUrl)}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(title)}&source=${encodeURIComponent(window.location.hostname)}`;
          break;
        case 'twitter':
          shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(websiteUrl)}&hashtags=${hashtags}`;
          break;
        case 'whatsapp':
          shareUrl = `https://wa.me/?text=${encodeURIComponent(title + ' ' + websiteUrl)}`;
          break;
        case 'pinterest':
          if (this.imageUrl) {
            shareUrl = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(websiteUrl)}&media=${encodeURIComponent(this.imageUrl)}&description=${encodeURIComponent(title)}`;
          }
          break;
        default:
          return;
      }
      
      window.open(shareUrl, '_blank', 'width=600,height=400');
    },
    copyLink() {
      const url = this.customUrl || window.location.href;
      navigator.clipboard.writeText(url).then(() => {
        this.linkCopied = true;
        setTimeout(() => {
          this.linkCopied = false;
        }, 2000);
      });
    }
  }
}
</script>

<style scoped>
.social-share {
  position: relative;
  margin: 1rem 0;
}

.share-title {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: var(--text);
}

.share-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.share-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  color: var(--text);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.share-btn:hover {
  background: var(--accent);
  color: white;
  transform: translateY(-2px);
}

.copy-notification {
  position: absolute;
  bottom: -30px;
  left: 0;
  background: var(--accent);
  color: white;
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>