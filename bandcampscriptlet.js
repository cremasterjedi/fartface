// Scriptlet for uBlock Origin
/// bandcampscriptlet.js
(function() {
    const css = `
    .inline_player .prevbutton,
    .inline_player .nextbutton {
        background-image: url(/img/nextprevinvert.png) !important;
    }`;

    const style = document.createElement('style');
    style.type = 'text/css';
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);
})();
