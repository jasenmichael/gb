const axios = require('../node_modules/axios/index.js')
require('dotenv').config()

const url = process.env.BUILD_HOOK_URL_MASTER

axios({
  method: 'post',
  url
})
// .then(() => {
//   // eslint-disable-next-line
//   // console.log(url)
// })
