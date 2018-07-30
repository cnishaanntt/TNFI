import React, { Component } from 'react';
import {   reduxForm } from 'redux-form';
import {List, ListItem}from 'material-ui';
import { fullWhite } from '../../node_modules/material-ui/styles/colors';

const divStyle = {
  background: fullWhite,
  borderRadius: 0,
    borderWidth: 0,
    borderColor: '#ffffff',
};

class ProfFormFifthPage extends Component {
  render() {
    const {  handleSubmit, HomePage, rate} = this.props;
    return (
      <form  style={divStyle} onSubmit={handleSubmit}>
      <div>
        <div>
          {!(rate.MessageDetail ||rate.Policy) && <p style={{color:'orange'}}><em>Sorry!, there is no response from the server</em></p> }
          {rate.MessageDetail&& <p style={{color:'red'}}><em>{rate.MessageDetail.UserMessage}</em></p>}
          <span>{rate.Policy && <h4 style={{color:'green'}}>{rate.Policy.ProgramName}</h4>}<hr/>        
          {rate.Policy && <small style={{color:'green'}}> {rate.Policy.PolicyType}</small>}</span>
        </div>
      </div>
      <div>
        {rate.Policy&&<div>
          {rate.Policy.TotalProviderPremium && <div><span><small>Total Provider Premium : <b> ${rate.Policy.TotalProviderPremium}</b></small></span></div>}
          {rate.Policy.BasePremium && <div><span><small>Base Premium :  <b> ${rate.Policy.BasePremium}</b></small></span></div>}
          {rate.Policy.EntityCoveragePremium && <div><span><small>Entity Coverage Premium :  <b> ${rate.Policy.EntityCoveragePremium}</b></small></span></div>}
          {rate.Policy.WorkplaceLiabilityCoveragePremium && <div><span><small>Workplace Liability Coverage Premium :  <b> ${rate.Policy.WorkplaceLiabilityCoveragePremium}</b></small></span></div>}
          {rate.Policy.AdditionalInsuredCoveragePremium && <div><span><small>Additional Insured Coverage Premium :  <b> ${rate.Policy.AdditionalInsuredCoveragePremium}</b></small></span></div>}
          {rate.Policy.ProfessionalLiabilityCoveragePremium && <div><span><small>Professional Liability Coverage Premium :  <b> ${rate.Policy.ProfessionalLiabilityCoveragePremium}</b></small></span></div>}
          {rate.Policy.Premium && <div><span><small>Premium :  <b> ${rate.Policy.Premium}</b></small></span></div>}
        </div>}
      </div>
      {rate.Policy&&<div>
          {rate.Policy.Provider && <div>
                <List>
                  {rate.Policy.Provider.map((ProviderDetail, index) => 
                  <ListItem key={index}>
                    {ProviderDetail.ProfessionalLiabilityCoveragePremium &&<hr/>}
                    {ProviderDetail.FirstName && <div><span><small> {ProviderDetail.FirstName}</small></span></div>}
                    {ProviderDetail.ProfessionalLiabilityCoveragePremium && <div><span><small>Travel Cost: ${ProviderDetail.ProfessionalLiabilityCoveragePremium}</small></span></div>}
                  </ListItem>
                )     
                }
                </List>
              </div>}          
      </div>}
      {(rate.MessageDetail || (!(rate.MessageDetail ||rate.Policy) )) && <div>
        <button type="button" className="previous" onClick={HomePage}>
          Home
        </button>
      </div>}
      </form>
    );
  }
}

ProfFormFifthPage = reduxForm({
  form: 'prof',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(ProfFormFifthPage);


export default ProfFormFifthPage;


