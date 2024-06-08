const Stack = require("../lib/stack");

const match = (expression) => {
    // initialize a new empty stack
    const stack = new Stack();
    // start a loop to iterate thru each char in the expression
    for (let index = 0, limit = expression.length; index < limit; index++) {
    // if the current char is '('
        if (expression[index] === "(") {
            // push it onto the stack
            stack.push("(");
        } else {
            // if the current char is ')'
            if (expression[index] === ")") {
                // if the stack isn't empty
                if (stack.top) {
                    // pop one item off the stack
                    stack.pop();
                } else {
                return false;
                }
            }
        }
    }
    return !stack.top;
};

module.exports = match;
