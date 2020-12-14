<template>
  <div class="slide">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in banners.slice(11,16)">
        <a :href="item.user.userId">
          <img :src="item.user.avatarUrl" alt="">
        </a>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
    export default {
        name: "HomeSwiper",
        props:{
          banners:{
            type:Array,
            dafault(){
              return []
            }
          }
        }
    }
</script>
<style scoped>
    .slide {
        height: 200px;
        box-shadow: 0px 0px 10px 1px black;
    }

    .slide img {
        width: 100%;
        height: 100%;
    }
</style>
