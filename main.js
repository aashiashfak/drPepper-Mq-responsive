const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');
const offCanvas = document.querySelector('.offcanvas-nav-links')

openBtn.addEventListener('click',function(e){
    offCanvas.classList.add('active');
});

closeBtn.addEventListener('click',function (e){
    e.preventDefault();
    offCanvas.classList.remove('active');
});