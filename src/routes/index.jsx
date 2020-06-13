import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Loader from 'components/Loader';
import Login from 'views/Login';
import PrivateRoute from 'components/PrivateRoute';

const Home = React.lazy(() => import('../views/Home/index'));
const NotFound404 = React.lazy(() => import('../views/404'));

const Routing = () => (
  <Router>
    <React.Suspense fallback={<Loader />}>
      <Switch>
        <PrivateRoute exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route path="*" component={NotFound404} />
      </Switch>
    </React.Suspense>
  </Router>
);

export default Routing;
