const list = 
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
const horizontal: number = list.match(/XMAS|SAMX/gm)?.length || 0;

//////////////////
const verticalArray: string[] = [];
list.split('\n')?.forEach((row, rowKey) => {
  row.split('').forEach((column, columnKey) => {
    verticalArray[columnKey] = (verticalArray[columnKey] || '') + column;
    if (!grid[rowKey]) {
      grid[rowKey] = [];
    }
    grid[rowKey][columnKey] = column;
  });
});

const vertical: number = verticalArray.join('|')?.match(/(?=(XMAS|SAMX))/gm)?.length || 0;

//////////////////
const searchDiagonal = (row: number, column: number) => {
  const word = 'XMAS';
  const directions = [[1, 1], [1, -1], [-1,-1], [-1, 1]];
  let count = 0;
  directions.map((direction) => {
    for (let i = 0; i < word.length; i++) {
      const nRow = row + i * direction[0];
      const nCol = column + i * direction[1];
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

let diagonal = 0;
grid.forEach((row, rowKey) => {
    row.forEach((_column, columnKey) => {      
      diagonal += searchDiagonal(rowKey, columnKey);
    });
});

const total = horizontal + vertical + diagonal;
console.log(total);
