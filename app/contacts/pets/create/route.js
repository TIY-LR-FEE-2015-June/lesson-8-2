import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('pet');
  },

  actions: {
    save: function(pet, data) {
      pet.setProperties(data);
      // Find the owner and set it on our pet
      var owner = this.modelFor('contacts.pets');
      pet.set('owner', owner);

      pet.save().then(() => {
        owner.save();

        this.transitionTo('contacts.show', owner);
      });
    }
  }
});
