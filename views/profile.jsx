var React = require("react");

class Profile extends React.Component {
  render() {

    return (
      <html>
        <head />
        <body>
            <h1>Create profile</h1>
            <form action="/new-profile" method="POST">
                <p>
                    name: <input name="name"/>
                </p>
                <p>
                    age: <input name="age"/>
                </p>
                <p>
                    <a href="#">Update prescription</a>
                </p>
                <p>
                    <a href="##">Update doctor information</a>
                </p>
            </form>

        </body>
      </html>
    );
  }
}

module.exports = Profile;