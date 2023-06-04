<template>
  <BaseHeader @nav-state="openNav" />
  <main class="main">
    <SectionMain :nav-state="navState" />
    <SectionSlider />
  </main>

  <BaseFooter />
</template>

<script>
import BaseHeader from './components/BaseHeader.vue';
import SectionMain from './components/SectionHero.vue';
import SectionSlider from './components/SectionSlider.vue';
import BaseFooter from './components/BaseFooter.vue';

export default {
  name: 'App',
  components: {
    BaseHeader,
    SectionMain,
    SectionSlider,
    BaseFooter,
  },
  data() {
    return {
      navState: false,
    };
  },
  methods: {
    openNav(data) {
      this.navState = data;
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'PT Sans Caption';
  font-size: $fs-base;
  letter-spacing: 0em;
  text-align: left;
}
</style>
