onmessage = function (event) {
    importScripts('/highlight/highlight.pack.js');
    postMessage(event.data.map(function (code) {
        return self.hljs.highlightAuto(code);
    }));
};
