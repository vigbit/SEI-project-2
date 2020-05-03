/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

    let addProfile = (userName, userAge, callback) => {

        let queryText = "INSERT INTO profiles (name, age) VALUES ($1,$2)";

        const values = [userName, userAge];

        dbPoolInstance.query(queryText, values, (error, queryResult) => {
            if (error){
            console.log("ERRORR");
            console.log(error);
          }else{
            if(queryResult.rows.length > 0){
            callback(null, queryResult.rows)
            }else{
              callback(null, null);
            }
          }
         })
        }

    let profileHome = (callback) => {
        let queryText = "SELECT * FROM profiles where id=1"

        dbPoolInstance.query(queryText )
    }


    return {

        addProfile

    }




    }