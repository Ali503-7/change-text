let form = document.querySelector("form")
let fontStyle = document.querySelector("[name='fonts']")
let color = document.querySelector("[name='colors']")
let fontSize = document.querySelector("[name='fontSize']")

let div = document.querySelector(".text")


  


function setColor() {
  div.style.color = window.localStorage.getItem("color")
  color.value = `${window.localStorage.getItem("color")}`
}
setColor()

function setStyel() {
  div.style.fontFamily = `${window.localStorage.getItem("style")}`
  fontStyle.value = `${window.localStorage.getItem("style")}`
}
setStyel()

function setSize() {
  div.style.fontSize = `${window.localStorage.getItem("font")}px`
  fontSize.value = `${window.localStorage.getItem("font")}`
}
setSize()
form.onchange = () => { 
  window.localStorage.setItem("color", color.value)
  window.localStorage.setItem("style", fontStyle.value)
  window.localStorage.setItem("font" , fontSize.value)
  setColor()
  setStyel()
  setSize()
}