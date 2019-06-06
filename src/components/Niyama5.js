import React, { Component } from 'react';

var Niyama = {
  'name': 'Ishvara Pranidhana',
  'meaning': 'Surrender to the higher power',
  'blog': `
  `
}
class Niyama5 extends Component {
    render() {

      return (
        <div className="NiyamaContainer">
          <p className="Niyama">{Niyama.blog}
          </p>
        </div>
      );
    }
  }

export default Niyama5;
