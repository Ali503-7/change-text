let form = document.querySelector("form")
let fontStyle = document.querySelector("[name='fonts']")
let color = document.querySelector("[name='colors']")
let fontSize = document.querySelector("[name='fontSize']")

let div = document.querySelector(".text")

// window.localStorage.setItem("color", "red")
// window.localStorage.setItem("fontStyle", "Roboto")
// window.localStorage.setItem("fontSize", "16")

let foun = {
  color: `red`,
  font: `16px`,
  style: `Roboto`
}

function setData() {
  window.localStorage.setItem("data" , JSON.stringify(foun))
}
setData()
if (window.localStorage.getItem("data")){
  foun = JSON.parse(window.localStorage.getItem("data"))
}

function setDivColor() {
  if (window.localStorage.getItem("data")) {
    foun.color = color.value
    setData()
    div.style.color = color.value
  }
}
setDivColor()

function setDivSize() {
  if (window.localStorage.getItem("data")) {
    div.style.fontSize = `${fontSize.value}px`
    foun.font = fontSize.value
    setData()
  }
}
setDivSize()

function setDivStyel() {
  if (window.localStorage.getItem("data")) {
    div.style.fontFamily = `${fontStyle.value}`
    foun.style = fontStyle.value
    setData()
  }
}
setDivStyel()

form.onchange = () => {
  setDivColor()
  setDivSize()
  setDivStyel()
}



// window.localStorage.setItem("styleAll", JSON.stringify(foun))


// newb = JSON.parse(window.localStorage.getItem("styleAll"))
