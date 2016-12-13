import Ember from 'ember';

export default Ember.Component.extend({
	showRegInfo: false,
	auth: Ember.inject.service('auth-manager'),

	actions: {
		showRegInfo: function(){
			this.set('showRegInfo', !this.get('showRegInfo'));
		},
		login: function() {
			this.get('auth').login();
		},
		logout: function() {
			this.get('auth').logout();
		}
	}
});
