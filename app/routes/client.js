import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('client', params.client_id);
  },
  actions:{
    approveService(client, params) {
      Object.keys(params).forEach(function(key){
        if (params[key] !== undefined){
          client.set(key, params[key]);
        }
      });
      client.save();
      this.transitionTo('service-record');
    },
    destroyService(client){
      client.destroyRecord();
      this.transitionTo('admin');
    }
  }
});
