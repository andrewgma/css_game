function RandomBoxLevel() {
	this.html = '<div id="box">Box</div>';
	var x = Math.floor(Math.random() * 4);
	var y = Math.floor(Math.random() * 3);
	var colors = ['red', 'green', 'blue', 'yellow', 'black'];
	var i = Math.floor(Math.random() * 5);
	var color = colors[i];
	this.filled = '#box {\nwidth:100px;\nheight:100px;\n}';
	do {
		var j = Math.floor(Math.random() * 5);
	} while (j == i);
	var textColor = colors[j];
	this.css = { 
		'#box' : {
			display : 'block', 
			position : 'absolute',
			top : (y * 100) + 'px',
			left : (x * 100) + 'px', 
			width : '100px',
			height : '100px',
			background : color,
			color: textColor,
		}
	}
}

RandomBoxLevel.prototype.render = function(div_key) {
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
	$('.hide').css('visibility', 'hidden');
	$('#output').css('visibility', 'hidden');
	$('#cssText').val(this.filled);
	setTimeout(function() {
		chrome.tabs.captureVisibleTab(null, {format:'png'}, function(dataUrl) {
			result = dataUrl;
			$('.hide').css('visibility', 'visible');
			$('#output').css('visibility', 'visible');
		});		
	}, 0);
	
}


RandomBoxLevel.prototype.test = function(div_key, callback) {
	$('.hide').css('visibility', 'hidden');
	$('#result').css('visibility', 'hidden');
	$('#output').css('left', '410px');
	setTimeout(function() {
		chrome.tabs.captureVisibleTab(null, {format:'png'}, function(dataUrl) {
			var len = dataUrl.length;
			$('.hide').css('visibility', 'visible');
			$('#result').css('visibility', 'visible');
			$('#output').css('left', '0');
			if (result == dataUrl)
				callback();
		});		
	}, 0);
	// var selectors = Object.keys(this.css);
	// for (var i = 0; i < selectors.length; i++) {
	// 	var selector = selectors[i];
	// 	var properties = Object.keys(this.css[selector]);
	// 	for (var j = 0; j < properties.length; j++) {
	// 		var property = properties[j];
	// 		if ($(div_key + ' ' + selector).css(property) != this.css[selector][property])
	// 			return false;
	// 	}
	// }
	return false;
}


function LayoutLevel() {
	this.html = '<div id="header">Header</div>\n<div id="left">Left</div>\n<div id="right">Right</div>\n<div id="footer">Footer</div>';
	this.filled = '#header {\nheight:70px;\n}\n#left, #right {\nwidth:200px;\nheight:160px;\n}\n#footer {\nheight:70px;\n}';
	this.css = { 
		'#header' : {
			display : 'block', 
			width : '100%',
			height : '70px',
			background : 'blue',
		},
		'#left' : {
			display : 'inline-block', 
			float : 'left',
			width : '200px',
			height : '160px',
			background : 'red',
		},
		'#right' : {
			display : 'inline-block', 
			float : 'left',
			width : '200px',
			height : '160px',
			background : 'green',
		},
		'#footer' : {
			display : 'block', 
			width : '100%',
			height : '70px',
		}
	}
}

LayoutLevel.prototype.render = function(div_key) {
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
	$('.hide').css('visibility', 'hidden');
	$('#output').css('visibility', 'hidden');
	$('#cssText').val(this.filled);
	setTimeout(function() {
		chrome.tabs.captureVisibleTab(null, {format:'png'}, function(dataUrl) {
			result = dataUrl;
			$('.hide').css('visibility', 'visible');
			$('#output').css('visibility', 'visible');
		});
	}, 0);
	
}


LayoutLevel.prototype.test = function(div_key, callback) {
	$('.hide').css('visibility', 'hidden');
	$('#result').css('visibility', 'hidden');
	$('#output').css('left', '410px');
	setTimeout(function() {
		chrome.tabs.captureVisibleTab(null, {format:'png'}, function(dataUrl) {
			var len = dataUrl.length;
			$('.hide').css('visibility', 'visible');
			$('#result').css('visibility', 'visible');
			$('#output').css('left', '0');
			if (result == dataUrl)
				callback();
		});
	}, 0);
	// var selectors = Object.keys(this.css);
	// for (var i = 0; i < selectors.length; i++) {
	// 	var selector = selectors[i];
	// 	var properties = Object.keys(this.css[selector]);
	// 	for (var j = 0; j < properties.length; j++) {
	// 		var property = properties[j];
	// 		if ($(div_key + ' ' + selector).css(property) != this.css[selector][property])
	// 			return false;
	// 	}
	// }
	return false;
}

