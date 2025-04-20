let next = document.querySelector('.next')
let prev = document.querySelector('.prev')
let items = document.querySelectorAll('.item')
let currentItem = 0

setInterval(function() {
    next.click() 
}, 7000)
next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1])
})
function multiply(q, p) {
    let result = parseFloat(q.value) * parseFloat(p.value) 

    if (isNaN( result ) || result < 1 ) return ''
    else return 'Total: $' + result.toFixed(2)
}

( function () {
    const pep = document.getElementById('peps')
    const btn = document.getElementById('kbtn')

    btn.addEventListener( 'click' , function ( ) {
        pep.checked = true })
}) ()

( function () {
    const jbtn = document.getElementById('jbtn')
    jbtn.addEventListener( 'click', function () {
        const myForm = document.getElementById('my-form')
        const pattern = 
        /^([a-zA-Z0-9_.-])+@([a-zA-z0-9_.-])+\.([a-Za-Z])+/
        let adr = document.getElementById('adr').value
        if( ! pattern.test(adr)) alert('Invaid Home Address')
            else myForm.onsubmit()
    })
}) ()