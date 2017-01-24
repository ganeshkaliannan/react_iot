import React from 'react';
import Header from './Header.jsx';
import Home from './Home.jsx';
import Footer from './Footer.jsx';


class App extends React.Component {
  
  constructor(props) {
   super(props);

  
  }

  componentDidMount() {
    
  }

  componentWillUnmount(){
  }


  render() {
    return (
      <div>
       <Header />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
