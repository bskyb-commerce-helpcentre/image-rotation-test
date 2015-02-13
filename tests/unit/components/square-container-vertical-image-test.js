import {
  moduleForComponent,
  test
} from 'ember-qunit';

import {scale, aspect} from '../../helpers/image-helpers';

module('SquareContainerVerticalImage');

test('image.height < container.height and image.width < container.image', function() {
  var container = {
    width: 500,
    height: 500
  };

  var image = {
    width: 100,
    height: 200
  };

  var result = scale(image, container);

  ok(result.width <= container.width);
  ok(result.height <= container.height);
  equal(result.height, 500);
  equal(aspect(result), aspect(image), 'Aspect ratio has changed');
});

test('image.height === container.height and image.width < container.image', function() {
  var container = {
    width: 500,
    height: 500
  };

  var image = {
    width: 100,
    height: 500
  };

  var result = scale(image, container);

  ok(result.width <= container.width);
  ok(result.height <= container.height);
  equal(result.height, 500);
  equal(aspect(result), aspect(image), 'Aspect ratio has changed');
});

test('image.height > container.height and image.width < container.image', function() {
  var container = {
    width: 500,
    height: 500
  };

  var image = {
    width: 100,
    height: 600
  };

  var result = scale(image, container);

  ok(result.width <= container.width);
  ok(result.height <= container.height);
  equal(result.height, 500);
  equal(aspect(result), aspect(image), 'Aspect ratio has changed');
});

test('image.height > container.height and image.width === container.image', function() {
  var container = {
    width: 500,
    height: 500
  };

  var image = {
    width: 500,
    height: 600
  };

  var result = scale(image, container);

  ok(result.width <= container.width);
  ok(result.height <= container.height);
  equal(result.height, 500);
  equal(aspect(result), aspect(image), 'Aspect ratio has changed');
});

test('image.height > container.height and image.width > container.image', function() {
  var container = {
    width: 500,
    height: 500
  };

  var image = {
    width: 700,
    height: 1000
  };

  var result = scale(image, container);

  ok(result.width <= container.width);
  ok(result.height <= container.height);
  equal(result.height, 500);
  equal(aspect(result), aspect(image), 'Aspect ratio has changed');
});
