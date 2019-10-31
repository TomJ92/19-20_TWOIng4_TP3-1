import React from 'react';
import BoutonPersonne from '../components/BoutonPersonne'
import './Switch.css';


export default class Switch extends React.Component {
  render() {
    return (
      <div className="Switch">
        <BoutonPersonne 
          p = {this.props.p1}
          handleClick = {this.props.handleClick}
        />
        <BoutonPersonne 
          p = {this.props.p2} 
          handleClick = {this.props.handleClick}
        />
        <BoutonPersonne 
          p = {this.props.p3} 
          handleClick = {this.props.handleClick}
        />
      </div>
    );
  }
}
