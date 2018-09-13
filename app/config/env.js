const env = {
  database: 'testdb',
  username: 'root',
  password: 'dale2018',
  host: 'localhost',
  dialect: 'mysql',
  pool: {
	  max: 50,
	  min: 0,
	  acquire: 30000,
	  idle: 10000
  }
};
 
module.exports = env;