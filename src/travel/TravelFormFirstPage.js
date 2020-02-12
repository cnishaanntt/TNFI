import React, { Component } from 'react';
import { Field, FieldArray, reduxForm, formValueSelector } from 'redux-form';
import {AutoComplete as MUIAutoComplete, List, ListItem} from 'material-ui';
import {states} from './asset/states';
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
//const priceCheck = value => (isNaN(value)?((value.charAt(0)==='$')?((isNaN(value.substr(1)) || value.substr(1).charAt(0)==='0' || value.substr(1).charAt(0)==='' || value.substr(1).charAt(0)===0)?'* travel expenditure in numbers as $2000':undefined):'Please add your travel expenditure'): undefined)
//const text = value => (/^[a-zA-Z]+$/.test(value)? undefined :'Please fill with text')

const renderMembers = ({fields, meta: {error, submitFailed}}) => (
  <List>
    <div>
      <div> <h5 style={{color:'green'}}>Tree details</h5></div>
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
            name={`${x}.TreeAge`}
            component={DatePicker}
            format={null}
            hintText="Planted on "
            floatingLabelText="Planted on"
            validate={[required]}
            maxDate={new Date()}  
          >
          </Field>
        </div>
        <div>
          <Field
            name={`${x}.Acreage`}
            component={TextField}
            hintText="Tree Cover"
            floatingLabelText="Acreage"
            validate={[required]}>
          </Field> 
        </div>
         <div>
          <Field
            name={`${x}.TreeNumbers`}
            component={TextField}
            hintText="Tree Numbers"
            floatingLabelText="Total number of trees"
            validate={[required]}>
          </Field> 
        </div>
        <div>
          <Field
            name={`${x}.Location`}
            component={TextField}
            hintText="Lat, Long"
            floatingLabelText="Location"
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

class TravelFormFirstPage extends Component {
  render() {
    const {  handleSubmit, pristine, submitting } = this.props;
    return (
      <form  onSubmit={handleSubmit}> 
       <div>
          <Field
            name="name"
            component={TextField}
            hintText="Name"
            floatingLabelText="Tree Grower's Name"
            validate={[required]}
          />
        </div>
        <div>
          <Field
            name="address"
            component={TextField}
            hintText="Residence"
            floatingLabelText="Where are you from?"
            validate={[required]}
          />
        </div> 
        <div>
          <Field
            name="state"
            component={AutoComplete}
            floatingLabelText="Range"
            openOnFocus
            filter={MUIAutoComplete.fuzzyFilter}
            dataSourceConfig={{text: 'name', value: 'abbreviation'}}
            dataSource= {states}
            validate={[required]}
          />
        </div>      
        
        {
        <div>
          <FieldArray 
            name="members" 
            component={renderMembers}
            validate={[required]}
              />
        </div> }
        <div>
          <button type="submit" disabled={pristine || submitting}>            
              Submit
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

//const selector = formValueSelector('travel') // <-- same as form name  


export default TravelFormFirstPage;


