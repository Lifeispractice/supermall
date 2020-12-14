<template>
  <div class="tab-bar-item" @click="itemClick">
    <!-- 所有的item都展示同一个图片，同一个文字 -->
    <!-- 默认图标 -->
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <!-- 高亮图标 -->
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <!-- 动态绑定 class -->
    <!-- <div :class="{active:isActive}"> -->

    <!-- 动态绑定 style 属性 -->
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: "TabBarItem",
    props: {
      path: String,
      activeColor:{
        type:String,
        default:'red'
      }
    },
    data() {
      return {
        // isActive: null,
        // path:'/home'
      }
    },
    // 计算属性 通过计算属性动态确定 isActive 的值
    computed: {
      isActive() {
        // 哪个路由处于活跃，就拿到那个活跃路由的 path，判断一下有没有我这个路由的 path
        // if /home -> item1(/home) = true 是一样的
        // if /home -> item2(/category) = false 不一样的
        // if /home -> item3(/cate) = false 不一样的
        // if /home -> item4(/profile) = false 不一样的
        // $route 里面有个东西 (path), $route 是哪一个对象，哪一个路由处于活跃，就是哪个对象
        // return this.$route.path.indexOf(this.path) == false;
        return this.$route.path.indexOf(this.path) !== -1;
        // 怎么理解 indexOf 方法：如果 == -1(说明没找到)相对应的字符串（path.string），如果找到就是 !== -1
      },
      // 动态绑定 style 属性
      activeStyle() {
        return this.isActive ? {color:this.activeColor}:{}
      },
    },
    methods: {
      itemClick() {
        //this.$router.push();//返回
        this.$router.replace(this.path); //不返回
      }
    },
  }

</script>
<style scoped>
  #tab-bar .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
    font-weight: 900;
  }

  #tab-bar .tab-bar-item img {
    margin-top: 5px;
    width: 24px;
    height: 24px;
    vertical-align: middle;
  }

  /* .active {
    color: red;
  } */

</style>
