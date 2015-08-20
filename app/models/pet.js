import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  breed: DS.attr(),
  visits: DS.attr('number', {defaultValue: 0}),

  owner: DS.belongsTo('contact', {async: true}),
});
