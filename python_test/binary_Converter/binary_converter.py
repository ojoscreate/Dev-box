import random

# generating the random binary number
binary_digit = [random.choice(["0", "1"]) for _ in range(4)]

# joining ans putting to get to one form/ dtring

binary = "".join(binary_digit)

# converting to base 10

base_10 = int(binary,base=2)

print(f"The generated binary number: {binary}")
print(f"Converted to base 10: {base_10} ")