import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, FieldArray, reduxForm, formValueSelector } from 'redux-form';
import {AutoComplete as MUIAutoComplete, List, ListItem} from 'material-ui';
import {states} from './asset/states';
import {plans} from './asset/plans';
import {tripCovers} from './asset/tripCovers';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import AddIcon from 'material-ui/svg-icons/content/add-circle';



//import buttons from './buttons';
import {
  AutoComplete,
  DatePicker, 
  TextField  
} from 'redux-form-material-ui';





// validation functions
const required = value => (value == null ? 'Required' : undefined);
const priceCheck = value => (isNaN(value)?((value.charAt(0)==='$')?((isNaN(value.substr(1)) || value.substr(1).charAt(0)==='0' || value.substr(1).charAt(0)==='' || value.substr(1).charAt(0)===0)?'* travel expenditure in numbers as $2000':undefined):'Please add your travel expenditure'): undefined)
const text = value => (/^[a-zA-Z]+$/.test(value)? undefined :'Please fill with text')

const renderMembers = ({fields, meta: {error, submitFailed}}) => (
  <List>
    <div>
      <div> <h5 style={{color:'green'}}>Member details</h5></div>
       {fields.map((x, index) => (
      <ListItem key={index}>      
      <div>
        <hr/>
        <div>
          <Field
            name={`${x}.TravelerDOB`}
            component={DatePicker}
            format={null}
            hintText="Birthday :)"
            floatingLabelText="Date of Birth"
            validate={[required]}
            maxDate={new Date()}  
          >
          </Field>
        </div>
        <div>
          <Field
            name={`${x}.TravelCost`}
            component={TextField}
            hintText="Travel Cost"
            floatingLabelText="Travel Cost"
            validate={[required, priceCheck]}>
          </Field> 
        </div>
          <div style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-end'}}>    
            <AddIcon onClick={() => fields.push({})} />  
            <DeleteIcon onClick={() => fields.remove(index)}/> 
          </div>
      </div>
    </ListItem>
    ))}
  </div>
</List>
)

class TravelFormFirstPage extends Component {
  render() {
    const {  handleSubmit, pristine, submitting, rentalStartDate, departureDate, planValue } = this.props;
    return (
      <form  onSubmit={handleSubmit}>  
        <div>
          <Field
            name="state"
            component={AutoComplete}
            floatingLabelText="Where are you from?"
            openOnFocus
            filter={MUIAutoComplete.fuzzyFilter}
            dataSourceConfig={{text: 'name', value: 'abbreviation'}}
            dataSource= {states}
            validate={[required]}
          />
        </div>      
        <div>
          <Field
            name="planCode"
            component={AutoComplete}
            floatingLabelText="Look into Coverage plans?"
            openOnFocus
            filter={MUIAutoComplete.fuzzyFilter}
            dataSourceConfig={{text: 'name', value: 'code'}}
            dataSource= {plans}
            validate={[required]}
          />
        </div>
        {(planValue === "11"  || planValue === "2"  || planValue === "3") && <div>
          <Field
            name="destination"
            component={TextField}
            hintText="Destination Country"
            floatingLabelText="Destination Country"
            validate={[required, text]}
          />
        </div>}
        {(planValue === "1"  || planValue === "2"  || planValue === "3") && <div>
          <Field
            name="departure"
            component={DatePicker}
            format={null}
            hintText="Day of travel"
            floatingLabelText="Day of travel"        
            validate={[required]}
            minDate={new Date()}            
          />
        </div>}
        {departureDate && (planValue === "1"  || planValue === "2"  || planValue === "3") && <div>
          <Field
            name="arrival"
            component={DatePicker}
            format={(value) => value === '' ? null : (typeof value === 'string') ?  new Date(value) : value}
            hintText="Return Date"
            floatingLabelText="Return Date"
            validate={required}
            minDate={departureDate}           
          />
        </div>}
        {departureDate && (planValue === "1"  || planValue === "2"  || planValue === "3") && <div>
          <Field
            name="depositDate"
            component={DatePicker}
            format={null}
            hintText="Deposit date"
            floatingLabelText="Deposit date"
            validate={[required]}
            maxDate={departureDate}
          />
        </div> }
        {(planValue === "4"  || planValue === "9"  || planValue === "10") && <div>
          <Field
            name="effectiveDate"
            component={DatePicker}
            format={null}
            hintText="Policy effective date"
            floatingLabelText="Policy effective date"
            validate={[required]}
          />
        </div> }
        {(planValue === "11") && <div>
          <Field
            name="rentalStart"
            component={DatePicker}
            format={null}
            hintText="Rental Start Date"
            floatingLabelText="Rental Start Date"        
            validate={[required]}
            minDate={new Date()}            
          />
        </div>}
        {(planValue === "11") && rentalStartDate && <div>
          <Field
            name="rentalEnd"
            component={DatePicker}            
            format={null}
            hintText="Rental End Date"
            floatingLabelText="Rental End Date"        
            validate={[required]}
            minDate={new Date()}            
          />
        </div>}
        {(planValue === "2"  || planValue === "3")  && 
        <div>
          <Field
            name="tripCancellationCoverage"
            component={AutoComplete}
            floatingLabelText="Your trip cancellation cover"
            openOnFocus
            filter={MUIAutoComplete.fuzzyFilter}
            dataSourceConfig={{text: 'name', value: 'name'}}
            dataSource= {tripCovers}
            validate={[required]}
          />
        </div> }
        {(planValue === "2"  || planValue === "3" || planValue === "1"  || planValue === "10")  && 
        <div>
          <FieldArray 
            name="members" 
            component={renderMembers}
            validate={[required]}
              />
        </div> }
        <div>
          <button type="submit" disabled={pristine || submitting}>            
              Get Quote
          </button>
          
        </div>
      </form>
    );
  }
}

TravelFormFirstPage = reduxForm({
  form: 'travel',
  initialValues:{
    "members": [ {} ]
  },
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true
})(TravelFormFirstPage);

const selector = formValueSelector('travel') // <-- same as form name
TravelFormFirstPage = connect(
  state => {   
    // can select values individually
    const planValue = selector(state, 'planCode')
    const rentalStartDate = selector(state, 'rentalStart')
    const departureDate = selector(state, 'departure')
    // or together as a group
    return {      
      rentalStartDate,
      departureDate,
      planValue
    }
  }
)(TravelFormFirstPage)

export default TravelFormFirstPage;


