import statistics
from colors import Shirt_Colors

print("------- ANALIzING DATA ------")


# mapping the colors to intergers
color_data = sorted(list(set(Shirt_Colors)))
# print(color_data)

# Adding the colors to numbers

color_To_ID = {color: i for i, color in enumerate(color_data) }
# print(color_To_ID)

# getting jus the numbers

number_colors = [color_To_ID[color] for color in Shirt_Colors]
# print(number_colors)

# finding the variance

color_variance = statistics.variance(number_colors)

print(f"The variance of colors {color_variance:.2f}")
