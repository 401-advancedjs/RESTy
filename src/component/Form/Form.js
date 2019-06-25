import React from 'react';
import './form.scss'

export default class Form extends React.Component{
  handleSubmitChange = event => {
    event.preventDefault();
    this.props.handleSubmit();
  }

  handleURLChange = event => {
    event.preventDefault();
    const URL = event.target.value;
    this.props.handleURL(URL);
  }

  handleMethodChange = event => {
    event.preventDefault();
    const method = event.target.value;
    this.props.handleMethod(method);
  }


  render(){
    return(
      <>
        <form>
          <div>
          <label>
          <input type='text' onChange={ this.handleURLChange } className="URL"></input>
          </label>
          </div>
          <div className="methodsDIV">
          <label className="methods">
            GET
          <input type="radio" value="GET" onChange={ this.handleMethodChange }></input>
          </label>

          <label className="methods">
            POST
          <input type="radio" value="POST"  onChange={ this.handleMethodChange }></input>
          </label>

          <label className="methods">
            PUT
          <input type="radio" value="PUT"  onChange={ this.handleMethodChange }></input>
          </label>

          <label className="methods">
            PATCH
          <input type="radio" value="PATCH"  onChange={ this.handleMethodChange }></input>
          </label>

          <label className="methods">
            DELETE
          <input type="radio" value="DELETE"  onChange={ this.handleMethodChange }></input>
          </label>
          <button onClick={ this.handleSubmitChange }>Go!</button>
          </div>
        </form>
      </>
    );
  }
}
