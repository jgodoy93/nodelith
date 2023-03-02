const { FormateData } = require('../utils');

class CustomerService {

    constructor(){

    }

    async SingUp(Inputs){

        const { email, password, phone } = Inputs;

        console.log(email + " " + password + " " + phone);

        return FormateData({ msg : 'todo OK'});
    }


}

module.exports = CustomerService;