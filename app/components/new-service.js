import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
  //  component behaviour for save button
   saveService(){
    // collects all of the data that was entered in the input fields and sets them as values in a hash of keys with the same names.
     var params = {
       name: this.get('name'),
       price: this.get('price'),
     };

     this.sendAction('saveService', params); //emits the action saveQuestion2 sending with it the params hash that we just made
   }
 }
});
