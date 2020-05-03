module.exports = (app, allModels) => {


  // require the controller
  const appControllerCallbacks = require('./controllers/home')(allModels);

  app.get('/home', appControllerCallbacks.home);

const profileControllerCallbacks = require('./controllers/profile')(allModels);

  app.get('/newprofile', profileControllerCallbacks.newprofile);

  app.post('/newprofile', profileControllerCallbacks.createProfile);

  app.get('/profile/home', profileControllerCallbacks.profileHome)



};