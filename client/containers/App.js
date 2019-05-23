import React from 'react';
import { connect } from 'react-redux';
import { mapDispatchToProps } from 'redux-feathers';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends React.Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route>ready to dev</Route>
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);
