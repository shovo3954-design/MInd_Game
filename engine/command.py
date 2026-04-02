import pyttsx3
import speech_recognition as sr
import eel
import time
import pyaudio


def speak(text):
    
    engine = pyttsx3.init("sapi5")
    voices = engine.getProperty('voices')
    engine.setProperty('voice', voices[0].id) 
    engine.setProperty('rate', 174)
    eel.DisplayMessage(text)
    engine.say(text)
    engine.runAndWait()
 
@eel.expose
def takecommand():
    r = sr.Recognizer()
    with sr.Microphone() as source:
        print("Listening...")
        eel.DisplayMessage("LIstening...")
        r.pause_threshold = 1
        r.adjust_for_ambient_noise(source)
        
        audio = r.listen(source, 10, 6)
    try:
        print("Recognizing...")
        eel.DisplayMessage("Recognizing...")
        query = r.recognize_google(audio, language="en-US")
        print(f"User said {query}")
        eel.DisplayMessage(query)
        
    except Exception as e:
        return ""
    return query.lower()


@eel.expose
def allCommands():
    query = takecommand()
    print(query)
    
    try:
        if "open" in query:
            print("I run.")
            from engine.features import openCommand
            openCommand(query)
            
        elif "on YouTube":
            from engine.features import PlayYoutube
            PlayYoutube(query)
        
        else:
            print("I do not run.")
            
    except:
        print("Error")
            
    eel.ShowHood()