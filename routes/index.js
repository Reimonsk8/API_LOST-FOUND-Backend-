var express = require('express');
var router = express.Router();

var multer = require('multer');
var upload = multer();

var modelsL = require('../models/itemLost')
var modelsF = require('../models/itemFound')
var ObjLostCtrl = require("../control/ObjLostCtrl");
var ObjFoundCtrl = require("../control/ObjFoundCtrl");

/* GET home page. */
router.get('/', function(req, res, next){
  res.render('index', { title: 'Express' });
});


router.route('/ObjLost') 
	.get(ObjLostCtrl.getLostObjs)
	.post(upload.array(),ObjLostCtrl.addLostObj);

router.route('/ObjLost/:filter')
	.get(ObjLostCtrl.getLostByFilter)
	.delete(ObjLostCtrl.deleteLostObj)
	.put(upload.array(),ObjLostCtrl.updateLostObj);



router.route('/ObjFound')
  	.get(ObjFoundCtrl.getFoundObjs)
	.post(upload.array(),ObjFoundCtrl.addFoundObj);

router.route('/ObjFound/:filter')
	.get(ObjFoundCtrl.getFoundByFilter)
	.delete(ObjFoundCtrl.deleteFoundObj)
	.put(upload.array(),ObjFoundCtrl.updateFoundObj);


module.exports = router;
