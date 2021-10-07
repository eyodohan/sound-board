const sounds=["iphone","Corner","Crystal","GoodNews","GoodTime","InsertCoin","Arrow","S_Knock"]

sounds.forEach(sound=>{
    const btn=document.createElement("button")
    btn.classList.add("btn")

    btn.addEventListener("click",()=>{

        stopSongs()
        document.getElementById(sound).play()
    })

    btn.innerText=sound
    document.getElementById("buttons").appendChild(btn)
})

function stopSongs(){
    sounds.forEach(sound=>{
        const song=document.getElementById(sound)

        song.pause()
        song.currentTime=0
    })
}