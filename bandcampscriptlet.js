{
  "resources": {
    "bandcampscriptlet.js": {
      "alias": "bandcampscriptlet",
      "dependencies": [],
      "content": "(() => { const applyCSS = () => { const style = document.createElement('style'); style.textContent = `.inline_player .prevbutton,.inline_player .nextbutton {background-image: url(/img/nextprevinvert.png) !important;}`; document.head.appendChild(style); }; if(document.head) applyCSS(); else window.addEventListener('DOMContentLoaded', applyCSS); const observer = new MutationObserver(() => applyCSS()); observer.observe(document.body, { childList: true, subtree: true }); })();"
    }
  }
}
