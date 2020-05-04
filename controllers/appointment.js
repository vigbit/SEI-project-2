module.exports = (db) => {


    let doctorListControllerCallback = (request,response) => {
            const callback = (error, queryResponse) => {
            if(error) {
                console.log(error);
                console.log("error");
                response.status(400);
                response.send("Something went wrong!");
            }else{
                response.render('appointment', {alldoctors: queryResponse})
            }

        }
        db.appointment.getAllDoctors(callback);
    }


    let appointmentControllerCallback = (request, response) =>  {

        let doctor = request.body.name;
        let date = request.body.date;
        let time = request.body.time;


        const callback = (error, queryResponse) => {
            if(error) {
                console.log(error);
                console.log("error");
                response.status(400);
                response.send("Something went wrong!");
            }else{
                response.render('profileHome', {allAppointments: queryResponse})
            }

        }
        db.appointment.addAppointment(doctor, date, time, callback);
    }


  return {
    doctorList: doctorListControllerCallback,
    appointment: appointmentControllerCallback

  };

}