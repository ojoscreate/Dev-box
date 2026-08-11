def number_checker (num, target, index=0):
    # checks if we've gotten to the end of the list and it,s not found
    if index >= len(num):
        return -1
    # once index found returns the index
    if num[index] == target:
        return index
    
    # checking the next index
    return number_checker(num, target, index + 1)

my_numbers = [14,26,37,94,32,47,38,58,57,79,45,9]

try:
    user_inp = int(input("Enter a number to search for: "))
    result = number_checker(my_numbers, user_inp)
    
    if result != -1:
        print(f"Found {user_inp} at index position {result}")
    else:
        print(f"{user_inp} is not in the list")
except ValueError:
    print(f"Please enter a valid Number!")