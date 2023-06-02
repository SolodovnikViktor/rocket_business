<template>
  <BaseHeader @nav-state="openNav" />
  <SectionMain :nav-state="navState" />
  <SectionSlider />
  <BaseFooter />
</template>

<script>
import BaseHeader from './components/BaseHeader.vue';
import SectionMain from './components/SectionMain.vue';
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
      console.log(data);
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
