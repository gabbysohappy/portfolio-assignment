import React from 'react';
import Blog from './Blog';
import '../styles/blog.css';

const BlogList = ({blogs, deleteBlog, updateBlog}) => (
    <div class='blog-list'>  
    { blogs.map( b => 
       <Blog
         key={b.id}
         {...b}
         deleteBlog={deleteBlog}
         updateBlog={updateBlog}
        />
       )
    }
    </div>
)

export default BlogList;