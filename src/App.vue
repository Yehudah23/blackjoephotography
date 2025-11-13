<template>
  <div :class="{ dark: darkMode }">
    <button class="dark-toggle" @click="toggleDarkMode" :aria-pressed="darkMode" title="Toggle dark mode">
      {{ darkMode ? '☀️ Light' : '🌙 Dark' }}
    </button>

    <SocialSidebar />
    <MyHeader />
    <router-view />
    <MyFooter />
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue';
import MyFooter from './components/MyFooter.vue';
import SocialSidebar from './components/SocialSidebar.vue';

export default {
  name: 'App',
  components: {
    MyHeader,
    MyFooter,
    SocialSidebar
  },
  data() {
    return { darkMode: false };
  },
  created() {
    try {
      const saved = localStorage.getItem('darkMode');
      if (saved !== null) {
        this.darkMode = saved === 'true';
      } else if (typeof window !== 'undefined' && window.matchMedia) {
        this.darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      }
    } catch (e) {
      if (typeof window !== 'undefined' && window.matchMedia) {
        this.darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      }
    }
    this.applyBodyClass();
  },
  watch: {
    darkMode() {
      try { localStorage.setItem('darkMode', this.darkMode ? 'true' : 'false'); } catch (e) { void e; }
      this.applyBodyClass();
    }
  },
  methods: {
    toggleDarkMode() { this.darkMode = !this.darkMode; },
    applyBodyClass() {
      if (this.darkMode) {
        document.documentElement.classList.add('dark');
        if (this.$el) this.$el.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
        if (this.$el) this.$el.classList.remove('dark');
      }
    }
  }
};
</script>

<style>

/* Apply the flat-lay background to the page body so it shows behind all components */
body {
  background-image: url('./assets/flat-lay-camera-passport-arrangement (1).jpg');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

/* Additional dark-mode helpers to override inline / component colors when .dark is present */
html.dark .brand-name,
html.dark .nav-btn,
html.dark .admin-btn,
html.dark .menu-toggle {
  color: var(--text) !important;
}

html.dark .logo-img { background: transparent !important; }

:root {
  --bg: #ffffff;
  --surface: rgba(255,255,255,0.85);
  --text: #1f2937;
  --muted: #6b7280;
  --accent: #2563eb;
  --card-bg: rgba(255,255,255,0.9);
}

:root.dark,
#app.dark {
  --bg: #071019;
  --surface: rgba(10,12,16,0.6);
  --text: #e6eef8;
  --muted: #9aa6b2;
  --accent: #60a5fa;
  --card-bg: rgba(255,255,255,0.04);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--text);
  margin-top: 60px;
  min-height: 100vh;
  background-image: none;
  transition: background-color 200ms ease, color 200ms ease;
}

#app, #app * { color: var(--text) !important; }

.dark-toggle { position: fixed; right: 16px; top: 16px; z-index: 9999; background: var(--surface); color: var(--text); border: 1px solid rgba(255,255,255,0.06); padding: 0.4rem 0.6rem; border-radius: 6px; cursor: pointer; font-weight: 600; box-shadow: 0 4px 12px rgba(2,6,23,0.2); }

.input { background: rgba(255,255,255,0.06) !important; color: var(--text) !important; border-color: rgba(255,255,255,0.08) !important; }
.upload-card, .stat-card, .service-card { background: var(--card-bg) !important; }
button, a { color: var(--accent) !important; }

</style>



