import csv
import sqlite3

con = sqlite3.connect("mind_game.db")
cursor = con.cursor()


# 2. Create the table with 'UNIQUE' on the name column
# cursor.execute("""
# CREATE TABLE IF NOT EXISTS sys_command(
#     id INTEGER PRIMARY KEY, 
#     name VARCHAR(50) UNIQUE, 
#     path VARCHAR(1000)
# )""")




# # 3. Insert the data safely
# query = "INSERT OR IGNORE INTO sys_command (name, path) VALUES (?, ?)"
# cursor.execute(query, ('ONENOTE', "C:\\Program Files\\Microsoft Office\\root\Office16\\ONENOTE.EXE"))

# # 4. Save and close
# con.commit()
# con.close()



# query = "CREATE TABLE IF NOT EXISTS web_command(id integer primary key, name VARCHAR(100), url VARCHAR(1000))"
# cursor.execute(query)



# query = "INSERT INTO web_command VALUES (null,'Gemini Ai', 'https://gemini.google.com/app')"
# cursor.execute(query)
# con.commit()



# Create a table with the desired columns
# cursor.execute(
#     '''CREATE TABLE IF NOT EXISTS contacts 
#     (id integer primary key, 
#     name VARCHAR(200), 
#     mobile_no VARCHAR(255), 
#     email VARCHAR(255) NULL)'''
#     )





# Specify the column indices you want to import (0-based index)
# Example: Importing the 1st and 3rd columns
# desired_columns_indices = [0, 20]

# # Read data from CSV and insert into SQLite table for the desired columns
# with open('contacts.csv', 'r', encoding='utf-8') as csvfile:
#     csvreader = csv.reader(csvfile)
#     for row in csvreader:
#         selected_data = [row[i] for i in desired_columns_indices]
#         cursor.execute(''' INSERT INTO contacts (id, 'name', 'mobile_no') VALUES (null, ?, ?);''', tuple(selected_data))

# # Commit changes and close connection
# con.commit()
# con.close()




#### 4. Insert Single contacts (Optional)
query = "INSERT INTO contacts VALUES (null,'helal', '1234567890', 'null')"
cursor.execute(query)
con.commit()