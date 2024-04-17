function app() {
    
    window.addEventListener("keydown", function(e){
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

        if(!audio) return

        console.log(audio)
        key.classList.add("clicked-img")
        this.setTimeout(()=>{
            key.classList.remove("clicked-img")
        }, 100)
        audio.currentTime = 0
        audio.play()        
    })


}



app()