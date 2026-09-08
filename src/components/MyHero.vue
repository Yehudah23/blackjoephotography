<script>
export default {
  methods: {
    scrollToPortfolio() {
      const el = document.getElementById('portfolio');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    },
    scrollToContact() {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }
};
</script>

<template>
  <section id="home" class="hero-section min-h-screen flex items-center justify-center relative">
    <div class="hero-overlay"></div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div class="text-center lg:text-left">
          <h1 class="text-5xl md:text-7xl font-extrabold mb-6 text-gray-900">
            Capturing Life's
            <span class="block text-white-600">Beautiful Moments</span>
          </h1>
          <p class="text-xl text-white-700 mb-8 max-w-2xl mx-auto lg:mx-0">
            Professional photographer specializing in <span class="font-semibold">weddings</span>, <span class="font-semibold">portraits</span>, and <span class="font-semibold">events</span>.<br>
            Creating timeless memories through the art of photography.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8">
            <button class="bg-blue-600 hover:bg-blue-700 transition text-white px-8 py-3 rounded-lg text-lg font-semibold shadow" @click="scrollToPortfolio">
              📸 View Portfolio
            </button>
            <button class="border border-blue-600 text-blue-600 hover:bg-blue-50 transition px-8 py-3 rounded-lg text-lg font-semibold" @click="scrollToContact">
              ✉️ Book a Session
            </button>
          </div>
        </div>
        <div class="relative flex justify-center lg:justify-end">
          <div class="rounded-2xl overflow-hidden shadow-2xl w-80 h-80 md:w-96 md:h-96 border-4 border-white">
            <img
              src="https://images.unsplash.com/photo-1643968612613-fd411aecd1fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwaG90b2dyYXBoZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTcxMDA4OTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Alex Morgan - Professional Photographer"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="absolute -bottom-8 -right-8 bg-blue-600 text-white p-6 rounded-xl shadow-lg flex flex-col items-center w-48">
            <div class="text-3xl font-bold mb-1">20+</div>
            <div class="text-base opacity-90">Happy Clients</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  background: none;
  position: relative;
  color: var(--text);
  padding-top: 80px; 
}
.hero-section * {
  color: var(--text) !important;
}


@media (max-width: 640px) {
  .hero-section h1 {
    font-size: 2.5rem !important;
    line-height: 1.1;
  }
  .hero-section p {
    font-size: 1rem !important;
  }
  .hero-section .rounded-2xl {
    width: 16rem !important;
    height: 16rem !important;
  }
}

@media (max-width: 480px) {
  .hero-section h1 {
    font-size: 2rem !important;
  }
  .hero-section button {
    padding: 0.75rem 1.5rem !important;
    font-size: 1rem !important;
  }
  .hero-section .absolute {
    bottom: -1rem !important;
    right: -1rem !important;
    width: 10rem !important;
    padding: 1rem !important;
  }
  .hero-section .absolute .text-3xl {
    font-size: 1.5rem !important;
  }
}
</style>