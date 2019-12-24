import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class BlogForm extends Component {
  state = { 
    title: '', 
    body: '', 
    tags: ''
  }

  componentDidMount() {
    if (this.props.id) {
      const { title, body, tags } = this.props
      this.setState({ title, body, tags })
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.props.id) {
      this.props.updateBlog( this.props.id, this.state )
      this.props.toggleEdit()
    } else {
      this.props.addBlog(this.state)
      this.props.toggleAdd()
    }
    this.setState({ 
      title: '',
      body: '',
      tags: ''
    })
  }

  render() {
    const { title, body, tags } = this.state
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          name='title'
          value={title}
          onChange={this.handleChange}
          label='Title'
        />
        <Form.Input
          name='body'
          value={body}
          onChange={this.handleChange}
          label='Body'
        />
        <Form.Input
          name='tags'
          value={tags}
          onChange={this.handleChange}
          label='Tags'
        />
        <button type='submit'>Submit</button>
      </Form>
    )
  }
}

export default BlogForm;