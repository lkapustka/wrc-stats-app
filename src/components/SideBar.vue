<template functional>
  <div class="box">
    <div class="box__content box__content--monte-carlo">
      <div class="box__description">
        <a class="box__link" href="#">MONTE CARLO</a>
        <img
          class="box__img"
          src="../assets/icons/monte-carlo.svg"
          alt="flag"
        />
      </div>
    </div>
    <div class="box__content box__content--sweden">
      <div class="box__description">
        <a class="box__link" href="#">SWEDEN</a>
        <img class="box__img" src="../assets/icons/sweden.svg" alt="flag" />
      </div>
    </div>
    <div class="box__content box__content--mexico">
      <div class="box__description">
        <a class="box__link" href="#">MEXICO</a>
        <img class="box__img" src="../assets/icons/mexico.svg" alt="flag" />
      </div>
    </div>
    <div class="box__content box__content--argentina">
      <div class="box__description">
        <a class="box__link" href="#">AREGENTINA</a>
        <img class="box__img" src="../assets/icons/argentina.svg" alt="flag" />
      </div>
    </div>
    <div class="box__content box__content--portugal">
      <div class="box__description">
        <a class="box__link" href="#">PORTUGAL</a>
        <img class="box__img" src="../assets/icons/portugal.svg" alt="flag" />
      </div>
    </div>
    <div class="box__content box__content--italy">
      <div class="box__description">
        <a class="box__link" href="#">ITALY</a>
        <img class="box__img" src="../assets/icons/italy.svg" alt="flag" />
      </div>
    </div>
    <div class="box__content box__content--kenya">
      <div class="box__description">
        <a class="box__link" href="#">KENYA</a>
        <img class="box__img" src="../assets/icons/kenya.svg" alt="flag" />
      </div>
    </div>
    <div class="box__content box__content--finland">
      <div class="box__description">
        <a class="box__link" href="#">FINLAND</a>
        <img class="box__img" src="../assets/icons/finland.svg" alt="flag" />
      </div>
    </div>
    <div class="box__content box__content--new-zealand">
      <div class="box__description">
        <a class="box__link" href="#">NEW ZEALAND</a>
        <img
          class="box__img"
          src="../assets/icons/new-zealand.svg"
          alt="flag"
        />
      </div>
    </div>
    <div class="box__content box__content--turkey">
      <div class="box__description">
        <a class="box__link" href="#">TURKEY</a>
        <img class="box__img" src="../assets/icons/turkey.svg" alt="flag" />
      </div>
    </div>
    <div class="box__content box__content--germany">
      <div class="box__description">
        <a class="box__link" href="#">GERMANY</a>
        <img class="box__img" src="../assets/icons/germany.svg" alt="flag" />
      </div>
    </div>
    <div class="box__content box__content--wales">
      <div class="box__description">
        <a class="box__link" href="#">WALES</a>
        <img class="box__img" src="../assets/icons/wales.svg" alt="flag" />
      </div>
    </div>
    <div class="box__content box__content--japan">
      <div class="box__description">
        <a class="box__link" href="#">JAPAN</a>
        <img class="box__img" src="../assets/icons/japan.svg" alt="flag" />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({});
</script>

<style lang="scss" scoped>
.box {
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 100px;
  left: -140px;

  --color-monte-carlo: #e27d60;
  --color-sweden: #85dcb8;
  --color-mexico: blueviolet;
  --color-argentina: #c38d9e;
  --color-portugal: #a8d0e6;
  --color-italy: #e8a87c;
  --color-kenya: #4056a1;
  --color-finland: #219674;
  --color-new-zealand: #ee4c7c;
  --color-turkey: #5ab9ea;
  --color-germany: #116466;
  --color-wales: #faaa0a;
  --color-japan: #41b3a3;

  &__content {
    background: blueviolet;
    width: 200px;
    transition: transform 0.4s;

    &:hover {
      transform: translateX(140px);
    }

    &--monte-carlo {
      background: var(--color-monte-carlo);
    }

    &--sweden {
      background: var(--color-sweden);
    }

    &--mexico {
      background: var(--color-mexico);
    }

    &--argentina {
      background: var(--color-argentina);
    }

    &--portugal {
      background: var(--color-portugal);
    }

    &--italy {
      background: var(--color-italy);
    }

    &--kenya {
      background: var(--color-kenya);
    }

    &--finland {
      background: var(--color-finland);
    }

    &--new-zealand {
      background: var(--color-new-zealand);
    }

    &--turkey {
      background: var(--color-turkey);
    }

    &--germany {
      background: var(--color-germany);
    }

    &--wales {
      background: var(--color-wales);
    }

    &--japan {
      background: var(--color-japan);
    }
  }

  &__description {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 60px;
  }

  &__img {
    width: 30px;
    margin-right: 16px;
  }

  &__link {
    margin-left: 16px;
    color: white;
    font-weight: 600;
  }
}
</style>
