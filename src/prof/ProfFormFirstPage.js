import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, reduxForm, formValueSelector, change } from 'redux-form';
import {AutoComplete as MUIAutoComplete } from 'material-ui';
import policyType from './asset/policyType';
import plans from './asset/plans';
import states_ASID from './asset/states_ASID';
import states_MPL from './asset/states_MPL';
import states_PL from './asset/states_PL';
import zipcodes from 'zipcodes';
import {
  TextField,
  AutoComplete
} from 'redux-form-material-ui';



var stateValue;
const required = value => (value == null ? 'Required' : undefined);
const zipcode = value => (/^(?!0{3})[0-9]{5,5}$/.test(value)? undefined : 'Please enter a five digit zipcode like 00979')
const assignState = value => {
  stateValue = value;
};
const zipstate = value => (stateValue===zipcodes.lookup(value).state?undefined: 'Zipcode is in '+zipcodes.lookup(value).state)

class ProfFormFirstPage extends Component { 

  render() {
    const {  handleSubmit, pristine, submitting, programValue, stateCode, policyValue} = this.props;
    return (
      <form  onSubmit={handleSubmit}>       
        <div>
          <Field
            name="programName"
            component={AutoComplete}
            floatingLabelText="Look into Coverage programs?"
            openOnFocus
            filter={MUIAutoComplete.fuzzyFilter}
            dataSourceConfig={{text: 'name', value: 'code'}}
            dataSource= {plans.plans}
            validate={required}
          />
        </div>   
        <div>
          <Field
            name="policyType"
            component={AutoComplete}
            floatingLabelText="Look into Policy code?"
            openOnFocus
            filter={MUIAutoComplete.fuzzyFilter}
            dataSourceConfig={{text: 'name', value: 'name'}}
            dataSource= {policyType.policyType}
            validate={required}
          />
        </div>
        { programValue==="ASID" && policyValue && <div>
          <Field
            name="state"
            component={AutoComplete}
            floatingLabelText="Where do you work?"
            openOnFocus
            filter={MUIAutoComplete.fuzzyFilter}
            dataSourceConfig={{text: 'name', value: 'abbreviation'}}
            dataSource= {states_ASID.states_ASID}
            validate={[required, assignState]}
          />
        </div>
        }
        { programValue==="MPL" &&  policyValue && <div>
          <Field
            name="state"
            component={AutoComplete}
            floatingLabelText="Where do you work?"
            openOnFocus
            filter={MUIAutoComplete.fuzzyFilter}
            dataSourceConfig={{text: 'name', value: 'abbreviation'}}
            dataSource= {states_MPL.states_MPL}
            validate={[required,assignState]}
          />
        </div>
        }
        { programValue==="PL" && policyValue &&  <div>
          <Field
            name="state"
            component={AutoComplete}
            floatingLabelText="Where do you work?"
            openOnFocus

            filter={MUIAutoComplete.fuzzyFilter}
            dataSourceConfig={{text: 'name', value: 'abbreviation'}}
            dataSource= {states_PL.states_PL}
            validate={[required, assignState]}
          />
        </div>
        }
        { stateCode && <div>
          <Field
            name="zipCode"
            component={TextField}
            hintText="In what zip code do you practice?"
            floatingLabelText="Zip Code"
            validate={[required, zipcode, zipstate]}
          />
        </div>
        }
        <div>
          <button type="submit" className="next" disabled={pristine || submitting}>Next</button>
        </div>
      </form>
    );
  }
}

ProfFormFirstPage = reduxForm({
  form: 'prof',
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true
})(ProfFormFirstPage);


const selector = formValueSelector('prof') // <-- same as form name
ProfFormFirstPage = connect(
  state => {
    // can select values individually
    const programValue = selector(state, 'programName')
    const policyValue = selector(state, 'policyType')
    const stateCode = selector(state, 'state')
    const numPizzas = selector(state, 'pizzas')
    const whip = selector(state, 'whip')
    // or together as a group
    return {      
      policyValue,
      stateCode,
      programValue,
      numPizzas,
      whip
    }
  },
  dispatch =>{
    return bindActionCreators({change}, dispatch);
  }
)(ProfFormFirstPage)

export default ProfFormFirstPage;


