import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import BlogEdit from './BlogEdit';

class Blog extends Component {
    state = { editing: false }

    toggleEdit = () => this.setState({ editing: !this.state.editing })

    render() {
    const { id } = this.props
    const { title, body, tags } = this.props
    const { editing } = this.state
    const { deleteBlog } = this.props
    return(
        <>
            <h4>{title}</h4>
            <p>{body} <br />
            {tags}</p>

            <Button color='red' onClick={ () => deleteBlog(id) }>
            <Icon name='trash' />
            </Button>              
        {
            editing
            ?
            <BlogEdit {...this.props} />
            :
            <Button onClick={ () => this.toggleEdit() }>
            <Icon name='pencil' />
            </Button>    
        }
    </>
    )
    }
}

export default Blog;