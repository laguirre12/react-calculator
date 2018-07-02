
// TODO(la): implement this...
// reports whether a string is an operand
function is_operand(operand) {
  return false;
}

// TODO(la): implement this
// reports whether a string is an operator
function is_operator(operator) {
  return false;
}

// TODO(la): implement this...
// converts a string expression to an array of operands, operators, etc.
function split_expression(expression) {
  return expression.split('');
}

// evaluate a string expression
function evaluate(expression) {
  const operands = [];
  const operations = [];
  const tokens = split_expression(expression);
  tokens.forEach(token => {
    if (is_operand(token)) {
      operands.push(token);
    } else if (token === '(') {
      operations.push(token);
    } else if (is_operator(token)) {
      /*
       * while operator on top of operators stack is not a smaller precendece than this character
       *   pop operator from operator stack
       *   pop two operands op1 and op2 from operand stack
       *   store (op1 op op2) on the operand stack
       */
    }  else if (operator === ')') {
      /*
       * while operator on top of operators stack does not equal '('
       *   pop operator from operator stack
       *   pop two operands op1 and op2 from operand stack
       *   store (op1 op op2) on the operand stack
       */
    }
  });
}

module.exports = evaluate;
