import React, { Component } from 'react';
import { Field,  reduxForm } from 'redux-form';
import {
  DatePicker, 
  TextField  
} from 'redux-form-material-ui';


// validation functions
const required = value => (value == null ? 'Required' : undefined);
const cvv = value => (value>99&&value<10000?undefined:'Please input your CVV')
const card = value => (value.replace(/[_-]/g, "")>999999999999999?undefined:"Kindly input your card number")

//normalization
const normalizeCVV = value =>{
  if (value.length <= 4) {
    return value
  }
}
const normalizeCard = value => {
  if (!value) {
    return value
  }

  const onlyNums = value.replace(/[^\d]/g, '')
  if (onlyNums.length <= 4) {
    return onlyNums
  }
  if (onlyNums.length <= 8) {
    return `${onlyNums.slice(0, 4)}-${onlyNums.slice(4)}`
  }
  return `${onlyNums.slice(0, 4)}-${onlyNums.slice(4, 8)}-${onlyNums.slice(
    8,
    12
  )}-${onlyNums.slice(12, 16)}-${onlyNums.slice(16, 19)}`
}



class TravelFormThirdPage extends Component {
  render() {
    const {  handleSubmit, pristine, submitting} = this.props;
    return (
      <form  onSubmit={handleSubmit}>
         <div>
          <b>Card Information</b>
        </div>
        <div>
          <Field
            name="CardNumber"
            component={TextField}
            hintText="CardNumber"
            floatingLabelText="CardNumber"
            validate={[required,card ]}
            normalize={normalizeCard}
          />
        </div>  
        <div>
          <Field
            name="CVV"
            component={TextField}
            hintText="CVV"
            floatingLabelText="CVV"
            validate={[required, cvv]}
            normalize={normalizeCVV}
          />
        </div> 
        <div>
          <Field
            name="ExpiryDate"
            component={DatePicker}
            format={null}
            hintText="Card Expiry Date"
            floatingLabelText="Card Expiry Date"
            validate={[required]}
            minDate={new Date()}  
          >
          </Field>
        </div>
        <div>
          <button type="submit" disabled={pristine || submitting}>
            Pay
          </button>
        </div>
      </form>
    );
  }
}

TravelFormThirdPage = reduxForm({
  form: 'travel',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(TravelFormThirdPage);


export default TravelFormThirdPage;


