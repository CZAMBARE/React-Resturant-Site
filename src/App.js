//import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/MainComponent'
import { DISHES } from './shared/dishes';
import { Component } from 'react';

import { BrowserRouter } from 'react-router-dom';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES
    };
  }


  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
