(() => {
    //1.Asynchronous
    // function simulateAsyncAPI(text, timeout) {
    //     setTimeout(() => console.log(text), timeout);
    // }
    // simulateAsyncAPI('A', 1000)
    // simulateAsyncAPI('B', 500)
    // simulateAsyncAPI('C', 5000)

    //2.callback
    // function simulateAsyncAPI(text, timeout,callback) {
    //     setTimeout(() => {
    //         console.log(text)
    //         if (callback){
    //             callback();
    //         }
    //     }, timeout);
    // }
    // simulateAsyncAPI('A', 1000, () => {
    //     simulateAsyncAPI('B', 500, () => {
    //         simulateAsyncAPI('C', 5000);
    //     })
    // })
    //ซ้อนหลายชั้น อ่านยาก callBackHall

    // 3.Promise
    // function simulateAsyncAPI(text, timeout) {
    //     return new Promise((resolve,reject) => {
    //         setTimeout(() =>{
    //             if (text === 'B') return reject('B got rejected');
    //             resolve();
    //         },timeout);
    //     })
    // }
    // simulateAsyncAPI('A',1000)
    // .then(() => {
    //    return simulateAsyncAPI('B',500)
    // })
    // .then(() => {
    //     return simulateAsyncAPI('C',100)
    //  })
    //  .catch((error) =>{
    //     console.error(error);
    //  })
     //ใส่.then เยอะ อ่านยาก

     //4.Async/Await
     function simulateAsyncAPI(text, timeout) {
        return new Promise((resolve,reject) => {
            setTimeout(() =>{
                // if (text === 'B') return reject('B got rejected');
                console.log(text)
                resolve();
            },timeout);
        })
    }
    async function run() {
        try{
            await simulateAsyncAPI('A',1000)
            await simulateAsyncAPI('B',500)
            await simulateAsyncAPI('C',100)
        } catch (error){
            console.error(error)
        }
    }
    run()
})();
// ---------------- Example async---------------
async function asyncFunction() {
    return 'Hello World'
}

asyncFunction()

asyncFunction().then((resolValue)=> {
    console.log(resolValue)
})

function asyncPromise() {
    return new promise((resolve) => {
          resolve ('hello world')
      })
   }
//---------------- Example await---------------

async function showering(){
    let action1 = await sraphom() //ถ้าอยากได้ค่า ไม่ต้อง .then แล้ว แค่ต้อง await ใน async แต่ต้องมีตัวแปรมารับค่า
    let action2 = await brushTeeth() 


    //action 1 มารับค่า ที่ resolve มาจาก sraphom()[promise]
    //action 2 มารับค่า ที่ resolve มาจาก brushTeeth()[promise]
    console.log(action1 +' '+ action2);
    
}

async function sraphom(){
    return 'pompeak'
}

async function brushTeeth(){
    return 'clean teeth'
}

showering()

//exam 3

async function addOne(params) {
    return params+1
}

async function calculate(num1, num2) {
    return num1 + num2
}

async function total () {
    let result = await calculate(1, 1)
    let addOneResult = await addOne(result)
    
    return addOneResult
}
console.log(total());