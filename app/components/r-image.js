import Em from 'ember';

export default Em.Component.extend({
  classNames: ['rotatable-image-container'],
  attributeBindings: ['style'],
  containerHeight: 0,
  containerWidth: 0,
  originalOrientation: true,

  onDidInsertElement: function() {
    var element = this.get('element');
    var height  = element.offsetHeight;
    var width   = element.offsetWidth;

    this.set('containerHeight', height);
    this.set('containerWidth', width);
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

  aspect: Em.computed(function() {
    var height = this.get('containerHeight');
    var width = this.get('containerWidth');
    return (width / height).toFixed(2);
  }),

  imageWidth: function() {
    return this.$('img').width();
  }.property(),

  imageHeight: function() {
    return this.$('img').height();
  }.property(),

  imageAspect: Em.computed('imageHeight', 'imageWidth', function() {
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
    this._rotate.apply(this);
    //this.swapImageWidthAndHeight();
    //this.set('scale', this.recalculateScale());
  },

  _rotate: function() {
    this.incrementProperty('degrees', 90);
    this.toggleProperty('originalOrientation');
  },

  //mouseEnter: function() {
    //this.incrementProperty('degrees', 3);
  //},

  //mouseLeave: function() {
    //this.decrementProperty('degrees', 3);
  //},

  recalculateScale: Em.observer('originalOrientation', function() {
    var containerAspect = this.get('aspect');
    console.log('Container Aspect: ', containerAspect);
    var imageAspect = this.get('imageAspect');
    console.log('Image Aspect: ', imageAspect);

    var imageHeight = this.get('imageHeight');
    console.log('Image Height: ', imageHeight);
    var imageWidth = this.get('imageWidth');
    console.log('Image Width: ', imageWidth);
    var containerHeight = this.get('containerHeight');
    console.log('Container Height', containerHeight);
    var containerWidth = this.get('containerWidth');
    console.log('Container Width', containerWidth);

    var scale;

    if (imageAspect > containerAspect) {
      scale = (containerWidth / imageWidth).toFixed(2);
    } else {
      scale = (containerHeight / imageHeight).toFixed(2);
    }

    this.set('scale', scale);
  }),

  //swapImageWidthAndHeight: function() {
    //var height = this.get('imageHeight');
    //var width = this.get('imageWidth');
    //this.set('imageHeight', width);
    //this.set('imageWidth', height);
  //}

});
