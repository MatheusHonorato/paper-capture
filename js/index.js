window.onscroll = function (oEvent) {
  let header = document.querySelector("header")
  let menu = document.querySelector("#menu")
  let btn_one = document.querySelector("#btn-acess-one")
  let btn_two = document.querySelector("#btn-acess-two")

  if(window.scrollY <= 0) {
    header.style.backgroundColor = 'transparent'
    btn_one.style.display = 'none'
    btn_two.style.display = 'flex'
  } else {
      header.style.backgroundColor = '#2241F2'
      btn_one.style.display = 'flex'
      btn_two.style.display = 'none'
    }
}
/* alternar menu */
function getMenu() {
  let menu = document.querySelector("#menu-responsive")
  menu.style.display = "flex"
}
function exitMenu() {
  let menu = document.querySelector("#menu-responsive")
  menu.style.display = "none"
}
//animação titulo
document.addEventListener('DOMContentLoaded',function(event){
  let dataText = [ "O Paper Capture é um poderoso software TWAIN."]

  function typeWriter(text, i, fnCallback) {
    if (i < (text.length)) {
      document.querySelector("h1").innerHTML = text.substring(0, i+1) +'<span class="caret" aria-hidden="true"></span>'
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 100)
    } else if (typeof fnCallback == 'function') {
      setTimeout(fnCallback, 700)
    }
  }
  function StartTextAnimation(i) {
    if (typeof dataText[i] == 'undefined'){
      setTimeout(function() {
        StartTextAnimation(0)
      }, 20000)
    }
    if (i < dataText[i].length) {
      typeWriter(dataText[i], 0, function(){ 
        StartTextAnimation(i + 1)
      })
    }
  }
  StartTextAnimation(0)
})
//scroll top suave
let intervalId = 0;
const $scrollButton = document.querySelector('.scroll')
function scrollStep() {
  if (window.pageYOffset === 0) {
    clearInterval(intervalId)
  }
  window.scroll(0, window.pageYOffset - 50)
}
function scrollToTop() {
  intervalId = setInterval(scrollStep, 16.66)
}
$scrollButton.addEventListener('click', scrollToTop)
// preloader
document.onreadystatechange = function() { 
  if (document.readyState !== "complete") { 
    document.querySelector("body").style.visibility = "block" 
    document.querySelector("#loader").style.visibility = "visible" 
  } else { 
      document.querySelector("#loader").style.display = "none" 
      document.querySelector("body").style.visibility = "visible" 
    } 
}; 
// scroll opacity
let firstHeading = document.getElementById("first-heading")
function isVisible(element) {
  let elementBox = element.getBoundingClientRect()
  let distanceFromTop = -200
  if(elementBox.top - window.innerHeight < distanceFromTop) {
    return true
  } else {
      return false
  }
}
function scanDocument() {
  let sectionList = document.querySelectorAll('.hidden');
  sectionList.forEach(function(section) {
    if(isVisible(section)) {
      section.classList.remove('hidden')
    }
  })
}
document.addEventListener("scroll", scanDocument)