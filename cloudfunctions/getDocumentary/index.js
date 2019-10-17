// 云函数模板
// 部署：在 cloud-functions/login 文件夹右击选择 “上传并部署”

const cloud = require('wx-server-sdk')
var request = require('request');
// 初始化 cloud
cloud.init({
  // API 调用都保持和云函数当前所在环境一致
  env: cloud.DYNAMIC_CURRENT_ENV
})

/**
 * 这个示例将经自动鉴权过的小程序用户 openid 返回给小程序端
 * 
 * event 参数包含小程序端调用传入的 data
 * 
 */
//index.js
exports.main = async (event, context) => {
  return new Promise((resolve, reject) => {

    request('https://api.bilibili.com/x/web-interface/search/all/v2?page=1&order=&keyword=%E4%B8%AD%E8%8B%B1%20%E7%BA%AA%E5%BD%95%E7%89%87&jsonp=jsonp',
      function (error, response, body) {
        console.log("error:" + error)
        console.log("response:" + response)
        console.log("body:" + body)
        if (!error && response.statusCode == 200) {
          resolve(JSON.parse(body))
        }
        resolve(null)
      });
  })
}