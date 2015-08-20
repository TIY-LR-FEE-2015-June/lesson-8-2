import Ember from 'ember';

export default Ember.Component.extend({
  daycare: Ember.inject.service('daycare-checkin'),
  loading: false,

  actions: {
    markVisits: function() {
      this.set('loading', true);

      this.get('daycare').markVisits().then(() => {
        this.set('loading', false);
      });
    }
  }
});

