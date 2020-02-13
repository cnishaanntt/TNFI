import React, { Component } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TravelFormFirstPage from './TravelFormFirstPage';



class travelForm extends Component {

  constructor(props) {
    super(props)
    this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this) 
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
  getQuote=(values)=>{ 
    return values
  }
 
  
  render() {   
    const { page } = this.state;
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>  
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <h2> Tree Grower details </h2> 
          </div>
          <div>
            {page === 1 && 
            <TravelFormFirstPage
              onSubmit={this.getQuote} />} 
            
          </div>
      </MuiThemeProvider>
    )
  }
}

travelForm.propTypes = {
 // onSubmit: PropTypes.func.isRequired
}

export default travelForm
