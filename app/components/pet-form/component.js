import Ember from 'ember';

export default Ember.Component.extend({
  resetFormValues: function() {
    // Grab values from our pet
    var values = this.get('pet').toJSON();
    // Populate our form
    this.setProperties(values);
  }.on('init'),

  actions: {
    submit: function() {
      var formData = this.getProperties('name', 'breed');

      this.sendAction('save', this.get('pet'), formData);
    }
  }
});
