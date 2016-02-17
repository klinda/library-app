import Ember from 'ember';
import faker from 'faker';


export default Ember.Route.extend({
	model() {
		return this.store.createRecord('library');
	},

	setupController (controller, model) {
		this._super(controller, model);
		controller.set('title', 'Create a new library');
		controller.set('buttonLabel', 'Create');
	},

	renderTemplate() {
		this.render('libraries/form');
	},

	actions: {
		saveLibrary(newLibrary) {
			newLibrary.save().then( () => this.transitionTo('libraries'));
		},

		willTransition() {
			this.controller.get('model').rollbackAttributes();
		}
	}
});
