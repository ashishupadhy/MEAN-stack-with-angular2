const User = require('../models/user');

module.exports = (router) => {

    router.post('/register', (req, res) => {

        // req.body.email
        // req.body.username;
        // req.body.password;


        if (!req.body.eamil) {
            res.json({ success: false, message: 'you must provide e-mail' });
        }
        else {

            if (!req.body.username) {
                res.json({ success: false, message: 'you must provide a username' });

            } else

                if (!req.body.password) {
                    res.json({ success: false, message: 'you must provide a password' });

                } else {
                    // console.log(req.body);
                    // res.send('hellow world') 

                    let user = new User({
                        email: req.body.email.toLowerCase(),
                        username: req.body.username.toLowerCase(),
                        password: req.body.password
                    });
                    user.save((err) => {
                        if (err) {
                            console.log(err);
                            res.json({
                                success: false, message: 'could not save user.Error:', err
                            });
                        } else {
                            res.json({ success: true, message: 'user saved !' });
                        }
                    });

                }
        }
    });

    return router;
}  