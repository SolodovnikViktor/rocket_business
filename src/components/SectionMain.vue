<template>
  <div class="main">
    <nav class="main__burger-closed" :class="{ 'main__burger-open': navState }">
      <ul class="main__burger--list">
        <li class="main__burger--item"><a href="#" class="main__burger--link">О клинике</a></li>
        <li class="main__burger--item"><a href="#" class="main__burger--link">Услуги</a></li>
        <li class="main__burger--item"><a href="#" class="main__burger--link">Специалисты</a></li>
        <li class="main__burger--item"><a href="#" class="main__burger--link">Цены</a></li>
        <li class="main__burger--item"><a href="#" class="main__burger--link">Контакты</a></li>
      </ul>
      <div class="main__burger--box">
        <button class="main__burger--btn">Записаться на прием</button>
      </div>
    </nav>

    <div class="main__container">
      <div class="main__img-mobile"><img src="@/assets/img/img-1-375.jpg" alt="" /></div>
      <div class="container">
        <div class="main__info">
          <h1 class="main__title">Многопрофильная клиника для детей и&nbsp;взрослых</h1>
          <p class="main__descry">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do&nbsp;eiusmod tempor
            incididunt ut&nbsp;labore et&nbsp;dolore magna aliqua
          </p>
        </div>
      </div>
      <div class="main__img"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['navState'],
};
</script>

<style lang="scss">
.main {
  background-color: #f8fbfa;
  margin-bottom: 100px;

  &__container {
    margin: 0 auto;
    max-width: 1920px;
    position: relative;
    padding-top: 144px;
    padding-bottom: 162px;
  }

  &__info {
    max-width: 350px;
  }
  &__title {
    margin-bottom: 14px;
    color: $color-base;
    font-size: $fs-xxl;
    font-weight: $fw-7;
    line-height: 47px;
  }
  &__descry {
    color: $color-base;
    font-size: $fs-base;
    font-weight: $fw-4;
    line-height: 24px;
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
    &-mobile {
      display: none;
    }
  }
  &__burger {
    &-closed {
      display: none;
    }
  }
}
@media (max-width: 992px) {
  .main {
    margin-bottom: 49px;
    &__container {
      max-width: 992px;
      padding-top: 0;
      padding-bottom: 53px;
      display: flex;
      flex-direction: column;
    }
    &__img {
      display: none;
      &-mobile {
        display: flex;
        align-items: center;
        flex-direction: column;
        margin-bottom: 35px;
      }
    }
    &__title {
      line-height: 34px;
      font-size: $fs-xlm;
      margin-bottom: 9px;
    }
    &__descry {
      font-size: $fs-s;
      line-height: 21px;
    }
    &__burger {
      &-closed {
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-block: 10px;
        height: 100%;
        width: 100%;
        padding-top: 48px;
        background-color: rgba(69, 146, 127, 0.9);
        backdrop-filter: blur(2px);
        left: -100%;
        visibility: hidden;
        z-index: 5;
        transition: 0.3s ease-in-out;
      }
      &-open {
        visibility: visible;

        left: 0;
      }
      &--list {
        display: flex;
        flex-direction: column;
        max-width: 340px;
        width: 100%;
        margin-bottom: 40px;
      }
      &--item:not(:last-child) {
        margin-bottom: 10px;
      }
      &--link {
        color: $color-white;
        font-size: $fs-base;
        font-weight: $fw-4;
        line-height: 24px;
        transition: color 0.2s ease-in-out;
        &:hover {
          color: #fadede;
        }
      }
      &--box {
        display: flex;

        max-width: 340px;
        width: 100%;
      }
      &--btn {
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
        &:hover {
          backdrop-filter: blur(2px);
          background: rgb(0, 151, 197);
          color: #fff;
        }
      }
    }
  }
}
</style>
