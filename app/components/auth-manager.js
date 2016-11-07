import Ember from 'ember';

export default Ember.Component.extend({
	authManager: Ember.inject.service('session'),

	actions: {
		invalidateSession() {
			this.get('session').invalidate();
		},

		authenticate() {
			const {login, password} = this.getProperties('login', 'password');
			this.get('authManager').authenticate('authenticator:oauth2', login, password).then(() => {
				alert('Success!');
			}, (err) => {
				alert('Error obtaining token: ' + err.responseText);
			});
		}
	}
});
