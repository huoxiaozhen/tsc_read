let a:number = 123;
const h1 = document.createElement('h1');
h1.innerHTML = "Hello,I am Mark";
document.body.appendChild(h1)

let list1:number[] = [1,2,3,4]
let list2:Array<string> = ['2']
let u:undefined = undefined
let n:null = null
let tuple:[string, number, boolean] = ['asdf', 13, true]
interface Tuple extends Array<string|number> {
  0: string,
  1:number,
  length: 2
}
enum Roles{
  SUPER_ADMIN,
  ADMIN,
  USER
}
enum Message{
  Error = "sorry,error",
  Success = "Holo,success"
}
enum Animal{
  Dog = 1,
  Cat = 2
}
interface Dog {
  type: Animal.Dog
}
interface Cat {
  type: Animal.Cat
}
let cat1: Cat = {
  type: Animal.Cat
}
const getLength = (taget:string|number):number => {
  if((taget as string).length){
    return (taget as string).length
  }else{
    return taget.toString().length
  }
}

const getFullName = ({firstName, lastName}:{
  firstName: string;
  lastName: string;
}) => {
  return `${firstName} ${lastName}`
}
let full = getFullName({
  firstName: 'lison',
  lastName: 'li'
})
console.log(full)
interface info {
  firstName?: string;
  lastName: string;
}
interface Vegatables{
  color?:string;
  type:string;
}
const getVegatables = ({color,type}:Vegatables) => {
  return `${color}${type}`
}
getVegatables({
  type: "tomato",
  size: 12,
  price: 1.2
} as Vegatables)

interface AddFunc{
  (num1:number,num2:number):number
}
let Add:AddFunc = (n1,n2) => n1 + n2

interface RoleDic{
  [id:number]: string;
}
let role:RoleDic = ["super_admin", "admin"]
console.log(role)