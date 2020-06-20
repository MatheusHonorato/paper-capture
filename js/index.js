window.onscroll = function (oEvent) {
    
    var header = document.querySelector("header")
    var menu = document.querySelector("#menu")
    var logo_one = document.querySelector("#logo_one")
    var logo_two = document.querySelector("#logo_two")
    
    if(window.scrollY == 0) {
        header.style.backgroundColor = 'transparent'
        menu.style.color = '#FFF'
        logo_one.style.display = 'block'
        logo_two.style.display = 'none'
    } else {
        header.style.backgroundColor = '#FFF'
        menu.style.color = '#333'
        logo_one.style.display = 'none'
        logo_two.style.display = 'block'
    }

}

function getMenu() {
    var menu = document.querySelector("#menu-responsive")
    menu.style.display = "flex"
}

function exitMenu() {
    var menu = document.querySelector("#menu-responsive")
    menu.style.display = "none"
}

//animação titulo
document.addEventListener('DOMContentLoaded',function(event){
  // array with texts to type in typewriter
  var dataText = [ "O Paper Capture é um poderoso software TWAIN."];
  
  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < (text.length)) {
      // add next character to h1
     document.querySelector("h1").innerHTML = text.substring(0, i+1) +'<span class="caret" aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == 'function') {
      // call callback after timeout
      setTimeout(fnCallback, 700);
    }
  }
  // start a typewriter animation for a text in the dataText array
   function StartTextAnimation(i) {
     if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
          StartTextAnimation(0);
        }, 20000);
     }
     // check if dataText[i] exists
    if (i < dataText[i].length) {
      // text exists! start typewriter animation
     typeWriter(dataText[i], 0, function(){
       // after callback (and whole text has been animated), start next text
       StartTextAnimation(i + 1);
     });
    }
  }
  // start the text animation
  StartTextAnimation(0);
});

//scroll top suave
/** Scroll to top button implementation in vanilla JavaScript (ES6 - ECMAScript 6) **/

let intervalId = 0; // Needed to cancel the scrolling when we're at the top of the page
const $scrollButton = document.querySelector('.scroll'); // Reference to our scroll button

function scrollStep() {
    // Check if we're at the top already. If so, stop scrolling by clearing the interval
    if (window.pageYOffset === 0) {
        clearInterval(intervalId);
    }
    window.scroll(0, window.pageYOffset - 50);
}

function scrollToTop() {
    // Call the function scrollStep() every 16.66 millisecons
    intervalId = setInterval(scrollStep, 16.66);
}

// When the DOM is loaded, this click handler is added to our scroll button
$scrollButton.addEventListener('click', scrollToTop);

// preloader
document.onreadystatechange = function() { 
    if (document.readyState !== "complete") { 
        document.querySelector( 
          "body").style.visibility = "block"; 
        document.querySelector( 
          "#loader").style.visibility = "visible"; 
    } else { 
        document.querySelector( 
          "#loader").style.display = "none"; 
        document.querySelector( 
          "body").style.visibility = "visible"; 
    } 
}; 

// scroll opacity
let firstHeading = document.getElementById("first-heading");

function isVisible(element) {
    let elementBox = element.getBoundingClientRect();
    let distanceFromTop = -200; 

    if(elementBox.top - window.innerHeight < distanceFromTop) {
        return true;
    } else {
        return false;
    }
}

function scanDocument() {
    let sectionList = document.querySelectorAll('.hidden');
    sectionList.forEach(function(section) {
        if(isVisible(section)) {
            section.classList.remove('hidden');
        };
    });
}


document.addEventListener("scroll", scanDocument);