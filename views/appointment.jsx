var React = require("react");
const Layout = require('./layout/layout')

class Appointment extends React.Component {
  render() {
        const allDoctor = this.props.alldoctors.map( (doctor) => {

        return <p><option>{(doctor.name)}</option></p>
    })




    return (
        <Layout>
        <div className="container">
            <h1>New appointment</h1>
            <form action="/profile/1/appointment" method="POST">
                <p>
                    Doctor:
                    <select name="doctor">
                       {allDoctor}
                    </select>
                </p>
                <p>
                    date: <input name="date"/>
                </p>
                <p>
                    time: <input name="time"/>
                    <input type='submit'/>
                </p>
            </form>
        </div>
        </Layout>
    );
  }
}

module.exports = Appointment;