var React = require("react");
const Layout = require('./layout/layout')

class ProfileHome extends React.Component {
  render() {
        const allAppointment = this.props.allAppointments.map( (appointment) => {

        return <div><p>Your next appointment with {(appointment.doctor)} is on {(appointment.date)} at {(appointment.time)} </p></div>
    })



    return (
      <Layout>
      <div className="container">
            <h3>Upcoming doctor appointments:</h3>

                {allAppointment}


            <h4>Settings</h4>
                <p>
                    <a href="/profile/1/appointment">New appointment</a>
                </p>
      </div>
      </Layout>
    );
  }
}

module.exports = ProfileHome;