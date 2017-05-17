var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
  res.download('Desktop/nodejsDownloadServer/honyar.zip','honyar.zip');
  console.log("download——》》》》》》》success");
});

module.exports = router;
