function orientation(image) {
  if (image.width > image.height) {
    return 'L';
  }

  if (image.width < image.height) {
    return 'P';
  }

  return 'C';
}

function calculateRatio(image, container) {
  var prop;

  if (image.height === container.height && image.width === container.width) {
    return 1;
  }

  //if (image.height === container.height && image.width > container.width) {
    //return container.height / image.height;
  //}

  //if (image.height > container.height && image.width === container.width) {
    //return container.width / image.width;
  //}

  if (image.height > container.height && image.width > container.width) {
    if (image.width > image.height) {
      prop = 'width';
    } else if (image.height > image.width) {
      prop = 'height';
    } else {
      if (container.height > container.width) {
        prop = 'width';
      } else {
        prop = 'height';
      }
    }

    return container[prop] / image[prop];
  }

  if (image.height < container.height && image.width < container.width) {
    if (image.width > image.height) {
      prop = 'width';
    } else if (image.height > image.width) {
      prop = 'height';
    } else {
      if (container.height > container.width) {
        prop = 'width';
      } else {
        prop = 'height';
      }
    }

    return container[prop] / image[prop];
  }

  if (image.height > container.height && image.width < container.width) {
    prop = image.width > image.height ? 'width' : 'height';

    return container[prop] / image[prop];
  }

  if (image.height < container.height && image.width > container.width) {
    prop = image.width > image.height ? 'height' : 'width';

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
