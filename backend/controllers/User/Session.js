const userSessionService = require("../../services/User/Session");
const responses = require("../../constants/Responses");
const errorResponses = require("../../constants/ErrorResponses");
const jwt = require("jsonwebtoken");
const {
  getJwt,
  getRefreshToken,
  COOKIE_OPTIONS,
} = require("../../utils/auth.js");

const login = async (req, res, next) => {
  try {
    // Remove users password from memory
    req.user.password = undefined;
    const jwtToken = getJwt({
      email: req.user.email,
      rememberMe: req.body.rememberMe,
      roles: req.user.roles,
      company_id: req.user.company_id,
    });
    const refreshToken = getRefreshToken({
      id: req.user.id,
      email: req.user.email,
    });
    // Create a new user session
    const sessionCreationMessage = await userSessionService.createUserSession(
      req.user.id,
      refreshToken,
      req.body.rememberMe
    );
    if (sessionCreationMessage !== responses.LOGIN_SUCCESS) {
      res.send(
        responses.genericResponse(500, false, null, {
          message: errorResponses.FAILURE,
        })
      );
      return;
    }
    res.cookie("refreshToken", refreshToken, COOKIE_OPTIONS);
    res.send(
      responses.genericResponse(
        200,
        true,
        {
          jwtToken: jwtToken,
          user: { ...req.user.dataValues, rememberMe: req.body.rememberMe },
        },
        null
      )
    );
    return;
  } catch (error) {
    next(error);
  }
};
const loginFailed = (req, res, next) => {
  res.send(
    responses.genericResponse(401, false, null, {
      message: errorResponses.UNAUTHORIZED,
    })
  );
  return;
};
module.exports = {
  login,
  loginFailed,
};
