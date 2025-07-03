let canvas=document.querySelector("canvas")
canvas.width=window.innerWidth
canvas.height=window.innerHeight
let c=canvas.getContext("2d")
c.fillRect(130,400,100,100)
c.beginPath()
c.moveTo(100,100)
c.lineTo(400,400)
c.stroke()
c.beginPath()
c.moveTo(400,100)
c.lineTo(100,400)
c.stroke()
function Draw(){
     c.clearRect(0, 0, canvas.width, canvas.height);
    for(let i=0; i<=99999;i++){
    c.beginPath()
    c.arc(Math.floor(Math.random()*(1366*2)),Math.floor(Math.random()*657*2.5),30,0,Math.PI*2,false )
    switch(Math.floor(Math.random()*4)){
        case 0:
            c.strokeStyle="red"
            break;
        case 1:
             c.strokeStyle="blue"
            break;
        case 2:
             c.strokeStyle="yellow"
            break;    
        case 3:
             c.strokeStyle="green"
            break;

    }
    c.stroke()
}

}
    
setInterval(() =>Draw(),100)






