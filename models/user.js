const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

let emailLengthChecker = (email) => {
    if (!email) {
        return false
    } else {
        if (email.length < 5 || email.length > 30) {
            return false;
        } else {
            return true;
        }

    }
};


let validEmailChecker = (email) => {
    if (!email) {
        return false;
    } else {
        const regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        return regExp.test(email); // Return regular expression test results (true or false)
    }


};



const emailValidators = [{
    validator: emailLengthChecker,
    message: 'E mail must be atleast of 5 char but not more than 30'
},
{
    validator: validEmailChecker,
    message: 'must be a valid email'

}



]



const userSchema = new Schema({
    email: {
        type: String, required: true, unique: true, lowercase: true, validate:
        emailValidators
    },
    username: {
        type: String, required: true, unique: true, lowercase: true, validate:
        usernameValidators
    },
    password: { type: String, required: true }
});

let usernameLengthChecker = (username) => {
    
    if (!username) {
        return false; 
    } else {
       
        if (username.length < 3 || username.length > 15) {
            return false; 
        } else {
            return true; 
        }
    }
};


let validUsername = (username) => {
    
    if (!username) {
        return false; 
    } else {
        
        const regExp = new RegExp(/^[a-zA-Z0-9]+$/);
        return regExp.test(username); 
    }
};


const usernameValidators = [
    
    {
        validator: usernameLengthChecker,
        message: 'Username must be at least 3 characters but no more than 15'
    },
    {
        validator: validUsername,
        message: 'Username must not have any special characters'
    }
];

userSchema.pre('save', function (next) {
    if (!this.isModified('password'))
        return next();

    bcrypt.hash(this.password, null, null, (err, hash) => {
        if (err) return next(err);
        this.password = hash;
        next(); 
    });
});

userSchema.methods.comparePassword = (password) => {
    return bcrypt.compareSync(password, this.password);
};


module.exports = mongoose.model('User', userSchema);


