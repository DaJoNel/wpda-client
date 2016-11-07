import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
	model() {
		// Does this need to match urls.py: router.register("places", PlaceViewSet) ?
		return this.store.findAll('place');
		/*return this.get('ajax').request('api/places/', {
			method: 'GET',
			dataType: 'html'
		});*/
	}
});
