const counterEl = document.querySelector('.affiliate');
const counterSt = document.querySelector('.stars');
const counterAg = document.querySelector('.agents');
const counterCl = document.querySelector('.clients');
let counterNumber = 0;

const updateCounter = setInterval(function() {
    counterNumber++;
    counterEl.textContent = counterNumber;

    if (counterNumber >= 100) {
        clearInterval(updateCounter);
        counterEl.style.color = 'teal';
    }
},100)
const updateCounte = setInterval(function() {
    counterNumber++;
    counterSt.textContent = counterNumber;

    if (counterNumber >= 4.8) {
        clearInterval(updateCounte);
        counterSt.style.color = 'teal';
    }
},100)
const updateCount = setInterval(function() {
    counterNumber++;
    counterAg.textContent = counterNumber;

    if (counterNumber >= 600) {
        clearInterval(updateCount);
        counterAg.style.color = 'teal';
    }
},10)
const updateCounc = setInterval(function() {
    counterNumber++;
    counterCl.textContent = counterNumber;

    if (counterNumber >= 5) {
        clearInterval(updateCounc);
        counterCl.style.color = 'teal';
    }
},100)
function toggle () {
    const chart = document.getElementById('chart')
    const ham = document.getElementById('raq')
    let hid = ( chart.style.visibility !== 'visible' )
    chart.style.visibility = ( hid ) ? 'visible' : 'hidden'
    chart.style.height = (hid) ? 'auto' : '0px'
    
}document.getElementById('raq').onclick = 
function () {
    this.innerText = 'BOOM!' ; this.style.margin = '1rem';
}
function showkey (e) {
    if(e.keyCode === 89)
    {
        alert('You are A Real One Mate')
    }
    
}
document.onkeydown = showkey
