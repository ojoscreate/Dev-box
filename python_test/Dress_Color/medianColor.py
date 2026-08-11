from colors import Shirt_Colors

print("------- ANALIzING DATA ------")


color_sorted = sorted(Shirt_Colors)
total_color = len(color_sorted)
if total_color % 2 == 1:
    median_color= color_sorted[total_color//2]
else:
    median_color = color_sorted[[total_color//2] - 1]
    
print(f"The Median Color: {median_color}")