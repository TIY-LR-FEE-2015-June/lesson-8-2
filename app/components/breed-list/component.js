import Ember from 'ember';

export default Ember.Component.extend({
  pets: [],

  /**
   * Recompute the breeds computed property any time the `pets` array is updated,
   * whenever any pet changes names or breeds
   */
  breeds: Ember.computed('pets', 'pets.@each.breed', 'pets.@each.name', function() {
    /**
     * We want to turn our array of pets into a new array of
     * breeds with a sub array of the pets in that breed
     */
    return this.get('pets').reduce((build, pet) => {
      /**
       * Ember adds a `findBy` function to look up an
       * object in an array by the value of one of its properties
       *
       * http://emberjs.com/api/classes/Ember.ArrayProxy.html#method_findBy
       */
      var obj = build.findBy('name', pet.get('breed'));

      /**
       * If an object representing all pets of a single breed
       * exists, then add this current pet to the existing `items`
       * array for that object
       */
      if (obj) {
        obj.items.push(pet);
      } else {
        /**
         * If an object representing all pets of a single breed
         * does not exists, then create a new one and start it with
         * an array with our current pet
         */
        obj = {
          name: pet.get('breed'),
          items: [pet]
        };

        /**
         * Add the new object representing a breed
         * on to the array we are trying to build
         */
        build.push(obj);
      }

      /**
       * Keep building the snowball of breed objects
       */
      return build;
    }, []);
  }),
});
