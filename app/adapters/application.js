import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
	namespace: 'api',
	authorizer: 'authorizer:application',

	// Ember does not append a trailing slash by default
	buildURL(type, id, record) {
		return this._super(type, id, record) + '/';
	}
});
