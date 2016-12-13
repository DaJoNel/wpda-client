import DS from 'ember-data';

export default DS.Model.extend({
	user: DS.belongsTo('user'),
    wazeName: DS.attr('string'),
	wazeLevel: DS.attr('number')
});
