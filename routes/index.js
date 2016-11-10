var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
  res.download('Desktop/nodejsDownloadServer/README.md','README.md');
  console.log(“download——》》》》》》》success”);
});

module.exports = router;
