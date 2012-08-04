function Level() {
	var html = '<div id="box1"></div><div id="box2"></div>';
	var css = { 
		'#box1' : {
			display : '#block', 
			width : '100px',
			height : '100px',
			background : 'red'
		},
		'#box2' : {
			display : '#block', 
			position : 'aboslute',
			top : '200px',
			left : '100px', 
			width : '100px',
			height : '100px',
			background : 'red'
		}
	}
}

Level.prototype.test = function(user_object) {
	for (var i = 0; i < this.css.keys().length; i++) {
		var selector = this.css.keys()[i];
		for (var j = 0; j < this.css[selector].keys(); j++) {
			var property = this.css[selector][this.css[selector].keys()[j]];
			if ($(selector).css(property) != this.css[selector][property])
				return false;
		}
	}
	return true;
}