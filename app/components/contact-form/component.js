import Ember from 'ember';

export default Ember.Component.extend({
  resetFormValues: function() {
    // Grab values from our contact
    var values = this.get('contact').toJSON();
    // Populate our form
    this.setProperties(values);
  }.on('init'),

  actions: {
    submit: function() {
      var formData = this.getProperties('firstName', 'lastName', 'address', 'phone');

      this.sendAction('save', this.get('contact'), formData);
    }
  }
});
