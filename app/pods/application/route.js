import Ember from 'ember';

export default Ember.Route.extend({
   model: function() {
      return this.store.findAll('item');
   },
   actions: {
       delete(item) {
          item.destroyRecord();
       },

       markCool(item) {
          item.set('isCool', true);
          item.save();
       },

       markNotCool(item) {
          item.set('isCool', false);
          item.save();
       },

       submit(name) {
         var newItem = this.get('store').createRecord('item', {
            name: name,
            isCool: false
         });

         newItem.save();

      },
   }
});
