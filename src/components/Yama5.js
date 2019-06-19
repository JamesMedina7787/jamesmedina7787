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
        <strong className="name">{Yama.name}</strong><br/>
        <strong className="meaning">{Yama.meaning}</strong><br/>
          <p className="blog">{Yama.blog}
          </p>
        </div>
      );
    }
  }

export default Yama5;
