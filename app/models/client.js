import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr(),
  lastName: DS.attr(),
  service: DS.attr(),
  price: DS.attr('number'),
  attendant: DS.attr(),
  approved: DS.attr('boolean')
});
