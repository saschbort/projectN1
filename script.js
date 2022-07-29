let canvas=document.querySelector("#canvas")
let ctx=canvas.getContext("2d")
let width=20
let x=300
let colors=["red", "yellow", "pink", "green", "lightblue"]

let w1=window.requestAnimationFrame(start)
// let w2=window.requestAnimationFrame(finish)
function start (){
    ctx.beginPath()
    ctx.strokeStyle=colors[number(0,4)]
    ctx.fillStyle="lightblue"
    ctx.lineWidth=width
    ctx.moveTo(x,0)
    ctx.lineTo(x,400)
    ctx.stroke()
    ctx.fill()
    ctx.closePath()
    width-=5
    x=random(10,300)
    window.requestAnimationFrame(start) 
}
function number(min,max){
	return Math.floor(Math.random()*(max-min+1)+min)
}
function random(min,max){
	return Math.floor(Math.random()*(max-min+1)+min)
}