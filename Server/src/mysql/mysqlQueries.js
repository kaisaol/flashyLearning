import pool from './mysql.js';

/**
 *
 * @param id is the id of the country
 * @returns a country with the given id from the database
 * 
export const getCountry = async (id) => {
  const [rows] = (await pool
    .promise()
    .query(`SELECT * FROM country WHERE id = ${id};`));
  return rows[0];
};
*/

export const getBruker = async () => {
  
  const [rows] = (await pool
    .promise()
    .query('SELECT * FROM Bruker'));
  return rows[0];
};

