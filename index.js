module.exports = function redirekt (req, res, location) {
  res.statusCode = 301;
  res.setHeader('location', location);

  res.end();
};
