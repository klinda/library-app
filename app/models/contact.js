import DS from 'ember-data';
import Ember from 'ember';


export default DS.Model.extend({
  email: DS.attr('string'),
  message: DS.attr('string'),

  	responseMessage: '',

	formValid: Ember.computed.and('messageValid', 'emailValid'),

	emailValid: Ember.computed.match('email', /^.+@.+\..+$/),

	messageValid: Ember.computed.gte('message.length', 5)
});
