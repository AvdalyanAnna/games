<script setup lang="ts">
import {footerMenu, footerSocial,footerCards} from "~/constants/menu";

</script>

<template>
  <footer class="footer">
    <div class="wrapper">
      <div class="footer-inner">
        <ul class="footer-social">
          <li class="footer-social__item" v-for="(item,index) in footerSocial" :key="index">
            <a :href="item.link" :title="item.title" target="_blank" class="footer-social__link">
              <v-icon v-if="item.svg" :icon="item.svg" />
            </a>
          </li>
        </ul>
        <ul class="footer-menu">
          <li class="footer-menu__item" v-for="(item,index) in footerMenu" :key="index">
            <nuxt-link :to="item.link" class="footer-menu__link">{{item.title}}</nuxt-link>
          </li>
        </ul>
        <p class="footer-info">
          Lorem ipsum dolor sit amet consectetur. Integer in eget suspendisse sapien egestas. Posuere elementum ac et massa cursus in facilisi. Sed ipsum feugiat quisque nunc nunc. Posuere cursus praesent est eu pharetra adipiscing augue pretium. Quam quis dictum nec senectus eget magna magna. Pulvinar dictum adipiscing ut gravida.
        </p>
        <ul class="footer-cards">
          <li class="footer-cards__item" v-for="(item,index) in footerCards" :key="index">
            <a :href="item.link" :title="item.title" target="_blank" class="footer-cards__link">
              <v-icon v-if="item.svg" :icon="item.svg" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
