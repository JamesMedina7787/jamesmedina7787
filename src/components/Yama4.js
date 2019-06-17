import React, { Component } from 'react';

var Yama = {
  'name':'Brahmacharia',
  'meaning':'Restraint',
  'blog': `Brahmacharia is denying ourselves bad habits. Traditionaly it is referred to as celibacy. It applies to all `
}
class Yama4 extends Component {
    render() {

      return (
        <div className="blogContainer">
          <p className="blog">{Yama.blog}
          </p>
        </div>
      );
    }
  }

export default Yama4;
