var React = require("react");
const Layout = require('./layout/layout')

class Profile extends React.Component {
  render() {
    //console.log(this.props.allProfiles)
    const allProfile = this.props.allProfiles.map( (profile) => {

        return <a href="/profile/1/appointment"> <div><img src={(profile.image)} width="100"/>
        <p>{(profile.name)}, {(profile.age)}</p></div></a>

    })


    return (
        <Layout>
            <div className="container">
                <h4>Select profile</h4>
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

                    </p>
                    <p>
                        image: <input name="image"/>
                        <input type='submit'/>
                    </p>
                </form>
            </div>
        </Layout>

    );
  }
}

module.exports = Profile;