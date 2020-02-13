import React, { Component } from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import {AutoComplete as MUIAutoComplete, List, ListItem} from 'material-ui';
import plans from './asset/plans';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import AddIcon from 'material-ui/svg-icons/content/add-circle';



//import buttons from './buttons';
import {
  AutoComplete,
  TextField  
} from 'redux-form-material-ui';

// validation functions
const required = value => (value == null ? 'Required' : undefined);

const renderElements = ({fields, meta: {error, submitFailed}}) => (
  <List>
    <div>
      <div> <h5 style={{color:'green'}}>Processing details</h5></div>
       {fields.map((x, index) => (
      <ListItem key={index}>      
      <div>
        <hr/>
        <div>
          <Field
            name={`${x}.Treetype`}
            component={TextField}
            hintText="Tree Variety"
            floatingLabelText="Tree Type"
            validate={[required]}>
          </Field> 
        </div>
        <div>
          <Field
            name={`${x}.girth`}
            component={TextField}
            hintText="Tree Girth"
            floatingLabelText="Tree Girth"
            validate={[required]}> 
          </Field>
        </div>
        <div>
          <Field
            name={`${x}.grade`}
            component={TextField}
            hintText="Quality"
            floatingLabelText="Grade"
            validate={[required]}>
          </Field> 
        </div>
        <div>
          <Field
            name={`${x}.cost`}
            component={TextField}
            hintText="Price/Cft"
            floatingLabelText="Price"
            validate={[required]}>
          </Field> 
        </div>
         <div>
          <Field
            name={`${x}.capacity`}
            component={TextField}
            hintText="Processing capacity"
            floatingLabelText="Capacity"
            validate={[required]}>
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
class ProfFormFirstPage extends Component { 

  render() {
    const {  handleSubmit, pristine, submitting} = this.props;
    return (
      <form  onSubmit={handleSubmit}> 
        <div>
          <Field
            name="UnitName"
            component={TextField}
            hintText="Industry Name"
            floatingLabelText=" Name"
            validate={[required]}
          />
        </div>
          
        <div>
          <Field
            name="phone"
            component={TextField}
            hintText="Phone Number"
            floatingLabelText=" Call us at"
            validate={[required]}
          />
        </div>
        <div>
          <Field
            name="address"
            component={TextField}
            hintText="Unit Address"
            floatingLabelText="We are from..."
            validate={[required]}
          />
        </div> 
        <div>
          <Field
            name="location"
            component={TextField}
            hintText="lat, lon"
            floatingLabelText="Map coordinates"
            validate={[required]}
          />
        </div> 
          
        <div>
          <Field
            name="Industrial Unit"
            component={AutoComplete}
            floatingLabelText="Industry Type"
            openOnFocus
            filter={MUIAutoComplete.fuzzyFilter}
            dataSourceConfig={{text: 'name', value: 'code'}}
            dataSource= {plans.plans}
            validate={required}
          />
        </div> 

        {
        <div>
          <FieldArray 
            name="elements" 
            component={renderElements}
            validate={[required]}
              />
        </div> } 
        <div>
          <button type="submit" disabled={pristine || submitting}>Submit</button>
        </div>
      </form>
    );
  }
}

ProfFormFirstPage = reduxForm({
  form: 'prof',
  initialValues:{
    "elements": [ {} ]
  },
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true
})(ProfFormFirstPage);




export default ProfFormFirstPage;


