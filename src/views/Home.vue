<template>
  <div>
    <AboutMe />
    <MyPortfolio />
    <ContactMe />
  </div>
</template>

<script>
import AboutMe from '../components/AboutMe.vue';
import MyPortfolio from '../components/MyPortfolio.vue';
import ContactMe from '../components/ContactMe.vue';

export default {
  name: 'HomePage',
  components: { AboutMe, MyPortfolio, ContactMe }
};
</script>

<style scoped>
h1 { color:#2563eb }
</style>
