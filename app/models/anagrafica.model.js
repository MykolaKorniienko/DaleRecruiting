module.exports = (sequelize, Sequelize) => {
	const Anagrafica = sequelize.define('anagrafica', {
        nome: {
            type: Sequelize.STRING
	    },
        cognome: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        eta: {
            type: Sequelize.INTEGER
        },
        sesso: {
            type: Sequelize.STRING
        },
        nascitaPaese: {
            type: Sequelize.STRING
        },
        nascitaData: {
            type: Sequelize.DATE
        },
        nazionalita: {
            type: Sequelize.STRING
        },
        formazioneScolastico: {
            type: Sequelize.STRING
        },
        technologie: {
            type: Sequelize.STRING
        },
        dataColloquio: {
            type: Sequelize.DATE
        },
        residenzaComune: {
            type: Sequelize.STRING
        },
	});
	
	return Anagrafica;
}