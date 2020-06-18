import React from 'react';
import Chirp from './Component/Chirp.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chirps: [<Chirp message="This is Chirp 1"/>, <Chirp message="Chirp number 2!!"/>, <Chirp message="Last default Chirp!"/>],
      chirpInput: ""
    }

    this.addChirp = this.addChirp.bind(this);
  }

  addChirp() {
    let newArray = this.state.chirps.slice();
    newArray.push(<Chirp message={this.state.chirpInput}/>);
    this.setState({chirps: newArray, chirpInput: ""});
  }

  render() {
    return (
    <div>
      <div>
        {this.state.chirps}
      </div>
      <div class="form-group">
        <input placeholder="Chirp text" value={this.state.chirpInput} onChange={(event) => this.setState({chirpInput: event.target.value})}></input>
        <button onClick={this.addChirp} type="button" class="btn btn-success">Send</button>
      </div>
    </div>);
  }
}