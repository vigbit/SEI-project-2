module.exports = (app, allModels) => {


  // require the controller
  const appControllerCallbacks = require('./controllers/home')(allModels);

  app.get('/home', appControllerCallbacks.home);

const profileControllerCallbacks = require('./controllers/profile')(allModels);

  //app.get('/newprofile', profileControllerCallbacks.newprofile);

  app.post('/profile/home', profileControllerCallbacks.createProfile);

  app.get('/profile/home', profileControllerCallbacks.profileHome);

  app.get('/profile/home/1', profileControllerCallbacks.manageProfile);

const appointmentControllerCallbacks = require('./controllers/appointment')(allModels);

  app.get('/profile/1/appointment', appointmentControllerCallbacks.doctorList);

  app.post('/profile/1/appointment', appointmentControllerCallbacks.appointment);



};