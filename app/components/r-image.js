import Em from 'ember';

export default Em.Component.extend({
  classNames: ['rotatable-image-container'],
  attributeBindings: ['style'],
  containerHeight: 0,

  onDidInsertElement: function() {
    var height = this.get('element').offsetHeight;
    this.set('containerHeight', height);
  }.on('didInsertElement'),

  style: Em.computed('containerHeight', function() {
    var height = this.get('containerHeight');
    return 'line-height: ' + height + 'px;';
  })
});
