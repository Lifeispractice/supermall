<template>
  <div id="home">
      <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
      <home-swiper :banners="banners"/>
      <Recommend-View :recommends="recommends"/>
      <Feature-View/>
      <tab-control class="tab-control" :title="['流行','新款','精选']"/>
      <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
      <br><br><br><br>
  </div>
</template>
<script>
    // 子组件
    import HomeSwiper from './childComps/HomeSwiper'
    import RecommendView from './childComps/RecommendView'
    // 本周流行
    import FeatureView from './childComps/FeatureView'
    // 公共组件
    import NavBar from 'components/common/navbar/NavBar'
    import TabControl from 'components/content/tabControl/TabControl'

    // 如果是 default 导出 则不使用 {} 导入，因为是 export 所以使用 {}
    import {getHomeMultidata,getHomeGoods} from 'network/home'

    export default {
        name: "Home",
        components: {
            HomeSwiper,
            RecommendView,
            FeatureView,
            NavBar,TabControl // 公共组件
        },
        data() {
            return {
                banners: [],
                recommends: [],
                goods:{
                    'pop':{page:0,list:[]},
                    'news':{page:0,list:[]},
                    'sell':{page:0,list:[]},
                }
            }
        },
        created() {
            // created 中 只写主要逻辑
            // 1、请求多个数据 调用 getHomeMultidata() 方法
            this.getHomeMultidata();
            // 2、请求商品数据 传入 tyep=0 & id=481859794
            // https://autumnfish.cn/comment/hot?type=0&id=481859794
            this.getHomeGoods('0');
        },
        methods: {
            // 将 created 中的请求进行抽取 写在 methods 中 重新进行封装
            // 抽取的思想 主要是为了 方便代码维护
            getHomeMultidata(){
                getHomeMultidata().then(res => {
                    this.banners = res.data.hotComments
                    this.recommends = res.data.hotComments
                });
            },
            getHomeGoods(type){
                getHomeGoods(type,481859794).then(res=>{
                    console.log(res);
                })
            }
        },
    }
</script>

<style scoped>
    #home{padding-top: 44px;}
    .home-nav {
        background-color: var(--color-tint);
        color: #fff;
        font-weight: 900;
        position: fixed;
        top: 0;left: 0;right: 0;z-index: 9999;
    }
    .tab-control{
        position: sticky;
        top: 44px;
    }
</style>
