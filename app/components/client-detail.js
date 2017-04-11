import Ember from 'ember';

export default Ember.Component.extend({
  isButtonShowing: false,
  actions: {
    approveService: function() {
      this.set('isButtonShowing', true);
    }
  }
});
