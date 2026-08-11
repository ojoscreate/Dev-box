def fibonacci_50sum():
    
    # starting the sequence
    fibonacci_start = []
    while len(fibonacci_start) < 50:
        
        if len(fibonacci_start) == 0:# appending first number
            fibonacci_start.append(0)
        elif len(fibonacci_start) == 1:# appending second number
            fibonacci_start.append(1)
        else: # appending the rest number
            next_sum = fibonacci_start[-1] + fibonacci_start[-2]
            fibonacci_start.append(next_sum)
        # total of all numbers in the array 
    total_sum = sum(fibonacci_start)
    return total_sum
    
result = fibonacci_50sum()

print(f"The sum of the first 50 Fibinacci sequence number is {result}")