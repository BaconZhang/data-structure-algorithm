/**
 * 斐波那契数列 1,1,2,3,5,8,13,21
 * @param {number} n
 */
function f(n) {
  if (n === 1) return 1
  if (n === 2) return 1
  return f(n - 1) + f(n - 2)
}
/**
 * 斐波那契数列 动态规划 1,1,2,3,5,8,13,21
 * @param {*} n 
 */
function f2(n) {
  let a = 0
  let b = 1
  for (let i = 0; i < n; i++) {
    let temp = a
    a = b
    b = temp + b
  }
  return a
}
