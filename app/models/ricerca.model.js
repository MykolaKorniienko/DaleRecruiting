module.exports = (sequelize, Sequelize) => {
	const Ricerca = sequelize.define('ricerca', {
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
        residenza: {
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