const Stack = require("../lib/stack");

const precedence = {
    "+": 0,
    "-": 0,
    "*": 1,
    "/": 1,
};

const postfix = (expression) => {
    // declare variable 'stack' and initialize it to a new stack
    const stack = new Stack();
    // declare variable 'result' and initialize it to an empty array
    const result = [];
    // ignore spaces
    expression = expression.replace(/\s/g, "");

    // iterate through each char in the expression
    expression.split("").forEach((character) => {
        // if current char is '('
        if (character === "(") {
            // push it onto the stack
            stack.push(character);
        } else {
            // if current char is ')'
            if (character === ")") {
                let top = stack.pop();
                // start popping chars off the stack until you find '('
                while (top !== "(") {
                    // add each char to the 'result' but do not add parantheses to 'result'
                    result.push(top);
                    top = stack.pop();
                }
            } else {
                // if current char is an operator
                if ("+-*/".includes(character)) {
                    // look at the operator at the top of the stack
                    if (
                    // if the stack is empty
                    !stack.top ||
                    // or if the top of the stack is '('
                    stack.top.value === "(" ||
                    // or if the current operator has higher precedence than operator on top of the stack
                    precedence[character] > precedence[stack.top.value]
                    ) {
                        // then push the current operator onto the stack
                        stack.push(character);
                    } else {
                        // otherwise start popping operators off the stack if the stack is not empty
                        // and the popped operator has higher/equal precedence to the current operator
                        while (stack.top && precedence[stack.top.value] >= precedence[character]) {
                            // each popped operator is added to 'result'
                            result.push(stack.pop());
                        }
                        // push the current operator onto the stack
                        stack.push(character);
                    }
                } else {
                    // if current char is an operand, add it to 'result'
                    result.push(character);
                }
            }
        }
    });
    // pop any remaining operators from the stack
    while (stack.top) {
        // add them to 'result'
        result.push(stack.pop());
    }
    // return 'result' as a string
    return result.join(" ");
};

module.exports = postfix;
