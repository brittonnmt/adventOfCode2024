const day2List: string =
    `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`;

const day2Rows: number[][] = [];
day2List.split('\n').map((item: string): void => {
    day2Rows.push(item.split(' ').map((item: string): number => +item));
});

let day2Safe: number = 0;
let day2Unsafe: number = 0;

day2Rows.forEach((row: number[]): void => {
    let allow: boolean = true;
    let direction: string = 'positive';

    row.forEach((column: number, columnKey: number): void => {

        if (allow && row[columnKey + 1]) {
            const diff: number = column - row[columnKey + 1];
            const dc: string = diff > 0 ? 'positive' : 'negative';
            if (columnKey === 0) {
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

    allow ? day2Safe++ : day2Unsafe++;
});

console.log('safe', day2Safe);
console.log('unsafe', day2Unsafe);
