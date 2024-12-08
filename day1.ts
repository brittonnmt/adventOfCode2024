const list: string = 
`3   4
4   3
2   5
1   3
3   9
3   3`;

const column1: number[] = [];
const column2: number[] = [];
list.split('\n').map(item => {  
    const split: string = item.split('   ');
    column1.push(+split[0]);
    column2.push(+split[1]);
});
column1.sort((a, b) => a - b);
column2.sort((a, b) => a - b);

let total: number = 0;
column1.forEach((value, key) => {
  total += Math.abs(value - column2[key]);
});

console.log(total);
