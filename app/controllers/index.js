import Ember from 'ember';

export default Ember.Controller.extend({
	
	headerMessage: 'Coming Soon',

	emailAddress: '',

	responseMessage: '',

	isDisabled: Ember.computed.not('isValid'),

	actualEmailAddress: Ember.computed('model.email', function() {
		console.log('actualEmailAddress function is called: ', this.get('emailAddress'));
	}),

	emailAddressChanged: Ember.observer('model.email', function(){
		console.log('observer is called: ', this.get('emailAddress'));
	}),

	isValid: Ember.computed.match('model.email', /^.+@.+\..+$/)
	
});
