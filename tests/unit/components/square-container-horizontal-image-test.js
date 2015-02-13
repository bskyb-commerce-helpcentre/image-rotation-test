import {
  moduleForComponent,
  test
} from 'ember-qunit';

import {scale, aspect} from '../../helpers/image-helpers';

module('SquareContainerHorizontalImage');

test('image.height < container.height and image.width < container.width', function() {
  var container = {
    width: 800,
    height: 800
  };

  var image = {
    width: 600,
    height: 200
  };

  var result = scale(image, container);

  ok(result.width <= container.width, 'Width not within container');
  ok(result.height <= container.height, 'Height not within container');
  equal(result.width, 800);
  equal(aspect(result), aspect(image), 'Aspect ratio has changed');
});

test('image.height < container.height and image.width === container.width', function() {
  var container = {
    width: 800,
    height: 800
  };

  var image = {
    width: 800,
    height: 200
  };

  var result = scale(image, container);

  ok(result.width <= container.width, 'Width not within container');
  ok(result.height <= container.height, 'Height not within container');
  equal(result.width, 800);
  equal(aspect(result), aspect(image), 'Aspect ratio has changed');
});

test('image.height < container.height and image.width > container.width', function() {
  var container = {
    width: 800,
    height: 800
  };

  var image = {
    width: 900,
    height: 200
  };

  var result = scale(image, container);

  ok(result.width <= container.width, 'Width not within container');
  ok(result.height <= container.height, 'Height not within container');
  equal(result.width, 800);
  equal(aspect(result), aspect(image), 'Aspect ratio has changed');
});

test('image.height > container.height and image.width > container.width', function() {
  var container = {
    width: 800,
    height: 800
  };

  var image = {
    width: 1000,
    height: 900
  };

  var result = scale(image, container);

  ok(result.width <= container.width, 'Width not within container');
  ok(result.height <= container.height, 'Height not within container');
  equal(result.width, 800);
  equal(aspect(result), aspect(image), 'Aspect ratio has changed');
});

test('image.height === container.height and image.width > container.width', function() {
  var container = {
    width: 800,
    height: 800
  };

  var image = {
    width: 1000,
    height: 800
  };

  var result = scale(image, container);

  ok(result.width <= container.width, 'Width not within container');
  ok(result.height <= container.height, 'Height not within container');
  equal(result.width, 800);
  equal(aspect(result), aspect(image), 'Aspect ratio has changed');
});

