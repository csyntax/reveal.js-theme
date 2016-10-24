import {Render} from "./render";

var protocol = window.location.protocol;
var pathname = window.location.pathname.replace(/index\.html$/, '');
var host = window.location.host;
var readmeLocation = protocol + "//" + host + pathname;
				
if (readmeLocation[readmeLocation.length - 1] !== '/') {
    readmeLocation += '/';
}

readmeLocation += 'README.md';

new Render("");