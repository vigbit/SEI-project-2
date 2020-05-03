module.exports = (db) => {



  let homeControllerCallback = (request, response) => {
    response.render('home');
  };

  let newprofileControllerCallback = (request, response) => {

  }






//Export controller functions as a module
  return {
    home: homeControllerCallback,
    newprofile: newprofileControllerCallback,
  };

}