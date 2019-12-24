import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Blog = ({ id, title, body, tags, deleteBlog, updateBlog }) => (
 <div>
     <h4>{title}</h4>
     <p>{body} <br />
     {tags}</p>
     <Link to={{ pathname: `/BlogEdit/${id}`,
     state: {title, body, tags} 
    }}>Edit</Link>
     <Button color='red' onClick={ () => deleteBlog(id) }>
        <Icon name='trash' />
      </Button>
 </div>
)

export default Blog;

