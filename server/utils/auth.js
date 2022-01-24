//File pulled from week 22 activity 26
const jwt = require('jsonwebtoken');

const secret = 'mysecretsshhhhh';
const expiration = '2h';

module.exports = {
  authMiddleware: function ({ req }) {
    // allows token to be sent via req.body, req.query, or headers
    let token = req.body.token || req.query.token || req.headers.authorization;

    // ["Bearer", "<tokenvalue>"]
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
    }

    return req;
  },
<<<<<<< HEAD
  //removed email from signtoken as we are not requiring it to create a user account previously this function looled liked the following before changing:
//    signToken: function ({ userName, email, _id }) {
//     const payload = { UserName, email, _id };

//     return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
//   },
// };

  signToken: function ({ userName, _id }) {
    const payload = { UserName, _id };
=======
  signToken: function ({ userName, email, _id }) {
    const payload = { userName, email, _id };
>>>>>>> d5b54150cb98737082bca08d2bd5bc569d15888e

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};