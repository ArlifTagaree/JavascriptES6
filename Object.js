const customerName1 = 'Arlif'
const age1 = 27
const address1 = 'BKK'


const customer1 = {
    customerName1 : 'Arlif',
    age1 : 27,
    address1 : 'BKK'
}

console.log(customer1);

//หรือสามารถเขียนแบบนี้ได้ 
const customerName2 = 'Maneekarn'
const age2 = 29
const address2 = 'BKK'

const customer2 = {
    customerName2 , 
    age2 ,
    address2 
}
console.log(customer2);

//สามารถสร้าง Method() โดยใส่ function ไว้ใน Object เช่น showDataMethod
const customerName3 = 'AAAAA'
const age3 = 29
const address3 = 'BBBB'
const customer3 = {
    customerName3, 
    age3,
    address3,
    showData (){
        console.log('ข้อมูลลูกค้า = '+ customerName3)        
    }
}
customer3.showData() //วิธีการเรียนใช้ Method ให้เข้าไปที่object  customer3 ก่อน แล้วเรียกใช้ .showData()
console.log(customer3);

// for in used with object
//for of used with array