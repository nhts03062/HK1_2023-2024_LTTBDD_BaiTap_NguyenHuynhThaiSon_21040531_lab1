document.write("<h3>1. In các số từ 1 đến 10:</h3>");
for (let i = 1; i <= 10; i++) {
  document.write(i + " ");
}

document.write("<h3>2. In các số lẻ nhỏ hơn 100:</h3>");
for (let i = 1; i < 100; i += 2) {
  document.write(i + " ");
}

document.write("<h3>3. In bảng cửu chương 7:</h3>");
for (let i = 1; i <= 10; i++) {
  document.write(`7 x ${i} = ${7 * i}<br>`);
}

document.write("<h3>4. In tất cả các bảng cửu chương từ 1 đến 10:</h3>");
for (let i = 1; i <= 10; i++) {
  document.write(`<strong>Bảng nhân ${i}:</strong> <br>`);
  for (let j = 1; j <= 10; j++) {
    document.write(`${i} x ${j} = ${i * j}<br>`);
  }
  document.write(" <br>");
}

document.write("<h3>5. Tính tổng các số từ 1 đến 10:</h3>");
let tong = 0;
for (let i = 1; i <= 10; i++) {
  tong += i;
}
document.write(`Tổng: ${tong}<br>`);

document.write("<h3>6. Tính 10!:</h3>");
let gt = 1;
for (let i = 1; i <= 10; i++) {
  gt *= i;
}
document.write(`10! = ${gt}<br>`);

document.write("<h3>7. Tính tổng các số chẵn lớn hơn 10 và nhỏ hơn 30:</h3>");
let tongsc = 0;
for (let i = 12; i < 30; i += 2) {
  tongsc += i;
}
document.write(`Tổng các số chẵn lớn hơn 10 và nhỏ hơn 30 là ${tongsc}<br>`);

document.write("<h3>8. Chuyển đổi từ Celsius sang Fahrenheit:</h3>");

function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}
document.write(`36°C là ${celsiusToFahrenheit(25)}°F<br>`);

document.write("<h3>9. Chuyển đổi từ Fahrenheit sang Celsius:</h3>");

function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}
document.write(`66°F là ${fahrenheitToCelsius(65)}°C<br>`);

document.write("<h3>10. Tính tổng các số trong một mảng số:</h3>");

function sumArray(numbers) {
  let tongmang = 0;
  for (let i of numbers) {
    tongmang += i;
  }
  return tongmang;
}
document.write(`Tổng mảng: ${sumArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])}<br>`);

document.write("<h3>11. Tính trung bình của các số trong một mảng số:</h3>");

function averageArray(numbers) {
  let tm = sumArray(numbers);
  return tm / numbers.length;
}
document.write(`Trung bình mảng: ${averageArray([1, 2, 3, 4, 5])}<br>`);

document.write("<h3>12. Trả về một mảng chỉ chứa các số dương:</h3>");

function getPositiveNumbers(numbers) {
  return numbers.filter((number) => number > 0);
}
document.write(`[${getPositiveNumbers([-1, 2, -3, 4, 5]).join(", ")}]<br>`);

document.write("<h3>13. Tìm số lớn nhất trong một mảng số:</h3>");

function findMaxNumber(numbers) {
  return Math.max(...numbers);
}
document.write(`${findMaxNumber([1, 2, 3, 4, 5])}<br>`);

document.write("<h3>14. In 10 số Fibonacci đầu tiên không dùng đệ quy:</h3>");

