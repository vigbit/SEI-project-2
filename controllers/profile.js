module.exports = (db) => {



  // let newprofileControllerCallback = (request, response) => {
  //   response.render('profileHome');

  // }

    let createprofileControllerCallback = (request, response) =>  {

        let name = request.body.name;
        let age = request.body.age;
        let image = request.body.image;

        const callback = (error, queryResponse) => {
            if(error) {
                console.log(error);
                console.log("error");
                response.status(400);
                response.send("Something went wrong!");
            }else{
                response.render('profile',{allProfiles: queryResponse} )
            }

        }
        db.profile.addProfile(name,age,image,callback);
    }

    let profileHomeControllerCallback = (request,response) => {

        const callback = (error, queryResponse) => {
            if(error) {
                console.log(error);
                console.log("error");
                response.status(400);
                response.send("Something went wrong!");
            }else{
                //console.log(queryResponse)
                response.render('profile', {allProfiles: queryResponse})
            }

        }
        db.profile.profileHome(callback);
    }

    let manageProfileControllerCallback = (request,response) => {
        response.render('profileHome');

    }


//Export controller functions as a module
  return {

    // newprofile: newprofileControllerCallback,
    createProfile: createprofileControllerCallback,
    profileHome: profileHomeControllerCallback,
    manageProfile: manageProfileControllerCallback
  };

}