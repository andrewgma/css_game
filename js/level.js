function Level() {
	this.html = '<div id="box1"></div><div id="box2"></div>';
	this.css = { 
		'#box1' : {
			display : 'block', 
			position : 'absolute',
			width : '100px',
			height : '100px',
			background : 'red'
		},
		'#box2' : {
			display : 'block', 
			position : 'absolute',
			top : '200px',
			left : '100px', 
			width : '100px',
			height : '100px',
			background : 'red'
		}
	}
}

Level.prototype.render = function(div_key) {
	var css = '<style type="text/css">';
	var selectors = Object.keys(this.css);
	for (var i = 0; i < selectors.length; i++) {
		var selector = selectors[i];
		var properties = Object.keys(this.css[selector]);
		for (var j = 0; j < properties.length; j++) {
			var property = properties[j];
			css += div_key + ' ' + selector + '{' + property + ':' + this.css[selector][property] + '}';
		}
	}
	css += '</style>';
	$(div_key).html(this.html + css);
}

Level.prototype.test = function(div_key) {
	chrome.tabs.captureVisibleTab(null, {format:'png'}, function(dataUrl) {
		var i = 3;
	});
	var selectors = Object.keys(this.css);
	for (var i = 0; i < selectors.length; i++) {
		var selector = selectors[i];
		var properties = Object.keys(this.css[selector]);
		for (var j = 0; j < properties.length; j++) {
			var property = properties[j];
			if ($(div_key + ' ' + selector).css(property) != this.css[selector][property])
				return false;
		}
	}
	return true;
}