// import { UserServiceURL, TweetServiceURL, RecruitmentServiceURL } from './src/config.js';

module.exports={
    devServer:{
        proxy:{
            '/api':{
                target:"http://localhost:10000",
                //target:"http://101.43.31.168:9527",
                // target: 'http://175.24.202.153:9527/',
                changeOrigin: true,
                withCredentials: true,
                secure: false,
                ws: true,
                pathRewrite: {'^/api': '/api'}
            },
        }
    }
}