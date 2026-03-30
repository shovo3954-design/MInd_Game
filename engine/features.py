from playsound import playsound
import eel
from engine.config import ASSISTANT_NAME
import os
from engine.command import *
import pywhatkit as kit
import re
import pyaudio

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
        
def PlayYoutube(query):
    search_term = extract_yt_term(query)
    speak("Playing " +search_term+"on YouTube")
    kit.playonyt(search_term)
    
    
def extract_yt_term(command):
    # Define a regular expression pattern to capture the song name
    pattern = r'play\s+(.*?)\s+on\s+youtube'
    
    # Use re.search to find the match in the command
    match = re.search(pattern, command, re.IGNORECASE)
    
    # If a match is found, return the extracted song name; otherwise, return None
    return match.group(1) if match else None