import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import {AutoComplete as MUIAutoComplete , MenuItem} from 'material-ui';
import { fullWhite } from '../../node_modules/material-ui/styles/colors';
import deductible from './asset/deductible';
import expenses from './asset/expenses';
import retroDate from './asset/retroDate';
import sharedOrSeparateLimit from './asset/sharedOrSeparateLimit';
import WLLofI_PL from './asset/WLLofI_PL';

import {
  TextField,
  AutoComplete,
  SelectField,
  Toggle
} from 'redux-form-material-ui';

const divStyle = {
  background: fullWhite,
  borderRadius: 0,
  borderWidth: 0,
  borderColor: '#ffffff',
};



// validation functions
const required = value => (value == null ? 'Required' : undefined);
const revenueCheck = value => (value>0 && value<100000000 ?  undefined : 'Revenue should be between 0 and 100,000,000');


class ProfFormSecondPage extends Component {
  render() {
    const {  handleSubmit, programValue, pristine, submitting} = this.props;
    return (
      <form  style={divStyle} onSubmit={handleSubmit}>
        {programValue==="PL" && 
        <div>
          <Field
            name="WLLofI_PL"
            component={AutoComplete}
            floatingLabelText="Workplace Insurance Liability"
            openOnFocus
            filter={MUIAutoComplete.fuzzyFilter}
            dataSourceConfig={{text: 'WLLofI_PL', value: 'WLLofI_PL'}}
            dataSource={WLLofI_PL.WLLofI_PL}
            validate={required}
          />
        </div>
        }
        <div></div>
        { programValue==="PL" && 
        <div>
          <Field
            name="WorkplaceLiabilityInsurance"
            component={Toggle}
            label="Workplace Liability Insurance"
            labelPosition="right"
          />
        </div>
        }
        <div></div>
        { programValue==="PL" && 
        <div>
          <Field
            name="CorporationOrPartnershipCoverage"
            component={Toggle}
            label="Corporation or Partnership Coverage"
            labelPosition="right"
          />
        </div>
        }
        { programValue==="PL" && 
        <div>
          <Field
            name="AdditionalInsuranceCoverage"
            component={Toggle}
            label="Additional Insurance Coverage"
            labelPosition="right"
          />
        </div>
        }
        {programValue==="PL" && 
        <div>
          <Field
            name="PLorWLCoverage"
            component={SelectField}
            hintText="PL or WL Coverage"
            floatingLabelText="PL or WL Coverage"
            validate={required}
          >
            <MenuItem value="Occurrence" primaryText="Occurrence" />
            <MenuItem value="Claims-Made" primaryText="Claims-Made" />
            <MenuItem value="PL Claims-Made and WL Occurrence" primaryText="PL Claims-Made and WL Occurrence" />
          </Field>
        </div>
        }
        {programValue==="PL" && 
        <div>
          <Field
            name="sharedOrSeparate"
            component={AutoComplete}
            floatingLabelText="Shared or Separate Limit"
            openOnFocus
            filter={MUIAutoComplete.fuzzyFilter}
            dataSourceConfig={{text: 'name', value: 'name'}}
            dataSource={sharedOrSeparateLimit.sharedOrSeparateLimit}
            validate={required}
          />
        </div>
        }
        {(programValue==="MPL" || programValue==="ASID")&& 
        <div>
          <Field
            name="DeductibleAmount"
            component={AutoComplete}
            floatingLabelText="Deductible Amount"
            openOnFocus
            filter={MUIAutoComplete.fuzzyFilter}
            dataSourceConfig={{text: 'amount', value: 'amount'}}
            dataSource={deductible.deductible}
            validate={required}
          />
        </div>
        }
        {programValue==="MPL" && 
        <div>
          <Field
            name="expenses"
            component={AutoComplete}
            floatingLabelText="Expenses Inside or Outside"
            openOnFocus
            filter={MUIAutoComplete.fuzzyFilter}
            dataSourceConfig={{text: 'name', value: 'name'}}
            dataSource={expenses.expenses}
            validate={required}
          />
        </div>
        }
        <div></div>
        { programValue==="MPL" && 
        <div>
          <Field
            name="WorkplaceLiabilityInsurance"
            component={Toggle}
            label="Workplace Liability Insurance"
            labelPosition="right"
          />
        </div>
        }
        <div></div>
        { programValue==="MPL" && 
        <div>
          <Field
            name="CorporationOrPartnershipCoverage"
            component={Toggle}
            label="Corporation or Partnership Coverage"
            labelPosition="right"
          />
        </div>
        }
        { programValue==="ASID" && 
        <div>
          <Field
            name="RetroDate"
            component={AutoComplete}
            floatingLabelText="Retro Date"
            openOnFocus
            filter={MUIAutoComplete.fuzzyFilter}
            dataSourceConfig={{text: 'name', value: 'name'}}
            dataSource={retroDate.retroDate}
            validate={required}
          />
        </div>
        }
        { programValue==="ASID" && 
          <div>
          <Field
            name="Revenue"
            component={TextField}
            hintText='Revenue'
            floatingLabelText='Revenue'
            validate={[required, revenueCheck]}
          />
        </div>
        }
        {programValue==="ASID" && 
        <div>
          <Field
            name="ResidentialOrCommercialBusinessModifier"
            component={SelectField}
            hintText="Residential or Commercial"
            floatingLabelText="Residential or Commercial"
            validate={required}
          >
            <MenuItem value="Residential with less than 10% commercial" primaryText="Residential with less than 10% commercial" />
            <MenuItem value="Residential with 10%-50% commercial" primaryText="Residential with 10%-50% commercial" />
            <MenuItem value="Residential with greater than 50% commercial" primaryText="Residential with greater than 50% commercial" />
          </Field>
        </div>
        }
        {programValue==="ASID" && 
        <div>
          <Field
            name="ProjectSizeModifier"
            component={SelectField}
            hintText="Project Size Modifier"
            floatingLabelText="Project Size Modifier"
            validate={required}
          >
            <MenuItem value="Largest Project less than or equal to $100k" primaryText="Largest Project less than or equal to $100k" />
            <MenuItem value="Largest Project exceeds $100k" primaryText="Largest Project exceeds $100k" />
            <MenuItem value="Largest Project exceeds $250k" primaryText="Largest Project exceeds $250k" />
            <MenuItem value="Largest Project exceeds $500k" primaryText="Largest Project exceeds $500k" />
          </Field>
        </div>
        }
        {programValue==="ASID" && 
        <div>
          <Field
            name="WrittenContractsModifier"
            component={SelectField}
            hintText="Written Contracts Modifier"
            floatingLabelText="Written Contracts Modifier"
            validate={required}
          >
            <MenuItem value="Contains Definition of Duties, Obligations, and Hold Harmless Agreement in Insured’s Favor" primaryText="Contains Definition of Duties, Obligations, and Hold Harmless Agreement in Insured’s Favor" />
            <MenuItem value="Contains Definition of Duties and Obligations, but No Hold- Harmless Agreement" primaryText="Contains Definition of Duties and Obligations, but No Hold- Harmless Agreement" />
            <MenuItem value="Hold-Harmless and Indemnity Clause in the Client’s Favor" primaryText="Hold-Harmless and Indemnity Clause in the Client’s Favor" />
            <MenuItem value="Contract Contains Guarantees and/or Express Warranties" primaryText="Contract Contains Guarantees and/or Express Warranties" />
          </Field>
        </div>
        }
        {programValue==="ASID" && 
        <div>
          <Field
            name="RiskManagementModifier" 
            component={SelectField}
            hintText="Risk Management Modifier"
            floatingLabelText="Risk Management Modifier"
            validate={required}
          >
            <MenuItem value="Use of Procedures Manual AND Training Program" primaryText="Use of Procedures Manual AND Training Program" />
            <MenuItem value="Use of Procedures Manual OR Training Program" primaryText="Use of Procedures Manual OR Training Program" />
            <MenuItem value="No Formal Procedures Manual or Training Program" primaryText="No Formal Procedures Manual or Training Program" />
          </Field>
        </div>
        }      
        <div>
        <button type="submit" className="next" disabled={pristine || submitting}>
          Next
        </button>
      </div>
      </form>
    );
  }
}

ProfFormSecondPage = reduxForm({
  form: 'prof',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(ProfFormSecondPage);



const selector = formValueSelector('prof') // <-- same as form name
ProfFormSecondPage = connect(
  state => {
    // can select values individually
    const programValue = selector(state, 'programName')
    const policyValue = selector(state, 'policyType')
    const stateCode = selector(state, 'state')
    // or together as a group
    return {      
      policyValue,
      stateCode,
      programValue
    }
  }
)(ProfFormSecondPage)
export default ProfFormSecondPage;


