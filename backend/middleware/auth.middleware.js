import jwt from "jsonwebtoken";
const auth = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, "stylefusion", (err, decoded) => {
      if (decoded) {
        req.body.userID = decoded.userID;
        req.body.date_of_purchase = Date.now();
        next();
      } else {
        res.send({ msg: "Please Login" });
      }
    });
  } else {
    res.send({ msg: "Authentication failed 1" });
  }
};

export default auth;
