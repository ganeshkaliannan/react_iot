import React from 'react';
import Header from './Header.jsx';
import Home from './Home.jsx';
import Footer from './Footer.jsx';
require("./Style.css");

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() { }

  componentWillUnmount(){ }

  render() {
    return (
      <div className="main">
        <Header />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
