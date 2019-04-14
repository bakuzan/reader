(function() {
  'use strict';

  var body, information, selector;

  function addCounterToView(number) {
    var counter = document.createElement('div');
    counter.className = 'counter';
    counter.textContent = number + 1;
    body.appendChild(counter);
  }

  function addImageToView(url) {
    var image = document.createElement('img');
    image.src = url;
    body.appendChild(image);
  }

  function processImagesForReading(files) {
    for (var i = 0, length = files.length; i < length; i++) {
      var file = files[i],
        imageUrl = window.URL.createObjectURL(file);
      addImageToView(imageUrl);
      addCounterToView(i);
    }
  }

  function updateReaderInfo(count) {
    information.textContent = `${count} pages loaded`;
  }

  function removeAnyCurrentImages() {
    while (body.children.length > 1) {
      body.removeChild(body.lastChild);
    }
  }

  function fileUploaderSetup() {
    selector = document.getElementById('file-selector');
    selector.onchange = function() {
      var files = selector.files;
      if (files.length) {
        removeAnyCurrentImages();
        processImagesForReading(files);
        updateReaderInfo(files.length);
      } else {
        alert('No files selected!');
      }
    };
  }

  window.onload = function() {
    body = document.body;
    information = document.getElementById('reader-info');
    fileUploaderSetup();
  };
})();
