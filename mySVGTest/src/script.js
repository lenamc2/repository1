let lena = document.querySelectorAll('.stlena')
let lena2 = document.querySelectorAll('.st0')
let lena3 = document.getElementById('myElement')

    function setup(){

        anime({
        targets:lena,
        translateX: -30,
        scale: 0.5
        })
    }

    function mousePressed(){
    
        anime({
        targets:lena3,
        translateX: 300,
        scale: 0.5
        })
    }