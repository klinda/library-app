import Ember from 'ember';


export default Ember.Route.extend({
	model() {
		return this.store.createRecord('contact');
	},

	actions: {
		saveContactResponse(newContact) {
			newContact.save().then( (response) => {
				this.controller.get('model').set('responseMessage', `Thank you! Your response has been saved and sent to: ${response.get('email')} with message: ${response.get('message')}`);
				Ember.run.later( () => {
					this.transitionTo('index');
				}, 3000);
			});
		},

		willTransition() {
			this.controller.get('model').rollbackAttributes();
		}
	}

});
