const User = require('../models/user');

module.exports = (router) => {

    router.post('/register', (req, res) => {

        if (!req.body.email) {
            res.json({ success: false, message: 'you must provide e-mail' });
        }
        else {

            if (!req.body.username) {
                res.json({ success: false, message: 'you must provide a username' });

<<<<<<< HEAD
            } else {
=======
            } else{
>>>>>>> 20c6a8b3b2991eaf3f1a1db4f1ff9e18cef100f4

                if (!req.body.password) {
                    res.json({ success: false, message: 'you must provide a password' });

                } else {

                    let user = new User({
                        email: req.body.email.toLowerCase(),
                        username: req.body.username.toLowerCase(),
                        password: req.body.password
                    });
                    user.save((err) => {
                        if (err) {
                            if (err.code === 11000) {
                                console.log(err);
                                res.json({
                                    success: false, message: 'username or email already exist'
                                })
                            } else {
                                if (err.errors) {

                                    if (err.errors.email) {
                                        res.json({ success: false, message: err.errors.email.message });
                                    }else{
                                        if(err.errors.username){
                                             res.json({ success: false, message: err.errors.username.message 
                                            });
                                        }else{
                                            if(err.errors.password){
                                                res.json({ success: false, message: err.errors.password.message 
                                            });
                                            }else{
                                                res.json({success:false, message:err});
                                            }
                                        }
                                    }
                                } else {
                                    res.json({
                                        success: false, message: 'Could not save user.Error: ',
                                        err
                                    });
                                }

                            
                        

<<<<<<< HEAD
                        // res.json({
                        //     success: false, message: 'could not save user.Error:', err
                        // });


                    }  

                        } else {
                    res.json({ success: true, message: 'user saved !' });
                }

            });
}
=======
                            
                            }  

                        } else {
                            res.json({ success: true, message: 'user saved !' });
                        }
                    
                    });
                }
>>>>>>> 20c6a8b3b2991eaf3f1a1db4f1ff9e18cef100f4
                } 
        }
    });

return router;
}