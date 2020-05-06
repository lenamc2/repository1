let eeeee = document.querySelectorAll('.cls-2');
let eeeee2 = document.querySelectorAll('.cls-1');
let eeeee3 = document.querySelectorAll('.cls-3');
let index = 0;

    function setup(){

        anime({
        targets: eeeee,
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 2000,
        delay: function(el, i) { return i * 25 },
        direction: 'forwards',
        loop: false
        });
        
        anime({
        targets: eeeee2,
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 2000,
        delay: function(el, i) { return i * 150 },
        direction: 'forwards',
        loop: false
        });
        
        anime({
        targets: eeeee3,
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 2000,
        delay: function(el, i) { return i * 25 },
        direction: 'forwards',
        loop: false
        });
    }
