module.exports = function getZerosCount(number, base) {
  let nulls = Number.MAX_VALUE;
  let b = base;
  for ( let i = 2; i <= base; i++) {
      if (b % i == 0) {
          let p = 0;
          while (b % i == 0) {
              b = b / i;
              p++;
          }
          let a = 0;
          let m = Math.floor(number / i);
          while (m > 0) {
              a += m;
              m = Math.floor(m / i);

          }
          nulls = Math.min(nulls, Math.floor(a / p))
      }
  }
        return nulls;
};