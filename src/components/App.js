import React from 'react';
import { connect } from 'react-redux';

import ConnectedGoals from './Goals';
import ConnectedTodos from './Todos';
import { handleInitialData } from '../actions/shared';

class App extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(handleInitialData());
  }

  render() {
    if (this.props.loading) {
      return <h3>Loading...</h3>;
    }

    return (
      <div>
        <ConnectedTodos />
        <ConnectedGoals />
      </div>
    );
  }
}

/*
    Currying technique is used here. When connect()
    is invoked, it returns a function.

    1st set of parens: data the component needs
    2nd set of parens: pass the component to render
*/
export default connect(state => ({
  loading: state.loading
}))(App);
