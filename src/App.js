import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from './hoc/Layout/Layout';

// import Logout from './containers/Auth/Logout/Logout';
import * as actions from './store/actions/index';
import Updates from './components/updates/updates.component';
import Calendar from './components/Calendar/calendar.component';


class App extends Component {
  componentDidMount () {
    this.props.onTryAutoSignup();
  }

  render () {
    let routes = (
        <Switch>
          <Route path="/update" component={Updates} />
          <Route path="/calendar" component={Calendar} />
          <Redirect to="/update" />
        </Switch>
    );

    if ( this.props.isAuthenticated ) {
      routes = (
          <Switch >
            <Route path="/calendar" component={Calendar} />
            {/* <Route path="/logout" component={Logout} /> */}
            {/* <Route path="/auth" component={asyncAuth} /> */}
            <Route path="/update" component={Updates} />

            <Redirect to="/update" />
          </Switch>
      );
    }

    return (
      <div>
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch( actions.authCheckState() )
  };
};

export default withRouter( connect( mapStateToProps, mapDispatchToProps )( App ) );
