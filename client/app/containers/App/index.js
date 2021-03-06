/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import ProjectPage from 'containers/ProjectPage/Loadable';
import LoginPage from 'containers/LoginPage/Loadable';
import Logout from 'containers/Logout/Loadable';
import ExperimentList from 'containers/ExperimentList/Loadable';
import ExperimentDetail from 'containers/ExperimentDetail/Loadable';
import ProfilePage from 'containers/ProfilePage/Loadable';
import RegistrationPage from 'containers/RegistrationPage/Loadable';
import PasswordResetPage from 'containers/PasswordResetPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import InviteRedirect from 'containers/InviteRedirect/Loadable';

import Footer from 'components/Footer';
import GlobalStyle from '../../global-styles';
import PrivateRoute from './PrivateRoute';

export default function App() {
  return (
    <div>
      <Helmet
        titleTemplate="%s"
        defaultTitle="Modelchimp"
      >
        <meta name="description" content="Deep learning experiment Tracker" />
      </Helmet>
      {/*  <Header /> */}
      <Switch>
        <PrivateRoute exact path="/" component={ProjectPage} />
        <PrivateRoute path="/projects" component={ProjectPage} />
        <PrivateRoute
          path="/experiment-detail/:modelId"
          component={ExperimentDetail}
        />
        <PrivateRoute path="/experiment-list/:id" component={ExperimentList} />
        <PrivateRoute path="/profile" component={ProfilePage} />
        <Route path="/reset/:uid/:token/" component={PasswordResetPage} />
        <Route path="/invite/:token/" component={InviteRedirect} />
        <Route path="/login" component={LoginPage} />
        <Route path="/logout" component={Logout} />
        <Route path="/register/:inviteToken" component={RegistrationPage} />
        <Route path="/register" component={RegistrationPage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <Footer />
      <GlobalStyle />
    </div>
  );
}
