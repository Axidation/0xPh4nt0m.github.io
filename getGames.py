import os

directory = os.fsencode("./games")
text_file = open("gamesoptions.txt", "w")

for file in os.listdir(directory):
     filename = os.fsdecode(file)
     if filename.endswith("swf"): 
         
         n = text_file.write(f'<option value="{filename[:-4]}">{filename[:-4]}</option>')
         continue
     else:
         continue
text_file.close();