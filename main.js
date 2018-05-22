if (window.Worker) {
  addEventListener('load', function () {
    var codes = document.querySelectorAll('pre code');
    var worker = new Worker('/worker.js');
    // subscribe worker message
    worker.onmessage = function (event) {
      event.data.forEach(function(formatedCode, index) {
        codes[index].innerHTML = formatedCode.value;
      });
    };
    // collect data to format
    var codeContentToFormat = [];
    codes.forEach(function (code) {
      codeContentToFormat.push(code.textContent);
    })
    // sent data
    worker.postMessage(codeContentToFormat);
  });
}