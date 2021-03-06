var render = (function () {
	function render(filename) {
		$.ajax(filename, {
	  		success: function (markdown) {
				markdown = removeHidden(markdown);

				var sections = parseMarkdown(markdown);

				fillSections(sections);

				Reveal.initialize({
					controls: true,
					progress: true,
					history: true,
					center: true,
					slideNumber: "c / t",
					transition: "slide",
					transition: "default",
					transitionSpeed: "slow",
					backgroundTransition: "slide",
					dependencies: [
			            {
			                src: "http://rawgit.com/csyntax/reveal.js-theme/master/js/plugins/classList.js",
			                condition: function () {
			                    return !document.body.classList;
			                }
			            },
			            {
			                src: "http://rawgit.com/csyntax/reveal.js-theme/master/js/plugins/marked.js",
			                condition: function () {
			                    return !!document.querySelector("[data-markdown]");
			                }
			            },
			            {
			                src: "http://rawgit.com/csyntax/reveal.js-theme/master/js/plugins/markdown.js",
			                condition: function () {
			                    return !!document.querySelector("[data-markdown]");
			                }
			            },
			            {
			                src: "http://rawgit.com/csyntax/reveal.js-theme/master/js/plugins/highlight.js",
			                callback: function() {
			                    hljs.initHighlightingOnLoad();
			                }
			            }
			        ]
				});

				setTimeout(function () {
			  		$("#loading").remove();
				}, 3000);
		  	},
		  	error: function(err) {
				console.log(err);
		  	}
		});
	}

	function removeHidden(markdown) {
		var regex = /<!--\s*attr\s*:\s*{.*showInPresentation.*}\s-->\s*(<!--[\s\S]+?-->)/gi;

		markdown = markdown.replace (regex, function(whole, group) {
			var fixed = group.substring("<!--".length);

		  	fixed = fixed.substring(0, fixed.length - "-->".length);

		  	return whole.replace(group, fixed).trim();
		});

		/*var regexImage = /<!--\s*<img.*((?=showInPresentation)showInPresentation=["']([^"']*))["'].*(?=\/)\/>\s*-->/gi;

		markdown = markdown.replace(regexImage, function(g1, g2, g3) {
			if (g3 && g3.toLowerCase() === "true") {
				return g1.replace("<!--", "").replace("-->", "").trim();
		  	}

			return g1;
		});*/

		var regexLinks = /(\[.*\]\(#)(.*)(\))/gi;

		markdown = markdown.replace(regexLinks, function (g1, g2, g3, g4) {
			if (g3.indexOf("/") < 0) {
				g3 = "/" + g3;
			}

			return g2 + g3 + g4;
		});

		return markdown;
	}

	function sectionStringToSlides(sectionString) {
		var lines = sectionString.split("\n");
	  	var slides = [];
	  	var slide = "";

		lines.forEach(function(line) {
	  		var trimmedLine = line.trim();

			if (trimmedLine.indexOf("# ") === 0 || trimmedLine.indexOf("#\t") === 0 || trimmedLine.indexOf("attr:") >= 0) {
				if (slide.trim() !== "") {
		  			slides.push(slide);
				}

				slide = "";
		  	}

		  	slide += line;
		  	slide += "\n";
		});

		if (slide.trim() !== "") {
			slides.push(slide);
		}

		return slides;
	}

	function parseMarkdown(markdown) {
		var sectionsStrings = markdown.trim().split(/<!--[ ]+section start[ ]+-->/g);
		var sections = [];

		sectionsStrings.forEach(function(sectionString) {
	  		var slides = sectionStringToSlides(sectionString);

	  		sections.push({
				slides: slides
	  		});
		});

		return sections;
	}

	function fillSections(sections) {
		var $sectionsContainer = $("<div/>");

		sections.forEach(function(section, index) {
		  	if (!section.slides || !section.slides.length || section.slides.every(function (slide) {
				return slide.trim() === "";
			})) {
				return;
		  	}

		  	var $masterSection = $("<section />").appendTo($sectionsContainer);
		  	var attr = {};

	        section.slides.forEach(function (slide) {
	            slide = slide.trim();

	            if (slide.indexOf("<!-- attr: ") >= 0) {
	                var fromIndex = slide.indexOf("<!-- attr:");

	                var toIndex = slide.indexOf("}", fromIndex + 1);

	                var attrString = slide.substring(fromIndex + "<!-- attr:".length, toIndex + 1);

	                eval("attr=" + attrString); // todo

	                return;
	            }

	            var $section = $("<section/>").attr("data-markdown", "").appendTo($masterSection);

	            if (attr.hasScriptWrapper) {
	                //slide = '<' + 'script type="text/md-tmp">' + slide + '</' + 'script>'; // todo
					var scriptEl = document.createElement("script");
					scriptEl.type="text/md-tmp";
					scriptEl.innerHTML = slide;

					slide = scriptEl;
	            }

	            $section.html(slide);

	            for (var attrName in attr) {
	                $section.attr(attrName, attr[attrName]);
	            }

	            attr = {};
	        });
		});

		$("#slides-container").html($sectionsContainer.html());
	}

	return render;
})();
