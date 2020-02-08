import React, {Component} from 'react';
import axios from 'axios';

class Posts extends Component {
state = { posts: [], blog: {} }

componentDidMount() {
  const { id } = this.props.location.state
  let blogId = id
  axios.get(`/api/blogs/${blogId}/posts`)
  .then( res => {
      this.setState({ posts: res.data })
  })
    .catch(err => {
      console.log(err)
    })
}

handleSubmit = (e) => {
  e.preventDefault()
  if (this.props.id) {
    this.props.updateComment(this.props.id, this.state)
    this.props.toggleEdit() 
  } 
  else {
    this.props.addComment(this.state)
    this.props.toggleAdd()
  }
  this.setState({ author: '', body: ''})
  }

render() {
    const { posts } = this.state
    return(
      <>
        {
          posts.map( post => 
            <div>
              <h1>{post.author}</h1>
              <h1>{post.body}</h1>
            </div>  
          )
        }
      </>
    )
  }
}

export default Posts;