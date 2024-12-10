const day1Data: string =
    `3   4
4   3
2   5
1   3
3   9
3   3`;

const column1: number[] = [];
const column2: number[] = [];
day1Data.split('\n').map((item: string): void => {
    const split: string[] = item.split('   ');
    column1.push(+split[0]);
    column2.push(+split[1]);
});
column1.sort((a: number, b: number): number => a - b);
column2.sort((a: number, b: number): number => a - b);

let day1Total: number = 0;
column1.forEach((value: number, key: number): void => {
    day1Total += Math.abs(value - column2[key]);
});

console.log(day1Total);
