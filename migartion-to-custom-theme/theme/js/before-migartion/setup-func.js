/* globals Reveal, hljs */
// Full list of configuration options available at:
// https://github.com/hakimel/reveal.js#configuration
function setupRevealJs() {
  Reveal.initialize({
    controls: true,
    progress: true,
    history: true,
    center: true,
    slideNumber: 'c / t',
    transition: 'slide', // none/fade/slide/convex/concave/zoom
    // Optional reveal.js plugins
    transition: 'default', // none/fade/slide/convex/concave/zoom

// Transition speed
transitionSpeed: 'slow', // default/fast/slow

// Transition style for full page slide backgrounds
backgroundTransition: 'default', // none/fade/slide/convex/concave/zoom
    dependencies: [{
      src: 'https://rawgit.com/TelerikAcademy/Common/master/revealjs-theme/lib/js/classList.js',
      condition: function() {
        return !document.body.classList;
      }
    }, {
      src: 'https://rawgit.com/TelerikAcademy/Common/master/revealjs-theme/plugin/markdown/marked.js',
      condition: function() {
        return !!document.querySelector('[data-markdown]');
      }
    }, {
      src: 'https://rawgit.com/TelerikAcademy/Common/master/revealjs-theme/plugin/markdown/markdown.js',
      condition: function() {
        return !!document.querySelector('[data-markdown]');
      }
    }, {
      src: 'https://rawgit.com/TelerikAcademy/Common/master/revealjs-theme/plugin/highlight/highlight.js',
      async: true,
      /*condition: function() {
          return !!document.querySelector('pre code');
      },*/
      callback: function() {
        hljs.initHighlightingOnLoad();
      }
    }, {
      src: 'https://rawgit.com/TelerikAcademy/Common/master/revealjs-theme/plugin/zoom-js/zoom.js',
      async: true
    }, {
      src: 'https://rawgit.com/TelerikAcademy/Common/master/revealjs-theme/plugin/notes/notes.js',
      async: true
    }]
  });
}
