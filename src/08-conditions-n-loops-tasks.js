/* *************************************************************************************************
 *                                                                                                *
 * Plese read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling  *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration              *
 *                                                                                                *
 ************************************************************************************************ */


/**
 * Returns the 'Fizz','Buzz' or an original number using the following rules:
 * 1) return original number
 * 2) but if number multiples of three return 'Fizz'
 * 3) for the multiples of five return 'Buzz'
 * 4) for numbers which are multiples of both three and five return 'FizzBuzz'
 *
 * @param {number} num
 * @return {any}
 *
 * @example
 *   2 =>  2
 *   3 => 'Fizz'
 *   5 => 'Buzz'
 *   4 => 4
 *  15 => 'FizzBuzz'
 *  20 => 'Buzz'
 *  21 => 'Fizz'
 *
 */
function getFizzBuzz(num) {
  const k1 = 3; const k2 = 5;
  const k3 = k1 * k2;
  if (num % k3 === 0) return 'FizzBuzz';
  if (num % k1 === 0) return 'Fizz';
  if (num % k2 === 0) return 'Buzz';
  return num;
  // throw new Error('Not implemented');
}


/**
 * Returns the factorial of the specified integer n.
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   1  => 1
 *   5  => 120
 *   10 => 3628800
 */
function getFactorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * getFactorial(n - 1);
  // throw new Error('Not implemented');
}


/**
 * Returns the sum of integer numbers between n1 and n2 (inclusive).
 *
 * @param {number} n1
 * @param {number} n2
 * @return {number}
 *
 * @example:
 *   1,2   =>  3  ( = 1+2 )
 *   5,10  =>  45 ( = 5+6+7+8+9+10 )
 *   -1,1  =>  0  ( = -1 + 0 + 1 )
 */
function getSumBetweenNumbers(n1, n2) {
  let sum = 0; let
    buf = n1;
  while (buf <= n2) {
    sum += buf;
    buf += 1;
  }
  return sum;
  // throw new Error('Not implemented');
}


/**
 * Returns true, if a triangle can be built with the specified sides a, b, c
 * and false in any other ways.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {bool}
 *
 * @example:
 *   1,2,3    =>  false
 *   3,4,5    =>  true
 *   10,1,1   =>  false
 *   10,10,10 =>  true
 */
function isTriangle(a, b, c) {
  if (a < b + c && b < a + c && c < a + b) return true;
  return false;
  // throw new Error('Not implemented');
}


/**
 * Returns true, if two specified axis-aligned rectangles overlap, otherwise false.
 * Each rectangle representing by object
 *  {
 *     top: 5,
 *     left: 5,
 *     width: 20,
 *     height: 10
 *  }
 *
 *  (5;5)
 *     -------------
 *     |           |
 *     |           |  height = 10
 *     -------------
 *        width=20
 *
 * NOTE: Please use canvas coordinate space (https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#The_grid),
 * it differs from Cartesian coordinate system.
 *
 * @param {object} rect1
 * @param {object} rect2
 * @return {bool}
 *
 * @example:
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top: 5, left: 5, width: 20, height: 20 }    =>  true
 *
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top:20, left:20, width: 20, height: 20 }    =>  false
 *
 */
function doRectanglesOverlap(rect1, rect2) {
  const x1 = rect1.left; const
    x2 = x1 + rect1.width;
  const y1 = rect1.top; const
    y2 = y1 + rect1.height;

  const xx1 = rect2.left; const
    xx2 = xx1 + rect2.width;
  const yy1 = rect2.top; const
    yy2 = yy1 + rect2.height;

  if (x1 >= xx1 || x2 >= xx2) return true;
  if (y1 <= yy1 || y2 <= yy2) return true;
  const n1 = rect2.left; const n2 = rect1.width; const n3 = rect2.width; const
    n4 = rect1.left;
  const n5 = rect2.top; const n6 = rect1.height; const n7 = rect2.height; const
    n8 = rect1.top;
  return !(n1 > n2 || n3 < n4 || n5 > n6 || n7 < n8);
  // throw new Error('Not implemented');
}


/**
 * Returns true, if point lies inside the circle, otherwise false.
 * Circle is an object of
 *  {
 *     center: {
 *       x: 5,
 *       y: 5
 *     },
 *     radius: 20
 *  }
 *
 * Point is object of
 *  {
 *     x: 5,
 *     y: 5
 *  }
 *
 * @param {object} circle
 * @param {object} point
 * @return {bool}
 *
 * @example:
 *   { center: { x:0, y:0 }, radius:10 },  { x:0, y:0 }     => true
 *   { center: { x:0, y:0 }, radius:10 },  { x:10, y:10 }   => false
 *
 */
function isInsideCircle(circle, point) {
  const n1 = (point.x - circle.center.x) ** 2;
  const n2 = (point.y - circle.center.y) ** 2;
  if (n1 + n2 < circle.radius ** 2) return true;
  return false;
  // throw new Error('Not implemented');
}


/**
 * Returns the first non repeated char in the specified strings otherwise returns null.
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 *   'The quick brown fox jumps over the lazy dog' => 'T'
 *   'abracadabra'  => 'c'
 *   'entente' => null
 */
