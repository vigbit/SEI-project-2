
module.exports = (dbPoolInstance) => {

    let addAppointment = (doctor, date, time, callback) => {

        let queryText = "INSERT INTO appointments (doctor, date, time) VALUES ($1, $2, $3) RETURNING *";

        const values = [doctor, date, time];

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

        let getAllDoctors = (callback) => {

            let queryText = "SELECT * FROM doctors"

            dbPoolInstance.query(queryText, (error, queryResult) => {
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



    return {

        addAppointment,
        getAllDoctors


    };

}