from colors import Shirt_Colors
import statistics

print("------- ANALIzING DATA ------")
# data = ["yellow", "red" , "blue"]

# mapping the colors to intergers
color_data = sorted(list(set(Shirt_Colors)))
# print(color_data)

# Adding the colors to numbers

color_To_ID = {color: i for i, color in enumerate(color_data) }
# print(color_To_ID)

ID_To_Color = {i: id for i, id in enumerate (color_data)}
# print(ID_To_Color)

# getting jus the numbers

number_colors = [color_To_ID[color] for color in Shirt_Colors]
# print(number_colors)

# finding the mean

mean_id = round(statistics.mean(number_colors))

mean_color = ID_To_Color[mean_id]

print(f"The Mean Color is {mean_color}")