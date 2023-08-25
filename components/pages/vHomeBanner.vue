<script setup lang="ts">
const title = ref('100% Authentic & Provably Fair')
const description = ref(`All unboxings are 100% fair and protected by our industry-leading provably fair technology. <br> All products are purchasedthrough StockX or official vendors.`)
const btn = ref('Learn more')
</script>

<template>
  <section class="banner">
    <div class="banner-left">
      <h2 class="banner-title">{{ title }}</h2>
      <p class="banner-description" v-html="description"></p>
      <button class="btn btn-dark btn-solid banner-btn">Learn more</button>
    </div>
    <div class="banner-right">
      <div class="banner-right__item">
        <div class="banner-right__item-numer">5,137</div>
        <div class="banner-right__item-text"> Active USERS</div>

      </div>
      <div class="banner-right__item">
        <div class="banner-right__item-numer">90,485
        </div>
        <div class="banner-right__item-text">MYSTERY BOXES OPENED</div>
      </div>
    </div>
  </section>
</template>
