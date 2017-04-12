import Ember from 'ember';

export default Ember.Component.extend({
  isButtonShowing: false,
  actions: {
    approveService(client){
      // console.log(this.get('firstName'))
      var params = {
      firstName: this.get('firstName'),
      lastName: this.get('lastName'),
      service: this.get('service'),
      price: this.get('price'),
      attendant: this.get('attendant'),
      approved: true
    };
    this.set('isButtonShowing', true);
    this.sendAction('approveService', client, params);
  }
}
});
