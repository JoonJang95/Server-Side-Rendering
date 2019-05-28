import React from 'react';
import InfoPage from './InfoPage.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      wasClicked: false
    };

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(e) {
    e.preventDefault();

    this.setState(
      {
        wasClicked: !this.state.wasClicked
      },
      () => {
        console.log(this.state.wasClicked);
      }
    );
  }

  render() {
    return (
      <div>
        <div>Server Rendering Worked bruh!!!!!!</div>
        <button onClick={this.clickHandler}>Click Me for more Info</button>
        {this.state.wasClicked ? (
          <InfoPage clickHandler={this.clickHandler} />
        ) : null}
      </div>
    );
  }
}

export default App;
