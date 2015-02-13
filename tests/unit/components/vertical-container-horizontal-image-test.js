import {
  moduleForComponent,
  test
} from 'ember-qunit';

import {scale, aspect} from '../../helpers/image-helpers';

module('VerticalContainerHorizontalImage');

test('image.height < container.height and image.width < container.width', function() {
  var container = {
    width: 600,
    height: 800
  };

  var image = {
    width: 60,
    height: 80
  };

  var result = scale(image, container);

  ok(result.width <= container.width, 'Width not within container');
  ok(result.height <= container.height, 'Height not within container');
  equal(result.width, 600);
  equal(aspect(result), aspect(image), 'Aspect ratio has changed');
});

test('image.height < container.height and image.width === container.width', function() {
  var container = {
    width: 600,
    height: 800
  };

  var image = {
    width: 600,
    height: 80
  };

  var result = scale(image, container);

  ok(result.width <= container.width, 'Width not within container');
  ok(result.height <= container.height, 'Height not within container');
  equal(result.width, 600);
  equal(aspect(result), aspect(image), 'Aspect ratio has changed');
});

test('image.height < container.height and image.width > container.width', function() {
  var container = {
    width: 600,
    height: 800
  };

  var image = {
    width: 1000,
    height: 80
  };

  var result = scale(image, container);

  ok(result.width <= container.width, 'Width not within container');
  ok(result.height <= container.height, 'Height not within container');
  equal(result.width, 600);
  equal(aspect(result), aspect(image), 'Aspect ratio has changed');
});

test('image.height === container.height and image.width > container.width', function() {
  var container = {
    width: 600,
    height: 800
  };

  var image = {
    width: 1000,
    height: 800
  };

  var result = scale(image, container);

  ok(result.width <= container.width, 'Width not within container');
  ok(result.height <= container.height, 'Height not within container');
  equal(result.width, 600);
  equal(aspect(result), aspect(image), 'Aspect ratio has changed');
});

test('image.height > container.height and image.width > container.width', function() {
  var container = {
    width: 600,
    height: 800
  };

  var image = {
    width: 1000,
    height: 900
  };

  var result = scale(image, container);

  ok(result.width <= container.width, 'Width not within container');
  ok(result.height <= container.height, 'Height not within container');
  equal(result.width, 600);
  equal(aspect(result), aspect(image), 'Aspect ratio has changed');
});
