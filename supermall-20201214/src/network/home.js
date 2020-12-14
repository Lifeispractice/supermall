import { request } from './request'

// https://autumnfish.cn/comment/hot?type=0&id=481859794
export function getHomeMultidata() {
      return request({
            url: '/hot?type=0&id=481859794'
      });
}
// 123.207.32.32:8000/home/data?type=new&page=1
export function getHomeGoods(type,id) {
      return request({
            url:'/hot',
            params:{
                  type,
                  id
            }
      })
}


// 歌曲评论获取：https://autumnfish.cn/comment/hot?type=pop&page=481859794
// 歌曲评论获取：https://autumnfish.cn/comment/hot?type=0&id=481859794
// 歌曲评论获取：https://autumnfish.cn/comment/hot?type=0&id=32408691
// 歌曲评论获取：https://autumnfish.cn/comment/hot?type=0&id=1500391542
