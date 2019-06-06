import React, { Component } from 'react';

var Yama = {
  'name':'Ahimsa',
  'meaning':'Non Violence',
  'blog': ``
}
class Yama1 extends Component {
    render() {

      return (
        <div className="blogContainer">
          <p className="blog">{Yama.blog}
          </p>
        </div>
      );
    }
  }

export default Yama1;
