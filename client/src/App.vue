<script>
import Home from './views/Home.vue';
import Header from './components/AppHeader.vue';
import Footer from './components/AppFooter.vue';

export default {
  components: {
    Home,
    AppHeader,
    AppFooter
  },
};
</script>

<template>
  <AppHeader />
  <main>
    <RouterView />
  </main>
  <AppFooter />
</template>
