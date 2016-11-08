import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
    // This is required to allow camelCase field names
    keyForAttribute: function(attr) {
        return attr;
    }
});
