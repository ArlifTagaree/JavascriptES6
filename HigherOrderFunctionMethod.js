const persons = [
    { name: "john", age: 17},
    { name: "jane", age: 10},
    { name: "jim", age: 15}
];

// // filter คัดออก
const kids = [];
for (let i = 0; i < persons.length; i++){
    const person = persons[i]
    if (person.age <= 15){
        kids.push(person);
    }
}
console.log('Kids:',kids);

//// เรียนใช้ .filter() ซึ่ง filter เป็น HigherOrder สามารถรับ argument เป็น function ใหม่ได้ โดยสร้าง function ใหม่ เป็น argument ของ filter รับค่าเป็น person ดดยจะทำการวนลูป array persons หลังจากนั้นจะ pass persons แต่ละ index เข้าไปใน function ใหม่ โดยอะไรก็ตามที่รีเทิร์นจาก function ใหม่จะถูก push เข้าไปใน array ตัวใหม่ที่ filter สร้าง
// const kids1 = persons.filter((person) =>{
//     return person.age <= 15;
// })
// console.log('Kids:',kids1);

//arrow function ถ้ามี argument แค่ตัวเดียว และ retrun แค่ตัวเดียว สามารถ ละวงเล็บตรง argument และ ปีกกาตรง function และไม่ต้องเขียน return แบบตัวอย่างด้านล่าง
const kids1 = persons.filter(person => person.age <= 15);
console.log('Kids:',kids1);



// map ยัดเข้าทั้งหมด
// const olderPersons = [];
// for (let i = 0; i < persons.length; i++) {
//     const person = persons[i];
//     olderPersons.push({
//         ...person,
//         age: person.age * 2
//     });
// }
const olderPersons = persons.map((person)=>{
    return {
        ...person,
        age: person.age * 2
    }
})

//เขียนแบบ arrow โดยที่ argument ตัวเดียว
// const olderPersons = persons.map(person=>({
//         ...person,
//         age: person.age * 2
// }));

console.log('olderPersons:',olderPersons);

// // reduce รวมผล
// // let totalAge = 0;
// // for (let i=0; i < persons.length; i++) {
// //     const person = persons[i];
// //     totalAge += person.age;
// // }

// const totalAge = persons.reduce((age,person) => {
//     return age +person.age;
// },0)
// console.log('Total age:', totalAge)

// // forEach เลือกมาดู ไม่เปลี่ยนค่า
// // for (let i = 0; i < persons.length; i++){
// //     const person = persons[i];
// //     console.log(`Name ${person.name},Age ${person.age}`);
// // }
// persons.forEach((person) => {
//     console.log(`Name ${person.name},Age ${person.age}`);
// })

// //find, findIndex เลือกมาดูข้อมูลมindex
// // let jane;
// // for (let i = 0; i < persons.length; i++) {
// //     const person = persons[i];
// //     if (person.name === 'jane'){
// //         jane = person;
// //         break;
// //     }
// // }
// const jane = persons.find((person) => {
//     return person.name === 'jane';
// })
// const janeIndex = persons.findIndex((person) => {
//     return person.name === 'jane';
// })
// console.log('Jane',jane)
// console.log('Jane Index',janeIndex)

// // every, some เช็ค Boolean everyถูก,ผิด ทั้งหมด(And &&) some บ่้างส่วน (Or ||)
// // let isKid = true;
// // for (let i = 0; i < persons.length; i++){
// //     const person = persons[i];
// //     if (person.age>15){
// //         isKid = false;
// //         break;
// //     }
// // }
// const isKidEvery = persons.every((person) => {
//     return person.age<=15;
// })
// console.log('iskid:',isKidEvery);
// const isKidSome = persons.some((person) => {
//     return person.age<=15;
// })
// console.log('iskid:',isKidSome);