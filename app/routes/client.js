import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('client', params.client_id);
  // actions:{
    // save question function to save questions to db
    // saveService(params){
    //   var newService = this.store.createRecord('service', params); //use params to create new question record in the store
      // newService.save(); //save new question

      // move to index page and see our new question in the list
    //   this.transitionTo('client');
    // }
    //saveClient3(params){
    //   var newClient = this.store.createRecord('client', params); //use params to create new question record in the store
    //   newClient.save(); //save new question
    //
    //   // move to index page and see our new question in the list
    //   this.transitionTo('client');
    // }
  }
});
