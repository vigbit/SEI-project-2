var React = require("react");

class Profile extends React.Component {
  render() {


    return (
      <html>
        <head />
        <body>
            <h1>Create profile</h1>
            <form action="/newprofile" method="POST">
                <p>
                    name: <input name="name"/>
                </p>
                <p>
                    age: <input name="age"/>
                    <input type='submit'/>
                </p>
            </form>

        </body>
      </html>
    );
  }
}

module.exports = Profile;