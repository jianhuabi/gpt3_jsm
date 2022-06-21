import React from 'react';
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
    <div className="gpt3__blog section__padding" id="blog">
        <div className="gpt3__blog-heading">
            <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
        </div>
        <div className="gpt3__blog-container">
            <div className="gpt3__blog-container_groupA">
                <Article imgUrl={blog01} date="Sep 26, 2021" text="Jumpstart app development. Use preconfigured cloud native pattern templates to bootstrap new applications." />
            </div>
            <div className="gpt3__blog-container_groupB">
                <Article imgUrl={blog02} date="Sep 26, 2021" text="Enable developers to quickly get started with preconfigured templates for cloud native patterns." />
                <Article imgUrl={blog03} date="Sep 26, 2021" text="Automate app deployment with a built-in secure software supply chain you can customize." />
                <Article imgUrl={blog04} date="Sep 26, 2021" text="Establish a clear separation of concern between Dev and Ops for seamless app handoffs from Dev to production." />
                <Article imgUrl={blog05} date="Sep 26, 2021" text="Accelerate the path to production. Secure software supply chains automate out-of-the-box app deployment" />
            </div>
        </div>
    </div>
);

export default Blog;