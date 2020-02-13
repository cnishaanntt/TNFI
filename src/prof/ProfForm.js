import React, { Component } from 'react';
import ProfFormFirstPage from './ProfFormFirstPage';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


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

  getQuote=(values)=>{ 
    return values
  }


  render() {
    const { page } = this.state
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>  
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <h2> Industry details </h2>
      </div>
        <div>
          {page === 1 && 
            <ProfFormFirstPage onSubmit={this.getQuote}               
            />}        
        </div>
      </MuiThemeProvider>
    )
  }
}

profForm.propTypes = {
 
}

export default profForm