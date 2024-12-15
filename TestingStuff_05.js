let a = 1;
let b = 1;
console.log(a++);
console.log(b++);
console.log(a);
console.log(b);


/* 

Binary and Unary Operators

A binary operator is an operator that performs an operation involving two operands (e.g., variables, arrays, objects, etc.). Binary means "two."
For example:
let result = a + b; // '+' is a binary operator, requiring two operands (a and b).

A unary operator is an operator that performs an operation involving a single operand (e.g., a variable, array, or object). Unary means "one."
For example:
a++; // '++' is a unary operator, modifying a single operand (a).



so how many type of oeprators are there
ChatGPT said:
ChatGPT
There are several types of operators in JavaScript (and programming in general), each serving different purposes. Here’s a breakdown of the main types:

1. Arithmetic Operators
Used for mathematical operations.

+ (addition)
- (subtraction)
* (multiplication)
/ (division)
% (modulo, remainder)
++ (increment)
-- (decrement)


2. Assignment Operators
Used to assign values to variables.

= (simple assignment)
+= (addition assignment)
-= (subtraction assignment)
*= (multiplication assignment)
/= (division assignment)
%= (modulo assignment)
**= (exponentiation assignment)


3. Comparison Operators
Used to compare values and return a boolean (true/false).

== (equal to)
=== (strict equal to)
!= (not equal to)
!== (strict not equal to)
> (greater than)
< (less than)
>= (greater than or equal to)
<= (less than or equal to)


4. Logical Operators
Used for logical operations, often with boolean values.

&& (logical AND)
|| (logical OR)
! (logical NOT)


5. Unary Operators
Operate on a single operand (value).

++ (increment)
-- (decrement)
+ (unary plus, converts a value to a number)
- (unary minus, negates a number)
! (logical NOT)
typeof (checks the type of a variable)
delete (deletes a property from an object)


6. Ternary Operator
A shorthand for an if-else statement. It takes three operands.

condition ? expr1 : expr2
(If condition is true, evaluate expr1, else evaluate expr2)


7. Bitwise Operators
Perform bit-level operations.

& (bitwise AND)
| (bitwise OR)
^ (bitwise XOR)
~ (bitwise NOT)
<< (left shift)
>> (right shift)
>>> (unsigned right shift)
8. String Operators
Used to manipulate strings.

+ (string concatenation)
+= (concatenate and assign)


9. Type Operators
Used to check types and handle type conversions.

typeof (checks the type of a value)
instanceof (checks if an object is an instance of a class)


10. Comma Operator
Evaluates multiple expressions and returns the result of the last one.

, (e.g., x = (a = 1, b = 2, a + b) results in x = 3)


11. Spread and Rest Operators
Used for working with collections like arrays and objects.

... (spread operator for unpacking values, rest operator for collecting them)


12. Destructuring Assignment
Technically not a single operator, but often considered an operator-like syntax for extracting values from arrays or objects.

const {x, y} = obj; (object destructuring)
const [a, b] = arr; (array destructuring)


*/