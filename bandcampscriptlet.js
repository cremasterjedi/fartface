// Scriptlet for uBlock Origin
/// bandcampscriptlet.js
(function() {
    document.head.appendChild(
        Object.assign(document.createElement("style"), {
            textContent: ".inline_player .prevbutton,.inline_player .nextbutton {background-image: url(/img/nextprevinvert.png) !important;}"
        })
    );
})();
