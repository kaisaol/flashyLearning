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

/*let IDs = ['1,2,3,4,5,6,7']*/

export const getBruker = async (IDs) => {
  const [rows] = (await pool
        .promise()
        .query("SELECT * FROM Bruker WHERE ID in (?)", [IDs], function(err, result) {
        if(err) {
          console.log(err);
          } else {
            console.log(result);
        }
      }))
      return rows;
}

export const getFlashcardSet = async (IDs) => {
  const [rows] = (await pool
        .promise()
        .query("SELECT * FROM FlashcardSet WHERE ID in (?)", [IDs], function(err, result) {
        if(err) {
          console.log(err);
          } else {
          console.log(result);
        }
      }))
      return rows;
}

export const getKommnetar = async (IDs) => {
  const [rows] = (await pool
        .promise()
        .query("SELECT * FROM Kommentar WHERE ID in (?)", [IDs], function(err, result) {
        if(err) {
          console.log(err);
          } else {
            console.log(result);
        }
      }))
      return rows;
}