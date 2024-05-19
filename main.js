const image = [...document.querySelectorAll('.carousel-item')]
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const carousel = document.querySelector('.carousel')

let i = 0;
next.addEventListener('click', function () {
    image[i].style.display = 'none'
    i++
    if (i >= image.length) {
        i = 0
    }
    image[i].style.display = 'block'
})

prev.addEventListener('click', function () {
    image[i].style.display = 'none'
    i--
    if (i < 0) {
        i = image.length - 1
    }
    image[i].style.display = 'block'
})

// AutoSlide

let stop;
function autoSlider(){
    image[i].style.display = 'none'
    i++
    if (i >= image.length) {
        i = 0
    }
    image[i].style.display = 'block'
}

stop = setInterval(()=>{
    autoSlider()
}, 2000);


function stopSlider() {
    clearInterval(stop)
}

carousel.addEventListener('mouseover', ()=>{
    stopSlider()
})

function start (){
    return stop = setInterval(()=>{
        autoSlider()
    }, 2000);
    
}
carousel.addEventListener('mouseout', ()=>{
    start()
})