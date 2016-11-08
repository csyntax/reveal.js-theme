# CSYNTAX REVEAL.JS THEMES
* Styles
	* `http://rawgit.com/csyntax/reveal.js-theme/master/css/reveal.css`
	* `http://rawgit.com/csyntax/reveal.js-theme/master/css/visual-studio.css`
	* `http://rawgit.com/csyntax/reveal.js-theme/master/css/csyntax-theme.css`
* Scripts
	* `http://rawgit.com/csyntax/reveal.js-theme/master/js/libs/head.min.js`
	* `http://rawgit.com/csyntax/reveal.js-theme/master/js/libs/jquery.min.js`
	* `http://rawgit.com/csyntax/reveal.js-theme/master/js/libs/reveal.js`
	* `http://rawgit.com/csyntax/reveal.js-theme/master/js/main.js`
	* `http://rawgit.com/csyntax/reveal.js-theme/master/js/render.js`
# Old version, before migration

* RevealJS styles
	* `http://rawgit.com/csyntax/reveal.js-theme/master/reveal.js/css/reveal.css`
	* `http://rawgit.com/csyntax/reveal.js-theme/master/reveal.js/css/theme/black.css`
	* `http://rawgit.com/csyntax/reveal.js-theme/master/reveal.js/lib/css/zenburn.css`
	* `http://rawgit.com/csyntax/reveal.js-theme/master/styles/main.css`
* RevealJS scripts
	* `http://rawgit.com/csyntax/reveal.js-theme/master/reveal.js/lib/js/head.min.js`
	* `http://rawgit.com/csyntax/reveal.js-theme/master/reveal.js/js/reveal.js`
	* `http://rawgit.com/csyntax/reveal.js-theme/master/scripts/libs/jquery.min.js`
	* `http://rawgit.com/csyntax/reveal.js-theme/master/scripts/main.js`
	* `http://rawgit.com/csyntax/reveal.js-theme/master/scripts/render.js`

## Simply template
```html
<!doctype html>
<html>
	<head>
		<meta charset="utf-8" />
		<meta name="apple-mobile-web-app-capable" content="yes" />
		<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, minimal-ui" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />

		<title>RevealJS Theme</title>

		<link rel="stylesheet" href="http://rawgit.com/csyntax/reveal.js-theme/master/reveal.js/css/reveal.css" />
		<link rel="stylesheet" href="http://rawgit.com/csyntax/reveal.js-theme/master/reveal.js/css/theme/black.css" />
		<link rel="stylesheet" href="http://rawgit.com/csyntax/reveal.js-theme/master/reveal.js/lib/css/zenburn.css" />
		<link rel="stylesheet" href="http://rawgit.com/csyntax/reveal.js-theme/master/styles/main.css" />

		<script src="http://rawgit.com/csyntax/reveal.js-theme/master/reveal.js/lib/js/head.min.js"></script>
		<script src="http://rawgit.com/csyntax/reveal.js-theme/master/scripts/libs/jquery.min.js"></script>
		<script src="http://rawgit.com/csyntax/reveal.js-theme/master/reveal.js/js/reveal.js"></script>
		<script src="http://rawgit.com/csyntax/reveal.js-theme/master/scripts/main.js"></script>
		<script src="http://rawgit.com/csyntax/reveal.js-theme/master/scripts/render.js"></script>
	</head>
	<body>
		<div class="reveal">
			<div id="slides-container" class="slides"></div>
		</div>
		<script>
			(function () {
				"use strict";

				var protocol = window.location.protocol;
				var pathname = window.location.pathname.replace(/index\.html$/, '');
				var host = window.location.host;
				var readmeLocation = protocol + "//" + host + pathname;

				if (readmeLocation[readmeLocation.length - 1] !== '/') {
					readmeLocation += '/';
				}

				readmeLocation += 'README.md';

				render(readmeLocation);
			})();
		</script>
	</body>
</html>
```
