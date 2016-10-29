# rosetta-markdown

> Translates the content or src of scirpt tags with type attributes of 'text/markdown' or 'text/md' from markdown into html.

## Demo

[Live demo](https://plnkr.co/edit/BM9kv3?p=preview)

## Install
``` bash
npm install rosetta-markdown --save
```
or

``` bash
git clone https://github.com/adamcarheden/rosetta-markdown.git
```
## Use

### Simple
``` html
<script src='rosetta-markdown.js'></script>
<script type='text/markdown'>
# Markdown Example
This text will be translated into html and added to the document.
</script>
```

### Fully-featured
We use the [marked](https://github.com/chjj/marked) markdown parser.
You can access it to do things like syntax-highlighting using [highlight.js](https://highlightjs.org/):
``` html
<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.7.0/styles/default.min.css">
<script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.7.0/highlight.min.js"></script>
<script src='rosetta-markdown.js'></script>
<script>
	window['rosetta-markdown'].marked.setOptions({
		highlight: function(code) {
			return hljs.highlightAuto(code).value;
		}
	});
</script>
```


## Contribute
``` bash
npm install
npm run build
```
This just webpackifies stuff at the moment.
Some karma and nightwatch tests would be a good addition.
