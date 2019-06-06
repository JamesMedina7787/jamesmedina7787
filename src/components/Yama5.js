import React, { Component } from 'react';

var Yama = {
  'name':'Aparigraha',
  'meaning':'Non Attachment',
  'blog': ``
}
class Yama5 extends Component {
    render() {

      return (
        <div className="blogContainer">
          <p className="blog">{Yama.blog}
          </p>
        </div>
      );
    }
  }

export default Yama5;
