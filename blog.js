let header = document.querySelector(".header");
const counterEl = document.querySelector('.affiliate');
let counterNumber = 0;

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0)
})
$(document).ready(function () {
    $(".filter-item").click(function () {
        const value = $(this).attr("data-filter");
        if (value == "all"){
            $(".post-box").show("1000")
        } else {
            $(".post-box") 
            .not("." + value)
            .hide(1000);
            $(".post-box")
            .filter("." + value)
            .show("1000")
        }

    });
    $(".filter-item").click(function () {
        $(this).addClass("avtive-filter").siblings().removeClass("active-filter")
    });
});
document.getElementById('postForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const content = document.getElementById('content').value;
    if (content.trim() === '') {
        alert('Please write some content before posting.');
        return;
    }
    const postDiv = document.createElement('div');
    postDiv.className = 'post';
    postDiv.textContent = content;

    document.getElementById('posts').appendChild(postDiv);

    document.getElementById('content').value = '';
});
const updateCounter = setInterval(function() {
    counterNumber++;
    counterEl.textContent = counterNumber;

    if (counterNumber >= 6000) {
        clearInterval(updateCounter);
        counterEl.style.color = 'teal';
    }
},100)

<div class="b-nav">
<div class="text-logo"><img src="logs.jpg"></div>
<div class="navbar">
    <img src="favicon - Copy.jpg">
    <ul>
        <li><a href="index.html">Main</a></li>
        <li><a href="home.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="contact.html">Contact</a></li>
        <li><a href="portfolio.html">Portfolio</a></li>
        <li><a href="bog.html">Community Blog</a></li>
    </ul>
</div>
</div>




