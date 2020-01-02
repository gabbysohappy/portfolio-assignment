import React, {Component} from 'react';
import axios from 'axios';

class Posts extends Component {
state = { posts: [] }

  componentDidMount() {
    const { id } = this.props.location.state
    let blogId = id
    axios.get(`/api/gabblogs/${blogId}/posts`)
      .then( res => {
        this.setState({ posts: res.data })
      })
      .catch(err => {
        console.log(err)
      })
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