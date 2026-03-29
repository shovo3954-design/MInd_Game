from playsound import playsound
import eel

# Playing assistent sound
@eel.expose
def playAssistentSound():
    music_dir = "www\\assets\\audio\\start_audio.mp3"
    playsound(music_dir)