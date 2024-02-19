function sumEvenElements(arr) {
    let sumEven = 0;
    arr.forEach(num => {
        if (num % 2 === 0) {
            sumEven += num;
        }
    });
    return sumEven;
}
// Найти сумму четных элементов массива on javascript
// Пример использования
const array = [1, 2, 3, 4, 5, 6];
const result = sumEvenElements(array);
console.log(result);
