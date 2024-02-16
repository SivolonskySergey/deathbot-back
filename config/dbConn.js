const { Sequelize } = require('sequelize');
//const connectionString = 'postgresql://postgres@localhost:5432/sergey';

const sequelize = new Sequelize('postgresql://postgres:postgres@localhost:5432/postgres');

// const pool = new Pool({
//   connectionString,
// });

// const client = new Client({
//   connectionString,
// });

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  // await pool.query('SELECT NOW()');
  // await pool.end();

  // await client.connect();
  // await client.query('SELECT NOW()');
  // await client.end();
  // } catch (err) {
  //   console.error(err);
  // }
};

module.exports = connectDB;
