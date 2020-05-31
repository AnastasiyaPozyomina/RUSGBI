let openCatalog = document.querySelector('.catalog-open');
let openbasket = document.querySelector('.basket');
let basket = document.querySelector('.cart-click').addEventListener('click', openBacket);
let arrowTop = document.querySelector('.arrow-top').addEventListener('click', closeBacket);
function clickButtons() {
  openCatalog.classList.toggle('open');
}

function openBacket() {
  openbasket.style.display = 'block';
  
}
function closeBacket() {
  openbasket.style.display = 'none';
  
}