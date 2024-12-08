const list: string = 
`7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`;

const rows: number[][] = [];
list.split('\n').map(item => {  
  rows.push(item.split(' ').map(item => +item));
});

let safe: number = 0;
let unsafe: number = 0;

rows.map(row => {
  let allow: boolean = true;
  row.forEach((value, key) => {
    if (allow && row[key + 1]) {
      allow = !!(Math.abs(value - row[key + 1]) <= 2);
    }    
  });
  allow ? safe++ : unsafe++;
});

console.log('safe', safe);
console.log('unsafe', unsafe);
