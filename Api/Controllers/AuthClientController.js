const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//@desc POST register
//@route /api/v1/clientAuth/register
//@access private
const register = asyncHandler(async (req, res) => {
  const {
    nom,
    prenom,
    genre,
    email,
    date_naissance,
    tel,
    adress,
    ville,
    nationalite,
    password,
  } = req.body;
});
module.exports = {
  register,
};