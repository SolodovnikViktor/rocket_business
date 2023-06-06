<template>
  <section class="slider">
    <SliderSwiper />
  </section>
</template>

<script>
import SliderSwiper from './SliderSwiper.vue';

export default {
  components: {
    SliderSwiper,
  },
};
</script>

<style lang="scss">
.slider {
  &--img {
    position: relative;
  }
  &__info {
    position: relative;
    max-width: 495px;
    padding: 52px 0 56px 63px;
    margin-bottom: 30px;
    background-color: #e2f0ef;
    z-index: 3;
    &::before {
      position: absolute;
      content: '';
      z-index: -1;
      right: -60px;
      top: 0;
      bottom: 0;
      width: 150px;
      height: 100%;
      transform: skew(15deg);
      background: #e2f0ef;
    }
  }
  &__title {
    font-size: $fs-xxxl;
    font-weight: $fw-7;
    line-height: 52px;
    color: $color-base;
  }
  &__subtitle {
    margin-bottom: 14px;
    font-size: $fs-xl;
    font-weight: $fw-7;
    line-height: 28px;
    color: $color-base;
  }
  &__list {
    margin-bottom: 33px;
    padding-left: 17px;
  }
  &__item {
    position: relative;
    font-size: $fs-base;
    font-weight: $fw-4;
    line-height: 21px;
    color: $color-base;
    &:not(:last-child) {
      padding-bottom: 8px;
    }
    &::before {
      position: absolute;
      content: '·';
      left: -23px;
      top: -5px;
      color: $color-nav;

      font-size: 63px;
    }
  }

  &__total {
    margin-bottom: 26px;
    font-size: $fs-l;
    font-weight: $fw-4;
    line-height: 26px;
    color: $color-base;

    & span {
      padding-left: 16px;
      font-weight: $fw-4;
      font-size: $fs-base;
      line-height: 24px;
      text-decoration-line: line-through;
      color: #868686;
    }
  }
  &__box {
    display: flex;
    max-width: 406px;
  }
  &__btn {
    width: 100%;
    text-align: center;
    &:not(:last-child) {
      margin-right: 14px;
    }
  }
  &__img {
    position: absolute;
    z-index: 1;
    width: 61%;
    height: 99.88%;
    top: 0;
    bottom: 0;
    right: 0;
    margin-bottom: -1px;
    background-image: url(@/assets/img/img-2-1920.jpg);
    background-repeat: no-repeat;
    background-size: cover;
  }
}
@media (max-width: 992px) {
  .slider {
    &--img {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 169px;
    }
    &__img {
      top: 0;
      border-radius: 5px 5px 0px 0px;
      width: 100%;
      background-image: url(@/assets/img/img-2-375.jpg);
      background-size: auto;
      max-width: 340px;
      right: auto;
    }
    &__info {
      padding: 22px 37px 42px 23px;
      max-width: 340px;
      margin-bottom: 20px;
      &::before {
        display: none;
      }
    }
    &__title {
      font-size: $fs-xlm;
      line-height: 34px;
      margin-bottom: 5px;
    }
    &__subtitle {
      font-size: $fs-s;
      line-height: 18px;
      margin-bottom: 13px;
    }
    &__item {
      font-size: $fs-s;
      line-height: 20px;
    }
    &__list {
      margin-bottom: 17px;
    }
    &__total {
      font-size: $fs-n;
      line-height: 23px;
      & span {
        font-size: 14px;
        line-height: 18px;
        padding-left: 4px;
        vertical-align: text-top;
      }
    }
    &__btn {
      &:not(:last-child) {
        margin-right: 6px;
      }
    }
    &__pagination {
      margin-bottom: 33px;
    }
  }
}
</style>
