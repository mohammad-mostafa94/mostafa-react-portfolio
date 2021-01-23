import React from 'react';
import './BlogCards.css';
const BlogCardUI = (blogInfor) => {
    const {img,title,description} = blogInfor ;
    return (
        <div className = 'card text-center shadow'>
            <div className = 'overflow'>
                <img src={img} alt="image" className = 'card-img-top'/>
                    <div  className = 'card-body text-dark'>
                        <h4 className = 'card-title'>{title}</h4>
                            <p className = 'card-text text-secondary'>
                                {description}
                            </p>
                    </div>
            </div>
        </div>
    );
};

export default BlogCardUI;