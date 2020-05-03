/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

    let addProfile = (name, age, callback) => {

        let query = "INSERT INTO profiles (name, age) VALUES ($1)"
    }


};