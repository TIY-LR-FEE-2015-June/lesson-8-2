import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    // Finds the contact model
    // and calls new Contact();
    // Registers the new contact with the Ember Data Store
    return this.store.createRecord('contact');
  },

  actions: {
    save: function(contact) {
      contact.save().then(() => {
        this.transitionTo('contacts.index');
      });
    }
  }
});
