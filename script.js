let next = document.querySelector('.next')
let prev = document.querySelector('.prev')
let items = document.querySelectorAll('.item')
let currentItem = 0

setInterval(function() {
    next.click() 
}, 10000)
next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1])
})


let navbar = document.querySelector('.navbar'); 
let menu = document.querySelector('#menu');

menu.onclick = () => {
    menu.classList.toggle('fa-bars'); 
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('fa-bars'); 
    navbar.classList.remove('active');
};
