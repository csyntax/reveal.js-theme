System.register(["./setupRevealJs"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var setupRevealJs_1;
    var render;
    return {
        setters:[
            function (setupRevealJs_1_1) {
                setupRevealJs_1 = setupRevealJs_1_1;
            }],
        execute: function() {
            render = (function () {
                function render(filename) {
                    $.ajax(filename, {
                        success: function (markdown) {
                            markdown = render.removeHidden(markdown);
                            var sections = render.parseMarkdown(markdown);
                            render.fillSections(sections);
                            setupRevealJs_1.setupRevealJs();
                            console.log('?!');
                            setTimeout(function () {
                                $('#loading').remove();
                            }, 3000);
                        },
                        error: function (err) {
                            console.log(err);
                        }
                    });
                }
                render.removeHidden = function (markdown) {
                    var regex = /<!--\s*attr\s*:\s*{.*showInPresentation.*}\s-->\s*(<!--[\s\S]+?-->)/gi;
                    markdown = markdown.replace(regex, function (whole, group) {
                        var fixed = group.substring('<!--'.length);
                        fixed = fixed.substring(0, fixed.length - '-->'.length);
                        return whole.replace(group, fixed).trim();
                    });
                    var regexImage = /<!--\s*<img.*((?=showInPresentation)showInPresentation=["']([^"']*))["'].*(?=\/)\/>\s*-->/gi;
                    markdown = markdown.replace(regexImage, function (g1, g2, g3) {
                        if (g3 && g3.toLowerCase() === 'true') {
                            return g1.replace('<!--', '').replace('-->', '').trim();
                        }
                        return g1;
                    });
                    var regexLinks = /(\[.*\]\(#)(.*)(\))/gi;
                    markdown = markdown.replace(regexLinks, function (g1, g2, g3, g4) {
                        if (g3.indexOf('/') < 0) {
                            g3 = '/' + g3;
                        }
                        return g2 + g3 + g4;
                    });
                    return markdown;
                };
                render.sectionStringToSlides = function (sectionString) {
                    var lines = sectionString.split('\n');
                    var slides = [];
                    var slide = '';
                    lines.forEach(function (line) {
                        var trimmedLine = line.trim();
                        if (trimmedLine.indexOf('# ') === 0 || trimmedLine.indexOf('#\t') === 0 || trimmedLine.indexOf('attr:') >= 0) {
                            if (slide.trim() !== '') {
                                slides.push(slide);
                            }
                            slide = '';
                        }
                        slide += line;
                        slide += '\n';
                    });
                    if (slide.trim() !== '') {
                        slides.push(slide);
                    }
                    return slides;
                };
                render.parseMarkdown = function (markdown) {
                    var sectionsStrings = markdown.trim().split(/<!--[ ]+section start[ ]+-->/g);
                    var sections = [];
                    sectionsStrings.forEach(function (sectionString) {
                        var slides = render.sectionStringToSlides(sectionString);
                        sections.push({
                            slides: slides
                        });
                    });
                    return sections;
                };
                render.fillSections = function (sections) {
                    var $sectionsContainer = $("<div/>");
                    sections.forEach(function (section, index) {
                        if (!section.slides || !section.slides.length || section.slides.every(function (slide) {
                            return slide.trim() === '';
                        })) {
                            return;
                        }
                        var $masterSection = $('<section />').appendTo($sectionsContainer);
                        var attr = {};
                        section.slides.forEach(function (slide) {
                            slide = slide.trim();
                            if (slide.indexOf('<!-- attr: ') >= 0) {
                                var fromIndex = slide.indexOf('<!-- attr:'), toIndex = slide.indexOf('}', fromIndex + 1), attrString = slide.substring(fromIndex + '<!-- attr:'.length, toIndex + 1);
                                eval('attr=' + attrString);
                                return;
                            }
                            var $section = $('<section/>').attr('data-markdown', '').appendTo($masterSection);
                            if (attr.hasScriptWrapper) {
                                slide = '<' + 'script type="text/md-tmp">' + slide + '</' + 'script>';
                            }
                            $section.html(slide);
                            for (var attrName in attr) {
                                $section.attr(attrName, attr[attrName]);
                            }
                            attr = {};
                        });
                    });
                    $('#slides-container').html($sectionsContainer.html());
                };
                return render;
            }());
        }
    }
});
//# sourceMappingURL=render.js.map