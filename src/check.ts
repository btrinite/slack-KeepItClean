import constraints from './constraints';

const validate = require("validate.js");

class Check {

    constructor() {
    }

    public isValidName(chName:string):boolean {
        let result = constraints.some(aConstraint => {
            let ret = validate({channelName: chName}, aConstraint)
            if (ret == undefined) {
                //name is correct, break
                return true;
            };         
        });
        return result;
    }

};

const check = new Check();

export default check;
