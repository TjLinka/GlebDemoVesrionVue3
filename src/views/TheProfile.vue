<script setup></script>

<template>
  <div class="container">
    <!-- <h1>Профиль</h1> -->
    <div class="row">
      <div class="col">
        <router-link class="tab" to="/profile/personal-data"
          ><span>Персональные данные</span></router-link
        >
        <router-link class="tab" to="/profile/marketins-stats"
          ><span>Показатели по маркетингу</span></router-link
        >
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped></style>
