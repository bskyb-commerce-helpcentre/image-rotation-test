import {
  moduleForComponent,
  test
} from 'ember-qunit';

import {scale, aspect} from '../../helpers/image-helpers';

module('HorizontalRectangleContainerSquareImage');

test('image.height > container.height and image.width > container.width', function() {
  var container = {
    width: 800,
    height: 600
  };

  var image = {
    width: 900,
    height: 900
  };

  var result = scale(image, container);

  ok(result.width <= container.width, 'Width not within container');
  ok(result.height <= container.height, 'Height not within container');
  equal(result.height, 600);
  equal(aspect(result), aspect(image), 'Aspect ratio has changed');
});

test('image.height < container.height and image.width < container.width', function() {
  var container = {
    width: 800,
    height: 600
  };

  var image = {
    width: 500,
    height: 500
  };

  var result = scale(image, container);

  ok(result.width <= container.width, 'Width not within container');
  ok(result.height <= container.height, 'Height not within container');
  equal(result.height, 600);
  equal(aspect(result), aspect(image), 'Aspect ratio has changed');
});

test('image.height > container.height and image.width < container.width', function() {
  var container = {
    width: 800,
    height: 600
  };

  var image = {
    width: 700,
    height: 700
  };

  var result = scale(image, container);

  ok(result.width <= container.width, 'Width not within container');
  ok(result.height <= container.height, 'Height not within container');
  equal(result.height, 600);
  equal(aspect(result), aspect(image), 'Aspect ratio has changed');
});
