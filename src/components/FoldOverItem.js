import React, { Component } from 'react';

var Career = {
  'intro': `My name is James Medina. I have been a yoga teacher for 5 years now. I was certified on October 2014. I am yogaAlliance recognized. I am a true yogi. I have taken more than a thousand yoga classes as a student. I have also taught more than 2000 hours as a teacher.

 I worked for 2 years at the White Plains YMCA. I mainly taught elderly people. I also taught classes to children. These classes taught me how to teach yoga for everyone. That became a valuable skill for me moving forward. At LaFitness I teach open level yoga. That means I teach yoga to all skill levels at once.

I have been working at Lafitness for 3 years now. I have a devoted following and typically teach classes at an average of 20 students per class. My experience here has transformed me into a master teacher. I continue to work here for the love of it. I have many devoted students. I have made a meaningful difference for all the student of the community.
`
}
class FoldOverItem extends Component {
    render() {

      return (
        <div className="blogContainer">
          <p className="blog">{Career.intro}
          </p>
        </div>
      );
    }
  }

export default FoldOverItem;
