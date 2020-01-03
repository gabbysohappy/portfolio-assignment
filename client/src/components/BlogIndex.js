import React, { Component } from 'react';
import axios from 'axios';
import BlogList from './BlogList';
import BlogForm from './BlogForm';
import '../styles/blog.css';

class BlogIndex extends Component {

  state = { blogs: [], adding: false }

  componentDidMount() {
      axios.get('/api/blogs')
      .then( res => {
          this.setState({ blogs: res.data })
      })
      .catch( err => {
          console.log(err)
      })
  }

  toggleAdd = () => this.setState({ adding: !this.state.adding })

  addBlog = (blog) => {
      axios.post('/api/blogs', blog )
      .then( res => {
          const { blogs } = this.state
          this.setState({ blogs: [...blogs, res.data ]})
      })
      .catch( err => {
          console.log(err)
      })
  }

  updateBlog = (id, blog) => {
      axios.put(`/api/blogs/${id}`, blog)
      .then( res => {
          const blogs = this.state.blogs.map( b => {
              if (b.id === id) {
                return res.data
              }
              return b
          })
          this.setState({ blogs })
      })
      .catch( err => {
          console.log(err)
      })
  }

  deleteBlog = (id) => {
      axios.delete(`/api/blogs/${id}`)
      .then( res => {
          const { blogs } = this.state
          this.setState({ blogs: blogs.filter( b => b.id !== id)})
      })
      .catch( err => {
          console.log(err)
      })
  }

  render() {
      const { adding } = this.state
      
      return( 
       <div className='blog-page'>
       <h1 className='blog-header'>Recent Posts</h1>
        <div className='add-blog'>
       {  
          adding ?
          <div className='adding-blog'><BlogForm addBlog={this.addBlog} toggleAdd={this.toggleAdd} /></div>
          :
          <button className='add-blog-button' color='teal' onClick={this.toggleAdd}>New Blog</button>
        }
        </div>
       <BlogList blogs={this.state.blogs} updateBlog={this.updateBlog} deleteBlog={this.deleteBlog}/>
       </div>
  )}
}
  
export default BlogIndex;