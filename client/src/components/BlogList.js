import React from 'react';
import Blog from './Blog';

const BlogList = ({ blogs, deleteBlog, updateBlog }) => (

    <div>
    <ul>
    { blogs.map( b => 
       <Blog
         key={b.id}
         {...b}
         deleteBlog={deleteBlog}
         updateBlog={updateBlog}
        />
       )
    }
    </ul>
    </div>
)

export default BlogList;