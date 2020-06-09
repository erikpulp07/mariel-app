const express = require('express');

const router = express.Router();
const { name, version } = require('../../../package.json');

/**
 * @name Retrieve App version
 * @route {GET} /appVersion
 *
 * @returns {Object} Returns an object with app name and version.
 */
router.get('/', (req, res) => {
  res.status(200).json({ name, version });
});

module.exports = router;
