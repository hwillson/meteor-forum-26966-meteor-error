import { SMSController } from '/class/sms_controller';

Meteor.methods({
  createInvitationDetails(invitationDetails, options = {}) {
    const sms = new SMSController(123);
  }
});
