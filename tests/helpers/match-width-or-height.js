import Ember from 'ember';

export default Ember.Test.registerHelper('matchWidthOrHeight', function(app, image, container) {
  var result = image.width === container.width || image.height === container.height;

  //QUnit.push(result, text, expected, message || 'contains');
  QUnit.push(result, result, true, 'Image has not scaled to max size within container');
});
