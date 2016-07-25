export class SMSController {
  constructor(companyId) {
    console.log(`Constructor called with ${companyId}`);
    throw new Meteor.Error(500);
  }
}
