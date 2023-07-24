const jwt = require('jsonwebtoken');

const checkAuth = (req, res, next) => {
  try{
  const authorization = req.headers['authorization'];
  const token =  authorization.split(' ')[1];

  jwt.verify(
    token,
    process.env.TOKEN_SECRET,
    (err, user) => {
      console.log(err);

      if (err)
        return res
          .status(403)
          .json({ success: false, message: 'Internal server error' });

      console.log(user);

      next();
    }
  );
  }catch(err){
    res
      .status(401)
      .json({
        success: false,
        message: "Authorization Failed, Please Login.",
        type: "jwt",
      });
    console.log(err);
  }
};

module.exports = checkAuth;
