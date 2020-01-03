import React from 'react';
import { Container } from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/shared/Home';
import BlogIndex from './components/BlogIndex';
import PageNotFound from './components/shared/PageNotFound';
import Navbar from './components/shared/Navbar';
import Posts from './components/Posts';
import './styles/App.css'

const App = () => (
  <div>
    <Navbar />
    <Container>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/blog' component={BlogIndex} />
        <Route exact path='/posts' component={Posts} />
        <Route exact path='/blogs/:blog_id/posts' component={Posts} />
        <Route component={PageNotFound} />
    </Switch>
    </Container>
    </div>
  )

  export default App;