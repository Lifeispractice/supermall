<template>
    <tab-bar>
      <tab-bar-item path="/home" activeColor="deepPink">
        <img slot="item-icon" src="~assets/img/tabbar/sy.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/syHover.svg" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="#00f">
        <img slot="item-icon" src="~assets/img/tabbar/fl.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/flHover.svg" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <img slot="item-icon" src="~assets/img/tabbar/gwc.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/gwcHover.svg" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img slot="item-icon" src="~assets/img/tabbar/wo.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/woHover.svg" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>
<script>
  // 别名写法 @ 代表就是 img 路径
  import TabBar from 'components/common/tabbar/TabBar'
  import TabBarItem from 'components/common/tabbar/TabBarItem'
  // 原始写法
  // import TabBar from './tabbar/TabBar'
  // import TabBarItem from './tabbar/TabBarItem'
  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    },
  }
</script>

