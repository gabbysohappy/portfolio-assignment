import React, { Component } from 'react';
import BlogForm from './BlogForm';
import { Button, Icon } from 'semantic-ui-react';

class BlogEdit extends Component {
  state = { editing: false}
  toggleEdit = () => this.setState({ editing: !this.state.editing })

  render() {
    const { title, body, tags } = this.props
    const { editing } = this.state
    return(
      <>
        {
          editing 
          ?
          <BlogForm {...this.props} /> 
          :
          <>
            <h1>{title}</h1>
            <p>{body}</p>
            <p>{tags}</p>
            <Button onClick={ () => this.toggleEdit() }>
              <Icon name='pencil' />
            </Button>
          </>
        }
      </>
    )
  }
}

export default BlogEdit;