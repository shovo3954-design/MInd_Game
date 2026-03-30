from playsound import playsound
import eel
from engine.config import ASSISTANT_NAME
import os
from engine.command import *

# Playing assistent sound
@eel.expose
def playAssistentSound():
    music_dir = "www\\assets\\audio\\start_audio.mp3"
    playsound(music_dir)
    
    
def openCommand(query):
    query = query.replace(ASSISTANT_NAME, "")
    query = query.replace("open", "")
    query.lower()
    
    if query != "":
        speak("Opening" +query)
        os.system("Start" +query)
        
    else:
        speak("I have not found")