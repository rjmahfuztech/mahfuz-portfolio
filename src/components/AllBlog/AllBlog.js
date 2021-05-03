import React from 'react';
import allBlogs from '../../Data/blogs';
import AllBlogInfo from '../AllBlogInfo/AllBlogInfo';
import Footer from '../Shared/Footer/Footer';
import Bounce from 'react-reveal/Bounce';

const AllBlog = () => {
    return (
        <div className="text-white">
            <div className="container text-center">
                <div className="pt-5">
                    <Bounce left>
                        <h3 className="bottom-border">MY BLOG</h3>
                    </Bounce>
                </div>
                <Bounce right>
                <div className="row pt-5">
                    
                        {
                            allBlogs.map((blog, index) => <AllBlogInfo key={index} blog={blog}></AllBlogInfo>)
                        }
                    
                </div>
                </Bounce>
                <h3 className="pt-5">Blog is coming soon!!!</h3>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default AllBlog;