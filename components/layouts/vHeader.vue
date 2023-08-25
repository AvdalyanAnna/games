<script setup lang="ts">
import {headerMenu} from "~/constants/menu";

</script>

<template>
  <header class="header">
    <div class="wrapper">
      <div class="header-inner">
        <ul class="header-menu">
          <li class="header-menu-item" v-for="(item,index) in headerMenu" :key="index">
            <nuxt-link class="header-menu-link" :to="item.link">
              <v-icon :icon="item.svg" class="header-menu-icon"/>
              <span>{{item.title}}</span>
            </nuxt-link>
          </li>
        </ul>
        <div class="header-controle">
          <div class="header-team team">
            <v-icon icon="sun" />
          </div>
          <button class="btn header-btn btn-yellow">LOGIN / SIGN UP</button>
        </div>
      </div>
    </div>
  </header>
</template>
