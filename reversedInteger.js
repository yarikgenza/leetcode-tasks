/**
  * Reversed integers
  *
  * Reverse digits of an integer.
  * If Integer overflows - return 0.
  *
  * @param {number} n
  */

const reversed = (n) => {
  const maxInteger = 2147483647; // max value of 32-bits Integer.
  let isNegative = false;
  if (n < 0) {
    isNegative = true;
    n = -n;
  };
  for (var r=0; n; n= Math.floor(n / 10)) {
    r *= 10;
    r += n % 10;
  };
  if (r > maxInteger) { return 0; };
  return isNegative ? -r : r;
}

console.log(reversed(123))
