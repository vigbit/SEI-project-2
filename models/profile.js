/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

    let addProfile = (userName, userAge, userImage, callback) => {

        let queryText = "INSERT INTO profiles (name, age, image) VALUES ($1,$2, $3) RETURNING *";

        const values = [userName, userAge, userImage];

        dbPoolInstance.query(queryText, values, (error, queryResult) => {
            if (error){
            console.log("ERRORR");
            console.log(error);
          }else{
            if(queryResult.rows.length > 0){
            callback(null, queryResult.rows)
            }else{
            //callback(null, null);
            }
          }
         })
        }

    let profileHome = (callback) => {

        let queryText = "SELECT * FROM profiles";

        dbPoolInstance.query(queryText, (error, queryResult) => {
            //console.log("this", queryResult.rows)
            if (error){
            console.log("ERRORR");
            //console.log(error);
          }else{
            if(queryResult.rows.length > 0){
            callback(null, queryResult.rows)

            }else{
              callback(null, null);
            }
          }
         })
        }



    return {

        addProfile,
        profileHome

    };




    }