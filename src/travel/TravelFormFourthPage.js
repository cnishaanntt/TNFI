import React, { Component } from 'react';
import { fullWhite } from '../../node_modules/material-ui/styles/colors';

const divStyle = {
    background: fullWhite,
    borderRadius: 0,
      borderWidth: 0,
      borderColor: '#ffffff',
  };
class TravelFormFourthPage extends Component {
  render() {
    const {status} = this.props;
    return (
        <div style={divStyle}>
            <b style={divStyle}>Thank you :)</b><hr/>
            <em style={divStyle}>Your Payment is {status}</em>
        </div>
    );
  }
}


export default TravelFormFourthPage;


