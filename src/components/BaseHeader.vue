<!-- eslint-disable max-len -->
<template>
  <div class="header">
    <div class="container">
      <div class="header__info">
        <div class="header__box">
          <a class="header__logo" href="#"><img alt="logo" src="../assets/logo.png" /></a>
          <div class="header__address">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.8304 0.615234C6.23672 0.615234 3.31299 3.53897 3.31299 7.13264C3.31299 11.6495 9.83681 19.3652 9.83681 19.3652C9.83681 19.3652 16.3478 11.4274 16.3478 7.13264C16.3478 3.53897 13.4242 0.615234 9.8304 0.615234ZM11.7968 9.04095C11.2546 9.58305 10.5426 9.85416 9.8304 9.85416C9.11835 9.85416 8.40607 9.58305 7.86407 9.04095C6.77975 7.95673 6.77975 6.19251 7.86407 5.10818C8.38913 4.5829 9.08756 4.29359 9.8304 4.29359C10.5732 4.29359 11.2716 4.58301 11.7968 5.10818C12.8812 6.19251 12.8812 7.95673 11.7968 9.04095Z"
                fill="#E1E1E1"
              />
            </svg>
            <span class="header__address--title">Ростов-на-Дону</span>
            <span class="header__address--text">ул. Ленина, 2Б</span>
          </div>
        </div>
        <div class="header__box">
          <div class="header__contacts">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1_150)">
                <path
                  d="M23.94 4.02383C21.28 1.4525 17.78 0 14.0525 0C3.35417 0 -3.3635 11.5908 1.97867 20.811L0 28L7.39083 26.0727C10.6108 27.8122 13.2487 27.6582 14.0595 27.7608C26.4647 27.7608 32.6398 12.7528 23.9225 4.06933L23.94 4.02383Z"
                  fill="#ECEFF1"
                />
                <path
                  d="M14.0782 25.3762L14.0712 25.375H14.0525C10.3402 25.375 7.96832 23.6168 7.73499 23.5153L3.35999 24.6528L4.53249 20.4003L4.25365 19.9628C3.09865 18.1242 2.48499 16.0067 2.48499 13.8262C2.48499 3.56767 15.0208 -1.56216 22.2752 5.68867C29.512 12.8637 24.4312 25.3762 14.0782 25.3762Z"
                  fill="#1FA181"
                />
                <path
                  d="M20.4248 16.6915L20.4143 16.779C20.0632 16.604 18.3528 15.7675 18.0343 15.652C17.3192 15.3872 17.521 15.61 16.1478 17.1827C15.9437 17.4102 15.7407 17.4277 15.3942 17.2702C15.0442 17.0952 13.9207 16.7277 12.5907 15.5377C11.5547 14.6102 10.8593 13.4727 10.654 13.1227C10.3122 12.5324 11.0273 12.4484 11.6783 11.2164C11.795 10.9714 11.7355 10.7789 11.6492 10.605C11.5617 10.43 10.8652 8.71503 10.5735 8.03137C10.2935 7.35003 10.0053 7.43637 9.78949 7.43637C9.11749 7.37803 8.62633 7.38737 8.19349 7.8377C6.31049 9.90737 6.78533 12.0424 8.39649 14.3127C11.5628 18.4567 13.2498 19.2197 16.3345 20.279C17.1675 20.5439 17.927 20.5065 18.5278 20.4202C19.1975 20.314 20.5893 19.579 20.8798 18.7565C21.1773 17.934 21.1773 17.2515 21.0898 17.094C21.0035 16.9365 20.7748 16.849 20.4248 16.6915Z"
                  fill="#FAFAFA"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_150">
                  <rect width="28" height="28" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <a class="header__contacts--tel" href="tel:+78630000000">+7(863) 000 00 00</a>
          </div>
          <button class="header__contacts--btn btn btn-success">Записаться на прием</button>
        </div>
      </div>
      <div class="header__info--mobile">
        <div class="header__box">
          <button
            class="header__nav--closed"
            :class="{ 'header__nav--open': openNav }"
            @click="btnNav()"
          >
            <span></span><span></span><span></span></button
          ><a class="header__logo" href="#"><img alt="logo" src="../assets/logo--mobile.png" /></a>
        </div>
        <div class="header__contacts--box">
          <a class="header__contacts--tel" href="tel:+78630000000">+7(863) 000 00 00</a>
          <span class="header__contacts--address">Ростов-на-Дону</span>
        </div>
      </div>
    </div>
    <nav class="header__nav">
      <div class="container">
        <ul class="header__nav--list">
          <li class="header__nav--item"><a href="#" class="header__nav--link">О клинике</a></li>
          <li class="header__nav--item"><a href="#" class="header__nav--link">Услуги</a></li>
          <li class="header__nav--item"><a href="#" class="header__nav--link">Специалисты</a></li>
          <li class="header__nav--item"><a href="#" class="header__nav--link">Цены</a></li>
          <li class="header__nav--item"><a href="#" class="header__nav--link">Контакты</a></li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<!-- eslint-disable no-unused-expressions -->

