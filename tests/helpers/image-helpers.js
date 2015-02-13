function calculateRatio(image, container) {
  var prop;
  var parentAspect = aspect(container);
  var imageAspect = aspect(image);

  if (imageAspect > parentAspect) {
    prop = 'width';
  } else {
    prop = 'height';
  }

  return container[prop] / image[prop];
}

var scale = function(image, container) {
  var result = {};
  var ratio = calculateRatio(image, container);

  result.width = image.width * ratio;
  result.height = image.height * ratio;

  return result;
};

var aspect = function(image) {
  return (image.width / image.height).toFixed(2);
};

export {scale, aspect};
