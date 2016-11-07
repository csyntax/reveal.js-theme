<!-- section start -->

<!-- attr: {id: 'title', class: 'slide-title', hasScriptWrapper: true} -->

#   Operators and Expression
##    Bitwise, Logical, Comparison
<div class="signature">
    <p class="signature-course">C++ Fundamentals</p>
    <p class="signature-initiative">Telerik Algo Academy</p>
    <a href="http://academy.telerik.com" class="signature-link">http://academy.telerik.com</a>
</div>

<!-- section start -->
<!-- attr: {id: 'table-of-contents'} -->
#   Table of Contents

*   Logical operators
    *   `||`, `&&`, `!`
*   Comparison operators
    *   `>`, `>=`, `<`, `<=`, `==`, `!=`
*   Bitwise operators
    *   `|`, `&`, `~`, `^`, `<<`, `>>`
*   Other operators
    *   Arithmetic operators
    *   Assignment operators
*   Operator priority

<!-- section start -->

<!-- attr: {class: 'slide-section', id: 'operators', showInPresentation: true} -->
<!-- #   Operators in C++
##    Arithmetic, Logical, Comparison, Assignment, etc... -->

#   What is an Operator?

*   Operator is an operation performed over data at runtime
    *   Takes on or more arguments (operands)
    *   Produces a new value
*   Operators have precedence
    *   Precedence defines which operation will be evaluated first
*   Expressions are sequences of operators and operands that are evaluated to a single value

#   Operators in C++

*   Operators in C++
    *   **Unary** operators - take one operand
    *   **Binary** operators- take two operands
    *   The **Ternary** operator (`?:`) - takes three operands
*   Except for the assignment operators, all binary operators are left-associative
*   The assignment operators and the ternary operator (?:) are right-associative

<!-- attr: {style: 'font-size:42px'} -->
#   Categories of Operators in C++
  
| Category             | Operators                               |
| -------------------- | --------------------------------------- |
| Arithmetic           | `+` `-` `*` `/` `%` `++` `--`           |
| Logical              | `&&` `^` `!`                            |
| Binary               | `&` `^` `~` `<<` `>>`                   |
| Comparison           | `==` `!=` `<` `>` `<=` `>=`             |
| Assignment           | `=` `+=` `-=` `*=` `/=` `&=` `^=` `>>=` |
| String concat        | `+`                                     |
| Other                | `.` `[]` `()` `?:` `new`                |

<!-- section start -->

<!-- attr: {class: 'slide-section', id: 'arithmetic-operators',showInPresentation:true } -->
<!-- #   Arithmetic Operators 
##    Like in math -->

#   Arithmetic Operators

*   Arithmetic operators `+`, `-`, `*` are as in math
*   Division operator `/`
    *   On **integers** returns **integer** (without rounding) or **exception**
    *   On **real numbers** returns **real number**,  **inf** or **nan**
*   Remainder operator `%` returns the remainder from division of integers
*   The `++`operator increments a variable with `1`

<!-- attr: { hasScriptWrapper: true} -->
#   Arithmetic Operators - Examples

*  _Example:_ Perimeter and area of a square

```cpp
int squarePerimeter = 17;
double squareSide = squarePerimeter / 4.0;
double squareArea = squareSide * squareSide;
cout << squareSide << endl; //prints 4.25

cout << squareArea << endl; // prints 18.0625
```
<!-- .element: style="font-size:1.05rem" -->

*   _Example:_ Arithmetic operators with integer numbers

```cpp
int a = 5;
int b = 4;
cout << a + b << endl; //prints 9
cout << a + b++ << endl; //prints 9
cout << a + b << endl; // prints 10
cout << a + (++b) << endl; //prints 11
cout << a + b << endl; // prints 11

cout << 12 / 3 << endl; // 4
cout << 11 / 3 << endl; // 3
```
<!-- .element: style="font-size:1.1rem" -->

<!-- attr: { hasScriptWrapper: true, showInPresentation: true} -->
<!-- #   Arithmetic Operators - Examples -->

*   _Example:_ Arithmetic operators with floating-point numbers

