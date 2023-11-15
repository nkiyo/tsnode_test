interface MyNumber1 {
  num: number;
}
interface MyNumber2 {
  num: number;
  description: string;
}
type MyNumber = MyNumber1 | MyNumber2

const sum = (a: MyNumber, b:MyNumber): MyNumber2 => {
  return { num: a.num + b.num, description: "hage" };
}

const n: MyNumber1 = {
  num: 1
}
const m: MyNumber2 = {
  num: 2,
  description: "hoge"
}
const o = sum(n, m)
console.log(`sum is ${o.num} ${o.description}`)
