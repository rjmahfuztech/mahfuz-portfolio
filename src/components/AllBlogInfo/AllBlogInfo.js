import React from 'react';

const AllBlogInfo = (props) => {
    const { title, img, description } = props.blog;
    console.log(props);
    return (
        <div className="col-md-4 col-sm-6 col-12">
            <div className="card blog-card-style text-center">
                <img src={img} className="card-img-top blog-img" alt="Project pic" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text blog-text">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default AllBlogInfo;