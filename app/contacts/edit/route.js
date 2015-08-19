import Ember from 'ember';

export default Ember.Route.extend({
  /**
   * This code is automatically run because the
   * route parameter was called `contact_id`
   */
  // model: function(params) {
  //   return this.store.findById('contact', params.contact_id);
  // }

  actions: {
    save: function(contact, data) {
      contact.setProperties(data);

      contact.save().then(() => {
        this.transitionTo('contacts.show', contact);
      });
    }
  }
});
