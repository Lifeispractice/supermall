<template>
  <div class="recommend">
    <div v-for="item in recommends.slice(4,8)" class="recommend-item">
      <a :href="item.user.userId">
        <img :src="item.user.avatarUrl" alt="">
      </a>
      <div class="text">{{item.likedCount}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name:"RecommendView",
  props:{
    recommends:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
.recommend{display: flex;padding: 15px 30px;}
.recommend-item{flex: 1;overflow: hidden;margin: 1px;text-align: center;}
.recommend-item .text{color: #000;}
.recommend-item img{width: 60px;height: 60px;border-radius: 50%;border: 1px solid #000;}
</style>
