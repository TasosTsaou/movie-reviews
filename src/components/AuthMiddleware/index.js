import React from "react";
import { Navigator } from 'movie-reviews/src/router';

export default class AuthMiddleware extends React.Component {

  state = {
    signInChecked: false,
    Layout: null
  };

  componentDidMount() {

    Navigator()
      .then(res =>  this.setState({ signInChecked: true, Layout: res }))  
      .catch(err => alert("An error occurred"));

  }

  render() {

    const { signInChecked, Layout } = this.state;

    if (!signInChecked) return null;
    return <Layout />;
    
  }

}