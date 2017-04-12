import Ember from 'ember';

export default Ember.Component.extend({
  isButtonShowing: false,
  actions: {
    approveService(client){
      this.set('isButtonShowing', true);
      var params = {
      firstName: this.get('firstName'),
      lastName: this.get('lastName'),
      service: this.get('service'),
      attendant: this.get('attendant'),
      price: this.get('price'),
      approved: true
    };
    this.sendAction('approveService', client, params);
  }
}
});
