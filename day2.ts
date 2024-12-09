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

rows.forEach((row, rowKey) => {
  let allow: boolean = true;
  let direction: string = 'positive';

  row.forEach((column, columnKey) => {
 
    if (allow && row[columnKey + 1]) {
      const diff: number = column - row[columnKey + 1];
      const dc = diff > 0 ? 'positive' : 'negative';
      if(columnKey === 0) {
        direction = dc;
      } else if (direction !== dc) {
        allow = false;
        return;
      }
            
      const plusMinus3: boolean = Math.abs(diff) <= 3;
      const exactMatch: boolean = column === row[columnKey + 1];
      allow = plusMinus3 && !exactMatch;
    }    
  });

  allow ? safe++ : unsafe++;
});

console.log('safe', safe);
console.log('unsafe', unsafe);
