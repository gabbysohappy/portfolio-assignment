import React, {Component} from 'react';
import { Button, Icon } from 'semantic-ui-react';
import BlogForm from './BlogForm';

class BlogEdit extends Component {
    state = { editing: false }

    toggleEdit = () => this.setState({ editing: !this.state.editing })
    
    render() {
        const { title, body, tags } = this.props.location.state
        const { editing } = this.state
        return(
         <>
          {
            editing
            ?
            <BlogForm {...this.props.location.state} />
            :
            <>
            <h4>{title}</h4>
            <p>{body} {tags}</p>
            <Button color='yellow' onClick={ () => this.toggleEdit() }>
               <Icon name='pencil' />
             </Button>
            </>   
        }
        </>
  )}
}

export default BlogEdit;