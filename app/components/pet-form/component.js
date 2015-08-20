import Ember from 'ember';
import Resetable from 'lesson-2/mixins/resetable-form';

/**
 * This component extends from a regular Ember.Component
 * Then it mixes in functionality from Resetable
 */
export default Ember.Component.extend(Resetable, {
  /**
   * Override the modelName used by the Resetable mixin
   */
  modelName: 'pet',

  /**
   * Override the modelProperties used by the Resetable mixin
   */
  modelProperties: ['name', 'breed'],
});
