
// SCROLL REVEAL 
window.sr = ScrollReveal();
    sr.reveal('.hero h1', {
        duration: 1000,
        origin:'left',
        distance:'300px',
    });
    sr.reveal('.hero h2', {
        duration: 1000,
        origin:'bottom',
    });
    sr.reveal('.profile-pic, .pic-bg', {
        duration: 1000,
        origin:'right',
        distance:'300px',
    });
    sr.reveal('.current-projects', {
        duration: 1000,
        origin:'bottom',
    });

    // sr.reveal('.tile', { duration: 2000 }, 50);
    
    sr.reveal('.project-tn', {
        duration: 1000,
        origin:'bottom',
    });

    sr.reveal('.project-blurb', {
        duration: 1000,
        origin:'left',
        distance:'200px',
    });

// TODO: SCROLL TO TOP 

// TILE EMPHISIS
// TODO: ADD ANIMATION TO THIS EFFECT, EITHER FADE IN / OUT OR SHAKE

//setInterval(function(){emph();}, 4000)
//
//function emph (){
//    var tiles = Array('.t01','.t02','.t03','.t04','.t05','.t06','.t07',);
//    var rand = tiles[Math.floor(Math.random() * tiles.length)];
//    console.log(rand);
//    
//    $(rand).addClass('tileEmph')
//    .siblings().removeClass('tileEmph')
//};


// TEST ARRAY SUBTRACTION

var list = Array('01','02','03','04');
var rand = list[Math.floor(Math.random() * list.length)];

var instance = list - rand;

console.log(instance);


// TODO: ADD HOVER STATE TO TILES



