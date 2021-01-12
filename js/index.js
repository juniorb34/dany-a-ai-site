function imgSlider(anything) {
  document.querySelector('.products').src = anything;
}
function changeCircleColor(color) {
  const circle = document.querySelector('.circle');
  circle.style.background = color;
}

function changeMilk() {
  document.getElementById('products').innerHTML = 'Milk Shakes';
}
function changeSorvete() {
  document.getElementById('products').innerHTML = 'Sorvetes';
}
function changeAcai() {
  document.getElementById('products').innerHTML = 'Açaí';
}
function toggleMenu() {
  var menuToggle = document.querySelector('.toggle');
  var navigation = document.querySelector('.navigation');
  menuToggle.classList.toggle('active');
  navigation.classList.toggle('active');
}