function ListLevel() {
	this.html = '<ul id="list">\n<li id="item_1">List Item 1</li>\n<li id="item_2">List Item 2</li>\n<li id="item_3">List Item 3</li>\n<li id="item_4">List Item 4</li>\n<li id="item_5">List Item 5</li>\n</ul>';
	this.filled = '';
	this.css = { 
		'#list' : {
			display : 'block', 
			width : '100%',
			background : 'blue',
			margin : '0',
			padding : '0',
		},
		'#list li' : {
			display : 'block', 
			width : '100%',
			height : '60px',
			background : 'blue',
			'border-bottom' : 'solid 1px black',
		},
	}
}

ListLevel.prototype.render = function(div_key) {
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
	$('.hide').css('visibility', 'hidden');
	$('#output').css('visibility', 'hidden');
	$('#cssText').val(this.filled);
	setTimeout(function() {
		chrome.tabs.captureVisibleTab(null, {format:'png'}, function(dataUrl) {
			result = dataUrl;
			$('.hide').css('visibility', 'visible');
			$('#output').css('visibility', 'visible');
		});
	}, 0);
	
}


ListLevel.prototype.test = function(div_key, callback) {
	$('.hide').css('visibility', 'hidden');
	$('#result').css('visibility', 'hidden');
	$('#output').css('left', '410px');
	setTimeout(function() {
		chrome.tabs.captureVisibleTab(null, {format:'png'}, function(dataUrl) {
			var len = dataUrl.length;
			$('.hide').css('visibility', 'visible');
			$('#result').css('visibility', 'visible');
			$('#output').css('left', '0');
			if (result == dataUrl)
				callback();
		});
	}, 0);
	// var selectors = Object.keys(this.css);
	// for (var i = 0; i < selectors.length; i++) {
	// 	var selector = selectors[i];
	// 	var properties = Object.keys(this.css[selector]);
	// 	for (var j = 0; j < properties.length; j++) {
	// 		var property = properties[j];
	// 		if ($(div_key + ' ' + selector).css(property) != this.css[selector][property])
	// 			return false;
	// 	}
	// }
	return false;
}

function BorderRadiusLevel() {
	this.html = '<div id="box">Box</div>';
	this.filled = '';
	this.css = { 
		'#box' : {
			display : 'block', 
			width : '100px',
			height : '100px',
			background : 'blue',
			'border-radius' : '10px',
			'box-shadow' : '5px 5px 0 0 black',
		}
	}
}

BorderRadiusLevel.prototype.render = function(div_key) {
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
	$('.hide').css('visibility', 'hidden');
	$('#output').css('visibility', 'hidden');
	$('#cssText').val(this.filled);
	setTimeout(function() {
		chrome.tabs.captureVisibleTab(null, {format:'png'}, function(dataUrl) {
			result = dataUrl;
			$('.hide').css('visibility', 'visible');
			$('#output').css('visibility', 'visible');
		});
	}, 0);
	
}


BorderRadiusLevel.prototype.test = function(div_key, callback) {
	$('.hide').css('visibility', 'hidden');
	$('#result').css('visibility', 'hidden');
	$('#output').css('left', '410px');
	setTimeout(function() {
		chrome.tabs.captureVisibleTab(null, {format:'png'}, function(dataUrl) {
			var len = dataUrl.length;
			$('.hide').css('visibility', 'visible');
			$('#result').css('visibility', 'visible');
			$('#output').css('left', '0');
			if (result == dataUrl)
				callback();
		});
	}, 0);
	// var selectors = Object.keys(this.css);
	// for (var i = 0; i < selectors.length; i++) {
	// 	var selector = selectors[i];
	// 	var properties = Object.keys(this.css[selector]);
	// 	for (var j = 0; j < properties.length; j++) {
	// 		var property = properties[j];
	// 		if ($(div_key + ' ' + selector).css(property) != this.css[selector][property])
	// 			return false;
	// 	}
	// }
	return false;
}
