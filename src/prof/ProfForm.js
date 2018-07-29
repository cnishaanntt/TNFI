import React, { Component } from 'react';
import ProfFormFirstPage from './ProfFormFirstPage';
import ProfFormSecondPage from './ProfFormSecondPage';
import ProfFormThirdPage from './ProfFormThirdPage';
import ProfFormFourthPage from './ProfFormFourthPage';
import ProfFormFifthPage from './ProfFormFifthPage';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import moment from 'moment';
import axios from 'axios';
import { plans } from './asset/plans';

class profForm extends Component {

  constructor(props) {
    super(props)
    this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this)
    this.HomePage = this.HomePage.bind(this)
    this.state = {
      page: 1,
      rate:''
    }
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 })
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 })
  }

  HomePage() {
    this.setState({ page: 1 })
  }

showResults=(values)=> {
var profToken='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';
var headers={         
            "Token":profToken,
            "Content-Type": 'application/json',
            "EventName": 'PLICalculateRate',
            "EventVersion": "2.2.2.1",
            "Access-Control-Allow-Origin": "*",
            };
var url = 'https://profapihk.solartis.net/DroolsV6/DroolsService/FireEventV2';
const go =  function(values,callback){ 
  const getPlanByCode=code=> {
      return plans.filter(
          function(plan){return plan.code === code}
      );
    }
  var data={
      "EndClientUserUniqueSessionId": "Uniquesession",
      "ServiceRequestDetail": {
          "OwnerId": "27",
          "ResponseType": "JSON",
          "UserName": "CWAgent",
          "Token": "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",
          "BrowserIp": "127.0.0.1",
          "ServiceRequestVersion": "1.0",
          "RegionCode": "US"
      },
      "Policy": {
          "ProgramName": getPlanByCode(values.programName)[0].name,
          "PolicyType": values.policyType,
          "ZipCode": values.zipCode,
          "State": values.state,
          "EffectiveDate": moment(values.effectiveDate).format("YYYY-MM-DD"),
          "EventName": "PLICalculateRate",
          "EventVersion": "2.2.2.1",
          "ApplicableFromDate": moment(values.applicableDate).format("YYYY-MM-DD"),
          "NumOfProviders": values.numOfProviders,
          "SharedOrSeparateLimit": values.sharedOrSeparate,
          "PLOrWLCoverageType": values.PLorWLCoverage,
          "ProfessionalLiabilityLimitsOfInsurance": values.PLLofI,
          "WorkplaceLiabilityLimitsOfInsurance": values.WLLofI_PL,
          "WorkplaceLiabilityInsurance": values.WorkplaceLiabilityInsurance?"Yes":"No",
          "CorporationOrPartnershipCoverage": values.CorporationOrPartnershipCoverage?"Yes":"No",
          "AdditionalInsuredCoverage": values.AdditionalInsuredCoverage?"Yes":"No",
          "EmploymentCategory": values.employment?values.employment:"Employed",
          "TransitionFactor": "10",
          "ProductNumber": "HC_PLI",
          "ProductVerNumber": "2.0",
          "ExpensesInsideOrOutside": values.expenses,
          "DeductibleAmount": values.DeductibleAmount,
          "NumberOfClaimsinPast5Yrs": values.NumClaims,
          "TotalReportedIncurredLossandExpense": "200000",
          "RetroDate": values.RetroDate,
          "Revenue": values.Revenue,
          "ResidentialOrCommercialBusinessModifier": values.ResidentialOrCommercialBusinessModifier,
          "ProjectSizeModifier":values.ProjectSizeModifier,
          "WrittenContractsModifier": values.WrittenContractsModifier,
          "RiskManagementModifier": values.RiskManagementModifier,
          "FinancialStrength": "",
          "UseofSubcontractors": "",
          "HistoryofDisciplinaryAction": "",
          "MergersandAcquisitions": "",
          "ExperienceofPrincipals": "",
          "ClientSize": "",
          "RequireSubstoShowProofOfEAndO": "",
          "RequireAandEstoShowProofOfEandO": "",
          "KYLocalGovernmentTaxRate": "",
          "KYLocalGovernmentTaxOverridden": "",
          "Provider":values.providers
      },
  "OwnerId": "27"
  }   
  var rateRequest={
    url:url,
    headers:headers,
    data:data
  }
  axios.post('/rateTravel', rateRequest)
  .then(result => {
    callback(result);
  }).catch(err =>{
    callback(err);
  })
  }
  go(values, response =>{
    if(response!==undefined && response){
      //alert(JSON.stringify(response.data))
      this.setState({ rate: response.data })
      this.nextPage();
    }
    })    
  }

  render() {
    const { page } = this.state
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>  
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <h2> Professional Insurance </h2>
      </div>
        <div>
          {page === 1 && 
            <ProfFormFirstPage onSubmit={this.nextPage}               
            />}        
          {page === 2 && (
            <ProfFormSecondPage
              onSubmit={this.nextPage}
            />
          )}
          {page === 3 && (
            <ProfFormThirdPage
              onSubmit={this.nextPage}              
            />
          )}
          {page === 4 && (
            <ProfFormFourthPage
              onSubmit={this.showResults}
            />
          )}
          {page === 5 && (
            <ProfFormFifthPage
              HomePage={this.HomePage}
              rate={this.state.rate}
            />
          )}
        </div>
      </MuiThemeProvider>
    )
  }
}

profForm.propTypes = {
 
}

export default profForm