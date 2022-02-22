import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';

class Card extends React.Component {
  
  render() { 
    return (<div className="card text-center ">
      <div className="img-responsive">
        <img src={this.props.imgsrc}/>
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{this.props.name}</h4>
        <p className="card-text text-secondary">{this.props.message}</p>
        <SocialIcon url="https://twitter.com/jaketrent" />
        <SocialIcon url="https://www.facebook.com/hebatullahs/"/>

      </div>
    </div>
    );
  }

 
}
 
export default Card;
