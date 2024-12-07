import React from 'react';
import { Feature } from '../../components';
import './whatGPT3.css';

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="What is GPT-3"
          text="ChatGPT is an advanced AI language model developed by OpenAI, designed to understand and generate human-like text based on the input it receives. It can perform a wide range of tasks, such as answering questions, providing explanations, assisting with creative writing, offering technical help, and engaging in casual conversation. Built on deep learning technology, ChatGPT leverages vast amounts of data to generate coherent and contextually relevant responses. It is widely used for applications like customer support, educational tools, and personal productivity."
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore the Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title="Chat-bots"
          text="Create and record conversations with chat-bots that will use the latest information available to asssist you."
        />
        <Feature
          title="Knowledge-base"
          text="Use the vast information libraries available through the web by simply asking for information on certain topics."
        />
        <Feature
          title="Education"
          text="Double check important work by asking ChatGPT to overlook any document or contract. "
        />
      </div>
    </div>
  );
};

export default WhatGPT3;
