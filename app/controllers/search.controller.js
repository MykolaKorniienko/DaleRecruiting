const db = require('../config/db.config.js');
const sequelize = require('sequelize');
const Anagrafica = db.anagrafiche;
const Ricerca = db.ricerche;
const Op = sequelize.Op;

// Search an Anagrafica
exports.searchUser = (req, res) => {
	let search = req.body;
	if (!search.data || !search.titolo || !search.cliente || !search.descrizione) {
		res.status(500).send('Finish data, titolo, cliente and descrizione fields');
	}
	let query = {};
	for(let key in search) {
		switch(key) {
			case 'text':
				if (!query[Op.or]) query[Op.or] = [];
				query[Op.or].push({nome: sequelize.where(sequelize.fn('LOWER', sequelize.col('nome')), 'LIKE', '%' + search[key] + '%')});
				query[Op.or].push({cognome: sequelize.where(sequelize.fn('LOWER', sequelize.col('cognome')), 'LIKE', '%' + search[key] + '%')});
				query[Op.or].push({email: sequelize.where(sequelize.fn('LOWER', sequelize.col('email')), 'LIKE', '%' + search[key] + '%')});
				break;
			case 'etaDa':
				if (!query.eta) query.eta = {}; 
			  	query.eta[Op.gt] = search[key];
			  	break;
			case 'etaA':
				if (!query.eta) query.eta = {}; 
				query.eta[Op.lt] = search[key];
				break;
			case 'data':
			case 'titolo':
			case 'cliente':
			case 'descrizione':
				break;
			default:
				query[key] = sequelize.where(sequelize.fn('LOWER', sequelize.col(key)), 'LIKE', '%' + search[key] + '%');
		}
	}
	console.log('query', query);
	Ricerca.create(search).then(() => {		
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

// Get all searches
exports.getSearches = (req, res) => {
	Ricerca.findAll().then(searches => {
		// Send all searches to Client
		res.status(200).json(searches);
	  }, (error) => {
		  res.status(500).send(error);
	   });
};