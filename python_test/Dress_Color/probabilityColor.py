from collections import Counter
from colors import Shirt_Colors

# get the total colors and color red 
color_count = Counter(Shirt_Colors)
total_color = len(Shirt_Colors)
red_Shirt = color_count.get("RED", 0)

# getting probablity
probably_red = red_Shirt/total_color

print(f"The probability of a random color being REDis {probably_red:.3f}({probably_red * 100:.2f}%)")

