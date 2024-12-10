interface results {
    failed: boolean;
    direction: number;
}

const day2_2List: string = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`;

const rows: number[][] = [];
day2_2List.split('\n').map((item: string): void => {
    rows.push(item.split(' ').map((i: string): number => +i));
});

const test = (value: number, nextValue: number, direction: number): results => {
    const diff: number = value - nextValue;
    const signChange: number = diff > 0 ? 1 : -1;

    const directionChange: boolean = direction !== signChange;
    const plusMinus3: boolean = Math.abs(diff) <= 3;
    const exactMatch: boolean = value === nextValue;

    console.log(directionChange, plusMinus3, !exactMatch);
    return {failed: directionChange && plusMinus3 && !exactMatch, direction};
};

const rowsThing = (row: number[]): boolean => {
    let failed: boolean = false;
    let direction: number = 0;
    let secondTryRow: number[] = [];

    row.some((value: number, columnKey: number): boolean => {
        const nextValue: number = row[columnKey + 1];
        if (nextValue) {
            const check: results = test(columnKey, nextValue, direction);
            direction = check.direction;
            // console.log(value, row, check.failed);

            if (check.failed) {
                //   secondTryRow = Array.from(row);
                //   delete secondTryRow[columnKey + 1];
                //   secondTryRow = secondTryRow.filter(Boolean);
                //   failed = true;
                return false;
            }
        }
        return true;
    });

// sign = Sign.plus; // Reset sign for second try
// failed = false; // Reset failed for second try
// secondTryRow.some((column: number, columnKey: number): boolean => {
//   if (row[columnKey + 1]) {
//     const check: results = test(column, columnKey, secondTryRow, sign, failed);
//     failed = check.failed;
//     sign = check.sign;
//     if (failed) {
//       return false;
//     }
//   }
// });

    return failed;
};

let day2_2Safe: number = 0;
let day2_2Unsafe: number = 0;

rows.forEach((row: number[]): void => {
    const test: boolean = rowsThing(row);
    test ? day2_2Unsafe++ : day2_2Safe++;
    console.log(row, test);
    console.log('----');
});

console.log('safe', day2_2Safe, 'unsafe', day2_2Unsafe);
