const proms = (params) => {
    return new Promise((resolve, reject) => {
      if(params === true) {
        resolve('Hello World')
      } else {
        reject('Error')
      }
    })
  }
  
  const handleSuccess = (data) => {
    console.log(data)
  }
  
  const handleFailure = (data) => {
    console.log('this is fail')
    console.log(data)
  }
  
  // then รับ params 2 ตัว คือ
  // 1 รับ resolve
  // 2 รับ reject
  proms(false).then(handleSuccess, handleFailure)
  

  const prom = (params) => {
    return new Promise((resolve, reject) => {
      if (params === true) {
        resolve('Hello World')
      } else {
        reject('Error')
      }
    })
  }
  
  const prom2 = (params) => {
    return new Promise((resolve, reject) => {
      resolve(params + ' ' + 'from prom2')
    })
  }
  
  prom(true)
  .then((resolveValue) => {
    // return promise
    return prom2(resolveValue)
  })
  .then((resolveValueFromProm2) => {
    console.log(resolveValueFromProm2)
  })
  

  //////////
  // const prom = (params) => {
  //   return new Promise((resolve, reject) => {
  //     if (params === true) {
  //       resolve('Hello World')
  //     } else {
  //       reject('Error')
  //     }
  //   })
  // }
  
  // const prom2 = (params) => {
  //   return new Promise((resolve, reject) => {
  //     resolve(params + ' ' + 'from prom2')
  //   })
  // }
  
  // prom(true)
  // .then((resolveValue) => {
  //   // return promise
  //   return prom2(resolveValue)
  // })
  // .then((resolveValueFromProm2) => {
  //   console.log(resolveValueFromProm2)
  // })
  