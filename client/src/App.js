import React from 'react';
import { Container } from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/shared/Home';
import BlogIndex from './components/BlogIndex';
import PageNotFound from './components/shared/PageNotFound';
import Navbar from './components/shared/Navbar';

const App = () => (
  
    <>
    <Navbar />
    <Container>
    <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/blog' component={BlogIndex} />
          <Route component={PageNotFound} />
    </Switch>
    </Container>
    </>
  )

  export default App;