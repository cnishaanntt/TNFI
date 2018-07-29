import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field,  formValueSelector, reduxForm } from 'redux-form';
import {AutoComplete as MUIAutoComplete , MenuItem} from 'material-ui';
//import ProviderForm from './ProfFormProvider';
import {
  AutoComplete,
  DatePicker,
  SelectField
} from 'redux-form-material-ui';
import PLLofI_PL from './asset/PLLofI_PL';
import PLLofI_MPL from './asset/PLLofI_MPL';
import PLLofI_PL_LA from './asset/PLLofI_PL_LA';
import PLLofI_PL_IN from './asset/PLLofI_PL_IN';
import PLLofI_PL_SC from './asset/PLLofI_PL_SC';
import PLLofI_PL_CT from './asset/PLLofI_PL_CT';




// validation functions
const required = value => (value == null ? 'Required' : undefined);

class ProfFormThirdPage extends Component {  
  render() {
    const {  handleSubmit, pristine, submitting,  programValue, stateCode} = this.props;
  
    return (
      <form  onSubmit={handleSubmit}>

        {(stateCode!=='CT' && stateCode!=='IN' && stateCode!=='LA' && stateCode!=='SC' && stateCode!=='VA' && programValue==="PL") &&
        <div>
          <Field
            name="PLLofI"
            component={AutoComplete}
            floatingLabelText="Professional Insurance Liability"
            openOnFocus
            filter={MUIAutoComplete.fuzzyFilter}
            dataSourceConfig={{text: 'PLLofI', value: 'PLLofI'}}
            dataSource={PLLofI_PL.PLLofI_PL}
            validate={[required]}
          />
        </div>        
        }
        {(programValue==="MPL") &&
        <div>
          <Field
            name="PLLofI"
            component={AutoComplete}
            floatingLabelText="Professional Insurance Liability"
            openOnFocus
            filter={MUIAutoComplete.fuzzyFilter}
            dataSourceConfig={{text: 'PLLofI', value: 'PLLofI'}}
            dataSource={PLLofI_MPL.PLLofI_MPL}
            validate={required}
          />
        </div>        
        }
        {(programValue==="ASID") &&
        <div>
          <Field
            name="PLLofI"
            component={SelectField}
            hintText="Professional Insurance Liability"
            floatingLabelText="Professional Insurance Liability"
            validate={required}
          >
            <MenuItem value="100000" primaryText="100000" />
            <MenuItem value="250000" primaryText="250000" />
            <MenuItem value="500000" primaryText="500000" />
            <MenuItem value="1000000" primaryText="1000000" />
            <MenuItem value="2000000" primaryText="2000000" />
            <MenuItem value="3000000" primaryText="3000000" />
            <MenuItem value="4000000" primaryText="4000000" />
            <MenuItem value="5000000" primaryText="5000000" />
            <MenuItem value="6000000" primaryText="6000000" />
            <MenuItem value="7000000" primaryText="7000000" />
            <MenuItem value="8000000" primaryText="8000000" />
            <MenuItem value="9000000" primaryText="9000000" />
            <MenuItem value="10000000" primaryText="10000000" />
          </Field>
        
        </div>        
        }
        {(stateCode==='CT' && programValue==="PL") &&
        <div>
          <Field
            name="PLLofI"
            component={AutoComplete}
            floatingLabelText="Professional Insurance Liability"
            openOnFocus
            filter={MUIAutoComplete.fuzzyFilter}
            dataSourceConfig={{text: 'PLLofI', value: 'PLLofI'}}
            dataSource={PLLofI_PL_CT.PLLofI_PL_CT}
            validate={required}
          />
        </div>        
        }
        {( stateCode==='IN' && programValue==="PL") &&
        <div>
          <Field
            name="PLLofI"
            component={AutoComplete}
            floatingLabelText="Professional Insurance Liability"
            openOnFocus
            filter={MUIAutoComplete.fuzzyFilter}
            dataSourceConfig={{text: 'PLLofI', value: 'PLLofI'}}
            dataSource={PLLofI_PL_IN.PLLofI_PL_IN}
            validate={required}
          />
        </div>        
        }
        {( stateCode==='LA' && programValue==="PL") &&
        <div>
          <Field
            name="PLLofI"
            component={AutoComplete}
            floatingLabelText="Professional Insurance Liability"
            openOnFocus
            filter={MUIAutoComplete.fuzzyFilter}
            dataSourceConfig={{text: 'PLLofI', value: 'PLLofI'}}
            dataSource={PLLofI_PL_LA.PLLofI_PL_LA}
            validate={required}
          />
        </div>        
        }
        {( stateCode==='SC' && programValue==="PL") &&
        <div>
          <Field
            name="PLLofI"
            component={AutoComplete}
            floatingLabelText="Professional Insurance Liability"
            openOnFocus
            filter={MUIAutoComplete.fuzzyFilter}
            dataSourceConfig={{text: 'PLLofI', value: 'PLLofI'}}
            dataSource={PLLofI_PL_SC.PLLofI_PL_SC}
            validate={required}
          />
        </div>        
        }
        {( stateCode==='VA' && programValue==="PL") &&
        <div>
          <Field
            name="PLLofI"
            component={SelectField}
            hintText="Professional Insurance Liability"
            floatingLabelText="Professional Insurance Liability"
            validate={required}
          >
            <MenuItem value="$2.3M/$6.9M" primaryText="$2.3M/$6.9M" />
            <MenuItem value="$2.35M/$7.05M" primaryText="$2.35M/$7.05M" />
            <MenuItem value="$2.4M/$7.2M" primaryText="$2.4M/$7.2M" />
            <MenuItem value="$2.45M/$7.35M" primaryText="$2.45M/$7.35M" />
            <MenuItem value="$2.5M/$7.5M" primaryText="$2.5M/$7.5M" />
            <MenuItem value="$2.55M/$7.65M" primaryText="$2.55M/$7.65M" />
            <MenuItem value="$2.6M/$7.8M" primaryText="$2.6M/$7.8M" />
            <MenuItem value="$2.65M/$7.95M" primaryText="$2.65M/$7.95M" />
            <MenuItem value="$2.7M/$8.1M" primaryText="$2.7M/$8.1M" />
            <MenuItem value="$2.75M/$8.25M" primaryText="$2.75M/$8.25M" />
            <MenuItem value="$2.8M/$8.4M" primaryText="$2.8M/$8.4M" />
            <MenuItem value="$2.85M/$8.55M" primaryText="$2.85M/$8.55M" />
            <MenuItem value="$2.9M/$8.7M" primaryText="$2.9M/$8.7M" />
            <MenuItem value="$2.95M/$8.85M" primaryText="$2.95M/$8.85M" />
            <MenuItem value="$3M/$9M" primaryText="$3M/$9M" />
          </Field>
        </div>        
        }
        <div>
          <Field
            name="applicableDate"
            component={DatePicker}
            format={null}
            hintText="Policy applicable date"
            floatingLabelText="Policy applicable date"
            validate={required}
          />
        </div>
        <div>
          <Field
            name="effectiveDate"
            component={DatePicker}
            format={null}
            hintText="Policy effective date"
            floatingLabelText="Policy effective date"
            validate={required}
          />
        </div>
        <div>
        <button type="submit" className="next" disabled={pristine || submitting}>
          Next
        </button>
      </div>
      </form>
    );
  }
}

ProfFormThirdPage = reduxForm({
  form: 'prof',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(ProfFormThirdPage);


const selector = formValueSelector('prof') // <-- same as form name
ProfFormThirdPage = connect(
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
)(ProfFormThirdPage)

export default ProfFormThirdPage;


