import React, { Component } from 'react';

var Niyama = {
  'name': 'Svadhyaya',
  'meaning': 'Self Study',
  'blog': `
  `
}
class Niyama4 extends Component {
    render() {

      return (
        <div className="NiyamaContainer">
          <p className="Niyama">{Niyama.blog}
          </p>
        </div>
      );
    }
  }

export default Niyama4;
