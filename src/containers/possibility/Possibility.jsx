import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Join the weekly newsletter</h4>
      <h1 className="gradient__text">
        Enjoy the unlimited possibilities available.
      </h1>
      <p>
        By acting as a versatile AI assistant capable of enhancing productivity,
        creativity, and problem-solving across various domains. It can assist
        with brainstorming ideas, automating repetitive tasks, & generating
        content.
      </p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
);

export default Possibility;
