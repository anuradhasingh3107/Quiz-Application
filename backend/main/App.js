const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const User = require('../models/UserSchema');

// var router = require('../routes/Route');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


const router = express.Router();
router.route('/login').post(function (req, res) {
    console.log("Post login request.");

    if (req.body.userName && req.body.passWord) {
        User.find({
            UserName: req.body.userName,
            PassWord: req.body.passWord
        }, function (err, user) {
            if (err) {
                res.json(err);
            } else {
                if (user.length > 0) {
                    console.log(JSON.stringify(user));
                    res.status(200).send({isValid: true, userInfo: user});
                } else {
                    res.status(500).send("Invalid credentials");
                }
            }
        });
    } else {
        res.status(401).send("Invalid input");
    }
});

router.route('/signup').post(function (req, res) {
    console.log("Signup Register Call");

    if (req.body.userName && req.body.userId && req.body.passWord) {
        let userInfo = new User({UserName: req.body.userName, UserId: req.body.userId, PassWord: req.body.passWord});
        userInfo.save().then(todo => {
            console.log("User added successfully");
            res.status(200).json({'User': 'user added successfully'});
        })
    } else {
        res.status(500).send("Invalid inputs");
    }
});


router.route('/user').get(function (req, res) {
    console.log("User Call");
    User.find({
        UserName: "test1",
        PassWord: "test1"
    }, function (err, users) {
        res.json(users);
    });
});

router.route('/alluser').get(function (req, res) {
    console.log("User Call");
    User.find({}, function (err, users) {
        res.json(users);
    });

});


router.route('/admin').get(function (req, res) {
    console.log("List All users");
    User.find({}, function (err, users) {
        res.json(users);
    });
});


router.route('/user/:id').delete(function (req, res) {
    console.log("Delete Call");
    User.remove({
        _id: req.params.id
    }, (error, result) => {
        if (error) {
            res.json(error)
        } else {
            res.json(result)
        }
    })
});


app.use('/Quiz/v1', router);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) { // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
