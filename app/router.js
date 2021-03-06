import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
    location: config.locationType,
    rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('register');
  this.route('admin', function() {
      this.route('users');
      this.route('user', {path: "/users/:user_id"});
  });
  this.route('home');
  this.route('watch-place');
  this.route('profile');
});

export default Router;
