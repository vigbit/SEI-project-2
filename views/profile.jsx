var React = require("react");
const Layout = require('./layout/layout')

class Profile extends React.Component {
  render() {
    //console.log(this.props.allProfiles)
    const allProfile = this.props.allProfiles.map( (profile) => {
        return <a href="#"> <div><img src={(profile.image)} width="100"/>
        <p>{(profile.name)}, {(profile.age)}</p></div></a>

    })


    return (
        <Layout>
            <h1>Welcome</h1>
            <form action="/newprofile" method="POST">
                <div>
                    {allProfile}
                </div>
            <h5>Add new profile</h5>
                <p>
                    name: <input name="name"/>
                </p>
                <p>
                    age: <input name="age"/>
                    <input type='submit'/>
                </p>
            </form>
        </Layout>

    );
  }
}

module.exports = Profile;