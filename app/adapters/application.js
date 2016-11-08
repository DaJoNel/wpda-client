import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
	namespace: 'api',
	authorizer: 'authorizer:application',

	// Ember does not append a trailing slash by default
	buildURL(type, id, record) {
		return this._super(type, id, record) + '/';
	}
});
