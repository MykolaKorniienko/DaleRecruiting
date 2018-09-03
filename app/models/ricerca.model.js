module.exports = (sequelize, Sequelize) => {
	const Ricerca = sequelize.define('ricerca', {
        data: {
            type: Sequelize.DATE
        },
        titolo: {
            type: Sequelize.STRING
        },
        cliente: {
            type: Sequelize.STRING
        },
        descrizione: {
            type: Sequelize.STRING
	    },
        text: {
            type: Sequelize.STRING
	    },
        sesso: {
            type: Sequelize.STRING
        },
        patente: {
            type: Sequelize.STRING
        },
        statoScheda: {
            type: Sequelize.STRING
        },
        etaDa: {
            type: Sequelize.INTEGER
        },
        etaA: {
            type: Sequelize.INTEGER
        },
        residenzaComune: {
            type: Sequelize.STRING
        },
        tipoBadante: {
            type: Sequelize.STRING
        },
        invalido: {
            type: Sequelize.STRING
        },
        titoloStudio: {
            type: Sequelize.STRING
        },
        figuraProfessionale: {
            type: Sequelize.STRING
        },
        indirizzoStudio: {
            type: Sequelize.STRING
        },
        soloConEsp: {
            type: Sequelize.STRING
        },
	});
	
	return Ricerca;
}