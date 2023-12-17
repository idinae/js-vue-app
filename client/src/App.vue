<script>
import Home from './views/Home.vue';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

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
