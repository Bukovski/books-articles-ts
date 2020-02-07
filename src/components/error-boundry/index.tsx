import React, { Component } from 'react';
import { Error } from "../error";


interface IErrorBoundryState {
  hasError: boolean
}


class ErrorBoundry extends Component<object, IErrorBoundryState> {
  state: IErrorBoundryState = {
    hasError: false
  };


  componentDidCatch() {
    this.setState({
      hasError: true
    });
  }

  render() {
    if (this.state.hasError) return <Error />;

    return this.props.children;
  }
}


export default ErrorBoundry;
