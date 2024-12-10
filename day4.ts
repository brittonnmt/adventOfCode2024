const day4List =
    `MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX`;

let grid: string[][] = [];

//////////////////
const horizontal: number = day4List.match(/XMAS|SAMX/gm)?.length || 0;

//////////////////
const verticalArray: string[] = [];
day4List.split('\n')?.forEach((row: string, rowKey: number): void => {
    row.split('').forEach((column: string, columnKey: number): void => {
        verticalArray[columnKey] = (verticalArray[columnKey] || '') + column;
        if (!grid[rowKey]) {
            grid[rowKey] = [];
        }
        grid[rowKey][columnKey] = column;
    });
});

const vertical: number = verticalArray.join('|')?.match(/(?=(XMAS|SAMX))/gm)?.length || 0;

//////////////////
const searchDiagonal = (row: number, column: number): number => {
    const word = 'XMAS';
    const directions: number[][] = [[1, 1], [1, -1], [-1, -1], [-1, 1]];
    let count: number = 0;
    directions.map((direction: number[]): void => {
        for (let i: number = 0; i < word.length; i++) {
            const nRow: number = row + i * direction[0];
            const nCol: number = column + i * direction[1];
            if (
                (nRow < 0 || nRow > grid.length) ||
                (nCol < 0 || nCol > grid[0].length) ||
                grid[nRow] && grid[nRow][nCol] !== word[i]
            ) {
                return;
            }
        }
        count++;
        return;
    });
    return count;
}

let diagonal: number = 0;
grid.forEach((row: string[], rowKey: number): void => {
    row.forEach((_column: string, columnKey: number): void => {
        diagonal += searchDiagonal(rowKey, columnKey);
    });
});

console.log(horizontal + vertical + diagonal);
