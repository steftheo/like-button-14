import Ember from 'ember';

export default Ember.Component.extend({
  likeCounter: true,

  changeLikeCounter(val) {
    this.set(`likeCounter`, val);
  },
});
