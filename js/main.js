var credit = 10;
$(function() {
	function spin() {
		var reel1;
		var reel2;
		var reel3;
		var icons = ["images/71.png", "images/banana1.png", "images/ba1.png", "images/cherry1.png"]
		reel1 = Math.floor(Math.random() * (4 - 1 + 1) + 1);
		reel2 = Math.floor(Math.random() * (4 - 1 + 1) + 1);
		reel3 = Math.floor(Math.random() * (4 - 1 + 1) + 1);
		$($('#reel1').html('<img src = "' + icons[reel1 - 1] + '">'));
		$($('#reel2').html('<img src = "' + icons[reel2 - 1] + '">'));
		$($('#reel3').html('<img src = "' + icons[reel3 - 1] + '">'));
		if (reel1 === reel2 || reel2 === reel3 || reel1 === reel3) {
			credit = credit + 10
		}
		if (reel1 === reel2 && reel2 === reel3) {
			credit = credit + 40
		} else {
			credit = credit - 1
		};
		$('#score').html(credit)
	};
	$('button').on('click', function(evt) {
		spin();
	});
});