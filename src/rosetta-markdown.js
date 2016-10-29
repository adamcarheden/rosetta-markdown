"use strict";
var rosettaToHTML = require('rosetta-tohtml');
var marked = require('marked');

rosettaToHTML.appendCompiler([ "text/markdown", "text/md" ], function(md) { 
	return marked(md);
});

if (typeof(document) !== 'undefined') {
	document.addEventListener("DOMContentLoaded", function() {
		rosettaToHTML.translateAll();
	});	
} else {
	console.log('document is undefined. It doesn\'t really make sense to use rosetta-markdown outside of a web browser.');
}

module.exports = {
	'rosetta-tohmlt': rosettaToHTML,
	marked: marked,
}
