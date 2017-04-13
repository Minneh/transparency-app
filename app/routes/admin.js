import Ember from 'ember';

export default Ember.Route.extend({
  model(){
      // this.store: the Firebase data store we've set up for our application
      // the findAll() method with the argument client instructs Ember Data to find all records of the type client in the store, and return them to our application.
      // return this.store.findAll('client');
       return this.store.findAll('client',{
        orderBy:'time'});
  },
  actions: {
    approveService(client, params){
      client.save();
      this.transitionTo('admin');
    }
  }
});