function findFirstSingleChar(str) {
  let buf; const
    repeat = [];
  for (let i = 0; i < str.length; i += 1) {
    buf = str[i];
    if (str.indexOf(buf, i + 1) !== -1) repeat.push(str[i]);
    if (str.indexOf(buf, i + 1) === -1 && repeat.indexOf(buf) === -1) return buf;
  }
  return null;
  // throw new Error('Not implemented');
}


/**
 * Returns the string representation of math interval,
 * specified by two points and include / exclude flags.
 * See the details: https://en.wikipedia.org/wiki/Interval_(mathematics)
 *
 * Please take attention, that the smaller number should be the first in the notation
 *
 * @param {number} a
 * @param {number} b
 * @param {bool} isStartIncluded
 * @param {bool} isEndIncluded
 * @return {string}
 *
 * @example
 *   0, 1, true, true   => '[0, 1]'
 *   0, 1, true, false  => '[0, 1)'
 *   0, 1, false, true  => '(0, 1]'
 *   0, 1, false, false => '(0, 1)'
 * Smaller number has to be first :
 *   5, 3, true, true   => '[3, 5]'
 *
 */
function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
  let str = '';

  if (isStartIncluded) str += '[';
  else str += '(';

  if (a < b) {
    str += a;
    str += ', ';
    str += b;
  } else {
    str += b;
    str += ', ';
    str += a;
  }

  if (isEndIncluded) str += ']';
  else str += ')';
  return str;
  // throw new Error('Not implemented');
}


/**
 * Reverse the specified string (put all chars in reverse order)
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 * 'The quick brown fox jumps over the lazy dog' => 'god yzal eht revo spmuj xof nworb kciuq ehT'
 * 'abracadabra' => 'arbadacarba'
 * 'rotator' => 'rotator'
 * 'noon' => 'noon'
 */
function reverseString(/* str */) {
  throw new Error('Not implemented');
}


/**
 * Reverse the specified integer number (put all digits in reverse order)
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   12345 => 54321
 *   1111  => 1111
 *   87354 => 45378
 *   34143 => 34143
 */
function reverseInteger(num) {
  const arr = [];
  let i = 0;
  let buf = num;
  while (buf > 0) {
    arr[i] = buf % 10;
    buf = Math.floor(buf / 10);
    i += 1;
  }
  return +arr.join('');
  // throw new Error('Not implemented');
}


/**
 * Validates the CCN (credit card number) and return true if CCN is valid
 * and false otherwise.
 *
 * See algorithm here : https://en.wikipedia.org/wiki/Luhn_algorithm
 *
 * @param {number} cnn
 * @return {boolean}
 *
 * @example:
 *   79927398713      => true
 *   4012888888881881 => true
 *   5123456789012346 => true
 *   378282246310005  => true
 *   371449635398431  => true
 *
 *   4571234567890111 => false
 *   5436468789016589 => false
 *   4916123456789012 => false
 */
function isCreditCardNumber(ccn) {
  const regex = new RegExp('^[0-9]{16}$');
  if (!regex.test(ccn)) return false;
  let sum = 0;
  for (let i = 0; i < ccn.length; i += 1) {
    let cardNum = parseInt(ccn.substr(i, 1), 10);

    if (i % 2 === 0) {
      cardNum *= 2;

      if (cardNum > 9) {
        cardNum = 1 + (cardNum % 10);
      }
    }

    sum += cardNum;
  }
  if (sum % 10 === 0) return true;
  return false;
  // throw new Error('Not implemented');
}

/**
 * Returns the digital root of integer:
 *   step1 : find sum of all digits
 *   step2 : if sum > 9 then goto step1 otherwise return the sum
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   12345 ( 1+2+3+4+5 = 15, 1+5 = 6) => 6
 *   23456 ( 2+3+4+5+6 = 20, 2+0 = 2) => 2
 *   10000 ( 1+0+0+0+0 = 1 ) => 1
 *   165536 (1+6+5+5+3+6 = 26,  2+6 = 8) => 8
 */
function getDigitalRoot(num) {
  let i = 0; let
    sum = 0;
  let buf = num;
  const arr = [];
  while (buf > 0) {
    arr[i] = buf % 10;
    buf = Math.floor(buf / 10);
    i += 1;
  }
  arr.reverse();
  for (let j = 0; j < arr.length; j += 1) {
    sum += arr[j];
  }
  if (sum > 9) return getDigitalRoot(sum);
  return sum;
  // throw new Error('Not implemented');
}


/**
 * Returns true if the specified string has the balanced brackets and false otherwise.
 * Balanced means that is, whether it consists entirely of pairs of opening/closing brackets
 * (in that order), none of which mis-nest.
 * Brackets include [],(),{},<>
 *
 * @param {string} str
 * @return {boolean}
 *
 * @example:
 *   '' => true
 *   '[]'  => true
 *   '{}'  => true
 *   '()   => true
 *   '[[]' => false
 *   ']['  => false
 *   '[[][][[]]]' => true
 *   '[[][]][' => false
 *   '{)' = false
 *   '{[(<{[]}>)]}' = true
 */
