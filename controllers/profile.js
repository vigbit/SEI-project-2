module.exports = (db) => {



  let newprofileControllerCallback = (request, response) => {
    response.render('profile');

  }

    let createprofileControllerCallback = (request, response) =>  {

        let name = request.body.name;
        let age = request.body.age;

        const callback = (error, queryResponse) => {
            if(error) {
                console.log(error);
                console.log("error");
                response.status(400);
                response.send("Something went wrong!")
            }

        }


    }






//Export controller functions as a module
  return {

    newprofile: newprofileControllerCallback,
  };

}