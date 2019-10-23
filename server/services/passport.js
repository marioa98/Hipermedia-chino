const passport = require('passport');
const googleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        done(null, user);
    })
})

passport.use(new googleStrategy({

    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true

}, async (accessToken, refreshToken, profile, done) => {

    const existingUser = await User.findOne({
        googleId: profile.id
    })

    if (existingUser) {
        //We already have a record with a given profile ID.
        done(null, existingUser); //done([error], [usuario])
    } else {
        //We don't have a user record with this ID, make a new record.
        const user = await new User({
            googleId: profile.id
        }).save()

        done(null, user);
    }

}));

//200.68.139.39/32