import Ember from 'ember';
import ResetableFormMixin from '../../../mixins/resetable-form';
import { module, test } from 'qunit';

module('Unit | Mixin | resetable form');

// Replace this with your real tests.
test('it works', function(assert) {
  var ResetableFormObject = Ember.Object.extend(ResetableFormMixin);
  var subject = ResetableFormObject.create();
  assert.ok(subject);
});
