import Ember from 'ember';
import faker from 'faker';


export default Ember.Route.extend({
	model() {
		return this.store.findAll('library');
	},

	actions:  {
		deleteLibrary(library) {
			let confirmation = confirm('Are you sure you want to delete?');
			if(confirmation) {
				library.destroyRecord();
			}
		}
	}
});
