var credit = 20;
$(function() {

function spin (){
    var reel1;
    var reel2;
    var reel3;
 

var icons = 
["images/71.png",
 "images/banana1.png",
 "images/ba1.png",
 "images/cherry1.png",
 "images/watermelon.png",
 "images/prune.png",
 "images/lemon.png",
 "images/orange.png",
 "images/winner.png" ]

     reel1 = Math.floor(Math.random() * (9-1+1) +1);
     reel2 = Math.floor(Math.random() * (9-1+1) +1);
     reel3 = Math.floor(Math.random() * (9-1+1) +1);

     

     $($('#reel1').html('<img src = "' + icons[reel1-1] + '">'));
     $($('#reel2').html('<img src = "' + icons[reel2-1] + '">'));
     $($('#reel3').html('<img src = "' + icons[reel3-1] + '">'));


    if ( reel1 === reel2 && reel2 === reel3 && reel1 === 8 ) {
        credit += 100
     } else if ( reel1 === reel2 && reel2 === reel3 ) {
         credit += 15
     } else if ( reel1 === reel2 || reel2 === reel3 || reel1 === reel3){
         credit += 5
     } else {
         credit -= 5
     };

     if ( credit < 1){
         credit = 20, 
         $('#gameover').html('GAME OVER')
     } else {
         $('#gameover').html('')
     };

$('#score').html(credit)

};

$('button').on('click', function (evt) {
    spin();
    

});





});