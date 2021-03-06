var mongoose = require('mongoose');
var itemFound = mongoose.model('itemFound');
var ObjFoundTable = [];


exports.getFoundObjs = function(req,res,next){
	console.log('GET /ObjFound');
	itemFound.find(req.body,function(err,ObjFoundTable){
		if(err){
			res.send(500, err.message);
		}
		else{
			console.log('GET /ObjFound');
			res.status(200).jsonp(ObjFoundTable);	
		}
	});
};


exports.addFoundObj=function(req,res,next){
	console.log('POST/ObjFound');
	var itemfound = new itemFound({

		lat: req.body.lat,
		lng: req.body.lng,
		place: req.body.place,
		date: req.body.date,
		type: req.body.type,
		contact: req.body.contact,
		description: req.body.description
	});

	itemfound.save(function(err,ObjFoundTable){
		if(err) return res.send(500,err.message);
		res.status(200).jsonp(ObjFoundTable);
	});
};


exports.getFoundByFilter=function(req, res, next){
	console.log('GET/ObjFound/:filter');	
	console.log(req.params.filter);
	itemFound.find({ $or: [ 
		{ place: req.params.filter },{ date: req.params.filter },{ type: req.params.filter },
		{ contact: req.params.filter },{ description: req.params.filter } 
		]},function(err,ObjFoundTable){
  		if(err){
  			res.send(500, err.message);
  		}else{
  			console.log('GET/ObjFound');
        	res.status(200).send(ObjFoundTable);
  		}
  	});
};



exports.deleteFoundObj=function(req, res, next){
	console.log('DELETE/ObjFound/:filter');
	console.log(req.params.filter);
	itemFound.remove({_id: req.params.filter},function(err,ObjFoundTable){
  		if(err){
  			res.send(500, err.message);
  		}else{
  			console.log('DELETE/ObjFound');
        	res.status(200).jsonp(ObjFoundTable);
  		}		
  	});
};


exports.updateFoundObj=function(req, res, next){
	console.log('PUT/ObjFound/:filter');
	console.log(req.params.filter);
	console.log(req.body);
	itemFound.update({_id: req.params.filter},
				{$set:{	
					lat:req.body.lat, lng:req.body.lng, place:req.body.place, date:req.body.date, 
					type:req.body.type, contact:req.body.contact,description:req.body.description}},
				function(err,ObjFoundTable){
		if(err){
			res.send(500,err.message);
		}else{
			itemFound.find({_id: req.params.filter},function(err,ObjFoundTable){
	  			if(err){
		  			res.send(500, err.message);
		  		}else{
		  			console.log('GET/ObjFound');		        	
		  			res.status(200).send(ObjFoundTable);
		       
	  			}		
			});
		}
	});
};
