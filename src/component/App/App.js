import React from 'react';
import './App.scss';
import Header from '../Header/Header.js';
import Form from '../Form/Form.js';
import JSONBody from '../JSONBody/JSONBody.js';
import ReactJSON from 'react-json-view';
import Footer from '../Footer/footer.js';


const superagent = require('superagent');


export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      URL: '',
      method: '',
      result: {},
    }
  }
  handleURL = URL => {
    this.setState({ URL });
  }

  handleMethod = method => {
    this.setState({ method });
  }

  handleSubmit = async () => {
    const METHOD = this.state.method;
    const URL = this.state.URL;
    const response = await superagent(METHOD, URL);
    const result = response.body.results;
    this.setState({ result });
  }

  render(){
    return(
      <>
      <div>
        <Header />
        <Form handleURL={ this.handleURL } handleMethod={ this.handleMethod } handleSubmit={ this.handleSubmit }/>
        <JSONBody />
        <div id="reactJSON">
          <ReactJSON src={ this.state.result } />
        </div>
        <Footer />
      </div>
      </>
    );
  }
};
