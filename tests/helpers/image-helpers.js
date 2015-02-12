function calculateRatio(image, container) {
  var prop;

  if (image.width === container.width && image.height === container.height) {
    return 1;
  }

  //if (image.width === container.width && image.height > container.height) {
    //return container.height / image.height;
  //}

  //if (image.width > container.width && image.height === container.height) {
    //return container.width / image.width;
  //}

  if (image.width > container.width && image.height > container.height) {
    prop = image.width > image.height ? 'width' : 'height';

    return container[prop] / image[prop];
  }

  if (image.width < container.width && image.height < container.height) {
    prop = image.width > image.height ? 'width' : 'height';

    return container[prop] / image[prop];
  }

  if (image.width < container.width && image.height > container.height) {
    prop = image.width > image.height ? 'width' : 'height';

    return container[prop] / image[prop];
  }

  return 1;
}

var scale = function(image, container) {
  var result = {};
  var ratio = calculateRatio(image, container);

  result.width = image.width * ratio;
  result.height = image.height * ratio;

  return result;
};

var aspect = function(image) {
  return image.width / image.height;
};

export {scale, aspect};
