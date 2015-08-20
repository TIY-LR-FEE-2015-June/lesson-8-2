import Ember from 'ember';

export default Ember.Component.extend({
  pets: [],

  breeds: Ember.computed('pets', 'pets.@each.breed', 'pets.@each.name', function() {
    return this.get('pets').reduce((build, pet) => {
      var obj = build.findBy('name', pet.get('breed'));

      if (obj) {
        obj.items.push(pet);
      } else {
        obj = {
          name: pet.get('breed'),
          items: [pet]
        };

        build.push(obj);
      }
      return build;
    }, []);
  }),
});
