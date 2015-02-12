import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('r-image', 'RImageComponent', {
  // specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
});

test('image and container are the same size', function() {
  var container = {
    width: 1024,
    height: 768
  };

  var image = {
    width: 1024,
    height: 768
  };

  var result = scale(image, container);

  ok(result.width <= container.width);
  ok(result.height <= container.height);
  ok(atLeastWidthOrHeightMatch(result, container));
  equal(aspect(result), aspect(image), 'Aspect ratio has changed');
});

test('image height is greater than container and widths are the same size', function() {
  var container = {
    width: 1024,
    height: 768
  };

  var image = {
    width: 1024,
    height: 900
  };

  var result = scale(image, container);

  ok(result.width <= container.width, 'Width not within container');
  ok(result.height <= container.height, 'Height not within container');
  ok(atLeastWidthOrHeightMatch(result, container), 'Image not big enough');
  equal(aspect(result), aspect(image), 'Aspect ratio has changed');
});

test('image height is less than container and widths are the same size', function() {
  var container = {
    width: 1024,
    height: 768
  };

  var image = {
    width: 1024,
    height: 500
  };

  var result = scale(image, container);

  ok(result.width <= container.width, 'Width not within container');
  ok(result.height <= container.height, 'Height not within container');
  ok(atLeastWidthOrHeightMatch(result, container), 'Image not big enough');
  equal(aspect(result), aspect(image), 'Aspect ratio has changed');
});

test('image width is great than container and heights are the same size', function() {
  var container = {
    width: 1024,
    height: 768
  };

  var image = {
    width: 2000,
    height: 768
  };

  var result = scale(image, container);

  ok(result.width <= container.width, 'Width not within container');
  ok(result.height <= container.height, 'Height not within container');
  ok(atLeastWidthOrHeightMatch(result, container), 'Image not big enough');
  equal(aspect(result), aspect(image), 'Aspect ratio has changed');
});

test('image width is less than container and heights are the same size', function() {
  var container = {
    width: 1024,
    height: 768
  };

  var image = {
    width: 800,
    height: 768
  };

  var result = scale(image, container);

  ok(result.width <= container.width, 'Width not within container');
  ok(result.height <= container.height, 'Height not within container');
  ok(atLeastWidthOrHeightMatch(result, container), 'Image not big enough');
  equal(aspect(result), aspect(image), 'Aspect ratio has changed');
});

test('image width and height is greater than container', function() {
  var container = {
    width: 1024,
    height: 768
  };

  var image = {
    width: 2000,
    height: 900
  };

  var result = scale(image, container);

  ok(result.width <= container.width, 'Width not within container');
  ok(result.height <= container.height, 'Height not within container');
  ok(atLeastWidthOrHeightMatch(result, container), 'Image not big enough');
  equal(aspect(result), aspect(image), 'Aspect ratio has changed');
});

function scale(image, container) {
  var result = {};
  var ratio = 1;

  if (image.width === container.width && image.height === container.height) {
    ratio = 1;
  }

  if (image.width === container.width && image.height > container.height) {
    ratio = container.height / image.height;
  }

  if (image.width > container.width && image.height === container.height) {
    ratio = container.width / image.width;
  }

  if (image.width > container.width && image.height > container.height) {
    var prop = image.width > image.height ? 'width' : 'height';

    ratio = container[prop] / image[prop];
  }

  result.width = image.width * ratio;
  result.height = image.height * ratio;

  return result;
}

function atLeastWidthOrHeightMatch(image, container) {
  return image.width === container.width || image.height === container.height;
}

function aspect(image) {
  return image.width / image.height;
}

