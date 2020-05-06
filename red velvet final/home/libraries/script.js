let ribbon1 = document.querySelectorAll('.Path_1');
let index = 0;

    function setup(){

        anime({
        targets: ribbon1,
        strokeDashoffset: [anime.setDashoffset, 0],
        duration: 1500,
        delay: function(el, i) { return i * 250 },
        direction: 'alternate',
        loop: false
        });
        
        console.log(tears)
    }