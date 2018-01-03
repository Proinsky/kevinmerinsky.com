
// CARD HEIGHT
//var cw = $('.t01').width();
//$('.tile').css({'height':cw})


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

setInterval(function(){emph();}, 3000)

function emph (){
    var tiles = Array('.t01','.t02','.t03','.t04','.t05','.t06','.t07',);
    var rand = tiles[Math.floor(Math.random() * tiles.length)];
    console.log(rand);
    
    $('.tile').removeClass('tileEmph')
    $(rand).addClass('tileEmph')
};

//function emph (){
//    const tiles = Array('.t01','.t02','.t03','.t04','.t05','.t06','.t07',);
//    var index = tiles.indexOf(active);
//    if (index > -1) {
//    tiles.splice(index, 1);
//    }
//    
//    var rand = tiles[Math.floor(Math.random() * tiles.length)];
//    var active = rand;
//    console.log(active);
//    
//    $('.tile').removeClass('tileEmph')
//    $(rand).addClass('tileEmph')
//};

//function emphOne (){
//    var oneTiles = Array('.t01','.t02','.t03',);
//    
//    var oneRand = oneTiles[Math.floor(Math.random() * oneTiles.length)];
//    console.log(oneRand);
//    
//    $('.tile').removeClass('tileEmph')
//    $(oneRand).addClass('tileEmph').delay(3000);
//};
//
//function emphTwo (){
//    var twoTiles = Array('.t04','.t05','.t06','.t07',);
//    
//    var twoRand = twoTiles[Math.floor(Math.random() * twoTiles.length)];
//    console.log(twoRand);
//    
//    $('.tile').removeClass('tileEmph')
//    $(twoRand).addClass('tileEmph')
//};





// TODO: ADD HOVER STATE TO TILES



