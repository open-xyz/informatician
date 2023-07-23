const jwt = require('jsonwebtoken');

const checkAuth = (req, res, next) => {
  const authorization = req.headers['authorization'];
  const token = authorization && authorization.split(' ')[1];

  if (token == null)
    return res
      .status(401)
      .json({ success: false, message: 'No authentication' });

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
};

module.exports = checkAuth;
