import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    approveService(client, params){
      this.sendAction('approveService', client, params);
  }
}
});
