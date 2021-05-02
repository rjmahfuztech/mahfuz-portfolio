import React from 'react';
import allBlogs from '../../Data/blogs';
import AllBlogInfo from '../AllBlogInfo/AllBlogInfo';
import Footer from '../Shared/Footer/Footer';

const AllBlog = () => {
    return (
        <div className="text-white">
            <div className="container text-center">
                <div className="pt-5">
                    <h3>MY BLOG</h3>
                </div>
                <div className="row pt-5">
                    {
                        allBlogs.map((blog, index) => <AllBlogInfo key={index} blog={blog}></AllBlogInfo>)
                    }
                </div>
                <h3 className="pt-5">Blog is coming soon!!!</h3>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default AllBlog;