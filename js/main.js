var credit = 20;
$(function() {
	var icons = ["images/71.png", "images/banana1.png", "images/ba1.png", "images/cherry1.png", "images/watermelon.png", "images/prune.png", "images/lemon.png", "images/orange.png", "images/winner.png"];
	var reel1;
	var reel2;
	var reel3;

	function spin(a, b, c, d, e) {
		reel1 = Math.floor(Math.random() * (9 - 1 + 1) + 1);
		reel2 = Math.floor(Math.random() * (9 - 1 + 1) + 1);
		reel3 = Math.floor(Math.random() * (9 - 1 + 1) + 1);
		$($('#reel1').html('<img src = "' + icons[reel1 - 1] + '">'));
		$($('#reel2').html('<img src = "' + icons[reel2 - 1] + '">'));
		$($('#reel3').html('<img src = "' + icons[reel3 - 1] + '">'));
		if (reel1 === reel2 && reel2 === reel3 && reel1 === 9) {
			credit += a
		} else if (reel1 === reel2 && reel2 === reel3 && reel1 === 3) {
			credit += b
		} else if (reel1 === reel2 && reel2 === reel3) {
			credit += c
		} else if (reel1 === reel2 || reel2 === reel3 || reel1 === reel3) {
			credit += d
		} else {
			credit -= e
		};
		if (credit < 1) {
			credit = 20,
				$('#gameover').html('GAME OVER')
		} else {
			$('#gameover').html('')
			$('#score').html(credit)
		}
	};
	$('#minbtn').on('click', function(evt) {
		spin(500, 25, 10, 5, 1);
	});
	$('#spinbtn').on('click', function(evt) {
		spin(1000, 50, 30, 10, 5);
	});
	$('#maxbtn').on('click', function(evt) {
		spin(4000, 100, 50, 25, 10);
	});
var tone = new Audio('https://freesound.org/people/sapht/sounds/61234/download/61234__sapht__snes-startup.wav');
$('.btn-primary').click( function()  {
    tone.play();
});
});