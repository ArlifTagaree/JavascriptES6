// variable
const myName = 'Save'
let height = 170

//Data Type

//Primitive Type
String
Number
Boolean
let isMale = false

undefined
let go

null
let city = null

Symbol
BigInt
let bigNumber = 10n;

console.log(myName,height,isMale,go,city,bigNumber)

//Reference Type ทุกค่าที่เป็น Reference Type คือ object ทั้งหมด
// Object {} 
const person = {
    name: 'Save',
    height: 170,
    city: 'bangkok'
}// object เขียนเหมือน css
console.log(person)
console.log(person.name)

person.height = 180;
console.log(person)

person.weight = 100;
console.log(person)

// Array [] คือ object ที่เราไม่ต้องประกาษ propertie โดยที่ อาเรย์ จะเจเนอเรทลำดับให้เลย
const Numbers = [5,10,15,20];
console.log(Numbers[2])
Numbers.push(25) // เครื่องหมาย () มันคือฟังชัน 
console.log(Numbers)
Numbers.pop()
console.log(Numbers)
Numbers.shift()
console.log(Numbers)

// Arithmetic Operators
// - + * / % **
let result = 10/2
console.log(result)

let results = 10%2
console.log(results) //ส่วนใหญ่ใช้หาเรื่องเลขคู่เลขคี่

//condition

let password =''

    if(password === ''){
        console.log('Password is requred')
    }
    else if( password.length >= 8 && password.length <= 12 ){
        console.log('Password is vaild')
    } else {
        console.log('Password is invaild')
    }


// Function() สามารถคำนวนได้ภายใน แล้วก้ return ค่าออกมา ง่ายๆคือ ฟังชันคือวิธีก่รคิด อย่างเช่น โทดทิล แวทควรมีวิธีการคิดอย่างไรบ้าง
function calculateVat(money, vat){ 
    return money * vat / 100;
}

const totalVat = calculateVat(200,7);
console.log(totalVat)  //ทริคคือดู output ย้อนขึ้นไป

//Flow Controls,Loop
for (let counter = 0; counter <10; counter++){ //วงเล็บคือฟังชัน 
    if (counter % 2 !== 0 ){
        console.log(counter)
    }
}

//complier  หมายความว่าจะอ่านตั้งแต่บนจนจบ แล้วมาแปลงค่าส่งกลบัมาเพื่อที่จะใช่งาน ต้อองอ่านถูกต้องร้อยเปอเซนถึงจะคายค่า ถ้าผิดจะไม่คายค่าอะไรเลยจะเออเรอ
//interpiter คือการอ่านตั้งแต่บรรทัดที่ 1 ไล่ลงมา ถ้าแสดงผลถูดต้อง ก็จะแสดงผล จนกระทั่งเจอเออเร่อ จะหยุดแสดงผล
//สามารถใช้กับเรื่อง loop

