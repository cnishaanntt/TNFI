import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import {List, ListItem}from 'material-ui';
import { fullWhite } from '../../node_modules/material-ui/styles/colors';

const divStyle = {
  background: fullWhite,
  borderRadius: 0,
    borderWidth: 0,
    borderColor: '#ffffff',
};

class TravelFormSecondPage extends Component {
  render() {
    const {  handleSubmit, previousPage, rate} = this.props;
    return (
      <form  style={divStyle} onSubmit={handleSubmit}>
        <div>
          <div>
          {rate.PremiumInformation&&rate.PremiumInformation.PlanName && <div><h4 style={{color:'green'}}>{rate.PremiumInformation.PlanName}</h4></div>}
          </div>
        </div>
        {rate.MessageDetail&& <p style={{color:'red'}}><em>{rate.MessageDetail.UserMessage}</em></p>}    
        <div>
            {rate.PremiumInformation&&rate.PremiumInformation.TotalGrossPremium&&<b> Total Gross Premium :  ${rate.PremiumInformation.TotalGrossPremium}</b>}
        </div>
        {rate.PremiumInformation && rate.PremiumInformation.TotalGrossPremium && <div>
        <button type="submit" className="next">
          Pay
        </button>
      </div>}
        <div>
          {rate.PremiumInformation&&rate.PremiumInformation.TravelerList && <div>
            <List>
              {rate.PremiumInformation.TravelerList.map((traveler, index) => 
              <ListItem key={index}>
                {traveler.TravelCost &&<hr/>}
                {traveler.TravelCost && <div><span><small>Date of Birth: {traveler.TravelerDOB}</small></span></div>}
                {traveler.TravelCost && <div><span><small>Travel Cost: ${traveler.TravelCost}</small></span></div>}
                {traveler.TravelCost && <div><span><small>Traveler Gross Premium: ${traveler.TravelerGrossPremium}</small></span></div>}
              </ListItem>
            )     
            }
            </List>
          </div>}
        </div>
        <div>
        {rate.CoverageInformation && <div>
            <List>
              <p style={{color:'green'}}>Coverage Information</p>
              <hr/>
              {rate.CoverageInformation.map((coverage, index) => 
              <ListItem key={index}>
                <div>
                  <div><b><small> {coverage.CoverageName}</small></b></div>
                  <div><small> {coverage.CoverageLimit}</small></div>
                </div>
              </ListItem>
            )     
            }
            <hr/>
            </List>
          </div>}
        </div>

      {<div>
        {rate.MessageDetail && <button type="button" className="previous" onClick={previousPage}>
          Home
        </button>}
      </div>}
      
      </form>
    );
  }
}

TravelFormSecondPage = reduxForm({
  form: 'travel',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(TravelFormSecondPage);


export default TravelFormSecondPage;