<script>
export default {
  data() {
    return {
      openNav: false,
    };
  },
  // props: ['navState'],
  methods: {
    btnNav() {
      this.openNav !== false ? (this.openNav = false) : (this.openNav = true);
      this.$emit('navState', this.openNav);
    },
  },
};
</script>

<style lang="scss">
.header {
  &__info {
    display: flex;
    justify-content: space-between;
    padding-block: 12px;
    &--mobile {
      display: none;
    }
  }
  &__box {
    display: flex;
  }
  &__logo {
    display: flex;
    align-items: center;
    margin-right: 20px;
  }
  &__address {
    position: relative;
    display: flex;
    flex-direction: column;
    padding-left: 23px;
    & svg {
      position: absolute;
      left: 0;
    }
    &--title {
      color: $color-base;
      font-size: $fs-s;
      font-weight: $fw-4;
      line-height: 26px;
    }
    &--text {
      color: $color-grey;
      font-size: $fs-s;
      font-weight: $fw-4;
      line-height: 11px;
    }
  }
  &__contacts {
    display: flex;
    align-items: center;
    & svg {
      margin-right: 10px;
    }
    &--tel {
      margin-right: 35px;
      color: $color-base;
      font-size: $fs-base;
      font-weight: $fw-4;
      line-height: 24px;
    }
    &--btn {
      font-size: $fs-s;
      font-weight: $fw-4;
      line-height: 21px;
    }
  }
  &__nav {
    padding-block: 10px;
    background-color: $color-nav;
    &--list {
      display: flex;
    }
    &--item:not(:last-child) {
      margin-right: 30px;
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
  }
}
@media (max-width: 992px) {
  .header {
    &__nav {
      display: none;
    }
    &__info {
      display: none;
      &--mobile {
        display: flex;
        justify-content: space-between;
        padding-top: 15px;
        padding-bottom: 13px;
        .header {
          &__box {
            align-items: center;
          }
          &__nav {
            &--closed {
              position: relative;
              border: none;
              background: none;
              width: 37px;
              height: 26px;
              margin-right: 43px;
              z-index: 2;
              cursor: pointer;
              & span {
                position: absolute;
                width: 37px;
                height: 4px;
                left: 0;
                top: 10px;
                background: #1fa181;
                transition: transform 0.1s ease-in-out;
              }
              & span:first-child {
                top: -1px;
              }
              & span:last-child {
                top: 21px;
              }
            }
            &--open {
              & span {
                position: absolute;
                width: 37px;
                height: 4px;
                left: 0;
                top: 10px;
                background: #1fa181;
              }
              & span:nth-child(2) {
                display: none;
              }
              & span:first-child {
                left: -2px;
                top: 11px;
                transform: rotate(45deg);
              }
              & span:last-child {
                left: -2.5px;
                top: 11.9px;
                transform: rotate(-45deg);
              }
            }
          }
          &__contacts {
            &--box {
              display: flex;
              flex-direction: column;
              align-items: flex-end;
              padding-right: 2px;
            }
            &--tel {
              margin-right: 0;
              font-weight: $fw-7;
              line-height: 20px;
              padding-bottom: 0px;
            }
            &--address {
              font-size: 13px;
              font-weight: $fw-4;
              line-height: 17px;
            }
          }
        }
      }
    }
  }
}
</style>
