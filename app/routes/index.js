import Ember from 'ember';


export default Ember.Route.extend({
	model() {
		return this.store.createRecord('invitation');
	},
	actions: {
		saveInvitation(newInvitation) {
     		newInvitation.save().then((response) => this.transitionTo('libraries'));
     },
     		willTransition() {
			this.controller.get('model').rollbackAttributes();
		}
	}
});
