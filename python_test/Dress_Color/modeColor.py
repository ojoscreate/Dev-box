from collections import Counter
from colors import Shirt_Colors

print("------- ANALIzING DATA ------")


color_count = Counter(Shirt_Colors)

# To get the most common

mode_of_colors, count = color_count.most_common(1)[0]

print(f"The most comonly worn color is {mode_of_colors}, worn {count} times per week")