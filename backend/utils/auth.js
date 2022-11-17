const passport = require("passport");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// Generate and save password hash
const hashPassword = async (user) => {
  try {
    user.password = await bcrypt.hash(
      user.password,
      parseInt(process.env.SALT_ROUNDS, 10)
    );
  } catch (error) {
    console.error(error);
  }
};

const COOKIE_OPTIONS = {
  httpOnly: true, // Since localhost is not having https protocol,
  secure: false, //Set to false on dev environment
  signed: true,
  maxAge: eval(process.env.REFRESH_TOKEN_EXPIRY) * 1000,
  sameSite: "lax",
};
const getRefreshToken = (user) => {
  const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: user.rememberMe
      ? process.env.SESSION_EXPIRY_LONG
      : eval(process.env.REFRESH_TOKEN_EXPIRY),
  });
  return refreshToken;
};
const comparePassword = async (password, passwordToCompareWith) => {
  try {
    return await bcrypt.compare(password, passwordToCompareWith);
  } catch (error) {
    console.error(error);
  }
};

const getJwt = (user) => {
  return jwt.sign(user, process.env.JWT_SECRET, {
    expiresIn: user.rememberMe
      ? process.env.SESSION_EXPIRY_LONG
      : eval(process.env.SESSION_EXPIRY),
  });
};
const verifyUser = passport.authenticate("jwt", {
  session: false,
  failureRedirect: "/user/session/loginFailed",
});

const verifyUserOnLogin = passport.authenticate("local", {
  session: false,
  failureRedirect: "/user/session/loginFailed",
});

module.exports = {
  hashPassword,
  verifyUserOnLogin,
  comparePassword,
  verifyUser,
  getJwt,
  getRefreshToken,
  COOKIE_OPTIONS,
};
