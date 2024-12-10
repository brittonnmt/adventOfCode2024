const day5Key: string =
    `47|53
97|13
97|61
97|47
75|29
61|13
75|53
29|13
97|29
53|29
61|53
97|53
61|29
47|13
75|47
97|75
47|61
75|61
47|29
75|13
53|13`;

const day5List: string =
    `75,47,61,53,29
97,61,53,29,13
75,29,13
75,97,47,61,53
61,13,29
97,13,75,29,47`;

const formattedData: number[][] = [];
day5List.split('\n').map((item: string): void => {
    formattedData.push(item.split(',').map((i: string): number => +i));
});

const success: number[][] = [];
const failure: number[][] = [];
formattedData.forEach((row: number[], rowKey: number): void => {
    let failed: boolean = false;
    row.forEach((column: number, columnKey: number): void => {
        if (row[columnKey + 1]) {
            if (!day5Key.includes(`${column}|${formattedData[rowKey][columnKey + 1]}`)) {
                failed = true;
                return;
            }
        }
    });

    failed ? failure.push(row) : success.push(row);
});

let total: number = 0;
success.map((item: number[]): void => {
    total += item[Math.floor(item.length / 2)];
});

console.log(total);
