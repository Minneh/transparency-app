import Ember from 'ember';

export default Ember.Component.extend({
  addNewClient: true,
  actions: {
  //  clientFormShow() {
  //    this.set('addNewClient', false);
  //  },
  //  component behaviour for save button
   saveClient1(){
    // collects all of the data that was entered in the input fields and sets them as values in a hash of keys with the same names.
     var params = {
       firstName: this.get('firstName'),
       lastName: this.get('lastName'),
       service: this.get('service'),
       price: this.get('prices'),
       attendant: this.get('attendant'),
       approved: false,
     };
     this.set('addNewClient', false); //hide form again after each field's value is collected
     this.sendAction('saveClient2', params); //emits the action saveQuestion2 sending with it the params hash that we just made
   }
 }
});
