import React, { Component } from 'react';

var Niyama = {
  'name': 'Tapas',
  'meaning': 'Inner Fire',
  'blog': `Nothing grows without rain. Storms may disrupt our environment and be momentarily uncomfortable. Our environment wouldn't change without such circumstances though. Accepting the stormy circumstances of our lives, strengthens our resolve to make it through the future.
     Someone who has good character is dedicated to the nijama of tapas.
     Tapas is ancient sankrit translating to fire and heat.
  `
}
class Niyama3 extends Component {
    render() {

      return (
        <div className="NiyamaContainer">
          <p className="Niyama">{Niyama.blog}
          </p>
        </div>
      );
    }
  }

export default Niyama3;
