<template>
  <section class="hero">
    <nav class="nav nav-closed flex" :class="{ 'nav-open': navState }">
      <ul class="nav__list flex">
        <li class="nav__item"><a href="#" class="nav__link">О клинике</a></li>
        <li class="nav__item"><a href="#" class="nav__link">Услуги</a></li>
        <li class="nav__item"><a href="#" class="nav__link">Специалисты</a></li>
        <li class="nav__item"><a href="#" class="nav__link">Цены</a></li>
        <li class="nav__item"><a href="#" class="nav__link">Контакты</a></li>
      </ul>
      <div class="flex nav__btn--box">
        <button class="nav__btn">Записаться на прием</button>
      </div>
    </nav>
    <div class="hero__container">
      <div class="hero__img--mobile"><img src="@/assets/img/img-1-375.jpg" alt="" /></div>
      <div class="container">
        <div class="hero__info info">
          <h1 class="info__title">Многопрофильная клиника для детей и&nbsp;взрослых</h1>
          <p class="info__descry">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do&nbsp;eiusmod tempor
            incididunt ut&nbsp;labore et&nbsp;dolore magna aliqua
          </p>
        </div>
      </div>
      <div class="hero__img"></div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['navState'],
};
</script>

<style lang="scss">
.hero {
  background-color: #f8fbfa;
  margin-bottom: 49px;
  &__container {
    display: flex;
    position: relative;
    margin: 0 auto;
    max-width: 992px;
    padding-bottom: 53px;
    flex-direction: column;
  }
  &__img {
    &--mobile {
      display: flex;
      align-items: center;
      flex-direction: column;
      margin-bottom: 35px;
    }
  }
  .info {
    max-width: 350px;
    &__title {
      line-height: 34px;
      font-size: $fs-xlm;
      margin-bottom: 9px;
      color: $color-base;
      font-weight: $fw-7;
    }
    &__descry {
      font-size: $fs-s;
      line-height: 21px;
      color: $color-base;
      font-weight: $fw-4;
    }
  }
  .nav {
    z-index: 5;
    position: absolute;
    flex-direction: column;
    align-items: center;
    padding-block: 10px;
    height: 100%;
    width: 100%;
    padding-top: 48px;
    background-color: rgba(69, 146, 127, 0.9);
    backdrop-filter: blur(2px);
    transition: 0.3s ease-in-out;
    &-closed {
      left: -100%;
      visibility: hidden;
    }
    &-open {
      visibility: visible;
      left: 0;
    }
    &__list {
      flex-direction: column;
      max-width: 340px;
      width: 100%;
      margin-bottom: 40px;
    }
    &__item:not(:last-child) {
      margin-bottom: 10px;
    }
    &__link {
      color: $color-white;
      font-size: $fs-base;
      font-weight: $fw-4;
      line-height: 24px;
      transition: color 0.2s ease-in-out;
      &:hover {
        color: #fadede;
      }
    }
    &__btn {
      padding: 11px 24px;
      background: #f6f6f6;
      border: none;
      border-radius: 50px;
      color: $color-nav;
      cursor: pointer;
      font-size: $fs-s;
      font-weight: $fw-7;
      line-height: 21px;
      transition: color 0.2s ease-in-out, background 0.2s ease-in-out;
      &:hover,
      :active {
        backdrop-filter: blur(2px);
        background: rgb(0, 151, 197);
        color: #fff;
      }
      &--box {
        display: flex;
        max-width: 340px;
        width: 100%;
      }
    }
  }
}
@media (min-width: 992px) {
  .hero {
    margin-bottom: 100px;
    &__container {
      display: block;
      max-width: 1920px;
      padding-top: 144px;
      padding-bottom: 162px;
    }
    .info {
      &__title {
        margin-bottom: 14px;
        font-size: $fs-xxl;
        line-height: 47px;
      }
      &__descry {
        font-size: $fs-base;
        line-height: 24px;
      }
    }
    &__img {
      position: absolute;
      width: 49.3%;
      height: 100%;
      top: 0;
      right: 0;
      background-image: url(@/assets/img/img-1-1920.jpg);
      background-repeat: no-repeat;
      background-size: cover;
      &--mobile {
        display: none;
      }
    }
  }
  .nav {
    &-closed {
      display: none;
    }
  }
}
</style>
