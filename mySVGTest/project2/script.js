let letters = document.querySelectorAll('.st2');
let tears = document.querySelectorAll('.st1')
let index = 0;

    function setup(){

        anime({
        targets: letters,
        strokeDashoffset: [anime.setDashoffset, 0],
        duration: 1500,
        delay: function(el, i) { return i * 250 },
        direction: 'alternate',
        loop: true
        });
        
        console.log(tears)
    }
        
    function mousePressed(){
        
        anime({
        targets: tears[index % 2],
        strokeDashoffset: [anime.setDashoffset, 0],
        duration: 6000,
        direction: 'normal',
        loop: true
        });
        index ++;
    }