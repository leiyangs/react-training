export default {
  login(username, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(Math.random()>.5) {
          resolve(username+Date.now())
        }else {
          reject('登录失败')
        }
      }, 500);
    })
  }
}