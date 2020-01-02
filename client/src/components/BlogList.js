import React, {Component} from 'react';
import Blog from './Blog';
import '../styles/blog.css';

class BlogList extends Component { 

  render() {
  const {blogs, deleteBlog, updateBlog } = this.props
  var blog_list = blogs.sort((a, b) => a.created_at > b.created_at).reverse()
  return(  
    blog_list.map( b => 
    <Blog
      key={b.id}
      {...b}
      deleteBlog={deleteBlog}
      updateBlog={updateBlog}
     />
    )
  )
  }
}

export default BlogList;