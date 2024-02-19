def sum_even_elements(arr):
    sum_even = 0
    for num in arr:
        if num % 2 == 0:
            sum_even += num
    return sum_even

# Пример использования
array = [1, 2, 3, 4, 5, 6]
result = sum_even_elements(array)
print(result)