```cpp
cout << 11.0 / 3 << endl; // prints 3.666666667
cout << 11 / 3.0 << endl; // prints 3.666666667
cout << 11 % 3 << endl;   // prints 2
cout << 11 % -3 << endl;  // prints 2
cout << -11 % 3 << endl;  // prints -2
```

*   _Example:_ Arithmetic operators resulting to `inf` or `nan`

```cpp
cout <<1.5 / 0.0<< endl;  // prints inf
cout <<-1.5 / 0.0<< endl; // prints -inf
cout <<0.0 / 0.0<< endl;  // prints nan

int x = 0;
cout << 5 / x << endl; // throws exception
```

<!-- attr: {class: 'slide-section', showInPresentation: true} -->
<!-- #   Arithmetic Operators -->
##    Live Demo

<!-- section start -->

<!-- attr: {class: 'slide-section', showInPresentation: true} -->
<!-- #   Logical Operators
##    true or false -->

<!-- attr: {hasScriptWrapper: true} -->
#   Logical Operators

*   Logical operators **take boolean operands** and **return boolean** result
*   Used to create complex expressions
*   Operator `!` turns `true` to `false` and `false`
to `true`

#   Logical Operators - OR

*   The result of OR is:
    *   `true` if any of the operands is `true`
    *   `false` if all the operands are `false`
    
| Operation          | Result     |
| :----------------: | ---------- |
| false **II** false | **false**  |
| false **II** true  | **true**   |
| true **II** false  | **true**   |
| true **II** true   | **true**   |

#   Logical Operators - AND

*   The result of AND is:
    *   `true` only if all of the operands are `true`
    *   `false` if any of the operands is `false`
    
| Operation          | Result     |
| :----------------: | ---------- |
| false **&&** false | **false**  |
| false **&&** true  | **false**  |
| true **&&** false  | **false**  |
| true **&&** true   | **true**   |
    
#   Logical Operators - XOR

*   The result of XOR is:
    *   `true` if the two operands have different values
    *   `false` if the two operands have equal values
    
| Operation         | Result     |
| :---------------: | ---------- |
| false **^** false | **false**  |
| false **^** true  | **true**   |
| true **^** false  | **true**   |
| true **^** true   | **false**  |

<!-- attr: {hasScriptWrapper: true} -->
#   Logical Operators: Example

*   _Example_
```cpp
bool a = true;
bool b = false;
cout << (a && b) << endl; // false
cout << (a || b) << endl; // true
cout << (a ^ b) << endl; // true
cout << (!b) << endl; // true
cout << (b || true) << endl; // true
cout << (b && true) << endl; // false
cout << (a || true) << endl; // true
cout << (a && true) << endl; // true
cout << (!a) << endl; // false
cout << ((5>7) ^ (a==b)) << endl; // false
```

<!-- attr: {class: 'slide-section', showInPresentation: true} -->
<!-- #   Logical Operators -->
##    Live Demo

<!-- section start -->

<!-- attr: {class: 'slide-section', id: 'bitwise-operators', showInPresentation:true} -->
<!-- #   Bitwise Operators
##    Working with bits -->

#   Bitwise Operators

*   Bitwise operator ~ turns all 0 to 1 and all 1 to 0
    *   Like `!` for boolean expressions but **bit by bit**
*   The operators `|`, `&` and `^` behave like `||`, `&&` and `^` for boolean expressions but **bit by bit**
*   The `<<` and `>>` **move the bits** (left or right)

#   Bitwise Operators - OR

*   Much like logical OR, but bit by bit:
  
| Operation | Result bit |
| :-------: | ---------- |
| 0 **I** 0 | 0          |
| 0 **I** 1 | 1          |
| 1 **I** 0 | 1          |
| 1 **I** 1 | 1          |

#   Bitwise Operators - AND

*   Much like logical AND, but bit by bit:
  
| Operation | Result bit |
| :-------: | ---------- |
| 0 **&** 0 | 0          |
| 0 **&** 1 | 0          |
| 1 **&** 0 | 0          |
| 1 **&** 1 | 1          |


#   Bitwise Operators - XOR

*   Much like logical XOR, but bit by bit:
  
