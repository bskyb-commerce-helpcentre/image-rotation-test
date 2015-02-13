import {
  moduleForComponent,
  test
} from 'ember-qunit';

import {scale, aspect} from '../../helpers/image-helpers';

module('VerticalContainerVerticalImage');

test('image.height < container.height and image.width < container.width (hits top first)', function() {
  var container = {
    width: 600,
    height: 800
  };

  var image = {
    width: 200,
    height: 750
  };

  var result = scale(image, container);

  ok(result.width <= container.width, 'Width not within container');
  ok(result.height <= container.height, 'Height not within container');
  equal(result.height, 800);
  equal(aspect(result), aspect(image), 'Aspect ratio has changed');
});

test('image.height < container.height and image.width < container.width (hits sides first)', function() {
  var container = {
    width: 600,
    height: 800
  };

  var image = {
    width: 550,
    height: 600
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
    height: 700
  };

  var result = scale(image, container);

  ok(result.width <= container.width, 'Width not within container');
  ok(result.height <= container.height, 'Height not within container');
  equal(result.width, 600);
  equal(aspect(result), aspect(image), 'Aspect ratio has changed');
});

test('image.height === container.height and image.width < container.width', function() {
  var container = {
    width: 600,
    height: 800
  };

  var image = {
    width: 400,
    height: 800
  };

  var result = scale(image, container);

  ok(result.width <= container.width, 'Width not within container');
  ok(result.height <= container.height, 'Height not within container');
  equal(result.height, 800);
  equal(aspect(result), aspect(image), 'Aspect ratio has changed');
});

test('image.height > container.height and image.width === container.width', function() {
  var container = {
    width: 600,
    height: 800
  };

  var image = {
    width: 600,
    height: 1000
  };

  var result = scale(image, container);

  ok(result.width <= container.width, 'Width not within container');
  ok(result.height <= container.height, 'Height not within container');
  equal(result.height, 800);
  equal(aspect(result), aspect(image), 'Aspect ratio has changed');
});

test('image.height === container.height and image.width === container.width', function() {
  var container = {
    width: 600,
    height: 800
  };

  var image = {
    width: 600,
    height: 800
  };

  var result = scale(image, container);

  ok(result.width <= container.width, 'Width not within container');
  ok(result.height <= container.height, 'Height not within container');
  equal(result.height, 800);
  equal(aspect(result), aspect(image), 'Aspect ratio has changed');
});

test('image.height > container.height and image.width > container.width (match by height)', function() {
  var container = {
    width: 600,
    height: 800
  };

  var image = {
    width: 650,
    height: 1000
  };

  var result = scale(image, container);

  ok(result.width <= container.width, 'Width not within container');
  ok(result.height <= container.height, 'Height not within container');
  equal(result.height, 800);
  equal(aspect(result), aspect(image), 'Aspect ratio has changed');
});

test('image.height > container.height and image.width > container.width (match by width)', function() {
  var container = {
    width: 600,
    height: 800
  };

  var image = {
    width: 800,
    height: 850
  };

  var result = scale(image, container);

  ok(result.width <= container.width, 'Width not within container');
  ok(result.height <= container.height, 'Height not within container');
  equal(result.width, 600);
  equal(aspect(result), aspect(image), 'Aspect ratio has changed');
});
