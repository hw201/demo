import { request } from './login'

//y验证码
export function getCaptcha() {
  return request({
    url: '/user/getCaptcha',
    // method: "get",
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
    withCredentials: true,
  })
}

//登录
// export function getlogin(userName, password, captcha) {
//   return request({
//     url: '/user/login',
//     method: "post",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     withCredentials: true,
//     params: {
//       userName,
//       password,
//       captcha
//     }
//   })
// }