var mongoose = require('mongoose');
var itemLost = mongoose.model('itemLost');
var ObjLostTable = [];


exports.getLostObjs = function(req,res,next){
	console.log('GET /ObjLost');
	itemLost.find(function(err,ObjLostTable){
		if(err){
			res.send(500, err.message);
		}
		else{
			console.log('GET /ObjLost');
			res.status(200).jsonp(ObjLostTable);	
		}
	});
};


exports.addLostObj=function(req,res,next){
	console.log('POST/LostFound');
	var itemlost = new itemLost({

		lat: req.body.lat,
		lng: req.body.lng,
		place: req.body.place,
		date: req.body.date,
		type: req.body.type,
		contact: req.body.contact,
		description: req.body.description,
		reward: req.body.reward
	});

	itemlost.save(function(err,ObjLostTable){
		if(err) return res.send(500,err.message);
		res.status(200).jsonp(ObjLostTable);
	});
};


exports.getLostByFilter=function(req, res, next){
	console.log('GET/ObjLost/:filter');	
	console.log(req.params.filter);
	var filterInt = req.param.filter; 
	console.log('filter int ='+ filterInt);	
	itemLost.find({ $or: [		 
		{ place: req.params.filter },{ date: req.params.filter },{ type: req.params.filter },
		{ contact: req.params.filter },{ description: req.params.filter } 
		]},function(err,ObjLostTable){
  		if(err){
  			res.send(500, err.message);
  		}else{
  			console.log('GET/ObjLost');
        	res.status(200).send(ObjLostTable);
  		}
  	});
};


exports.deleteLostObj=function(req, res, next){
	console.log('DELETE/ObjLost/:filter');
	console.log(req.params.filter);
	itemLost.remove({_id: req.params.filter},function(err,ObjLostTable){
  		if(err){
  			res.send(500, err.message);
  		}else{
  			console.log('DELETE/ObjLost');
        	res.status(200).jsonp(ObjLostTable);
  		}		
  	});
};


exports.updateLostObj=function(req, res, next){
	console.log('PUT/ObjLost/:filter');
	console.log(req.params.filter);
	console.log(req.body);
	itemLost.update({_id: req.params.filter},
				{$set:{	
					lat:req.body.lat, lng:req.body.lng, place:req.body.place, date:req.body.date, 
					type:req.body.type, contact:req.body.contact, description:req.body.description, 
					reward:req.body.reward}},
				function(err,ObjLostTable){
		if(err){
			res.send(500,err.message);
		}else{
			itemLost.find({_id: req.params.filter},function(err,ObjLostTable){
	  			if(err){
		  			res.send(500, err.message);
		  		}else{
		  			console.log('GET/ObjLost');		        	
		  			res.status(200).send(ObjLostTable);
		       
	  			}		
			});
		}
	});
};
