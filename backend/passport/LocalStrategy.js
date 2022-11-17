const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const userService = require("../services/User/User");
const responses = require("../constants/Responses");
const errorResponses = require("../constants/ErrorResponses");
const { comparePassword } = require("../utils/auth.js");

const options = {
  userNameField: "username",
  passwordField: "password",
  passReqToCallback: true,
};

// This function contains passport conditions that validates a user
const authenticateUser = async (req, username, password, done) => {
  try {
    const user = await userService.getUserByEmail(username);
    if (user) {
      // Here password is compared and validated
      const passwordsMatch = await comparePassword(password, user.password);
      if (passwordsMatch) {
        done(null, user);
      } else {
        done(
          null,
          null,
          responses.genericResponse(500, false, null, {
            message: errorResponses.INVALID_CREDENTIALS,
          })
        );
      }
    }
    // If no user exist return not found message
    else {
      done(
        null,
        null,
        responses.genericResponse(500, false, null, {
          message: responses.USER_NOT_FOUND,
        })
      );
    }
  } catch (error) {
    done(error, null, responses.genericResponse(500, false, null, error));
  }
};

passport.use("local", new LocalStrategy(options, authenticateUser));

// Serialize user attributes for session token
passport.serializeUser((user, done) => {
  try {
    done(null, user.id);
  } catch (error) {
    done(error, null, responses.genericResponse(500, false, null, error));
  }
});
