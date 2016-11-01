import DS from 'ember-data';
import DRFAdapter from './drf';

export default DS.JSONAPIAdapter.extend({
});

export default DRFAdapter.extend({
	addTrailingSlashes: false
});
