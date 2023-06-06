<!-- eslint-disable max-len -->
<template>
  <swiper
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    :slides-per-view="1"
    :space-between="50"
    :pagination="{ el: '.swiper-pagination', type: 'fraction' }"
    :navigation="{ nextEl: '.custom-next', prevEl: '.custom-prev' }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide>
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
      </div>
    </swiper-slide>
    <swiper-slide>
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
      </div>
    </swiper-slide>
    <swiper-slide>
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
      </div>
    </swiper-slide>
    <swiper-slide>
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
      </div>
    </swiper-slide>
    <div class="slider__pagination">
      <div class="slider__pagination--box">
        <span class="slider__pagination--arrow custom-prev">
          <svg
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
        <div class="slider__pagination--num swiper-pagination">
          <span class="slider__pagination--num-active">1</span>
          <span class="slider__pagination--num-total">/4</span>
        </div>
        <span class="slider__pagination--arrow custom-next">
          <svg
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
  </swiper>
</template>

<!-- eslint-disable import/no-extraneous-dependencies -->
<!-- eslint-disable import/extensions -->

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';

export default {
  data() {
    return {
      swiperId: 1,
      slidesLength: 1,
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = () => {};
    const onSlideChange = () => {};
    return {
      onSwiper,
      onSlideChange,
      modules: [Pagination, Navigation],
    };
  },
};
</script>

<style lang="scss">
.swiper-pagination {
  position: relative;
  bottom: 3px;
  font-size: $fs-n;
  font-weight: $fw-4;
  line-height: 23px;
  color: #c0c0c0;
}
.swiper-pagination-current {
  color: $color-base;
  position: relative;
  right: -5px;
}
.swiper-pagination-total {
  position: relative;
  right: 5px;
}
.slider {
  &__pagination {
    display: flex;
    justify-content: center;
    margin-bottom: 86px;
    &--box {
      display: flex;
      padding-top: 6px;
      max-width: 170px;
      width: 100%;
      align-items: center;
      justify-content: space-between;
    }
    &--arrow {
      background: none;
      border: none;
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
.swiper-button-disabled {
  pointer-events: none;
  opacity: 0.5;
  cursor: default;
  & path {
    fill: #ececec;
  }
}
@media (max-width: 992px) {
  .slider__pagination--box {
    padding-top: 2px;
  }
  .slider {
    &__pagination {
      margin-bottom: 31px;
    }
  }
}
</style>
