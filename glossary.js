/*This is the sticky nav bar */
window.onscroll = function () { myFunction() };

var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
/*This is the search bar */
function checkInput() {
  var query = document.getElementById('search').value;
  window.find(query);
  return true;
}