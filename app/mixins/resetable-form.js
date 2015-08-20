import Ember from 'ember';

export default Ember.Mixin.create({
  modelName: null,
  modelProperties: [],

  resetFormValues: function() {
    // Grab values from our contact
    var values = this.get(this.get('modelName')).toJSON();
    // Populate our form
    this.setProperties(values);
  }.on('init'),

  actions: {
    submit: function() {
      var formData = this.getProperties(this.get('modelProperties'));

      this.sendAction('save', this.get(this.get('modelName')), formData);
    }
  }
});
