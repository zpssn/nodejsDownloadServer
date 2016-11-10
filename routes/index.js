var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
  res.download('Desktop/nodejsDownloadServer/yourfilename.extension','yourfilename.extension');
});

module.exports = router;
