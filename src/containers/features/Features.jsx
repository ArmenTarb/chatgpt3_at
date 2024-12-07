import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Natural Language Understanding',
    text: 'ChatGPT excels at interpreting and responding to human language in a conversational and context-aware manner. It can process nuanced queries, maintain context across exchanges, and provide coherent answers.',
  },
  {
    title: 'Versatility',
    text: 'It supports a wide range of tasks, from answering questions and summarizing content to creative writing, coding assistance, and language translation. This makes it adaptable to various industries and user needs.',
  },
  {
    title: 'Customization and Adaptability',
    text: 'With tools like fine-tuning or API-based applications, developers can tailor ChatGPT for specific use cases, creating personalized experiences for users.',
  },
  {
    title: 'Constant Learning and Updates',
    text: 'ChatGPT is built on state-of-the-art AI models that are periodically updated, ensuring improved accuracy, expanded knowledge, and better understanding of user intent.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">
        The Future is Now. Step into the future today. & Make it Happen.
      </h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
