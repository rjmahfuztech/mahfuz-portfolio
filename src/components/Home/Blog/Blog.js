import React from 'react';
import BlogInfo from '../BlogInfo/BlogInfo';
import blogs from '../../../Data/blogs';
import { useHistory } from 'react-router';

const Blog = () => {
    const history = useHistory();
    const handleClick = () => {
        history.push('/blog');
    }
    return (
        <div className="text-center">
            <div className="margin text-white">
                <h3>MY BLOG</h3>
            </div>
            <div className="row">
                {
                    blogs.map((blog, index) => <BlogInfo key={index} blog={blog}></BlogInfo>)
                }
            </div>
            <button onClick={handleClick} className="btn btn-success mt-5">SEE MORE BLOGS</button>
        </div>
    );
};

export default Blog;