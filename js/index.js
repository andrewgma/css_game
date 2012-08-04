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
	$('#cssText').keyup(function() {
		game.renderOutput($(this).val());
		game.submit();
	});
	game.renderLevel();
}