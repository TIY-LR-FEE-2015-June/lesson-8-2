import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  breed: DS.attr(),

  owner: DS.belongsTo('contact', {async: true}),
});
