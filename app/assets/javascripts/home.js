// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/



document.addEventListener("DOMContentLoaded", function (event) {
  var bigBurger = document.querySelector('.bigburger')
  var navLink = document.querySelectorAll('.navlink')
  var dropCal = document.querySelector('#dropcal')
  var dropLost = document.querySelector('#droplost')

  bigBurger.addEventListener( "click", function() {
    this.classList.toggle( "change" );
    for (var i = 0; i < navLink.length; i++){
      if (navLink[i].style.display === 'block') {
        navLink[i].style.display = 'none';
      } else {
        navLink[i].style.display = 'block';
      }
    }
    if (dropCal.style.display === 'block') {
      dropCal.style.display = 'none';
    } else {
      dropCal.style.display = 'block';
    }
    if (dropLost.style.display === 'block') {
      dropLost.style.display = 'none';
    } else {
      dropLost.style.display = 'block';
    }



  });





})
