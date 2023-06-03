<!-- eslint-disable max-len -->
<template>
  <section class="slider">
    <div class="container">
      <div class="slider--img">
        <div class="slider__info info">
          <h1 class="slider__title">CHECK-UP</h1>
          <h2 class="slider__subtitle">для мужчин</h2>
          <ul class="slider__list">
            <li class="slider__item">Гормональный скрининг</li>
            <li class="slider__item">Тестостерон</li>
            <li class="slider__item">Свободный тестостерон</li>
            <li class="slider__item">Глобулин, связывающий половые гормоны</li>
          </ul>
          <div class="slider__total">Всего 2800₽ <span>3500₽</span></div>
          <div class="slider__box">
            <button class="slider__btn btn-success btn">Записаться</button>
            <button class="slider__btn btn-transparent btn">Подробнее</button>
          </div>
        </div>
        <div class="slider__img"></div>
      </div>
      <div class="slider__pagination">
        <div class="slider__pagination--box">
          <span class="slider__pagination--arrow"
            ><svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_11228_104)">
                <path
                  d="M32.6718 15.6719H4.54493L9.20426 11.0351C9.72416 10.5177 9.72615 9.67678 9.20871 9.15689C8.69127 8.63693 7.8503 8.635 7.33041 9.15237L0.390691 16.0586C0.390226 16.059 0.389894 16.0595 0.389496 16.0599C-0.129071 16.5773 -0.130731 17.4209 0.389363 17.9401C0.389828 17.9405 0.39016 17.941 0.390558 17.9414L7.33028 24.8476C7.85011 25.3649 8.69107 25.3631 9.20858 24.8431C9.72602 24.3232 9.72402 23.4823 9.20413 22.9648L4.54493 18.3281H32.6718C33.4054 18.3281 34 17.7335 34 17C34 16.2665 33.4054 15.6719 32.6718 15.6719Z"
                  fill="#E1E1E1"
                />
              </g>
              <defs>
                <clipPath id="clip0_11228_104">
                  <rect width="34" height="34" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
          <div class="slider__pagination--num">
            <span class="slider__pagination--num-active">1</span>
            <span class="slider__pagination--num-total">/4</span>
          </div>
          <span class="slider__pagination--arrow"
            ><svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_11228_100)">
                <path
                  d="M1.32817 15.6719H29.4551L24.7957 11.0351C24.2758 10.5177 24.2739 9.67678 24.7913 9.15689C25.3087 8.63693 26.1497 8.635 26.6696 9.15237L33.6093 16.0586C33.6098 16.059 33.6101 16.0595 33.6105 16.0599C34.1291 16.5773 34.1307 17.4209 33.6106 17.9401C33.6102 17.9405 33.6098 17.941 33.6094 17.9414L26.6697 24.8476C26.1499 25.3649 25.3089 25.3631 24.7914 24.8431C24.274 24.3232 24.276 23.4823 24.7959 22.9648L29.4551 18.3281H1.32817C0.594646 18.3281 4.57764e-05 17.7335 4.57764e-05 17C4.57764e-05 16.2665 0.594646 15.6719 1.32817 15.6719Z"
                  fill="#E1E1E1"
                />
              </g>
              <defs>
                <clipPath id="clip0_11228_100">
                  <rect width="34" height="34" fill="white" transform="matrix(-1 0 0 1 34 0)" />
                </clipPath>
              </defs>
            </svg>
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
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
  &__pagination {
    display: flex;
    justify-content: center;
    margin-bottom: 92px;
    &--box {
      display: flex;
      max-width: 170px;
      width: 100%;
      align-items: center;
      justify-content: space-between;
    }
    &--num {
      &-active {
        font-size: $fs-n;
        font-weight: $fw-4;
        line-height: 23px;
        color: $color-base;
      }
      &-total {
        font-size: $fs-n;
        font-weight: $fw-4;
        line-height: 23px;
        color: #c0c0c0;
      }
    }
    &--arrow {
      cursor: pointer;
      & path {
        transition: 0.3s ease-in-out;
      }
      &:hover,
      :active {
        & path {
          fill: #0dbc91;
        }
      }
    }
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
