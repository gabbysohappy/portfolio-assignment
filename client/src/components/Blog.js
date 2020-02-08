import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BlogForm from './BlogForm';
import moment from 'moment'
import '../styles/blog.css';


class Blog extends Component {
    state = { editing: false }

    toggleComments = () => this.setState({ commenting: !this.state.commenting })

    toggleEdit = () => this.setState({ editing: !this.state.editing })

    render() {
    const { deleteBlog, id, title, body, created_at } = this.props
    const { editing, commenting } = this.state
    var date = moment(created_at).format('MMM Do YY')
  
    return(  
        <div className='blog-entry'>  
        {
          editing
          ?
          <BlogForm {...this.props} toggleEdit={this.toggleEdit}/>
          :
          <>
            <h3>{title}</h3>
            <p><i>{date}</i></p>
            <p>{body}</p>
            <div className='bottom-links'>
            
            {/* <div className='comment-section'>
            {
            commenting
            ?
            <Link {...this.props} onClick={ () => this.toggleComments()}>
                  <Posts />
            </Link>
            :
            <>
            </>
            }
            </div> */}

            <div className='blog-buttons'>
            <button className='edit-blog-button' onClick={ () => this.toggleEdit() }>
              Edit
            </button>    
            <button className='delete-blog-button' onClick={ () => deleteBlog(id) }>
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