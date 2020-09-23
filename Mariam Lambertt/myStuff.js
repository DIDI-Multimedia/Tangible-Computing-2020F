// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the sidebar
var sidebar = document.getElementById("sidebar");

// Get the offset position of the navbar
var sticky = sidebar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    sidebar.classList.add("sticky")
  } else {
    sidebar.classList.remove("sticky");
  }
}