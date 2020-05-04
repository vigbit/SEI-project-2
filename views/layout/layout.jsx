var React = require("react");

class Layout extends React.Component {
  render() {



    return (
        <html lang="en">
          <head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>


            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"/>
            <link rel="stylesheet" href="/style.css"/>

            <title>Hello, world!</title>
          </head>
          <body>
            {this.props.children}

          </body>
        </html>
    );
  }
}

module.exports = Layout;