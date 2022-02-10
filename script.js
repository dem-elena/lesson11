
const textInput=document.getElementById("text")

const btn=document.getElementById("btn")
const square=document.getElementById("square")
const circle=document.getElementById("circle")
const range =document.getElementById("range")
const idSpan=document.getElementById("range-span")
const ebtn=document.querySelector("#e_btn")
const btnFunc = function(){
    square.style.backgroundColor=textInput.value
}
const rangeFunc=function(event) {
    idSpan.textContent=event.target.value
    circle.style.width=event.target.value+"%"
    circle.style.height=event.target.value+"%"
}
const ebtnFunc =function(event)
{ ebtn.style.display="none"}

document.addEventListener('DOMContentLoaded',ebtnFunc)
btn.addEventListener('click',btnFunc)
range.addEventListener('input',rangeFunc)