| Operation | Result bit |
| :-------: | ---------- |
| 0 **^** 0 | 0          |
| 0 **^** 1 | 1          |
| 1 **^** 0 | 1          |
| 1 **^** 1 | 0          |

<!-- attr: {hasScriptWrapper: true} -->
#   Bitwise Operators Example:

*   Bitwise operators are used on integer numbers (short, char, int, long, long long, etc...)
*   Bitwise operators **are applied bit by bit**
*   _Examples_

```cpp
int a = 3;                    // 00000000 00000011
int b = 5;                    // 00000000 00000101
cout << ( a | b) << endl;     // 00000000 00000111
cout << (a & b) << endl;      // 00000000 00000001
cout << (a ^ b) << endl;      // 00000000 00000110
cout << (~a & b) << endl;     // 00000000 00000100
cout << (a << 1) << endl;     // 00000000 00000110
cout << (a >> 1) << endl;     // 00000000 00000001
```

<!-- attr: {class: 'slide-section', showInPresentation:true} -->
<!-- #   Bitwise Operators OR, AND and XOR -->
##    Live Demo

#   Bitwise Operators - Shift left, shift right

*   Bitwise shift operators (`<<` and `>>`) are performed on integer numbers
    *   They move the bits by provided number to the left or right
    *   _Example:_
    
| Operation  | Result | Explanation |
| :--------: | ------ | ------------------------------------- |
| 7 **<<** 2 | 28      | **0000 0111** is shifted 2 bits to the left and becomes **0001 1100** |
| 27 **>>** 2 | 6      | **0001 1011** is shifted 2 bits to the right and becomes **0000 0110** |

<!-- attr: { class: 'slide-section', showInPresentation: true} -->
<!-- #   Bitwise Shift Operators -->
##    Live Demo

<!-- section start -->

<!-- attr: {class: 'slide-section', id: 'comparison-operators', showInPresentation:true} -->
<!-- #   Comparison Operators
##    Comparing values -->

#   Comparison Operators

*   Comparison operators are used to compare variables
`==`, `<`, `>`, `>=`, `<=`, `!=`
    *   They are the same as in math
*   _Example:_
```cpp
int a = 5;
int b = 4;
cout << (a >= b) << endl; // true
cout << (a != b) << endl; // true
cout << (a == b) << endl; // false
cout << (a == a) << endl; // true
cout << (a != ++b) << endl; // false
cout << (a > b) << endl; // false
```

<!-- attr: {class: 'slide-section', showInPresentation:true} -->
<!-- #   Comparison Operators -->
##    Live Demo

<!-- section start -->

<!-- attr: {class:'slide-section', id: 'assignment-operators', showInPresentation: true} -->
<!-- #   Assignment Operators
##    Assigning values -->

#   Assignment Operators

*   Assignment operators are used to **assign a value** to a variable ,
    *   `=`, `+=`, `-=`, `|=`, ...
*  _Example:_

```cpp
int x = 6;
int y = 4;
cout << (y *= 2) << endl; // 8
int z = y = 3; // y=3 and z=3
cout << (z); // 3
cout << (x |= 1) << endl; // 7
cout << (x += 3) << endl; // 10
cout << (x /= 2) << endl; // 5
```
<!-- attr: {class: 'slide-section', showInPresentation: true} -->
<!-- #   Assignment Operators -->
##    Live Demo

<!-- section start -->

<!-- attr: {class: 'slide-section', id: 'other-operators', showInPresentation: true} -->
<!-- #   Other Operators
##    `new`, `()`, etc... -->

#   Other Operators

*   Member access operator  `.`  is used to **access object members**
*   Square brackets `[]` are used with **array's indexers**
*   Parentheses `( )` are used to **override the default operator precedence**
*   Class cast operator `(type)` is used to **cast one compatible type to another**
*   Conditional operator `?:` returns a **value base on an bool expression**
*   The `new` operator is used to **create new objects**

<!-- attr: {class: 'slide-section', showInPresentation: true} -->
<!-- #   Other Operators -->
##    Live Demo

<!-- section start -->

<!-- attr: {class: 'slide-questions', id:"questions"} -->
#   Operators and Expression
##    Questions
