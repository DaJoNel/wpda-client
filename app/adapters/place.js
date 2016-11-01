import DS from 'ember-data';
import ENV from 'wpda-client/config/environment';

export default DS.ActiveModelAdapter.extend({
	namespace: 'api/places',
	host: ENV.host
});
