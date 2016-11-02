import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return Ember.$.getJSON({
			url: "api/places/"
		});
		//).then(function (placeList){
			//console.log(placeList);
			//placeList.forEach(function(place){
			//	this.store.createRecord('place', {
			//		fieldname: place.fieldname
			//	} )
			//});
			//this.store.createRecord('place', )
		//});
	}
});
