import React from 'react';
import { connect } from 'react-redux';
import { mapDispatchToProps } from 'redux-feathers';

class App extends React.Component {

  render() {
    return (
      <div>ready to dev</div>
    );
  }
}

const mapStateToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);
