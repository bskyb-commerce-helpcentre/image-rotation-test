import {
  moduleForComponent,
  test
} from 'ember-qunit';

import {scale, aspect} from '../../helpers/image-helpers';

module('SquareContainerSquareImage');

test('image.height == container.height and image.width == container.image', function() {
  var container = {
    width: 500,
    height: 500
  };

  var image = {
    width: 500,
    height: 500
  };

  var result = scale(image, container);

  ok(result.width <= container.width);
  ok(result.height <= container.height);
  equal(result.height, 500);
  equal(result.width, 500);
  equal(aspect(result), aspect(image), 'Aspect ratio has changed');
});

test('image.height > container.height and image.width > container.height', function() {
  var container = {
    width: 500,
    height: 500
  };

  var image = {
    width: 1000,
    height: 1000
  };

  var result = scale(image, container);

  ok(result.width <= container.width, 'Width not within container');
  ok(result.height <= container.height, 'Height not within container');
  equal(result.height, 500);
  equal(result.width, 500);
  equal(aspect(result), aspect(image), 'Aspect ratio has changed');
});

test('image.height < container.height and image.width < container.width', function() {
  var container = {
    width: 500,
    height: 500
  };

  var image = {
    width: 200,
    height: 200
  };

  var result = scale(image, container);

  ok(result.width <= container.width, 'Width not within container');
  ok(result.height <= container.height, 'Height not within container');
  equal(result.height, 500);
  equal(result.width, 500);
  equal(aspect(result), aspect(image), 'Aspect ratio has changed');
});
