import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import BlogForm from './BlogForm';
import '../styles/blog.css';

class Blog extends Component {
    state = { editing: false }

    toggleEdit = () => this.setState({ editing: !this.state.editing })

    render() {
    const { deleteBlog, id, title, body, created_at } = this.props
    const { editing } = this.state
    return(  
        <div class='blog-entry'>  
        {
          editing
          ?
          <BlogForm {...this.props} />
          :
          <>
            <h3>{title}</h3>
            <p><i>{created_at}</i></p>
            <p>{body}</p>
            <div class='blog-buttons'>
            <Button class='edit-blog-button' color='violet' onClick={ () => this.toggleEdit() }>
              <Icon name='pencil' />
            </Button>    
            <Button class='delete-blog-button' color='pink' onClick={ () => deleteBlog(id) }>
              <Icon name='trash' />
            </Button>
            </div>
        </>
       } 
       </div>      
   )
  }
}

export default Blog;