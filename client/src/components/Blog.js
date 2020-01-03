import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BlogForm from './BlogForm';
import moment from 'moment'
import '../styles/blog.css';


class Blog extends Component {
    state = { editing: false }

    toggleEdit = () => this.setState({ editing: !this.state.editing })

    render() {
    const { deleteBlog, id, title, body, created_at } = this.props
    const { editing } = this.state
    var date = moment(created_at).format('MMM Do YY')
  
    return(  
        <div class='blog-entry'>  
        {
          editing
          ?
          <BlogForm {...this.props} toggleEdit={this.toggleEdit}/>
          :
          <>
            <h3>{title}</h3>
            <p><i>{date}</i></p>
            <p>{body}</p>
            <div class='bottom-links'>
            <Link to={{
                  pathname: `/${id}/posts`,
                  state: {...id}
                }}>
                  Comment
                </Link>
            <div class='blog-buttons'>
            <button class='edit-blog-button' onClick={ () => this.toggleEdit() }>
              Edit
            </button>    
            <button class='delete-blog-button' onClick={ () => deleteBlog(id) }>
             Delete
            </button>
            </div>
            </div>
        </>
       } 
       </div>      
   )
  }
}

export default Blog;