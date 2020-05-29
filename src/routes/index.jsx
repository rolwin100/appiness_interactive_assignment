import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Loader from '../components/Loader';

const Home = React.lazy(() => import('../views/Home/index'));
const NotFound404 = React.lazy(() => import('../views/404'));

const Routing = () => (
  <Router>

    <React.Suspense fallback={<Loader />}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="*" component={NotFound404} />
      </Switch>
    </React.Suspense>

  </Router>
);

export default Routing;
