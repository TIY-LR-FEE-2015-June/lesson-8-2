import Ember from 'ember';

export default Ember.Service.extend({
  checkedInPets: [],

  checkIn: function(pet) {
    this.checkedInPets.addObject(pet);
  },

  markVisits: function() {
    // Grab all our checked in pets
    var saves = this.get('checkedInPets').map((pet)=> {
      // Increment the visits property
      pet.incrementProperty('visits', 1);

      /**
       *  Save the current pet
       *  and return it into the map
       */
      return pet.save();
    });

    /**
     * Wait for all pets to finish saving
     */
    return Ember.RSVP.Promise.all(saves).then(() => {
      // Empty out the checkedInPets array
      this.set('checkedInPets', []);
    });
  }
});
