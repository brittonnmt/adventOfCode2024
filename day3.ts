const day3List = `xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))`;
let day3Total: number = 0;

day3List.match(/mul\([0-9]*,[0-9]*\)/gm)?.map((item: string): void => {
    const numbers: string[] = item.match(/[0-9]+/gm) ?? [];
    if (numbers.length === 2) {
        day3Total += +numbers[0] * +numbers[1];
    }
});

console.log(day3Total);
