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