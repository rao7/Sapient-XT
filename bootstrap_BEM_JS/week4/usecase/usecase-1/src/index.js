const {
    profileService
} = require('./profileService');


// todo service instance
const service = new profileService();
service.getProfile(); // returns all profiles


// api sample
//service.addProfile('3','regon','mexico'); // insert or put profiles

//service.getProfile(3); // geting profile by id



