function Game() {
	this.levels = [];
	this.currentLevel = 0;
	this.levels.push(new Level());
	this.levels.push(new Level());
};


Game.prototype.submit = function() {
	if (this.levels[this.currentLevel].test('#output')) {
		this.currentLevel++;
		return true;
	}
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
