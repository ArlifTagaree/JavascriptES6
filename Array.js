//spread Operator

const newArr = [100,200,300];
const data = [10,20,...newArr ]
const data2 = [10,20,newArr ]

console.log(data);
console.log(data2);
console.log(data.length);


const color = ['เขียว','แดง','น้ำเงิน',]
const allColor = ['เหลือง','ดำ',color]
const allColors = ['เหลือง','ดำ',...color]

console.log(color);
console.log(allColor);
console.log(allColors);

const newColor = 'ม่วง';
allColors.push(newColor);
console.log(allColors)

const newColor2 = ['คราม','ฟ้า'];
allColors.push(...newColor2);
console.log(allColors)