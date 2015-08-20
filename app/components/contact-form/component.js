import Ember from 'ember';
import Resetable from 'lesson-2/mixins/resetable-form';

export default Ember.Component.extend(Resetable, {
  /**
   * Override the modelName used by the Resetable mixin
   */
  modelName: 'contact',

  /**
   * Override the modelProperties used by the Resetable mixin
   */
  modelProperties: ['firstName', 'lastName', 'address', 'phone'],
});
