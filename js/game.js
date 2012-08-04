function Game() {
	this.levels = [];
	this.currentLevel = 2;
	this.levels.push(new RandomBoxLevel());
	this.levels.push(new LayoutLevel());
	this.levels.push(new BorderRadiusLevel());
	this.levels.push(new RandomBoxLevel());
	this.levels.push(new ListLevel());
};


Game.prototype.submit = function(callback) {
	this.levels[this.currentLevel].test('#output', function() {
		game.currentLevel++;
		callback();
		return true;
	});
	return false;
}

Game.prototype.renderLevel = function() {
	this.levels[this.currentLevel].render('#result');
}

Game.prototype.renderOutput = function(user_css) {
	var html = this.levels[this.currentLevel].html;
	var css = '<style type="text/css">';
	css += user_css;
	css += '</style>';
	$('#output').html(html + css);
}

Game.prototype.getLevelHTML = function() {
	return this.levels[this.currentLevel].html;
}
