import Ember from 'ember';

export default Ember.Route.extend({
  daycare: Ember.inject.service('daycare-checkin'),

  actions: {
    checkIn: function(pet) {
      this.get('daycare').checkIn(pet);
    }
  }
});
