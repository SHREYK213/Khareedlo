require("dotenv").config();
const jwt = require("jsonwebtoken");

const isAuthorized = async (req, res) => {
  const refreshToken = req.headers["x-refresh-token"];
  const accessTokenBearer = req.headers["authorization"];

  if (!accessTokenBearer || !refreshToken) {
    return { status: 400, message: "Tokens Not Specified!" };
  }

  const accessToken = accessTokenBearer.split(' ')[1];
  try {
    const decodedRefreshToken = jwt.verify(refreshToken, process.env.REFRESH_SECRET_KEY);
    try {
      jwt.verify(accessToken, process.env.ACCESS_SECRET_KEY);
      return { status: 200, decoded: decodedRefreshToken };
    } catch (accessErr) {
      console.log("Access token expired, generating new token");
      const newAccessToken = jwt.sign(decodedRefreshToken, process.env.ACCESS_SECRET_KEY);
      res.setHeader("Authorization", `Bearer ${newAccessToken}`);
      res.setHeader("x-refresh-token", refreshToken);
      return { status: 200, decoded: decodedRefreshToken };
    }
  } catch (refreshErr) {
    return { status: 401, message: "User logged out!" };
  }
};

async function mainAuthorized(req, res, next) {
  try {
    const { status, decoded, message } = await isAuthorized(req, res);
    if (status === 200) {
      console.log(decoded);
      next();
    } else {
      res.status(status).send(message);
    }
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
}

const signToken = async (data) => {
  try {
    const accessToken = jwt.sign(data, process.env.ACCESS_SECRET_KEY, { expiresIn: '10m' });
    const refreshToken = jwt.sign(data, process.env.REFRESH_SECRET_KEY, { expiresIn: '50m' });
    return {
      accessToken,
      refreshToken,
    };
  } catch (error) {
    throw { status: 401, message: "Error generating token" };
  }
};

module.exports = { mainAuthorized, signToken };
