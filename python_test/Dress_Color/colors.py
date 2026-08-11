# data provided

monday = "GREEN, YELLOW, GREEN, BROWN, BLUE, PINK, BLUE, YELLOW, ORANGE, CREAM, ORANGE, RED, WHITE, BLUE, WHITE, BLUE, BLUE, BLUE, GREEN"
tuesday = "ARSH, BROWN, GREEN, BROWN, BLUE, BLUE, BLEW, PINK, PINK, ORANGE, ORANGE, RED, WHITE, BLUE, WHITE, WHITE, BLUE, BLUE, BLUE"
wednesday = "GREEN, YELLOW, GREEN, BROWN, BLUE, PINK, RED, YELLOW, ORANGE, RED, ORANGE, RED, BLUE, BLUE, WHITE, BLUE, BLUE, WHITE, WHITE"
thursday = "BLUE, BLUE, GREEN, WHITE, BLUE, BROWN, PINK, YELLOW, ORANGE, CREAM, ORANGE, RED, WHITE, BLUE, WHITE, BLUE, BLUE, BLUE, GREEN"
friday = "GREEN, WHITE, GREEN, BROWN, BLUE, BLUE, BLACK, WHITE, ORANGE, RED, RED, RED, WHITE, BLUE, WHITE, BLUE, BLUE, BLUE, WHITE"

# putting the data together
all_data = f"{monday}, {tuesday}, {wednesday}, {thursday}, {friday}"
# print(all_data)

# removing whitespaces and adding "," to each word then appending into one variable
Shirt_Colors = []

for color in all_data.split(","):
    corrected = color.strip().upper()
    if corrected == "BLEW":
        corrected = "BLUE"
    if corrected == "ARSH":
        corrected = "ASH"
    if corrected:
        Shirt_Colors.append(corrected)
        
    # print(Shirt_Colors)