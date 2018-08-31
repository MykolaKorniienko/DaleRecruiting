const db = require('../config/db.config.js');
const Anagrafica = db.anagrafiche;
 
// Post a Anagrafica
exports.create = (req, res) => {	
	// Save to MySQL database
	let user = req.body;
	if (req.body.technologie) {
		user.technologie = req.body.technologie.toString();
	}
	Anagrafica.create(user).then(result => {		
		// Send created user to client
		res.status(200).json(result);
	}, (error) => {
		res.status(500).send(error);
	 });
};
 
// Fetch all Anagrafiche
exports.findAll = (req, res) => {
	Anagrafica.findAll().then(users => {
	  // Send all users to Client
	  res.status(200).json(users);
	}, (error) => {
		res.status(500).send(error);
	 });
};
 
// Find a Anagrafica by Id
exports.findById = (req, res) => {	
	Anagrafica.findById(req.params.userId).then(user => {
		if (user.technologie) {
		user.technologie = user.technologie.split(",");
		}
		res.status(200).json(user);
	}, (error) => {
		res.status(500).send(error);
	 })
};
 
// Update a Anagrafica
exports.update = (req, res) => {
	let user = req.body;
	if (req.body.technologie) {
		user.technologie = req.body.technologie.toString();
	}
	let id = req.body.id;
	Anagrafica.update(user, 
					 { where: {id: id} }
				   ).then(() => {
						 res.status(200).json({msg:"updated successfully a user with id = " + id});
					 }, (error) => {
						res.status(500).send(error);
					 });	
};
 
// Delete a Anagrafica by Id
exports.delete = (req, res) => {
	let id = req.params.userId;
	Anagrafica.destroy({
	  where: { id: id }
	}).then(() => {
	  res.status(200).json({msg:'deleted successfully a user with id = ' + id});
	}, (error) => {
		res.status(500).send(error);
	 });
};