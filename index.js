(function () {

  window.shrinkToViewport = function (elementId, elementWidth, elementHeight, shrinkOnResize) {
    var ratio = 1;
    var element = document.getElementById(elementId);

    element.style.width = elementWidth + 'px';
    element.style.height = elementHeight + 'px';
    element.style.position = 'absolute';
    element.style.top = '50%';
    element.style.left = '50%';
    element.style.margin = '-' + Math.round(elementHeight / 2) + 'px 0 0 -' + Math.round(elementWidth / 2) + 'px';

    function scale() {
      var viewportWidth = window.innerWidth;
      var viewportHeight = window.innerHeight;
      var wRatio = elementWidth > viewportWidth ? viewportWidth / elementWidth : 1;
      var hRatio = elementHeight > viewportHeight ? viewportHeight / elementHeight : 1;
      var newRatio = wRatio > hRatio ? hRatio : wRatio;
      var transform;

      if (ratio !== newRatio) {
        ratio = newRatio;
        transform = 'scale(' + ratio + ')';
        element.style.transform = transform;
        element.style.webkitTransform = transform;
        element.style.msTransform = transform;
      }
    }

    if (shrinkOnResize) {
      window.addEventListener('resize', scale, false);
    }
    scale();
  };

  return window.shrinkToViewport;

})();