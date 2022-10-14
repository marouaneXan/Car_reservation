const asyncHandler = require("express-async-handler");

//@desc GET Trips
//@route /api/v1/trips
//@access public
const getAllTrips = asyncHandler(async (req, res) => {
  res.send("All trips");
});

//@desc GET Trips
//@route /api/v1/trips
//@access public
const addTrip = asyncHandler(async (req, res) => {
  const {
    departure_city,
    arrival_city,
    departure_date,
    departure_time,
    arrival_time,
    price,
    distance,
  } = req.body;
});
module.exports = {
  getAllTrips,
};
