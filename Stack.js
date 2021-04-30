class Stack {
  constructor() {
    this.val = []
  }

  push(val) {
    this.val.push(val)
  }

  pop() {
    return this.val.pop()
  }

  get length() {
    return this.val.length
  }
}

const OPERATORS = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b
}
/**
 * @param {string} expression
 */
function computor(expression) {
  const nums = new Stack()
  const operators = new Stack()
  for (const i of expression.split('').reverse()) {
    if (/\d/.test(i)) {
      nums.push(Number(i))
    }
    if (OPERATORS[i]) {
      operators.push(OPERATORS[i])
    }
  }
  while (operators.length) {
    const op = operators.pop()
    const b = nums.pop()
    const a = nums.pop()
    nums.push(op(a, b))
  }
  return nums.pop()
}

console.log(computor('1 + 2 - 3 + 4'))

/**
 * 检查公式的括号是否正确
 * @param {string} expression 
 */
function checkBrackets(expression) {
  const stack = new Stack()
  for (const i of expression) {
    if (i === '(') {
      stack.push(i)
    }
    if (i === ')') {
      if (!stack.length) return false
      stack.pop()
    }
  }
  return !stack.length
}

console.log(checkBrackets('(2)')) 
console.log(checkBrackets('((2))()'))
console.log(checkBrackets('(2'))
console.log(checkBrackets('(2))'))