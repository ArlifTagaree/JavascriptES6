//function คือ object สามารถส่ง object ไปเป็น parameter ของ function ตัวอื่นได้ด้วย หมายความว่า เราสามารถส่ง function ไปเป็น parameter ของ function อีกตัวได้ และสามารถเรียกใช้งานมันใน function นั้นได้

//ตัวอย่าง จะเห็นว่าสามารถเรียกใช้งาน function callback ภายใน function print ซึ่ง function callback เป็น parameter อยู่
function print(callback) {
    callback();
}

function message(params) {
    console.log('This message is shown after 3 second');
}
setTimeout(message,3000);

setTimeout(function () {
    console.log('This NBA is shown after 5   second');
},5000);