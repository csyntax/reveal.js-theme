System.register(["./render"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var render_1;
    var protocol, pathname, host, readmeLocation;
    return {
        setters:[
            function (render_1_1) {
                render_1 = render_1_1;
            }],
        execute: function() {
            protocol = window.location.protocol;
            pathname = window.location.pathname.replace(/index\.html$/, '');
            host = window.location.host;
            readmeLocation = protocol + "//" + host + pathname;
            if (readmeLocation[readmeLocation.length - 1] !== '/') {
                readmeLocation += '/';
            }
            readmeLocation += 'README.md';
            new render_1.Render(readmeLocation);
        }
    }
});
