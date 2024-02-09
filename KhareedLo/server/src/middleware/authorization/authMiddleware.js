require("dotenv").config();
const jwt = require("jsonwebtoken");

const isAuthorized = async (req, res) => {
  const refreshToken = req.headers["x-refresh-token"];
  const accessTokenBearer = req.headers["authorization"];
  // console.log(accessTokenBearer);

  if (!accessTokenBearer || !refreshToken) {
    // console.log("helo");
    throw { message: "Tokens Not Specified!" };
  }

  const accessToken = accessTokenBearer.split(' ')[1];
  // console.log(accessToken);


  return jwt.verify(refreshToken , process.env.REFRESH_SECRET_KEY , (refreshErr,decoded) => {
    if(refreshErr){
        throw {message : "User logged Out!"}
    }
    return jwt.verify(accessToken, process.env.ACCESS_SECRET_KEY , (accessErr) => {
        if(accessErr) {
            //creating a new tokens
            console.log("generating new token")
            const newToken = jwt.sign(decoded, process.env.ACCESS_SECRET_KEY);

            res.setHeader("Authorization" , `Bearer ${newToken}`);
            res.setHeader("x-refresh-token" , refreshToken);
            
        }

        res.setHeader("Authorization" , `Bearer ${accessToken}`);
        res.setHeader("x-refresh-token" , refreshToken);
        return decoded;

    })
  })
};

async function mainAuthorized(req,res,next) {
  try {
    const decoded = await isAuthorized(req,res);
    if(decoded){
      console.log(decoded);
      next();
    }
    
  } catch (error) {
    // console.log(error);
    res.send(error);
  }
}

const signToken = async (data) => {
  try {
    const privateKey = process.env.ACCESS_SECRET_KEY;
    const refreshKey = process.env.REFRESH_SECRET_KEY;

    let accessToken = jwt.sign(data, privateKey , {expiresIn : '1m'});
    let refreshToken = jwt.sign(data, refreshKey , {expiresIn : '50m'});

    let token = {
      accessToken,
      refreshToken,
    };

    return token;
  } catch (error) {
    throw { status: 401, message: "Error generating token" };
  }
};

module.exports = { mainAuthorized, signToken };
