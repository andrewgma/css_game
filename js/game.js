var Game = (function() {
	var levels = [];
	var currentLevel = 0;
	levels.push(new Level());
	levels.push(new Level());
})();


Game.prototype.submit = function(user_object) {
	if (levels[currentLevel].test(user_object)) {
		currentLevel++;
		return true;
	}
	return false;
}

Game.prototype.renderLevel = function() {
	levels[currentLevel].render('#result');
}

Game.prototype.getLevelHTML = function() {
	return levels[currentLevel].html;
}
