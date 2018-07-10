/**
 * General Base operation for a binary operation.
 */
class BaseOperation {
  constructor(token, precendece, func) {
    this.token_ = token;
    this.precendece_ = precedence;
    this.func_ = func;
  }

  token() {
    return this.token_;
  }

  precedence() {
    return this.precedence_;
  }

  execute(a, b) {
    return this.func_(a,b);
  }
}


const addOperation = BaseOperation('+', 0, (a, b) => a + b);
const subOperation = BaseOperation('-', 0, (a, b) => a - b);
const multOperation = BaseOperation('*', 1, (a, b) => a * b);
const divOperation = BaseOperation('/', 1, (a, b) => a / b);

