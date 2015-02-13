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
  }),

  imageStyle: Em.computed('degrees', 'scale', function() {
    var degrees = this.get('degrees');
    var scale   = this.get('scale');
    return 'transform: rotate('+ degrees +'deg) scale('+ scale +');';
  }),

  aspect: Em.computed('aspect', function() {
    var height = this.$().height();
    var width = this.$().width();
    return width/height;
  }),

  imageWidth: function() {
    return this.$('img').width();
  }.property(),

  imageHeight: function() {
    return this.$('img').height();
  }.property(),

  imageAspect: Em.computed('imageAspect', 'imageHeight', 'imageWidth', function() {
    var height = this.get('imageHeight');
    var width = this.get('imageWidth');
    return width/height;
  }),

  degrees: Em.computed(function() {
    return 0;
  }),

  scale: Em.computed(function() {
    return 1;
  }),

  click: function() {
    this.incrementProperty('degrees', 90);
    this.swapImageWidthAndHeight();
    this.set('scale', this.recalculateScale());
  },

  //mouseEnter: function() {
    //this.incrementProperty('degrees', 3);
  //},

  //mouseLeave: function() {
    //this.decrementProperty('degrees', 3);
  //},

  recalculateScale: function() {
    var containerAspect = this.get('aspect');
    var imageAspect = this.get('imageAspect');

    var imageHeight = this.get('imageHeight');
    var imageWidth = this.get('imageWidth');
    var containerHeight = this.$().height();
    var containerWidth = this.$().width();

    if (imageAspect > containerAspect) {
      return containerWidth / imageWidth;
    } else {
      return containerHeight / imageHeight;
    }
  },

  swapImageWidthAndHeight: function() {
    var height = this.get('imageHeight');
    var width = this.get('imageWidth');
    this.set('imageHeight', width);
    this.set('imageWidth', height);
  }

});
