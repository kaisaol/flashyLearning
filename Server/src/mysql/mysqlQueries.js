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

export const getBruker = async (ID) => {
  const [rows] = (await pool
        .promise()
        .query("SELECT * FROM Bruker WHERE ID in (?)", [ID], function(err, result) {
        if(err) {
          console.log(err);
          } else {
          console.log(result);
        }
      }))
      return rows;
}

export const getBrukerByName = async (name) => {
  const [rows] = await pool
    .promise()
    .query(
      "SELECT * FROM Bruker WHERE Brukernavn in (?)",
      [name],
      function (err, result) {
        if (err) {
          console.log(err);
        } else {
          console.log(result);
        }
      }
    );
  return rows;
};

export const getFlashcardSet = async (ID) => {
  const [rows] = (await pool
        .promise()
        .query("SELECT * FROM FlashcardSet WHERE ID in (?)", [ID], function(err, result) {
        if(err) {
          console.log(err);
          } else {
          console.log(result);
        }
      }))
      return rows;
}

export const getAllFlashcardSet = async () => {
  const [rows] = (await pool
        .promise()
        .query("SELECT * FROM FlashcardSet", function(err, result) {
        if(err) {
          console.log(err);
          } else {
          console.log(result);
        }
      }))
      return rows;
}

export const getKommentar = async (IDs) => {
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

export const getBrukerSet = async (ID) => {
  const [rows] = await pool
    .promise()
    .query(
      "SELECT * FROM MineSet INNER JOIN FlashcardSet ON (MineSet.FlashcardSetID = FlashcardSet.ID) WHERE BrukerID in (?)",
      [ID],
      function (err, result) {
        if (err) {
          console.log(err);
        } else {
          console.log(result);
        }
      }
    );
  return rows;
};

export const getFavoritSet = async (IDs) => {
  const [rows] = (await pool
        .promise()
        .query("SELECT * FROM FavorittSet WHERE BrukerID in (?)", [IDs], function(err, result) {
        if(err) {
          console.log(err);
          } else {
          console.log(result);
        }
      }))
      return rows;
}

export const getPopulereSet = async ()=> {
  const [rows] = (await pool
    .promise()
    .query("SELECT * FROM FlashcardSet ORDER BY Likes",)
    )
    return rows;
}



export const addBruker = async (Data) => {
  await pool
  .promise()
  .query("INSERT INTO Bruker(Brukernavn,Passord,Admin) VALUES (?)", [Data], function(err) {
    if(err) {
      console.log(err);
      }
    }
  )
}

export const addLikeSet = async (ID) => {
  await pool
  .promise()
  .query("UPDATE FlashcardSet Set Likes = Likes + 1 WHERE ID = (?)" , [ID], function(err){
    if(err) {
      console.log(err);
    }
  })
}

export const addLikeBruker = async (IDs) => {
  await pool
  .promise()
  .query("INSERT INTO FavorittSet VALUES (?)", [IDs])
}

export const addFlashcardSet = async (Data,ID) => {
  await pool
  .promise()
  .query("INSERT INTO FlashcardSet (?)", [Data], function(err) {
    if(err) {
      console.log(err);
      } 
    }
  )
  const flash = pool.query("SELECT SCOPE_IDENTITY()")
  .query("INSERT INTO MineSet (?)", [ID,flash], function(err){
    if(err) {
      console.log(err);
    } else {
      return "Acepted"
      }
    }
  )
}

export const addKommentar = async (Data) => {
  await pool
  .promise()
  .query("INSERT INTO Kommnetar VALUES (?)", [Data], function(err) {
    if(err) {
      console.log(err);
      }
    }
  )
}

export const removeFavorittSet = async (ID) => {
  await pool
  .promise()
  .query("DELETE FROM FavorittSet WHERE SetID = (?)", [ID], function(err) {
    if(err) {
      console.log(err);
      }
  })
}

export const removeBruker = async (ID) => {
  await pool
  .promise()
  .query("DELETE FROM Bruker WHERE ID = (?)", [ID], function(err){
    if(err) {
      console.log(err);
      }
  })
}

export const removeKommentar = async (ID) => {
  await pool
  .promise()
  .query("DELETE FROM Kommentar WHERE ID = (?)", [ID], function(err) {
    if(err) {
      console.log(err);
      }
  })
}

export const updateFlashcardSet = async (ID,data) => {
  let query = "UPDATE FlashcardSet Set Data = " + data + " Where ID = (?)"
  await pool
  .promise()
  .query(query, [ID], function(err) {
    if(err) {
      console.log(err);
      } else {
        return "Accepted"
      }
  })
}

export const updateAdmin = async (ID,data) => {
  let query = "UPDATE Bruker Set Admin = " + data + " Where ID = (?)"
  await pool
  .promise()
  .query(query, [ID], function(err) {
    if(err) {
      console.log(err);
      }
  })
}