function printFirst10Fibonacci() {
  let fib = [0, 1];
  for (let i = 2; i < 10; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  document.write(`[${fib.join(", ")}]<br>`);
}
printFirst10Fibonacci();

document.write("<h3>15. Tìm số Fibonacci thứ n sử dụng đệ quy:</h3>");

function findNthFibonacci(n) {
  if (n <= 1) return n;
  return findNthFibonacci(n - 1) + findNthFibonacci(n - 2);
}
document.write(`${findNthFibonacci(10)}<br>`);

document.write("<h3>16. Kiểm tra số nguyên tố:</h3>");

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
document.write(`7: ${isPrime(7)}<br>`);
document.write(`4: ${isPrime(4)}<br>`);

document.write("<h3>17. Tính tổng các chữ số của một số nguyên dương:</h3>");

function sumOfDigits(number) {
  return number
    .toString()
    .split("")
    .reduce((sum, digit) => sum + parseInt(digit), 0);
}
document.write(`${sumOfDigits(1234)}<br>`);

document.write("<h3>18. In 100 số nguyên tố đầu tiên:</h3>");

function printFirst100Primes() {
  let primes = [];
  let num = 2;
  while (primes.length < 100) {
    if (isPrime(num)) {
      primes.push(num);
    }
    num++;
  }
  document.write(`[${primes.join(", ")}]<br>`);
}
printFirst100Primes();

document.write(
  "<h3>19. Trả về trong một mảng p số nguyên tố đầu tiên lớn hơn n:</h3>"
);

function getPrimesGreaterThanN(n, p) {
  let primes = [];
  let num = n + 1;
  while (primes.length < p) {
    if (isPrime(num)) {
      primes.push(num);
    }
    num++;
  }
  document.write(`[${primes.join(", ")}]<br>`);
}
getPrimesGreaterThanN(10, 5);

document.write("<h3>20. Xoay một mảng sang trái 1 vị trí:</h3>");

function rotateLeft(arr) {
  let firstElement = arr.shift();
  arr.push(firstElement);
  return arr;
}

let rotatedArray = rotateLeft([5, 4, 3, 2, 1]);
document.write(`Mảng sau khi xoay: [${rotatedArray.join(", ")}]<br>`);

document.write("<h3>21. Xoay một mảng sang phải 1 vị trí:</h3>");

function rotateRight(arr) {
  let lastElement = arr.pop();
  arr.unshift(lastElement);
  return arr;
}

let rotatedRightArray = rotateRight([12, 2, 3, 4, 6]);
document.write(`Mảng sau khi xoay phải: [${rotatedRightArray.join(", ")}]<br>`);

document.write("<h3>22. Đảo ngược một mảng:</h3>");

function reverseArray(arr) {
  return arr.reverse();
}

let reversedArray = reverseArray([5, 4, 3, 2, 1]);
document.write(`Mảng sau khi đảo ngược: [${reversedArray.join(", ")}]<br>`);

document.write("<h3>23. Đảo ngược một chuỗi:</h3>");

function reverseString(str) {
  return str.split("").reverse().join("");
}

let reversedString = reverseString("hello");
document.write(`Chuỗi sau khi đảo ngược: ${reversedString}<br>`);

document.write("<h3>24. Kết hợp hai mảng:</h3>");

function mergeArrays(arr1, arr2) {
  return arr1.concat(arr2);
}

let mergedArray = mergeArrays([7, 11, 2], [6, 3, 6]);
document.write(`Mảng sau khi kết hợp: [${mergedArray.join(", ")}]<br>`);

document.write(
  "<h3>25. Các phần tử có trong một trong hai mảng nhưng không phải cả hai:</h3>"
);

function arrayDifference(arr1, arr2) {
  return arr1
    .filter((x) => !arr2.includes(x))
    .concat(arr2.filter((x) => !arr1.includes(x)));
}
let differenceArray = arrayDifference([1, 2, 3], [2, 3, 4]);
document.write(`Các phần tử khác nhau: [${differenceArray.join(", ")}]<br>`);

document.write(
  "<h3>26. Các phần tử có trong mảng đầu tiên nhưng không có trong mảng thứ hai:</h3>"
);

function arrayDifferenceFirstOnly(arr1, arr2) {
  return arr1.filter((x) => !arr2.includes(x));
}
let differenceFirstOnlyArray = arrayDifferenceFirstOnly([1, 2, 3], [2, 3, 4]);
document.write(
  `Các phần tử chỉ có trong mảng đầu tiên: [${differenceFirstOnlyArray.join(
    ", "
  )}]<br>`
);
