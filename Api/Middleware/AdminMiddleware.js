const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const Admin = require("../Models/Admin");
const protectAdmin = asyncHandler(async (req, res, next) => {
  let token = req.headers.cookie;
  if (token) {
    try {
      //Get Token from Header
      token = req.headers.cookie.split("access_token=")[1];
      //Verify Token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      //Get Admin From Token
      req.admin = await Admin.findById(decoded.admin_id).select("-password");
      if (req.admin) next();
      else {
        res.status(401);
        throw new Error("Not authorized");
      }
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized");
    }
  }
  if (!token) {
    res.status(401);
    throw new Error("Not authorized, No token");
  }
});
module.exports = { protectAdmin };
