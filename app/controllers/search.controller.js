const db = require('../config/db.config.js');
const sequelize = require('sequelize');
const Anagrafica = db.anagrafiche;
const Ricerca = db.ricerche;
const Op = sequelize.Op;

// Search an Anagrafica
exports.searchUser = (req, res) => {
	let search = req.body;
	let query = {};
	for(let key in search) {
		if (key == 'text') {
			if (!query[Op.or]) query[Op.or] = [];
			query[Op.or].push({nome: sequelize.where(sequelize.fn('LOWER', sequelize.col('nome')), 'LIKE', '%' + search[key] + '%')});
			query[Op.or].push({cognome: sequelize.where(sequelize.fn('LOWER', sequelize.col('cognome')), 'LIKE', '%' + search[key] + '%')});
			query[Op.or].push({email: sequelize.where(sequelize.fn('LOWER', sequelize.col('email')), 'LIKE', '%' + search[key] + '%')});
			Op.iLike
		} else if (key == 'etaDa'){
			  if (!query.eta) query.eta = {}; 
			  query.eta[Op.gt] = search[key];
		} else if (key == 'etaA'){
			if (!query.eta) query.eta = {}; 
			query.eta[Op.lt] = search[key];
		} else {
			query[key] = sequelize.where(sequelize.fn('LOWER', sequelize.col(key)), 'LIKE', '%' + search[key] + '%');
		}
	}
	Ricerca.create(search).then(result => {		
		Anagrafica.findAll({
			where: query
		}).then((anagraficas) => {
		 // Send all anagraficas to Client
		 res.status(200).json(anagraficas);
		}, (error) => {
			res.status(500).send(error);
		 });
	});
};