function isBracketsBalanced(str) {
  const bCon = [['(', ')'], ['[', ']'], ['{', '}'], ['<', '>']];
  const stack = [];
  for (let i = 0; i < str.length; i += 1) {
    for (let j = 0; j < bCon.length; j += 1) {
      if (str[i] === bCon[j][0]) {
        if (bCon[j][1] === stack[stack.length - 1] && bCon[j][0] === bCon[j][1]) {
          stack.pop();
        } else {
          stack.push(bCon[j][0]);
        }
      }
      if (str[i] === bCon[j][1]) {
        if (stack.pop() !== bCon[j][0]) return false;
      }
    }
  }
  return !stack.length;
  // throw new Error('Not implemented');
}


/**
 * Returns the string with n-ary (binary, ternary, etc, where n <= 10)
 * representation of specified number.
 * See more about
 * https://en.wikipedia.org/wiki/Binary_number
 * https://en.wikipedia.org/wiki/Ternary_numeral_system
 * https://en.wikipedia.org/wiki/Radix
 *
 * @param {number} num
 * @param {number} n, radix of the result
 * @return {string}
 *
 * @example:
 *   1024, 2  => '10000000000'
 *   6561, 3  => '100000000'
 *    365, 2  => '101101101'
 *    365, 3  => '111112'
 *    365, 4  => '11231'
 *    365, 10 => '365'
 */
function toNaryString(num, n) {
  const abc = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  let str = '';
  const mas = abc.slice(0, n);
  const buf = n;
  let numBuf = num;
  while (numBuf > 0) {
    str = String(str) + mas[numBuf % buf];
    numBuf = Math.floor(numBuf / buf);
  }
  return str.split('').reverse().join('');
  // throw new Error('Not implemented');
}


/**
 * Returns the commom directory path for specified array of full filenames.
 *
 * @param {array} pathes
 * @return {string}
 *
 * @example:
 *   ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
 *   ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
 *   ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
 *   ['/web/favicon.ico', '/web-scripts/dump', '/webalizer/logs'] => '/'
 */
function getCommonDirectoryPath(/* pathes */) {
  throw new Error('Not implemented');
}


/**
 * Returns the product of two specified matrixes.
 * See details: https://en.wikipedia.org/wiki/Matrix_multiplication
 *
 * @param {array} m1
 * @param {array} m2
 * @return {array}
 *
 * @example:
 *   [[ 1, 0, 0 ],       [[ 1, 2, 3 ],           [[ 1, 2, 3 ],
 *    [ 0, 1, 0 ],   X    [ 4, 5, 6 ],     =>     [ 4, 5, 6 ],
 *    [ 0, 0, 1 ]]        [ 7, 8, 9 ]]            [ 7, 8, 9 ]]
 *
 *                        [[ 4 ],
 *   [[ 1, 2, 3]]    X     [ 5 ],          =>     [[ 32 ]]
 *                         [ 6 ]]
 *
 */
function getMatrixProduct(m1, m2) {
  const rowM1 = m1.length;
  const rowM2 = m2.length;
  const colM2 = m2[0].length;
  const matrix = [];
  for (let i = 0; i < rowM1; i += 1) matrix[i] = [];
  for (let k = 0; k < colM2; k += 1) {
    for (let i = 0; i < rowM1; i += 1) {
      let t = 0;
      for (let j = 0; j < rowM2; j += 1) {
        t += m1[i][j] * m2[j][k];
      }
      matrix[i][k] = t;
    }
  }
  return matrix;
  // throw new Error('Not implemented');
}


/**
 * Returns the evaluation of the specified tic-tac-toe position.
 * See the details: https://en.wikipedia.org/wiki/Tic-tac-toe
 *
 * Position is provides as 3x3 array with the following values: 'X','0', undefined
 * Function should return who is winner in the current position according to the game rules.
 * The result can be: 'X','0',undefined
 *
 * @param {array} position
 * @return {string}
 *
 * @example
 *
 *   [[ 'X',   ,'0' ],
 *    [    ,'X','0' ],       =>  'X'
 *    [    ,   ,'X' ]]
 *
 *   [[ '0','0','0' ],
 *    [    ,'X',    ],       =>  '0'
 *    [ 'X',   ,'X' ]]
 *
 *   [[ '0','X','0' ],
 *    [    ,'X',    ],       =>  undefined
 *    [ 'X','0','X' ]]
 *
 *   [[    ,   ,    ],
 *    [    ,   ,    ],       =>  undefined
 *    [    ,   ,    ]]
 *
 */
function evaluateTicTacToePosition(/* position */) {
  throw new Error('Not implemented');
}


module.exports = {
  getFizzBuzz,
  getFactorial,
  getSumBetweenNumbers,
  isTriangle,
  doRectanglesOverlap,
  isInsideCircle,
  findFirstSingleChar,
  getIntervalString,
  reverseString,
  reverseInteger,
  isCreditCardNumber,
  getDigitalRoot,
  isBracketsBalanced,
  toNaryString,
  getCommonDirectoryPath,
  getMatrixProduct,
  evaluateTicTacToePosition,
};
