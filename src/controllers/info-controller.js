const { StatusCodes } = require('http-status-codes');

const info = (req, res) => {
  return res.status(StatusCodes.EXPECTATION_FAILED).json({
    success: true,
    message: 'API IS LIVE',
    error: {},
    data: {},
  });
};

module.exports = {
  info,
};
