const list: string = 
`3   4
4   3
2   5
1   3
3   9
3   3`;

const left: number[] = [];
const right: number[] = [];
list.split('\n').map((item: string) => {  
  const split: string[] = item.split('   ');
  left.push(+split[0]);
  right.push(+split[1]);
});

let occuranceTotal: number = 0;
left.map((item: number) => {
  const total = right.filter((value) => value === item);
  occuranceTotal += item * total.length;
});

console.log(occuranceTotal);
