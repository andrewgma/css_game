ready1 = false;
ready2 = false;
head.js(
	'js/jquery-1.7.2.min.js',
	function() {
		$(document).ready(function() {
			ready1 = true;
			onReady();
		});
	});

head.js(
	'js/level.js', 
	'js/game.js',
	function() {
		ready2 = true;
		onReady();
	});

function onReady() {
	if (!ready1 || !ready2) {
		return false;
	}
	game = new Game();
	game.renderOutput('');
	$('#htmlText').val(game.getLevelHTML());
	$('#cssText').keyup(function(event) {
		game.renderOutput($(this).val());
		if (event.keyCode == 13)
			game.submit(onNextLevel);
	});
	$('#submitButton').click(function() {
		game.submit(onNextLevel);
	});
	game.renderLevel();
	timeLeft = 120;
	setInterval(function() {
		$('#time_left').html(--timeLeft);
		if (timeLeft == 0) {
			window.location.href = 'complete.html';
		}
	}, 1000);
}

function onNextLevel() {
	console.log(game.currentLevel);
	game.renderOutput('');
	$('#htmlText').val(game.getLevelHTML());
	game.renderLevel();
}