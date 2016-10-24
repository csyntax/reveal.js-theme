System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function setupRevealJs() {
        Reveal.initialize({
            controls: true,
            progress: true,
            history: true,
            center: true,
            slideNumber: 'c / t',
            transition: 'slide',
            dependencies: [{
                    src: './reveal.js/lib/js/classList.js',
                    condition: function () {
                        return !document.body.classList;
                    }
                }, {
                    src: './reveal.js/plugin/markdown/marked.js',
                    condition: function () {
                        return !!document.querySelector('[data-markdown]');
                    }
                }, {
                    src: './reveal.js/plugin/markdown/markdown.js',
                    condition: function () {
                        return !!document.querySelector('[data-markdown]');
                    }
                }, {
                    src: './reveal.js/plugin/highlight/highlight.js',
                    async: true,
                    callback: function () {
                        hljs.initHighlightingOnLoad();
                    }
                }, {
                    src: './reveal.js/plugin/zoom-js/zoom.js',
                    async: true
                }, {
                    src: './reveal.js/plugin/notes/notes.js',
                    async: true
                }]
        });
    }
    exports_1("setupRevealJs", setupRevealJs);
    return {
        setters:[],
        execute: function() {
        }
    }
});
//# sourceMappingURL=setupRevealJs.js.map