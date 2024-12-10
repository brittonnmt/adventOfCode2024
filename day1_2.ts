const day1_2List: string =
    `3   4
4   3
2   5
1   3
3   9
3   3`;

const left: number[] = [];
const right: number[] = [];
day1_2List.split('\n').map((item: string): void => {
    const split: string[] = item.split('   ');
    left.push(+split[0]);
    right.push(+split[1]);
});

let occurrenceTotal: number = 0;
left.map((item: number): void => {
    const total: number[] = right.filter((value: number): boolean => value === item);
    occurrenceTotal += item * total.length;
});

console.log(occurrenceTotal);
