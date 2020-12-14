import axios from 'axios'

export function request(config) {
      // 1、创建axios实例
      const instance = axios.create({
            baseURL:'https://autumnfish.cn/comment',
            timeout:5000
      })

      instance.interceptors.request.use(config => {
            return config
      },err =>{
            // console.log(err);
      })

      instance.interceptors.request.use(res => {
            return res
      },err =>{
            console.log(err);
      })

      return instance(config)
}



// npm install axios --save
