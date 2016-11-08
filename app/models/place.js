import DS from 'ember-data';

export default DS.Model.extend({
	isVerified: DS.attr('boolean'),
	venueId: DS.attr('string'),
	name: DS.attr('string'),
	permalink: DS.attr('string'),
	lockLevel: DS.attr('number'),
	categories: DS.attr('string'),
	number: DS.attr('string'),
	street: DS.attr('string'),
	city: DS.attr('string'),
	state: DS.attr('string'),
	country: DS.attr('string'),
	updatedBy: DS.attr('string'),
	updatedOn: DS.attr('date'),
	userReportOn: DS.attr('date'),
	isResidential: DS.attr('boolean')
});
