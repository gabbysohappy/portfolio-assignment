import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import '../styles/blog.css';

class BlogForm extends Component {
  state = { 
    title: '', 
    body: ''
  }

  componentDidMount() {
    if (this.props.id) {
      const { title, body } = this.props
      this.setState({ title, body })
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.props.id) {
      this.props.updateBlog(this.props.id, this.state)
      this.props.toggleEdit() 
    } 
    else {
      this.props.addBlog(this.state)
      this.props.toggleAdd()
    }
    this.setState({ title: '', body: ''})
    }

  render() {
    const { title, body } = this.state
    return(
      <div className='blog-form'>
      <Form onSubmit={this.handleSubmit}>
       <div class='title'>
        <Form.Input
          name='title'
          value={title}
          onChange={this.handleChange}
          label='Title'
          required
        />
        </div>
        <div class='body'>
        <Form.TextArea 
          rows='8'
          name='body'
          value={body}
          onChange={this.handleChange}
          label='Body'
          required
        />
        </div>
        <button class='submit-button' type='submit'>Submit</button>
      </Form>
      </div>
    )
  }
}

export default BlogForm;