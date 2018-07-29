import React, { Component } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TravelFormFirstPage from './TravelFormFirstPage';
import TravelFormSecondPage from './TravelFormSecondPage';
import TravelFormThirdPage from './TravelFormThirdPage';
import TravelFormFourthPage from './TravelFormFourthPage';
import moment from 'moment';
import axios from 'axios';
import { plans } from './asset/plans';

class travelForm extends Component {

  constructor(props) {
    super(props)
    this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this) 
    this.state = {
      page: 1,
      rate:'',
      customer_number:'',
      issue_response:'',
    }
  }  
  nextPage() {
    this.setState({ page: this.state.page + 1 })
  }
  previousPage() {
    this.setState({ page: this.state.page - 1 })
  }
  getQuote=(values)=>{ 
    var travelToken='T44p5E5kWzRAK3T2pbTaqiM9G7hmnsymtBtuDW2PWXifO7GzhrjuomRPMKx/9xYHkVM0lw7VYr4yZor/AyFKkvpSQzcv8vvlIyYVCE1yy44kYsWgEB0vgCtUqbG3NdZchXorckgEpopxll5iWq1Sx22X6lqBc725RrGjAsy+9eTQCE+1FLWAFzFcv17hdsk9czuXi9azAdd+gx6eY3Dq5PhfjA21pwEiaqeG8DV8EFmqt+6lxKf/fuvzqZILi98g882sAQHRKd9OQpvqO9NoAQ2nQB12/PXPYKbm0/qCkloaUucv3BejhEe0m3eNSWy09Zc/yDr69gUSZRhYlbYnNIyouiTt1M9RaVNVLUFCZAZhWZcmcH+SKkTAGF9ntacvIkscajZL5XnMZE/RrGPt4bwMSwUnu3tAyr4vM25PtTILOKlBvKouGrlS/kOHlnC4Pg4xLGi7892Vy8uMC7Ou6f18c0grvB8uXbAmnvpCSOrhJkGdLzHpQ3RG3mWPkYe+WB8tr5UrB44ZoqljwzYnjIM6GPxWhvO4RMhk2Fb/x7YwZ8TrPAQjPvYCzlB3xdoJsPLbMpgi5Mfmm0OKKOFlMiCafIlfrtVo1S08FIo8YrNQMjPQ+aQuHvlWG3jKSE5LWqf3/xYW9RQ8D6vhdzJ4cDAFEo5TyvmJJ5KBuvYAOGF9yI+WDHPNl+XVc7CUenCxBZHLnv9JOmdHS4wYe9ohE96T5lv+d+ogncvNWnZ5WKbBL6d2b532kJBtxc+V7xLcPQMUG2xAXa6ZQttgWU+OWwjpxuCysIutH8HW6XTP2Y5kLGnOlTRJn2ru4fvMLU/6qKWLrbneAPZeb//NH9MpcrV/as/pPm2UnbhSIso1qySyEdJLRovexbqYntysXT/yTyNaNU89I2CQaopdT0IPD6sip800gYJ02JiDEZWhNXD1K11Q5L2x1nYqQQeDMEnOngq7tOddfEz4y/tURqDA2g==';
    var url = 'https://travelapihk.solartis.net/DroolsV4_2/DroolsService/FireEventV2';
    var headers={         
                    "Token":travelToken,
                    "Content-Type": 'application/json',
                    "EventName": 'InvokeRatingV2',
                    "Access-Control-Allow-Origin": "*",
                    "withCredentials": true,
                };
   
    const go =  (values,callback)=>{ 
      const getPlanByCode=code=> {
        return plans.filter(
            function(plan){return plan.code === code}
        );
      }
      var data={
            "ServiceRequestDetail": {
              "ServiceRequestVersion": "1.0",
              "ServiceResponseVersion": "1.0",
              "OwnerId": "15",
              "ResponseType": "JSON",
              "RegionCode": "US",
              "Token": "T44p5E5kWzRAK3T2pbTaqiM9G7hmnsymtBtuDW2PWXifO7GzhrjuomRPMKx/9xYHkVM0lw7VYr4yZor/AyFKkvpSQzcv8vvlIyYVCE1yy44kYsWgEB0vgCtUqbG3NdZchXorckgEpopxll5iWq1Sx22X6lqBc725RrGjAsy+9eTQCE+1FLWAFzFcv17hdsk9czuXi9azAdd+gx6eY3Dq5PhfjA21pwEiaqeG8DV8EFmqt+6lxKf/fuvzqZILi98g882sAQHRKd9OQpvqO9NoAQ2nQB12/PXPYKbm0/qCkloaUucv3BejhEe0m3eNSWy09Zc/yDr69gUSZRhYlbYnNIyouiTt1M9RaVNVLUFCZAZhWZcmcH+SKkTAGF9ntacvIkscajZL5XnMZE/RrGPt4bwMSwUnu3tAyr4vM25PtTILOKlBvKouGrlS/kOHlnC4Pg4xLGi7892Vy8uMC7Ou6f18c0grvB8uXbAmnvpCSOrhJkGdLzHpQ3RG3mWPkYe+WB8tr5UrB44ZoqljwzYnjIM6GPxWhvO4RMhk2Fb/x7YwZ8TrPAQjPvYCzlB3xdoJsPLbMpgi5Mfmm0OKKOFlMiCafIlfrtVo1S08FIo8YrNQMjPQ+aQuHvlWG3jKSE5LWqf3/xYW9RQ8D6vhdzJ4cDAFEo5TyvmJJ5KBuvYAOGF9yI+WDHPNl+XVc7CUenCxBZHLnv9JOmdHS4wYe9ohE96T5lv+d+ogncvNWnZ5WKbBL6d2b532kJBtxc+V7xLcPQMUG2xAXa6ZQttgWU+OWwjpxuCysIutH8HW6XTP2Y5kLGnOlTRJn2ru4fvMLU/6qKWLrbneAPZeb//NH9MpcrV/as/pPm2UnbhSIso1qySyEdJLRovexbqYntysXT/yTyNaNU89I2CQaopdT0IPD6sip800gYJ02JiDEZWhNXD1K11Q5L2x1nYqQQeDMEnOngq7tOddfEz4y/tURqDA2g==",
              "UserName": "travelagent",
              "LanguageCode": "en"
            },
            "QuoteInformation": {
              "ProductID": "619",
              "ProductVerID": "706",
              "ProductNumber": "ILT",
              "ProductVerNumber": "1.0",
              "ProducerCode": "86201",
              "OwnerId": "15",
              "PlanName": getPlanByCode(values.planCode)[0].name,
              "PlanCode": values.planCode,
              "DepartureDate": values.departure?moment(values.departure).format("MM/DD/YYYY"):moment().format("MM/DD/YYYY"),
              "ReturnDate": values.arrival?moment(values.arrival).format("MM/DD/YYYY"):moment().format("MM/DD/YYYY"),
              "DepositDate": values.depositDate?moment(values.depositDate).format("MM/DD/YYYY"):moment().format("MM/DD/YYYY"),
              "DestinationCountry": values.destination?values.destination:"Singapore",
              "PolicyEffectiveDate": moment(values.effectiveDate).format("MM/YYYY/DD"),
              "RentalStartDate": moment(values.rentalStart).format("MM/DD/YYYY"),
              "RentalEndDate": moment(values.rentalEnd).format("MM/DD/YYYY"),
              "RentalLimit": "35000",
              "NumberOfRentalCars": "1",
              "TripCancellationCoverage":values.tripCancellationCoverage,
              "StateCode": values.state,
              "QuoteType": "New Business",
              "EventName": "InvokeRatingV2",
              "TravelerList": values.members.length>0?(values.members.map(function(a){
                a.TravelerDOB = moment(a.TravelerDOB).format("MM/DD/YYYY")
                return a;
                })):[
                ]
            }
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
   go(values,response =>{
      if(response!==undefined){
        //alert(JSON.stringify(response.data))
        this.setState({ rate: response.data })
        this.nextPage();
      }
    })
  }
  createCustomer=()=>{ 
    var travelToken='T44p5E5kWzRAK3T2pbTaqiM9G7hmnsymtBtuDW2PWXifO7GzhrjuomRPMKx/9xYHkVM0lw7VYr4yZor/AyFKkvpSQzcv8vvlIyYVCE1yy44kYsWgEB0vgCtUqbG3NdZchXorckgEpopxll5iWq1Sx22X6lqBc725RrGjAsy+9eTQCE+1FLWAFzFcv17hdsk9czuXi9azAdd+gx6eY3Dq5PhfjA21pwEiaqeG8DV8EFmqt+6lxKf/fuvzqZILi98g882sAQHRKd9OQpvqO9NoAQ2nQB12/PXPYKbm0/qCkloaUucv3BejhEe0m3eNSWy09Zc/yDr69gUSZRhYlbYnNIyouiTt1M9RaVNVLUFCZAZhWZcmcH+SKkTAGF9ntacvIkscajZL5XnMZE/RrGPt4bwMSwUnu3tAyr4vM25PtTILOKlBvKouGrlS/kOHlnC4Pg4xLGi7892Vy8uMC7Ou6f18c0grvB8uXbAmnvpCSOrhJkGdLzHpQ3RG3mWPkYe+WB8tr5UrB44ZoqljwzYnjIM6GPxWhvO4RMhk2Fb/x7YwZ8TrPAQjPvYCzlB3xdoJsPLbMpgi5Mfmm0OKKOFlMiCafIlfrtVo1S08FIo8YrNQMjPQ+aQuHvlWG3jKSE5LWqf3/xYW9RQ8D6vhdzJ4cDAFEo5TyvmJJ5KBuvYAOGF9yI+WDHPNl+XVc7CUenCxBZHLnv9JOmdHS4wYe9ohE96T5lv+d+ogncvNWnZ5WKbBL6d2b532kJBtxc+V7xLcPQMUG2xAXa6ZQttgWU+OWwjpxuCysIutH8HW6XTP2Y5kLGnOlTRJn2ru4fvMLU/6qKWLrbneAPZeb//NH9MpcrV/as/pPm2UnbhSIso1qySyEdJLRovexbqYntysXT/yTyNaNU89I2CQaopdT0IPD6sip800gYJ02JiDEZWhNXD1K11Q5L2x1nYqQQeDMEnOngq7tOddfEz4y/tURqDA2g==';
    var url = 'https://travelapihk.solartis.net/DroolsV4_2/DroolsService/FireEventV2';
    var headers={         
                    "Token":travelToken,
                    "Content-Type": 'application/json',
                    "EventName": 'CreateCustomer',
                    "Access-Control-Allow-Origin": "*",
                    "withCredentials": true
                };
    const go =  (callback)=>{ 
      var data={
        "ServiceRequestDetail": {
          "ServiceRequestVersion": "1.0",
          "ServiceResponseVersion": "1.0",
          "OwnerId": "15",
          "ResponseType": "JSON",
          "RegionCode": "US",
          "Token": travelToken,
          "UserName": "travelagent",
          "LanguageCode": "en"
        },
        "CustomerInformation": {
          "ProductID": "619",
          "ProductVerID": "706",
          "ProductNumber": "ILT",
          "ProductVerNumber": "1.0",
          "ProducerCode": "86201",
          "OwnerId": "15",
          "PlanType": "Single Trip",
          "QuoteType": "New Business",
          "EventName": "CreateCustomer",
          "TravelerList": []
        }
      }
      
      var createCustomer={
        url:url,
        headers:headers,
        data:data
      }
    
      axios.post('/createCustomer', createCustomer)
      .then(result => {
        callback(result);
      }).catch(err =>{
        callback(err);
      })
    }
   go(response =>{
      if(response!==undefined){
        //alert(JSON.stringify(response.data.CustomerInformation.CustomerReferenceNumber))
        this.setState({ customer_number: response.data.CustomerInformation.CustomerReferenceNumber})
        this.nextPage();
      }
    })
  }
  Issue=(values)=>{
    var travelToken='T44p5E5kWzRAK3T2pbTaqiM9G7hmnsymtBtuDW2PWXifO7GzhrjuomRPMKx/9xYHkVM0lw7VYr4yZor/AyFKkvpSQzcv8vvlIyYVCE1yy44kYsWgEB0vgCtUqbG3NdZchXorckgEpopxll5iWq1Sx22X6lqBc725RrGjAsy+9eTQCE+1FLWAFzFcv17hdsk9czuXi9azAdd+gx6eY3Dq5PhfjA21pwEiaqeG8DV8EFmqt+6lxKf/fuvzqZILi98g882sAQHRKd9OQpvqO9NoAQ2nQB12/PXPYKbm0/qCkloaUucv3BejhEe0m3eNSWy09Zc/yDr69gUSZRhYlbYnNIyouiTt1M9RaVNVLUFCZAZhWZcmcH+SKkTAGF9ntacvIkscajZL5XnMZE/RrGPt4bwMSwUnu3tAyr4vM25PtTILOKlBvKouGrlS/kOHlnC4Pg4xLGi7892Vy8uMC7Ou6f18c0grvB8uXbAmnvpCSOrhJkGdLzHpQ3RG3mWPkYe+WB8tr5UrB44ZoqljwzYnjIM6GPxWhvO4RMhk2Fb/x7YwZ8TrPAQjPvYCzlB3xdoJsPLbMpgi5Mfmm0OKKOFlMiCafIlfrtVo1S08FIo8YrNQMjPQ+aQuHvlWG3jKSE5LWqf3/xYW9RQ8D6vhdzJ4cDAFEo5TyvmJJ5KBuvYAOGF9yI+WDHPNl+XVc7CUenCxBZHLnv9JOmdHS4wYe9ohE96T5lv+d+ogncvNWnZ5WKbBL6d2b532kJBtxc+V7xLcPQMUG2xAXa6ZQttgWU+OWwjpxuCysIutH8HW6XTP2Y5kLGnOlTRJn2ru4fvMLU/6qKWLrbneAPZeb//NH9MpcrV/as/pPm2UnbhSIso1qySyEdJLRovexbqYntysXT/yTyNaNU89I2CQaopdT0IPD6sip800gYJ02JiDEZWhNXD1K11Q5L2x1nYqQQeDMEnOngq7tOddfEz4y/tURqDA2g==';
    var url = 'https://travelapihk.solartis.net/DroolsV4_2/DroolsService/FireEventV2';
    var headers={         
                    "Token":travelToken,
                    "Content-Type": 'application/json',
                    "EventName": 'Pay_Issue',
                    "Access-Control-Allow-Origin": "*",
                    "withCredentials": true
                };
    const go =  (values,callback)=>{ 
      var data={
          "ServiceRequestDetail": {
            "ServiceRequestVersion": "1.0",
            "ServiceResponseVersion": "1.0",
            "OwnerId": "15",
            "ResponseType": "JSON",
            "RegionCode": "US",
            "Token": travelToken,
            "UserName": "travelagent",
            "LanguageCode": "en"
          },
          "PolicyInformation": {
            "ProductID": "619",
            "ProductVerID": "706",
            "ProductNumber": "ILT",
            "ProductVerNumber": "1.0",
            "ProducerCode": "86201",
            "OwnerId": "15",
            "CustomerNumber": this.state.customer_number,
            "RoleID": "5",
            "RoleName": "Agent",
            "RoleType": "User",
            "EventName": "Pay_Issue",
            "CardNumber": values.CardNumber.replace(/[_-]/g, ""),
            "CVV": values.CVV,
            "ExpiryMonth": moment(values.ExpiryDate).month(),
            "ExpiryYear": moment(values.ExpiryDate).year()
          }
        }
        
        //alert(JSON.stringify(data));
      var payIssue={
        url:url,
        headers:headers,
        data:data
      }    
      axios.post('/payIssue', payIssue)
      .then(result => {
        callback(result);
      }).catch(err =>{
        callback(err);
      })
    }
   go(values,response =>{
      if(response!==undefined){      
        //alert(JSON.stringify(response.data))
        this.setState({ issue_response: response.data.RequestStatus})
        this.nextPage();
      }
    })

  }
  
  render() {   
    const { page } = this.state;
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>  
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <h2> Travel Insurance </h2> 
          </div>
          <div>
            {page === 1 && 
            <TravelFormFirstPage
              onSubmit={this.getQuote} />} 
            {page === 2 && this.state.rate && (
            <TravelFormSecondPage
              previousPage={this.previousPage}
              onSubmit={this.createCustomer}
              rate={this.state.rate}
            />
            )}
            {page === 3 && this.state.customer_number && (
            <TravelFormThirdPage
              onSubmit={this.Issue}
            />
            )}
            {page === 4 && this.state.issue_response && (
            <TravelFormFourthPage
             status={this.state.issue_response}
            />
            )}
          </div>
      </MuiThemeProvider>
    )
  }
}

travelForm.propTypes = {
 // onSubmit: PropTypes.func.isRequired
}

export default travelForm
