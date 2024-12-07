import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">
        A lot is happening, <br /> We are blogging about it.
      </h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article
          imgUrl={blog01}
          date="Sep 26, 2021"
          title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
        />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article
          imgUrl={blog02}
          date="Oct 07, 2021"
          title="Open AI breaks record solving mathematical problems."
        />
        <Article
          imgUrl={blog03}
          date="Oct 23, 2021"
          title="GPT-3 and Open AI conference held in Los Angeles, CA."
        />
        <Article
          imgUrl={blog04}
          date="Nov 11, 2021"
          title="GPT-3 and Open AI, is this the future we need?"
        />
        <Article
          imgUrl={blog05}
          date="Dec 24, 2021"
          title="GPT-3 being free is beneficial for everyone."
        />
      </div>
    </div>
  </div>
);

export default Blog;
