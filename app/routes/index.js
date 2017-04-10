import Ember from 'ember';

export default Ember.Route.extend({
  model(){
      // this.store: the Firebase data store we've set up for our application
      // the findAll() method with the argument client instructs Ember Data to find all records of the type client in the store, and return them to our application.
       clients: this.store.findAll('client');
  },
  actions:{
    // save question function to save questions to db
    saveClient3(params){
      var newClient = this.store.createRecord('client', params); //use params to create new question record in the store
      newClient.save(); //save new question

      // move to index page and see our new question in the list
      this.transitionTo('client');
    }
  }
});
