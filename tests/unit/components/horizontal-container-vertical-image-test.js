import {
  moduleForComponent,
  test
} from 'ember-qunit';

import {scale, aspect} from '../../helpers/image-helpers';

module('HorizontalContainerVerticalImage');

test('image.height < container.height and image.width < container.width', function() {
  var container = {
    width: 800,
    height: 600
  };

  var image = {
    width: 50,
    height: 100
  };

  var result = scale(image, container);

  ok(result.width <= container.width, 'Width not within container');
  ok(result.height <= container.height, 'Height not within container');
  equal(result.height, 600);
  equal(aspect(result), aspect(image), 'Aspect ratio has changed');
});

test('image.height === container.height and image.width < container.width', function() {
  var container = {
    width: 800,
    height: 600
  };

  var image = {
    width: 50,
    height: 600
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
    width: 50,
    height: 1000
  };

  var result = scale(image, container);

  ok(result.width <= container.width, 'Width not within container');
  ok(result.height <= container.height, 'Height not within container');
  equal(result.height, 600);
  equal(aspect(result), aspect(image), 'Aspect ratio has changed');
});

test('image.height > container.height and image.width === container.width', function() {
  var container = {
    width: 800,
    height: 600
  };

  var image = {
    width: 800,
    height: 1000
  };

  var result = scale(image, container);

  ok(result.width <= container.width, 'Width not within container');
  ok(result.height <= container.height, 'Height not within container');
  equal(result.height, 600);
  equal(aspect(result), aspect(image), 'Aspect ratio has changed');
});

test('image.height > container.height and image.width > container.width', function() {
  var container = {
    width: 800,
    height: 600
  };

  var image = {
    width: 900,
    height: 1000
  };

  var result = scale(image, container);

  ok(result.width <= container.width, 'Width not within container');
  ok(result.height <= container.height, 'Height not within container');
  equal(result.height, 600);
  equal(aspect(result), aspect(image), 'Aspect ratio has changed');
});
