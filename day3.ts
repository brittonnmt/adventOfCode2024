const list = `xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))`;

let total: number = 0;
list.match(/mul\([0-9]*\,[0-9]*\)/gm)?.map(item =>{
  const numbers: string[] = item.match(/[0-9]+/gm) ?? [];
  if (numbers.length === 2) {
    total += +numbers[0] * +numbers[1];
  }
});
console.log(total);
