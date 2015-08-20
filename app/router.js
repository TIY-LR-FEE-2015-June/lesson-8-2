import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('contacts', {path: '/'}, function() {
    this.route('index', {path: '/'});
    this.route('create', {path: '/new'});
    this.route('show', {path: '/:contact_id'});
    this.route('edit', {path: '/:contact_id/edit'});

    this.route('pets', {path: '/:contact_id/pets'},  function() {
      this.route('create');
      this.route('edit', {path: '/:pet_id'});
    });
  });

  this.route('breeds');
});

export default Router;
