from collections import Counter
from colors import Shirt_Colors
import psycopg2

color_count = Counter(Shirt_Colors)

try:
    conn = psycopg2.connect(
        dbname = "Dress_color_db",
        user = "Bincom_Dev",
        password = "12345678",
        host = "localhost",
        port = "5432"
        
    )
    cursor = conn.cursor()
    
    # Table set up
    
    cursor.execute("""
                   CREATE TABLE IF NOT EXISTS color-frquencies (
                       color vARCHAR(50) PRIMARY KEY,
                       frequency INT NOT NULL
                   );
                   """)
    
    cursor.execute("TRUNCATE TABLE color_frequencies;")
    
    # save data
    for color, freq in color_count.items():
        cursor.execute(
            "INSERT INTO color_frequencies(color, frequency)VALUES (%s, %s);",
            (color, freq)
        )
        
        conn.commit()
        print("Saved all colors and frequencies to PostgreSQL sucessfully!")
        
except Exception as e:
    print(f"Database error occurred: {e}")
    
finally:
    if "conn" in locals() and conn:
        cursor.close()
        conn.close()