import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, FieldArray, reduxForm, formValueSelector, change } from 'redux-form';
import {AutoComplete as MUIAutoComplete , MenuItem, List, ListItem } from 'material-ui';
import AddGroupIcon from 'material-ui/svg-icons/social/group-add';
import professionalAssociation from './asset/professionalAssociation';
import { bindActionCreators } from 'redux';

import {
  TextField,
  Slider,
  AutoComplete,
  Toggle,
  SelectField
} from 'redux-form-material-ui';

// validation functions
const alphabets = value => (/^[A-Za-z- ]+$/.test(value)? undefined :'Please use only alphabets');
const numeric = value  => (value>0  ?  undefined : 'Please input a numeric');
const required = value => (value == null ? 'Required' : undefined);
const alphanumeric = value => (/^[A-Za-z0-9- ]+$/.test(value)? undefined :'Please use alphanumeric');
const hours =value =>(value >0 && value<168? undefined : 'There are only 168 hours in a week' );


var providers=1;

const sendProviders = (numProviders) =>{
  providers=numProviders;
}


const more =(event, fields)=>{
  event.preventDefault();
  var i;
  if(fields.length<providers){
    for(i=fields.length; i<providers; i++){
      fields.push({});
    }
  }else if(providers<fields.length){   
    for(i=fields.length; i>providers; i--) {
      fields.pop();
    }
  }
}

const ICAA = ({fields, meta: {error, submitFailed}}) => (
  <List>
    <div>
      <div style={{display: 'flex', justifyContent: 'center'}}> 
        <AddGroupIcon style={{color:'green'}}  onClick={(event) =>more(event,fields)}/>
      </div>
        {fields.map((providers, index) => (
          <div>
            <ListItem key={index}> 
              <div>
                <ListItem>
                  <hr/>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.ProfessionalAssociation`}
                      component={AutoComplete}
                      floatingLabelText="Professional Association"
                      openOnFocus
                      filter={MUIAutoComplete.fuzzyFilter}
                      dataSourceConfig={{text: 'name', value: 'name'}}
                      dataSource={professionalAssociation.professionalAssociation}
                      validate={required}
                    />
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.YearsOfPolicy`}
                      component={SelectField}
                      hintText="Years of Policy"
                      floatingLabelText="Years of Policy"
                      validate={required}
                    >                      
                      <MenuItem value="1" primaryText="1" />
                      <MenuItem value="2" primaryText="2" />
                      <MenuItem value="3" primaryText="3" />
                      <MenuItem value="4" primaryText="4" />
                      <MenuItem value="4+" primaryText="4+" />
                    </Field>
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.YearsInPractice`}
                      component={SelectField}
                      hintText="Years in Practice"
                      floatingLabelText="Years in Practice"
                      validate={required}
                    >                      
                      <MenuItem value="1" primaryText="1" />
                      <MenuItem value="2" primaryText="2" />
                      <MenuItem value="2+" primaryText="2+" />
                    </Field>
                  </div>
                  <div>
                  <Field
                      name={`${providers}.ProviderDetail.HoursWorkPerWeek`}
                      component={TextField}
                      hintText="Work hours per week"
                      floatingLabelText="Work hours per week"
                      validate={[required,hours]}
                    />
                  </div>
              </ListItem>
            </div>
          </ListItem>
        </div>
      ))}
    </div>
  </List>
)


const ICLA = ({fields}) => (
  <List>
    <div>
      <div style={{display: 'flex', justifyContent: 'center'}}> 
        <AddGroupIcon style={{color:'green'}}  onClick={(event) =>more(event,fields)}/>
      </div>
        {fields.map((providers, index) => (
          <div>
            <ListItem key={index}> 
              <div>
                <ListItem>
                  <hr/>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.ProfessionalAssociation`}
                      component={AutoComplete}
                      floatingLabelText="Professional Association"
                      openOnFocus
                      filter={MUIAutoComplete.fuzzyFilter}
                      dataSourceConfig={{text: 'name', value: 'name'}}
                      dataSource={professionalAssociation.professionalAssociation}
                      validate={required}
                    />
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.YearsOfPolicy`}
                      component={SelectField}
                      hintText="Years of Policy"
                      floatingLabelText="Years of Policy"
                      validate={required}
                    >                      
                      <MenuItem value="1" primaryText="1" />
                      <MenuItem value="2" primaryText="2" />
                      <MenuItem value="3" primaryText="3" />
                      <MenuItem value="4" primaryText="4" />
                      <MenuItem value="4+" primaryText="4+" />
                    </Field>
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.YearsInPractice`}
                      component={SelectField}
                      hintText="Years in Practice"
                      floatingLabelText="Years in Practice"
                      validate={required}
                    >                      
                      <MenuItem value="1" primaryText="1" />
                      <MenuItem value="2" primaryText="2" />
                      <MenuItem value="2+" primaryText="2+" />
                    </Field>
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.PatientCompensationFund`}
                      component={Toggle}
                      label="Patient compensation fund"
                      labelPosition="right"
                    />
                  </div>
                  <div>
                  <Field
                      name={`${providers}.ProviderDetail.HoursWorkPerWeek`}
                      component={TextField}
                      hintText="Work hours per week"
                      floatingLabelText="Work hours per week"
                      validate={[required,hours]}
                    />
                  </div>
              </ListItem>
            </div>
          </ListItem>
        </div>
      ))}
    </div>
  </List>
)


const ICNA = ({fields, meta: {error, submitFailed}}) => (
  <List>
    <div>
      <div style={{display: 'flex', justifyContent: 'center'}}> 
        <AddGroupIcon style={{color:'green'}}  onClick={(event) =>more(event,fields)}/>
      </div>
        {fields.map((providers, index) => (
          <div>
            <ListItem key={index}> 
              <div>
                <ListItem>
                  <hr/>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.ProfessionalAssociation`}
                      component={AutoComplete}
                      floatingLabelText="Professional Association"
                      openOnFocus
                      filter={MUIAutoComplete.fuzzyFilter}
                      dataSourceConfig={{text: 'name', value: 'name'}}
                      dataSource={professionalAssociation.professionalAssociation}
                      validate={required}
                    />
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.YearsOfPolicy`}
                      component={SelectField}
                      hintText="Years of Policy"
                      floatingLabelText="Years of Policy"
                      validate={required}
                    >                      
                      <MenuItem value="1" primaryText="1" />
                      <MenuItem value="2" primaryText="2" />
                      <MenuItem value="3" primaryText="3" />
                      <MenuItem value="4" primaryText="4" />
                      <MenuItem value="4+" primaryText="4+" />
                    </Field>
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.YearsInPractice`}
                      component={SelectField}
                      hintText="Years in Practice"
                      floatingLabelText="Years in Practice"
                      validate={required}
                    >                      
                      <MenuItem value="1" primaryText="1" />
                      <MenuItem value="2" primaryText="2" />
                      <MenuItem value="2+" primaryText="2+" />
                    </Field>
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.RiskManagementDiscount`}
                      component={Toggle}
                      label="Risk management discount"
                      labelPosition="right"
                    />
                  </div>
                  <div>
                  <Field
                      name={`${providers}.ProviderDetail.HoursWorkPerWeek`}
                      component={TextField}
                      hintText="Work hours per week"
                      floatingLabelText="Work hours per week"
                      validate={[required,hours]}
                    />
                  </div>
              </ListItem>
            </div>
          </ListItem>
        </div>
      ))}
    </div>
  </List>
)



const ICAP = ({fields, meta: {error, submitFailed}}) => (
  <List>
    <div>
      <div style={{display: 'flex', justifyContent: 'center'}}> 
        <AddGroupIcon style={{color:'green'}}  onClick={(event) =>more(event,fields)}/>
      </div>
        {fields.map((providers, index) => (
          <div>
            <ListItem key={index}> 
              <div>
                <ListItem>
                  <hr/>                  
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.ProviderClass`}
                      component={SelectField}
                      hintText="Provider Class"
                      floatingLabelText="Provider Class"
                      validate={required}
                    >
                      <MenuItem value="Optometrist" primaryText="Optometrist" />
                      <MenuItem value="Optician" primaryText="Optician" />
                      <MenuItem value="Ophthalmic Technologist" primaryText="Ophthalmic Technologist" />
                      <MenuItem value="Audiologist (excluding IONM)" primaryText="Audiologist (excluding IONM)" />
                      <MenuItem value="Hearing Therapist" primaryText="Hearing Therapist" />
                      <MenuItem value="Speech Pathologist" primaryText="Speech Pathologist" />
                      <MenuItem value="Speech Therapist" primaryText="Speech Therapist" />
                      <MenuItem value="Respiratory Therapist" primaryText="Respiratory Therapist" />
                      <MenuItem value="Respiratory Therapy Assistant / Technician / Technologist" primaryText="Respiratory Therapy Assistant / Technician / Technologist" />
                      <MenuItem value="Orthotist / Prosthetist" primaryText="Orthotist / Prosthetist" />
                      <MenuItem value="Dietitian / Nutritionist" primaryText="Dietitian / Nutritionist" />
                      <MenuItem value="Social Worker" primaryText="Social Worker" />
                      <MenuItem value="Counselor" primaryText="Counselor" />
                      <MenuItem value="Marriage / Family Therapist" primaryText="Marriage / Family Therapist" />
                      <MenuItem value="Psychologist" primaryText="Psychologist" />
                      <MenuItem value="Occupational Therapist" primaryText="Occupational Therapist" />
                      <MenuItem value="Occupational Therapy Assistant" primaryText="Occupational Therapy Assistant" />
                      <MenuItem value="Physical Therapist" primaryText="Physical Therapist" />
                      <MenuItem value="Physical Therapy Assistant" primaryText="Physical Therapy Assistant" />
                      <MenuItem value="Athletic Trainer" primaryText="Athletic Trainer" />
                      <MenuItem value="Non-certified Fitness Professional" primaryText="Non-certified Fitness Professional" />
                      <MenuItem value="Yoga / Pilates Instructor" primaryText="Yoga / Pilates Instructor" />
                      <MenuItem value="Certified Fitness Professional" primaryText="Certified Fitness Professional" />
                      <MenuItem value="Biomedical Technician/Technologist" primaryText="Biomedical Technician/Technologist" />
                      <MenuItem value="Blood Bank Technician/Technologist" primaryText="Blood Bank Technician/Technologist" />
                      <MenuItem value="Cardiology Technician/Technologist" primaryText="Cardiology Technician/Technologist" />
                      <MenuItem value="Certified Lab Technician/Technologist" primaryText="Certified Lab Technician/Technologist" />
                      <MenuItem value="Certified Medical Assistant" primaryText="Certified Medical Assistant" />
                      <MenuItem value="Clinical Lab Technician/Technologist" primaryText="Clinical Lab Technician/Technologist" />
                      <MenuItem value="Community Health Assistant" primaryText="Community Health Assistant" />
                      <MenuItem value="Community Health Technician/Technologist" primaryText="Community Health Technician/Technologist" />
                      <MenuItem value="Diagnostic Medical Sonographer" primaryText="Diagnostic Medical Sonographer" />
                      <MenuItem value="Dialysis Technician/Technologist" primaryText="Dialysis Technician/Technologist" />
                      <MenuItem value="EEG Technician/Technologist" primaryText="EEG Technician/Technologist" />
                      <MenuItem value="EKG Technician/Technologist" primaryText="EKG Technician/Technologist" />
                      <MenuItem value="Electrologist" primaryText="Electrologist" />
                      <MenuItem value="Histologic Technician/Technologist" primaryText="Histologic Technician/Technologist" />
                      <MenuItem value="Medical Laboratory Technician/Technologist" primaryText="Medical Laboratory Technician/Technologist" />
                      <MenuItem value="Medical Technician - NOC" primaryText="Medical Technician - NOC" />
                      <MenuItem value="Medical Technician/Technologist Assistant - NOC" primaryText="Medical Technician/Technologist Assistant - NOC" />
                      <MenuItem value="Medical Technologist - NOC" primaryText="Medical Technologist - NOC" />
                      <MenuItem value="Medical Assistant" primaryText="Medical Assistant" />
                      <MenuItem value="Medical Records Administrator" primaryText="Medical Records Administrator" />
                      <MenuItem value="Medical Records Technician/Technologist" primaryText="Medical Records Technician/Technologist" />
                      <MenuItem value="Nuclear Medical Technician/Technologist" primaryText="Nuclear Medical Technician/Technologist" />
                      <MenuItem value="Optometric Technician" primaryText="Optometric Technician" />
                      <MenuItem value="Orthopedic Technician" primaryText="Orthopedic Technician" />
                      <MenuItem value="Pathology Assistant" primaryText="Pathology Assistant" />
                      <MenuItem value="Phlebotomist" primaryText="Phlebotomist" />
                      <MenuItem value="Polysomnographic Sleep Technician" primaryText="Polysomnographic Sleep Technician" />
                      <MenuItem value="Radiation Therapist" primaryText="Radiation Therapist" />
                      <MenuItem value="Radiology Technician/Technologist" primaryText="Radiology Technician/Technologist" />
                      <MenuItem value="Sonographic Technician/Technologist" primaryText="Sonographic Technician/Technologist" />
                      <MenuItem value="Surgical Technician/Technologist" primaryText="Surgical Technician/Technologist" />
                      <MenuItem value="X-Ray Machine Technician/Technologist" primaryText="X-Ray Machine Technician/Technologist" />
                      <MenuItem value="Pharmacist" primaryText="Pharmacist" />
                      <MenuItem value="Pharmacy Technician" primaryText="Pharmacy Technician" />
                      <MenuItem value="EMT - Basic / Intermediate" primaryText="EMT - Basic / Intermediate" />
                      <MenuItem value="EMT - Volunteer" primaryText="EMT - Volunteer" />
                      <MenuItem value="EMT - Paramedic" primaryText="EMT - Paramedic" />
                      <MenuItem value="Registered Nurse" primaryText="Registered Nurse" />
                      <MenuItem value="Licensed Practical Nurse" primaryText="Licensed Practical Nurse" />
                      <MenuItem value="Licensed Vocational Nurse" primaryText="Licensed Vocational Nurse" /> 
                    </Field>
                  </div>
                  
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.ProfessionalAssociation`}
                      component={AutoComplete}
                      floatingLabelText="Professional Association"
                      openOnFocus
                      filter={MUIAutoComplete.fuzzyFilter}
                      dataSourceConfig={{text: 'name', value: 'name'}}
                      dataSource={professionalAssociation.professionalAssociation}
                      validate={required}
                    />
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.YearsOfPolicy`}
                      component={SelectField}
                      hintText="Years of Policy"
                      floatingLabelText="Years of Policy"
                      validate={required}
                    >                      
                      <MenuItem value="1" primaryText="1" />
                      <MenuItem value="2" primaryText="2" />
                      <MenuItem value="3" primaryText="3" />
                      <MenuItem value="4" primaryText="4" />
                      <MenuItem value="4+" primaryText="4+" />
                    </Field>
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.YearsInPractice`}
                      component={SelectField}
                      hintText="Years in Practice"
                      floatingLabelText="Years in Practice"
                      validate={required}
                    >                      
                      <MenuItem value="1" primaryText="1" />
                      <MenuItem value="2" primaryText="2" />
                      <MenuItem value="2+" primaryText="2+" />
                    </Field>
                  </div>
                  <div>
                  <Field
                      name={`${providers}.ProviderDetail.HoursWorkPerWeek`}
                      component={TextField}
                      hintText="Work hours per week"
                      floatingLabelText="Work hours per week"
                      validate={[required,hours]}
                    />
                  </div>
                  <div>
                  <Field
                      name={`${providers}.ProviderDetail.ScheduleRatingFactor`}
                      component={TextField}
                      hintText="Schedule Rating Factor"
                      floatingLabelText="Schedule Rating Factor"
                      validate={[required, numeric]}
                    />
                  </div>
              </ListItem>
            </div>
          </ListItem>
        </div>
      ))}
    </div>
  </List>
)


const ICNP = ({fields, meta: {error, submitFailed}}) => (
  <List>
    <div>
      <div style={{display: 'flex', justifyContent: 'center'}}> 
        <AddGroupIcon style={{color:'green'}}  onClick={(event) =>more(event,fields)}/>
      </div>
        {fields.map((providers, index) => (
          <div>
            <ListItem key={index}> 
              <div>
                <ListItem>
                  <hr/>                  
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.ProviderClass`}
                      component={SelectField}
                      hintText="Provider Class"
                      floatingLabelText="Provider Class"
                      validate={required}
                    >
                      <MenuItem value="Optometrist" primaryText="Optometrist" />
                      <MenuItem value="Optician" primaryText="Optician" />
                      <MenuItem value="Ophthalmic Technologist" primaryText="Ophthalmic Technologist" />
                      <MenuItem value="Audiologist (excluding IONM)" primaryText="Audiologist (excluding IONM)" />
                      <MenuItem value="Hearing Therapist" primaryText="Hearing Therapist" />
                      <MenuItem value="Speech Pathologist" primaryText="Speech Pathologist" />
                      <MenuItem value="Speech Therapist" primaryText="Speech Therapist" />
                      <MenuItem value="Respiratory Therapist" primaryText="Respiratory Therapist" />
                      <MenuItem value="Respiratory Therapy Assistant / Technician / Technologist" primaryText="Respiratory Therapy Assistant / Technician / Technologist" />
                      <MenuItem value="Orthotist / Prosthetist" primaryText="Orthotist / Prosthetist" />
                      <MenuItem value="Dietitian / Nutritionist" primaryText="Dietitian / Nutritionist" />
                      <MenuItem value="Social Worker" primaryText="Social Worker" />
                      <MenuItem value="Counselor" primaryText="Counselor" />
                      <MenuItem value="Marriage / Family Therapist" primaryText="Marriage / Family Therapist" />
                      <MenuItem value="Psychologist" primaryText="Psychologist" />
                      <MenuItem value="Occupational Therapist" primaryText="Occupational Therapist" />
                      <MenuItem value="Occupational Therapy Assistant" primaryText="Occupational Therapy Assistant" />
                      <MenuItem value="Physical Therapist" primaryText="Physical Therapist" />
                      <MenuItem value="Physical Therapy Assistant" primaryText="Physical Therapy Assistant" />
                      <MenuItem value="Athletic Trainer" primaryText="Athletic Trainer" />
                      <MenuItem value="Non-certified Fitness Professional" primaryText="Non-certified Fitness Professional" />
                      <MenuItem value="Yoga / Pilates Instructor" primaryText="Yoga / Pilates Instructor" />
                      <MenuItem value="Certified Fitness Professional" primaryText="Certified Fitness Professional" />
                      <MenuItem value="Biomedical Technician/Technologist" primaryText="Biomedical Technician/Technologist" />
                      <MenuItem value="Blood Bank Technician/Technologist" primaryText="Blood Bank Technician/Technologist" />
                      <MenuItem value="Cardiology Technician/Technologist" primaryText="Cardiology Technician/Technologist" />
                      <MenuItem value="Certified Lab Technician/Technologist" primaryText="Certified Lab Technician/Technologist" />
                      <MenuItem value="Certified Medical Assistant" primaryText="Certified Medical Assistant" />
                      <MenuItem value="Clinical Lab Technician/Technologist" primaryText="Clinical Lab Technician/Technologist" />
                      <MenuItem value="Community Health Assistant" primaryText="Community Health Assistant" />
                      <MenuItem value="Community Health Technician/Technologist" primaryText="Community Health Technician/Technologist" />
                      <MenuItem value="Diagnostic Medical Sonographer" primaryText="Diagnostic Medical Sonographer" />
                      <MenuItem value="Dialysis Technician/Technologist" primaryText="Dialysis Technician/Technologist" />
                      <MenuItem value="EEG Technician/Technologist" primaryText="EEG Technician/Technologist" />
                      <MenuItem value="EKG Technician/Technologist" primaryText="EKG Technician/Technologist" />
                      <MenuItem value="Electrologist" primaryText="Electrologist" />
                      <MenuItem value="Histologic Technician/Technologist" primaryText="Histologic Technician/Technologist" />
                      <MenuItem value="Medical Laboratory Technician/Technologist" primaryText="Medical Laboratory Technician/Technologist" />
                      <MenuItem value="Medical Technician - NOC" primaryText="Medical Technician - NOC" />
                      <MenuItem value="Medical Technician/Technologist Assistant - NOC" primaryText="Medical Technician/Technologist Assistant - NOC" />
                      <MenuItem value="Medical Technologist - NOC" primaryText="Medical Technologist - NOC" />
                      <MenuItem value="Medical Assistant" primaryText="Medical Assistant" />
                      <MenuItem value="Medical Records Administrator" primaryText="Medical Records Administrator" />
                      <MenuItem value="Medical Records Technician/Technologist" primaryText="Medical Records Technician/Technologist" />
                      <MenuItem value="Nuclear Medical Technician/Technologist" primaryText="Nuclear Medical Technician/Technologist" />
                      <MenuItem value="Optometric Technician" primaryText="Optometric Technician" />
                      <MenuItem value="Orthopedic Technician" primaryText="Orthopedic Technician" />
                      <MenuItem value="Pathology Assistant" primaryText="Pathology Assistant" />
                      <MenuItem value="Phlebotomist" primaryText="Phlebotomist" />
                      <MenuItem value="Polysomnographic Sleep Technician" primaryText="Polysomnographic Sleep Technician" />
                      <MenuItem value="Radiation Therapist" primaryText="Radiation Therapist" />
                      <MenuItem value="Radiology Technician/Technologist" primaryText="Radiology Technician/Technologist" />
                      <MenuItem value="Sonographic Technician/Technologist" primaryText="Sonographic Technician/Technologist" />
                      <MenuItem value="Surgical Technician/Technologist" primaryText="Surgical Technician/Technologist" />
                      <MenuItem value="X-Ray Machine Technician/Technologist" primaryText="X-Ray Machine Technician/Technologist" />
                      <MenuItem value="Pharmacist" primaryText="Pharmacist" />
                      <MenuItem value="Pharmacy Technician" primaryText="Pharmacy Technician" />
                      <MenuItem value="EMT - Basic / Intermediate" primaryText="EMT - Basic / Intermediate" />
                      <MenuItem value="EMT - Volunteer" primaryText="EMT - Volunteer" />
                      <MenuItem value="EMT - Paramedic" primaryText="EMT - Paramedic" />
                      <MenuItem value="Registered Nurse" primaryText="Registered Nurse" />
                      <MenuItem value="Licensed Practical Nurse" primaryText="Licensed Practical Nurse" />
                      <MenuItem value="Licensed Vocational Nurse" primaryText="Licensed Vocational Nurse" /> 
                    </Field>
                  </div>
                  
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.ProfessionalAssociation`}
                      component={AutoComplete}
                      floatingLabelText="Professional Association"
                      openOnFocus
                      filter={MUIAutoComplete.fuzzyFilter}
                      dataSourceConfig={{text: 'name', value: 'name'}}
                      dataSource={professionalAssociation.professionalAssociation}
                      validate={required}
                    />
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.YearsOfPolicy`}
                      component={SelectField}
                      hintText="Years of Policy"
                      floatingLabelText="Years of Policy"
                      validate={required}
                    >                      
                      <MenuItem value="1" primaryText="1" />
                      <MenuItem value="2" primaryText="2" />
                      <MenuItem value="3" primaryText="3" />
                      <MenuItem value="4" primaryText="4" />
                      <MenuItem value="4+" primaryText="4+" />
                    </Field>
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.YearsInPractice`}
                      component={SelectField}
                      hintText="Years in Practice"
                      floatingLabelText="Years in Practice"
                      validate={required}
                    >                      
                      <MenuItem value="1" primaryText="1" />
                      <MenuItem value="2" primaryText="2" />
                      <MenuItem value="2+" primaryText="2+" />
                    </Field>
                  </div>
                  <div></div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.RiskManagementDiscount`}
                      component={Toggle}
                      label="Risk management discount"
                      labelPosition="right"
                    />
                  </div>
                  <div>
                  <Field
                      name={`${providers}.ProviderDetail.HoursWorkPerWeek`}
                      component={TextField}
                      hintText="Work hours per week"
                      floatingLabelText="Work hours per week"
                      validate={[required,hours]}
                    />
                  </div>
                  <div>
                  <Field
                      name={`${providers}.ProviderDetail.ScheduleRatingFactor`}
                      component={TextField}
                      hintText="Schedule Rating Factor"
                      floatingLabelText="Schedule Rating Factor"
                      validate={[required,numeric]}
                    />
                  </div>
              </ListItem>
            </div>
          </ListItem>
        </div>
      ))}
    </div>
  </List>
)

const ICLP = ({fields, meta: {error, submitFailed}}) => (
  <List>
    <div>
      <div style={{display: 'flex', justifyContent: 'center'}}> 
        <AddGroupIcon style={{color:'green'}}  onClick={(event) =>more(event,fields)}/>
      </div>
        {fields.map((providers, index) => (
          <div>
            <ListItem key={index}> 
              <div>
                <ListItem>
                  <hr/>                  
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.ProviderClass`}
                      component={SelectField}
                      hintText="Provider Class"
                      floatingLabelText="Provider Class"
                      validate={required}
                    >
                      <MenuItem value="Optometrist" primaryText="Optometrist" />
                      <MenuItem value="Optician" primaryText="Optician" />
                      <MenuItem value="Ophthalmic Technologist" primaryText="Ophthalmic Technologist" />
                      <MenuItem value="Audiologist (excluding IONM)" primaryText="Audiologist (excluding IONM)" />
                      <MenuItem value="Hearing Therapist" primaryText="Hearing Therapist" />
                      <MenuItem value="Speech Pathologist" primaryText="Speech Pathologist" />
                      <MenuItem value="Speech Therapist" primaryText="Speech Therapist" />
                      <MenuItem value="Respiratory Therapist" primaryText="Respiratory Therapist" />
                      <MenuItem value="Respiratory Therapy Assistant / Technician / Technologist" primaryText="Respiratory Therapy Assistant / Technician / Technologist" />
                      <MenuItem value="Orthotist / Prosthetist" primaryText="Orthotist / Prosthetist" />
                      <MenuItem value="Dietitian / Nutritionist" primaryText="Dietitian / Nutritionist" />
                      <MenuItem value="Social Worker" primaryText="Social Worker" />
                      <MenuItem value="Counselor" primaryText="Counselor" />
                      <MenuItem value="Marriage / Family Therapist" primaryText="Marriage / Family Therapist" />
                      <MenuItem value="Psychologist" primaryText="Psychologist" />
                      <MenuItem value="Occupational Therapist" primaryText="Occupational Therapist" />
                      <MenuItem value="Occupational Therapy Assistant" primaryText="Occupational Therapy Assistant" />
                      <MenuItem value="Physical Therapist" primaryText="Physical Therapist" />
                      <MenuItem value="Physical Therapy Assistant" primaryText="Physical Therapy Assistant" />
                      <MenuItem value="Athletic Trainer" primaryText="Athletic Trainer" />
                      <MenuItem value="Non-certified Fitness Professional" primaryText="Non-certified Fitness Professional" />
                      <MenuItem value="Yoga / Pilates Instructor" primaryText="Yoga / Pilates Instructor" />
                      <MenuItem value="Certified Fitness Professional" primaryText="Certified Fitness Professional" />
                      <MenuItem value="Biomedical Technician/Technologist" primaryText="Biomedical Technician/Technologist" />
                      <MenuItem value="Blood Bank Technician/Technologist" primaryText="Blood Bank Technician/Technologist" />
                      <MenuItem value="Cardiology Technician/Technologist" primaryText="Cardiology Technician/Technologist" />
                      <MenuItem value="Certified Lab Technician/Technologist" primaryText="Certified Lab Technician/Technologist" />
                      <MenuItem value="Certified Medical Assistant" primaryText="Certified Medical Assistant" />
                      <MenuItem value="Clinical Lab Technician/Technologist" primaryText="Clinical Lab Technician/Technologist" />
                      <MenuItem value="Community Health Assistant" primaryText="Community Health Assistant" />
                      <MenuItem value="Community Health Technician/Technologist" primaryText="Community Health Technician/Technologist" />
                      <MenuItem value="Diagnostic Medical Sonographer" primaryText="Diagnostic Medical Sonographer" />
                      <MenuItem value="Dialysis Technician/Technologist" primaryText="Dialysis Technician/Technologist" />
                      <MenuItem value="EEG Technician/Technologist" primaryText="EEG Technician/Technologist" />
                      <MenuItem value="EKG Technician/Technologist" primaryText="EKG Technician/Technologist" />
                      <MenuItem value="Electrologist" primaryText="Electrologist" />
                      <MenuItem value="Histologic Technician/Technologist" primaryText="Histologic Technician/Technologist" />
                      <MenuItem value="Medical Laboratory Technician/Technologist" primaryText="Medical Laboratory Technician/Technologist" />
                      <MenuItem value="Medical Technician - NOC" primaryText="Medical Technician - NOC" />
                      <MenuItem value="Medical Technician/Technologist Assistant - NOC" primaryText="Medical Technician/Technologist Assistant - NOC" />
                      <MenuItem value="Medical Technologist - NOC" primaryText="Medical Technologist - NOC" />
                      <MenuItem value="Medical Assistant" primaryText="Medical Assistant" />
                      <MenuItem value="Medical Records Administrator" primaryText="Medical Records Administrator" />
                      <MenuItem value="Medical Records Technician/Technologist" primaryText="Medical Records Technician/Technologist" />
                      <MenuItem value="Nuclear Medical Technician/Technologist" primaryText="Nuclear Medical Technician/Technologist" />
                      <MenuItem value="Optometric Technician" primaryText="Optometric Technician" />
                      <MenuItem value="Orthopedic Technician" primaryText="Orthopedic Technician" />
                      <MenuItem value="Pathology Assistant" primaryText="Pathology Assistant" />
                      <MenuItem value="Phlebotomist" primaryText="Phlebotomist" />
                      <MenuItem value="Polysomnographic Sleep Technician" primaryText="Polysomnographic Sleep Technician" />
                      <MenuItem value="Radiation Therapist" primaryText="Radiation Therapist" />
                      <MenuItem value="Radiology Technician/Technologist" primaryText="Radiology Technician/Technologist" />
                      <MenuItem value="Sonographic Technician/Technologist" primaryText="Sonographic Technician/Technologist" />
                      <MenuItem value="Surgical Technician/Technologist" primaryText="Surgical Technician/Technologist" />
                      <MenuItem value="X-Ray Machine Technician/Technologist" primaryText="X-Ray Machine Technician/Technologist" />
                      <MenuItem value="Pharmacist" primaryText="Pharmacist" />
                      <MenuItem value="Pharmacy Technician" primaryText="Pharmacy Technician" />
                      <MenuItem value="EMT - Basic / Intermediate" primaryText="EMT - Basic / Intermediate" />
                      <MenuItem value="EMT - Volunteer" primaryText="EMT - Volunteer" />
                      <MenuItem value="EMT - Paramedic" primaryText="EMT - Paramedic" />
                      <MenuItem value="Registered Nurse" primaryText="Registered Nurse" />
                      <MenuItem value="Licensed Practical Nurse" primaryText="Licensed Practical Nurse" />
                      <MenuItem value="Licensed Vocational Nurse" primaryText="Licensed Vocational Nurse" /> 
                    </Field>
                  </div>
                  
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.ProfessionalAssociation`}
                      component={AutoComplete}
                      floatingLabelText="Professional Association"
                      openOnFocus
                      filter={MUIAutoComplete.fuzzyFilter}
                      dataSourceConfig={{text: 'name', value: 'name'}}
                      dataSource={professionalAssociation.professionalAssociation}
                      validate={required}
                    />
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.YearsOfPolicy`}
                      component={SelectField}
                      hintText="Years of Policy"
                      floatingLabelText="Years of Policy"
                      validate={required}
                    >                      
                      <MenuItem value="1" primaryText="1" />
                      <MenuItem value="2" primaryText="2" />
                      <MenuItem value="3" primaryText="3" />
                      <MenuItem value="4" primaryText="4" />
                      <MenuItem value="4+" primaryText="4+" />
                    </Field>
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.YearsInPractice`}
                      component={SelectField}
                      hintText="Years in Practice"
                      floatingLabelText="Years in Practice"
                      validate={required}
                    >                      
                      <MenuItem value="1" primaryText="1" />
                      <MenuItem value="2" primaryText="2" />
                      <MenuItem value="2+" primaryText="2+" />
                    </Field>
                  </div>
                  <div></div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.PatientCompensationFund`}
                      component={Toggle}
                      label="Patient compensation fund"
                      labelPosition="right"
                    />
                  </div>
                  <div>
                  <Field
                      name={`${providers}.ProviderDetail.HoursWorkPerWeek`}
                      component={TextField}
                      hintText="Work hours per week"
                      floatingLabelText="Work hours per week"
                      validate={[required,hours]}
                    />
                  </div>
                  <div>
                  <Field
                      name={`${providers}.ProviderDetail.ScheduleRatingFactor`}
                      component={TextField}
                      hintText="Schedule Rating Factor"
                      floatingLabelText="Schedule Rating Factor"
                      validate={[required, numeric]}
                    />
                  </div>
              </ListItem>
            </div>
          </ListItem>
        </div>
      ))}
    </div>
  </List>
)


const ICAM = ({fields, meta: {error, submitFailed}}) => (
  <List>
    <div>
      <div style={{display: 'flex', justifyContent: 'center'}}> 
        <AddGroupIcon style={{color:'green'}}  onClick={(event) =>more(event,fields)}/>
      </div>
        {fields.map((providers, index) => (
          <div>
            <ListItem key={index}> 
              <div>
                <ListItem>
                  <hr/>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.ProviderClass`}
                      component={SelectField}
                      hintText="Provider Class"
                      floatingLabelText="Provider Class"
                      validate={required}
                    >                      
                      <MenuItem value="Accountant" primaryText="Accountant" />
                      <MenuItem value="Advertiser" primaryText="Advertiser" />
                      <MenuItem value="Beauty Salon" primaryText="Beauty Salon" />
                      <MenuItem value="Consultant" primaryText="Consultant" />
                      <MenuItem value="Field Inspector" primaryText="Field Inspector" />
                      <MenuItem value="Graphic Designer" primaryText="Graphic Designer" />
                      <MenuItem value="Insurance Agent" primaryText="Insurance Agent" />
                      <MenuItem value="Interior Designer" primaryText="Interior Designer" />
                      <MenuItem value="Interpreter/ Translator" primaryText="Interpreter/ Translator" />
                      <MenuItem value="Landscaper" primaryText="Landscaper" />
                      <MenuItem value="Notary" primaryText="Notary" />
                      <MenuItem value="Photographer/Videographer" primaryText="Photographer/Videographer" />
                      <MenuItem value="Printing" primaryText="Printing" />
                      <MenuItem value="Publisher" primaryText="Publisher" />
                      <MenuItem value="Real Estate Agent" primaryText="Real Estate Agent" />
                      <MenuItem value="Travel Agent" primaryText="Travel Agent" />                     
                    </Field>
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.ProfessionalAssociation`}
                      component={AutoComplete}
                      floatingLabelText="Professional Association"
                      openOnFocus
                      filter={MUIAutoComplete.fuzzyFilter}
                      dataSourceConfig={{text: 'name', value: 'name'}}
                      dataSource={professionalAssociation.professionalAssociation}
                      validate={required}
                    />
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.YearsOfPolicy`}
                      component={SelectField}
                      hintText="Years of Policy"
                      floatingLabelText="Years of Policy"
                      validate={required}
                    >                      
                      <MenuItem value="1" primaryText="1" />
                      <MenuItem value="2" primaryText="2" />
                      <MenuItem value="3" primaryText="3" />
                      <MenuItem value="4" primaryText="4" />
                      <MenuItem value="4+" primaryText="4+" />
                    </Field>
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.YearsInPractice`}
                      component={SelectField}
                      hintText="Years in Practice"
                      floatingLabelText="Years in Practice"
                      validate={required}
                    >                      
                      <MenuItem value="1" primaryText="1" />
                      <MenuItem value="2" primaryText="2" />
                      <MenuItem value="2+" primaryText="2+" />
                    </Field>
                  </div>
                  <div>
                  <Field
                      name={`${providers}.ProviderDetail.HoursWorkPerWeek`}
                      component={TextField}
                      hintText="Work hours per week"
                      floatingLabelText="Work hours per week"
                      validate={[required,hours]}
                    />
                  </div>
                  <div>
                  <Field
                      name={`${providers}.ProviderDetail.MeetsStudentQualification`}
                      component={TextField}
                      hintText="Meets Student Qualification"
                      floatingLabelText="Meets Student Qualification"
                      validate={[required, numeric]}
                    />
                  </div>
                  <div>
                  <Field
                      name={`${providers}.ProviderDetail.UseOfWrittenContractsFactor`}
                      component={TextField}
                      hintText="Written contracts factor"
                      floatingLabelText="Written contracts factor"
                      validate={[required, numeric]}
                    />
                  </div>
              </ListItem>
            </div>
          </ListItem>
        </div>
      ))}
    </div>
  </List>
)

const ICLM = ({fields, meta: {error, submitFailed}}) => (
  <List>
    <div>
      <div style={{display: 'flex', justifyContent: 'center'}}> 
        <AddGroupIcon style={{color:'green'}}  onClick={(event) =>more(event,fields)}/>
      </div>
        {fields.map((providers, index) => (
          <div>
            <ListItem key={index}> 
              <div>
                <ListItem>
                  <hr/>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.ProviderClass`}
                      component={SelectField}
                      hintText="Provider Class"
                      floatingLabelText="Provider Class"
                      validate={required}
                    >                      
                      <MenuItem value="Accountant" primaryText="Accountant" />
                      <MenuItem value="Advertiser" primaryText="Advertiser" />
                      <MenuItem value="Beauty Salon" primaryText="Beauty Salon" />
                      <MenuItem value="Consultant" primaryText="Consultant" />
                      <MenuItem value="Field Inspector" primaryText="Field Inspector" />
                      <MenuItem value="Graphic Designer" primaryText="Graphic Designer" />
                      <MenuItem value="Insurance Agent" primaryText="Insurance Agent" />
                      <MenuItem value="Interior Designer" primaryText="Interior Designer" />
                      <MenuItem value="Interpreter/ Translator" primaryText="Interpreter/ Translator" />
                      <MenuItem value="Landscaper" primaryText="Landscaper" />
                      <MenuItem value="Notary" primaryText="Notary" />
                      <MenuItem value="Photographer/Videographer" primaryText="Photographer/Videographer" />
                      <MenuItem value="Printing" primaryText="Printing" />
                      <MenuItem value="Publisher" primaryText="Publisher" />
                      <MenuItem value="Real Estate Agent" primaryText="Real Estate Agent" />
                      <MenuItem value="Travel Agent" primaryText="Travel Agent" />                     
                    </Field>
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.ProfessionalAssociation`}
                      component={AutoComplete}
                      floatingLabelText="Professional Association"
                      openOnFocus
                      filter={MUIAutoComplete.fuzzyFilter}
                      dataSourceConfig={{text: 'name', value: 'name'}}
                      dataSource={professionalAssociation.professionalAssociation}
                      validate={required}
                    />
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.YearsOfPolicy`}
                      component={SelectField}
                      hintText="Years of Policy"
                      floatingLabelText="Years of Policy"
                      validate={required}
                    >                      
                      <MenuItem value="1" primaryText="1" />
                      <MenuItem value="2" primaryText="2" />
                      <MenuItem value="3" primaryText="3" />
                      <MenuItem value="4" primaryText="4" />
                      <MenuItem value="4+" primaryText="4+" />
                    </Field>
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.YearsInPractice`}
                      component={SelectField}
                      hintText="Years in Practice"
                      floatingLabelText="Years in Practice"
                      validate={required}
                    >                      
                      <MenuItem value="1" primaryText="1" />
                      <MenuItem value="2" primaryText="2" />
                      <MenuItem value="2+" primaryText="2+" />
                    </Field>
                  </div>
                  <div></div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.PatientCompensationFund`}
                      component={Toggle}
                      label="Patient compensation fund"
                      labelPosition="right"
                    />
                  </div>
                  <div>
                  <Field
                      name={`${providers}.ProviderDetail.HoursWorkPerWeek`}
                      component={TextField}
                      hintText="Work hours per week"
                      floatingLabelText="Work hours per week"
                      validate={[required,hours]}
                    />
                  </div>
                  <div>
                  <Field
                      name={`${providers}.ProviderDetail.MeetsStudentQualification`}
                      component={TextField}
                      hintText="Meets Student Qualification"
                      floatingLabelText="Meets Student Qualification"
                      validate={[required, numeric]}
                    />
                  </div>
                  <div>
                  <Field
                      name={`${providers}.ProviderDetail.UseOfWrittenContractsFactor`}
                      component={TextField}
                      hintText="Written contracts factor"
                      floatingLabelText="Written contracts factor"
                      validate={[required, numeric]}
                    />
                  </div>
              </ListItem>
            </div>
          </ListItem>
        </div>
      ))}
    </div>
  </List>
)

const ICNM = ({fields, meta: {error, submitFailed}}) => (
  <List>
    <div>
      <div style={{display: 'flex', justifyContent: 'center'}}> 
        <AddGroupIcon style={{color:'green'}}  onClick={(event) =>more(event,fields)}/>
      </div>
        {fields.map((providers, index) => (
          <div>
            <ListItem key={index}> 
              <div>
                <ListItem>
                  <hr/>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.ProviderClass`}
                      component={SelectField}
                      hintText="Provider Class"
                      floatingLabelText="Provider Class"
                      validate={required}
                    >                      
                      <MenuItem value="Accountant" primaryText="Accountant" />
                      <MenuItem value="Advertiser" primaryText="Advertiser" />
                      <MenuItem value="Beauty Salon" primaryText="Beauty Salon" />
                      <MenuItem value="Consultant" primaryText="Consultant" />
                      <MenuItem value="Field Inspector" primaryText="Field Inspector" />
                      <MenuItem value="Graphic Designer" primaryText="Graphic Designer" />
                      <MenuItem value="Insurance Agent" primaryText="Insurance Agent" />
                      <MenuItem value="Interior Designer" primaryText="Interior Designer" />
                      <MenuItem value="Interpreter/ Translator" primaryText="Interpreter/ Translator" />
                      <MenuItem value="Landscaper" primaryText="Landscaper" />
                      <MenuItem value="Notary" primaryText="Notary" />
                      <MenuItem value="Photographer/Videographer" primaryText="Photographer/Videographer" />
                      <MenuItem value="Printing" primaryText="Printing" />
                      <MenuItem value="Publisher" primaryText="Publisher" />
                      <MenuItem value="Real Estate Agent" primaryText="Real Estate Agent" />
                      <MenuItem value="Travel Agent" primaryText="Travel Agent" />                     
                    </Field>
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.ProfessionalAssociation`}
                      component={AutoComplete}
                      floatingLabelText="Professional Association"
                      openOnFocus
                      filter={MUIAutoComplete.fuzzyFilter}
                      dataSourceConfig={{text: 'name', value: 'name'}}
                      dataSource={professionalAssociation.professionalAssociation}
                      validate={required}
                    />
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.YearsOfPolicy`}
                      component={SelectField}
                      hintText="Years of Policy"
                      floatingLabelText="Years of Policy"
                      validate={required}
                    >                      
                      <MenuItem value="1" primaryText="1" />
                      <MenuItem value="2" primaryText="2" />
                      <MenuItem value="3" primaryText="3" />
                      <MenuItem value="4" primaryText="4" />
                      <MenuItem value="4+" primaryText="4+" />
                    </Field>
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.YearsInPractice`}
                      component={SelectField}
                      hintText="Years in Practice"
                      floatingLabelText="Years in Practice"
                      validate={required}
                    >                      
                      <MenuItem value="1" primaryText="1" />
                      <MenuItem value="2" primaryText="2" />
                      <MenuItem value="2+" primaryText="2+" />
                    </Field>
                  </div>
                  <div></div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.RiskManagementDiscount`}
                      component={Toggle}
                      label="Risk management discount"
                      labelPosition="right"
                    />
                  </div>
                  <div>
                  <Field
                      name={`${providers}.ProviderDetail.HoursWorkPerWeek`}
                      component={TextField}
                      hintText="Work hours per week"
                      floatingLabelText="Work hours per week"
                      validate={[required,hours]}
                    />
                  </div>
                  <div>
                  <Field
                      name={`${providers}.ProviderDetail.MeetsStudentQualification`}
                      component={TextField}
                      hintText="Meets Student Qualification"
                      floatingLabelText="Meets Student Qualification"
                      validate={[required, numeric]}
                    />
                  </div>
                  <div>
                  <Field
                      name={`${providers}.ProviderDetail.UseOfWrittenContractsFactor`}
                      component={TextField}
                      hintText="Written contracts factor"
                      floatingLabelText="Written contracts factor"
                      validate={[required, numeric]}
                    />
                  </div>
              </ListItem>
            </div>
          </ListItem>
        </div>
      ))}
    </div>
  </List>
)


const INAA = ({fields, meta: {error, submitFailed}}) => (
  <List>
    <div>
      <div style={{display: 'flex', justifyContent: 'center'}}> 
        <AddGroupIcon style={{color:'green'}}  onClick={(event) =>more(event,fields)}/>
      </div>
        {fields.map((providers, index) => (
          <div>
            <ListItem key={index}> 
              <div>
                <ListItem>
                  <hr/>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.ProfessionalAssociation`}
                      component={AutoComplete}
                      floatingLabelText="Professional Association"
                      openOnFocus
                      filter={MUIAutoComplete.fuzzyFilter}
                      dataSourceConfig={{text: 'name', value: 'name'}}
                      dataSource={professionalAssociation.professionalAssociation}
                      validate={required}
                    />
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.YearsInPractice`}
                      component={SelectField}
                      hintText="Years in Practice"
                      floatingLabelText="Years in Practice"
                      validate={required}
                    >                      
                      <MenuItem value="1" primaryText="1" />
                      <MenuItem value="2" primaryText="2" />
                      <MenuItem value="2+" primaryText="2+" />
                    </Field>
                  </div>
                  <div>
                  <Field
                      name={`${providers}.ProviderDetail.HoursWorkPerWeek`}
                      component={TextField}
                      hintText="Work hours per week"
                      floatingLabelText="Work hours per week"
                      validate={[required,hours]}
                    />
                  </div>
              </ListItem>
            </div>
          </ListItem>
        </div>
      ))}
    </div>
  </List>
)


const INLA = ({fields, meta: {error, submitFailed}}) => (
  <List>
    <div>
      <div style={{display: 'flex', justifyContent: 'center'}}> 
        <AddGroupIcon style={{color:'green'}}  onClick={(event) =>more(event,fields)}/>
      </div>
        {fields.map((providers, index) => (
          <div>
            <ListItem key={index}> 
              <div>
                <ListItem>
                  <hr/>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.ProfessionalAssociation`}
                      component={AutoComplete}
                      floatingLabelText="Professional Association"
                      openOnFocus
                      filter={MUIAutoComplete.fuzzyFilter}
                      dataSourceConfig={{text: 'name', value: 'name'}}
                      dataSource={professionalAssociation.professionalAssociation}
                      validate={required}
                    />
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.YearsInPractice`}
                      component={SelectField}
                      hintText="Years in Practice"
                      floatingLabelText="Years in Practice"
                      validate={required}
                    >                      
                      <MenuItem value="1" primaryText="1" />
                      <MenuItem value="2" primaryText="2" />
                      <MenuItem value="2+" primaryText="2+" />
                    </Field>
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.PatientCompensationFund`}
                      component={Toggle}
                      label="Patient compensation fund"
                      labelPosition="right"
                    />
                  </div>
                  <div>
                  <Field
                      name={`${providers}.ProviderDetail.HoursWorkPerWeek`}
                      component={TextField}
                      hintText="Work hours per week"
                      floatingLabelText="Work hours per week"
                      validate={[required,hours]}
                    />
                  </div>
              </ListItem>
            </div>
          </ListItem>
        </div>
      ))}
    </div>
  </List>
)


const INNA = ({fields, meta: {error, submitFailed}}) => (
  <List>
    <div>
      <div style={{display: 'flex', justifyContent: 'center'}}> 
        <AddGroupIcon style={{color:'green'}}  onClick={(event) =>more(event,fields)}/>
      </div>
        {fields.map((providers, index) => (
          <div>
            <ListItem key={index}> 
              <div>
                <ListItem>
                  <hr/>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.ProfessionalAssociation`}
                      component={AutoComplete}
                      floatingLabelText="Professional Association"
                      openOnFocus
                      filter={MUIAutoComplete.fuzzyFilter}
                      dataSourceConfig={{text: 'name', value: 'name'}}
                      dataSource={professionalAssociation.professionalAssociation}
                      validate={required}
                    />
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.YearsInPractice`}
                      component={SelectField}
                      hintText="Years in Practice"
                      floatingLabelText="Years in Practice"
                      validate={required}
                    >                      
                      <MenuItem value="1" primaryText="1" />
                      <MenuItem value="2" primaryText="2" />
                      <MenuItem value="2+" primaryText="2+" />
                    </Field>
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.RiskManagementDiscount`}
                      component={Toggle}
                      label="Risk management discount"
                      labelPosition="right"
                    />
                  </div>
                  <div>
                  <Field
                      name={`${providers}.ProviderDetail.HoursWorkPerWeek`}
                      component={TextField}
                      hintText="Work hours per week"
                      floatingLabelText="Work hours per week"
                      validate={[required,hours]}
                    />
                  </div>
              </ListItem>
            </div>
          </ListItem>
        </div>
      ))}
    </div>
  </List>
)



const INAP = ({fields, meta: {error, submitFailed}}) => (
  <List>
    <div>
      <div style={{display: 'flex', justifyContent: 'center'}}> 
        <AddGroupIcon style={{color:'green'}}  onClick={(event) =>more(event,fields)}/>
      </div>
        {fields.map((providers, index) => (
          <div>
            <ListItem key={index}> 
              <div>
                <ListItem>
                  <hr/>                  
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.ProviderClass`}
                      component={SelectField}
                      hintText="Provider Class"
                      floatingLabelText="Provider Class"
                      validate={required}
                    >
                      <MenuItem value="Optometrist" primaryText="Optometrist" />
                      <MenuItem value="Optician" primaryText="Optician" />
                      <MenuItem value="Ophthalmic Technologist" primaryText="Ophthalmic Technologist" />
                      <MenuItem value="Audiologist (excluding IONM)" primaryText="Audiologist (excluding IONM)" />
                      <MenuItem value="Hearing Therapist" primaryText="Hearing Therapist" />
                      <MenuItem value="Speech Pathologist" primaryText="Speech Pathologist" />
                      <MenuItem value="Speech Therapist" primaryText="Speech Therapist" />
                      <MenuItem value="Respiratory Therapist" primaryText="Respiratory Therapist" />
                      <MenuItem value="Respiratory Therapy Assistant / Technician / Technologist" primaryText="Respiratory Therapy Assistant / Technician / Technologist" />
                      <MenuItem value="Orthotist / Prosthetist" primaryText="Orthotist / Prosthetist" />
                      <MenuItem value="Dietitian / Nutritionist" primaryText="Dietitian / Nutritionist" />
                      <MenuItem value="Social Worker" primaryText="Social Worker" />
                      <MenuItem value="Counselor" primaryText="Counselor" />
                      <MenuItem value="Marriage / Family Therapist" primaryText="Marriage / Family Therapist" />
                      <MenuItem value="Psychologist" primaryText="Psychologist" />
                      <MenuItem value="Occupational Therapist" primaryText="Occupational Therapist" />
                      <MenuItem value="Occupational Therapy Assistant" primaryText="Occupational Therapy Assistant" />
                      <MenuItem value="Physical Therapist" primaryText="Physical Therapist" />
                      <MenuItem value="Physical Therapy Assistant" primaryText="Physical Therapy Assistant" />
                      <MenuItem value="Athletic Trainer" primaryText="Athletic Trainer" />
                      <MenuItem value="Non-certified Fitness Professional" primaryText="Non-certified Fitness Professional" />
                      <MenuItem value="Yoga / Pilates Instructor" primaryText="Yoga / Pilates Instructor" />
                      <MenuItem value="Certified Fitness Professional" primaryText="Certified Fitness Professional" />
                      <MenuItem value="Biomedical Technician/Technologist" primaryText="Biomedical Technician/Technologist" />
                      <MenuItem value="Blood Bank Technician/Technologist" primaryText="Blood Bank Technician/Technologist" />
                      <MenuItem value="Cardiology Technician/Technologist" primaryText="Cardiology Technician/Technologist" />
                      <MenuItem value="Certified Lab Technician/Technologist" primaryText="Certified Lab Technician/Technologist" />
                      <MenuItem value="Certified Medical Assistant" primaryText="Certified Medical Assistant" />
                      <MenuItem value="Clinical Lab Technician/Technologist" primaryText="Clinical Lab Technician/Technologist" />
                      <MenuItem value="Community Health Assistant" primaryText="Community Health Assistant" />
                      <MenuItem value="Community Health Technician/Technologist" primaryText="Community Health Technician/Technologist" />
                      <MenuItem value="Diagnostic Medical Sonographer" primaryText="Diagnostic Medical Sonographer" />
                      <MenuItem value="Dialysis Technician/Technologist" primaryText="Dialysis Technician/Technologist" />
                      <MenuItem value="EEG Technician/Technologist" primaryText="EEG Technician/Technologist" />
                      <MenuItem value="EKG Technician/Technologist" primaryText="EKG Technician/Technologist" />
                      <MenuItem value="Electrologist" primaryText="Electrologist" />
                      <MenuItem value="Histologic Technician/Technologist" primaryText="Histologic Technician/Technologist" />
                      <MenuItem value="Medical Laboratory Technician/Technologist" primaryText="Medical Laboratory Technician/Technologist" />
                      <MenuItem value="Medical Technician - NOC" primaryText="Medical Technician - NOC" />
                      <MenuItem value="Medical Technician/Technologist Assistant - NOC" primaryText="Medical Technician/Technologist Assistant - NOC" />
                      <MenuItem value="Medical Technologist - NOC" primaryText="Medical Technologist - NOC" />
                      <MenuItem value="Medical Assistant" primaryText="Medical Assistant" />
                      <MenuItem value="Medical Records Administrator" primaryText="Medical Records Administrator" />
                      <MenuItem value="Medical Records Technician/Technologist" primaryText="Medical Records Technician/Technologist" />
                      <MenuItem value="Nuclear Medical Technician/Technologist" primaryText="Nuclear Medical Technician/Technologist" />
                      <MenuItem value="Optometric Technician" primaryText="Optometric Technician" />
                      <MenuItem value="Orthopedic Technician" primaryText="Orthopedic Technician" />
                      <MenuItem value="Pathology Assistant" primaryText="Pathology Assistant" />
                      <MenuItem value="Phlebotomist" primaryText="Phlebotomist" />
                      <MenuItem value="Polysomnographic Sleep Technician" primaryText="Polysomnographic Sleep Technician" />
                      <MenuItem value="Radiation Therapist" primaryText="Radiation Therapist" />
                      <MenuItem value="Radiology Technician/Technologist" primaryText="Radiology Technician/Technologist" />
                      <MenuItem value="Sonographic Technician/Technologist" primaryText="Sonographic Technician/Technologist" />
                      <MenuItem value="Surgical Technician/Technologist" primaryText="Surgical Technician/Technologist" />
                      <MenuItem value="X-Ray Machine Technician/Technologist" primaryText="X-Ray Machine Technician/Technologist" />
                      <MenuItem value="Pharmacist" primaryText="Pharmacist" />
                      <MenuItem value="Pharmacy Technician" primaryText="Pharmacy Technician" />
                      <MenuItem value="EMT - Basic / Intermediate" primaryText="EMT - Basic / Intermediate" />
                      <MenuItem value="EMT - Volunteer" primaryText="EMT - Volunteer" />
                      <MenuItem value="EMT - Paramedic" primaryText="EMT - Paramedic" />
                      <MenuItem value="Registered Nurse" primaryText="Registered Nurse" />
                      <MenuItem value="Licensed Practical Nurse" primaryText="Licensed Practical Nurse" />
                      <MenuItem value="Licensed Vocational Nurse" primaryText="Licensed Vocational Nurse" /> 
                    </Field>
                  </div>
                  
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.ProfessionalAssociation`}
                      component={AutoComplete}
                      floatingLabelText="Professional Association"
                      openOnFocus
                      filter={MUIAutoComplete.fuzzyFilter}
                      dataSourceConfig={{text: 'name', value: 'name'}}
                      dataSource={professionalAssociation.professionalAssociation}
                      validate={required}
                    />
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.YearsInPractice`}
                      component={SelectField}
                      hintText="Years in Practice"
                      floatingLabelText="Years in Practice"
                      validate={required}
                    >                      
                      <MenuItem value="1" primaryText="1" />
                      <MenuItem value="2" primaryText="2" />
                      <MenuItem value="2+" primaryText="2+" />
                    </Field>
                  </div>
                  <div>
                  <Field
                      name={`${providers}.ProviderDetail.HoursWorkPerWeek`}
                      component={TextField}
                      hintText="Work hours per week"
                      floatingLabelText="Work hours per week"
                      validate={[required,hours]}
                    />
                  </div>
                  <div>
                  <Field
                      name={`${providers}.ProviderDetail.ScheduleRatingFactor`}
                      component={TextField}
                      hintText="Schedule Rating Factor"
                      floatingLabelText="Schedule Rating Factor"
                      validate={[required, numeric]}
                    />
                  </div>
              </ListItem>
            </div>
          </ListItem>
        </div>
      ))}
    </div>
  </List>
)


const INNP = ({fields, meta: {error, submitFailed}}) => (
  <List>
    <div>
      <div style={{display: 'flex', justifyContent: 'center'}}> 
        <AddGroupIcon style={{color:'green'}}  onClick={(event) =>more(event,fields)}/>
      </div>
        {fields.map((providers, index) => (
          <div>
            <ListItem key={index}> 
              <div>
                <ListItem>
                  <hr/>                  
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.ProviderClass`}
                      component={SelectField}
                      hintText="Provider Class"
                      floatingLabelText="Provider Class"
                      validate={required}
                    >
                      <MenuItem value="Optometrist" primaryText="Optometrist" />
                      <MenuItem value="Optician" primaryText="Optician" />
                      <MenuItem value="Ophthalmic Technologist" primaryText="Ophthalmic Technologist" />
                      <MenuItem value="Audiologist (excluding IONM)" primaryText="Audiologist (excluding IONM)" />
                      <MenuItem value="Hearing Therapist" primaryText="Hearing Therapist" />
                      <MenuItem value="Speech Pathologist" primaryText="Speech Pathologist" />
                      <MenuItem value="Speech Therapist" primaryText="Speech Therapist" />
                      <MenuItem value="Respiratory Therapist" primaryText="Respiratory Therapist" />
                      <MenuItem value="Respiratory Therapy Assistant / Technician / Technologist" primaryText="Respiratory Therapy Assistant / Technician / Technologist" />
                      <MenuItem value="Orthotist / Prosthetist" primaryText="Orthotist / Prosthetist" />
                      <MenuItem value="Dietitian / Nutritionist" primaryText="Dietitian / Nutritionist" />
                      <MenuItem value="Social Worker" primaryText="Social Worker" />
                      <MenuItem value="Counselor" primaryText="Counselor" />
                      <MenuItem value="Marriage / Family Therapist" primaryText="Marriage / Family Therapist" />
                      <MenuItem value="Psychologist" primaryText="Psychologist" />
                      <MenuItem value="Occupational Therapist" primaryText="Occupational Therapist" />
                      <MenuItem value="Occupational Therapy Assistant" primaryText="Occupational Therapy Assistant" />
                      <MenuItem value="Physical Therapist" primaryText="Physical Therapist" />
                      <MenuItem value="Physical Therapy Assistant" primaryText="Physical Therapy Assistant" />
                      <MenuItem value="Athletic Trainer" primaryText="Athletic Trainer" />
                      <MenuItem value="Non-certified Fitness Professional" primaryText="Non-certified Fitness Professional" />
                      <MenuItem value="Yoga / Pilates Instructor" primaryText="Yoga / Pilates Instructor" />
                      <MenuItem value="Certified Fitness Professional" primaryText="Certified Fitness Professional" />
                      <MenuItem value="Biomedical Technician/Technologist" primaryText="Biomedical Technician/Technologist" />
                      <MenuItem value="Blood Bank Technician/Technologist" primaryText="Blood Bank Technician/Technologist" />
                      <MenuItem value="Cardiology Technician/Technologist" primaryText="Cardiology Technician/Technologist" />
                      <MenuItem value="Certified Lab Technician/Technologist" primaryText="Certified Lab Technician/Technologist" />
                      <MenuItem value="Certified Medical Assistant" primaryText="Certified Medical Assistant" />
                      <MenuItem value="Clinical Lab Technician/Technologist" primaryText="Clinical Lab Technician/Technologist" />
                      <MenuItem value="Community Health Assistant" primaryText="Community Health Assistant" />
                      <MenuItem value="Community Health Technician/Technologist" primaryText="Community Health Technician/Technologist" />
                      <MenuItem value="Diagnostic Medical Sonographer" primaryText="Diagnostic Medical Sonographer" />
                      <MenuItem value="Dialysis Technician/Technologist" primaryText="Dialysis Technician/Technologist" />
                      <MenuItem value="EEG Technician/Technologist" primaryText="EEG Technician/Technologist" />
                      <MenuItem value="EKG Technician/Technologist" primaryText="EKG Technician/Technologist" />
                      <MenuItem value="Electrologist" primaryText="Electrologist" />
                      <MenuItem value="Histologic Technician/Technologist" primaryText="Histologic Technician/Technologist" />
                      <MenuItem value="Medical Laboratory Technician/Technologist" primaryText="Medical Laboratory Technician/Technologist" />
                      <MenuItem value="Medical Technician - NOC" primaryText="Medical Technician - NOC" />
                      <MenuItem value="Medical Technician/Technologist Assistant - NOC" primaryText="Medical Technician/Technologist Assistant - NOC" />
                      <MenuItem value="Medical Technologist - NOC" primaryText="Medical Technologist - NOC" />
                      <MenuItem value="Medical Assistant" primaryText="Medical Assistant" />
                      <MenuItem value="Medical Records Administrator" primaryText="Medical Records Administrator" />
                      <MenuItem value="Medical Records Technician/Technologist" primaryText="Medical Records Technician/Technologist" />
                      <MenuItem value="Nuclear Medical Technician/Technologist" primaryText="Nuclear Medical Technician/Technologist" />
                      <MenuItem value="Optometric Technician" primaryText="Optometric Technician" />
                      <MenuItem value="Orthopedic Technician" primaryText="Orthopedic Technician" />
                      <MenuItem value="Pathology Assistant" primaryText="Pathology Assistant" />
                      <MenuItem value="Phlebotomist" primaryText="Phlebotomist" />
                      <MenuItem value="Polysomnographic Sleep Technician" primaryText="Polysomnographic Sleep Technician" />
                      <MenuItem value="Radiation Therapist" primaryText="Radiation Therapist" />
                      <MenuItem value="Radiology Technician/Technologist" primaryText="Radiology Technician/Technologist" />
                      <MenuItem value="Sonographic Technician/Technologist" primaryText="Sonographic Technician/Technologist" />
                      <MenuItem value="Surgical Technician/Technologist" primaryText="Surgical Technician/Technologist" />
                      <MenuItem value="X-Ray Machine Technician/Technologist" primaryText="X-Ray Machine Technician/Technologist" />
                      <MenuItem value="Pharmacist" primaryText="Pharmacist" />
                      <MenuItem value="Pharmacy Technician" primaryText="Pharmacy Technician" />
                      <MenuItem value="EMT - Basic / Intermediate" primaryText="EMT - Basic / Intermediate" />
                      <MenuItem value="EMT - Volunteer" primaryText="EMT - Volunteer" />
                      <MenuItem value="EMT - Paramedic" primaryText="EMT - Paramedic" />
                      <MenuItem value="Registered Nurse" primaryText="Registered Nurse" />
                      <MenuItem value="Licensed Practical Nurse" primaryText="Licensed Practical Nurse" />
                      <MenuItem value="Licensed Vocational Nurse" primaryText="Licensed Vocational Nurse" /> 
                    </Field>
                  </div>
                  
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.ProfessionalAssociation`}
                      component={AutoComplete}
                      floatingLabelText="Professional Association"
                      openOnFocus
                      filter={MUIAutoComplete.fuzzyFilter}
                      dataSourceConfig={{text: 'name', value: 'name'}}
                      dataSource={professionalAssociation.professionalAssociation}
                      validate={required}
                    />
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.YearsInPractice`}
                      component={SelectField}
                      hintText="Years in Practice"
                      floatingLabelText="Years in Practice"
                      validate={required}
                    >                      
                      <MenuItem value="1" primaryText="1" />
                      <MenuItem value="2" primaryText="2" />
                      <MenuItem value="2+" primaryText="2+" />
                    </Field>
                  </div>
                  <div></div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.RiskManagementDiscount`}
                      component={Toggle}
                      label="Risk management discount"
                      labelPosition="right"
                    />
                  </div>
                  <div>
                  <Field
                      name={`${providers}.ProviderDetail.HoursWorkPerWeek`}
                      component={TextField}
                      hintText="Work hours per week"
                      floatingLabelText="Work hours per week"
                      validate={[required,hours]}
                    />
                  </div>
                  <div>
                  <Field
                      name={`${providers}.ProviderDetail.ScheduleRatingFactor`}
                      component={TextField}
                      hintText="Schedule Rating Factor"
                      floatingLabelText="Schedule Rating Factor"
                      validate={[required, numeric]}
                    />
                  </div>
              </ListItem>
            </div>
          </ListItem>
        </div>
      ))}
    </div>
  </List>
)

const INLP = ({fields, meta: {error, submitFailed}}) => (
  <List>
    <div>
      <div style={{display: 'flex', justifyContent: 'center'}}> 
        <AddGroupIcon style={{color:'green'}}  onClick={(event) =>more(event,fields)}/>
      </div>
        {fields.map((providers, index) => (
          <div>
            <ListItem key={index}> 
              <div>
                <ListItem>
                  <hr/>                  
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.ProviderClass`}
                      component={SelectField}
                      hintText="Provider Class"
                      floatingLabelText="Provider Class"
                      validate={required}
                    >
                      <MenuItem value="Optometrist" primaryText="Optometrist" />
                      <MenuItem value="Optician" primaryText="Optician" />
                      <MenuItem value="Ophthalmic Technologist" primaryText="Ophthalmic Technologist" />
                      <MenuItem value="Audiologist (excluding IONM)" primaryText="Audiologist (excluding IONM)" />
                      <MenuItem value="Hearing Therapist" primaryText="Hearing Therapist" />
                      <MenuItem value="Speech Pathologist" primaryText="Speech Pathologist" />
                      <MenuItem value="Speech Therapist" primaryText="Speech Therapist" />
                      <MenuItem value="Respiratory Therapist" primaryText="Respiratory Therapist" />
                      <MenuItem value="Respiratory Therapy Assistant / Technician / Technologist" primaryText="Respiratory Therapy Assistant / Technician / Technologist" />
                      <MenuItem value="Orthotist / Prosthetist" primaryText="Orthotist / Prosthetist" />
                      <MenuItem value="Dietitian / Nutritionist" primaryText="Dietitian / Nutritionist" />
                      <MenuItem value="Social Worker" primaryText="Social Worker" />
                      <MenuItem value="Counselor" primaryText="Counselor" />
                      <MenuItem value="Marriage / Family Therapist" primaryText="Marriage / Family Therapist" />
                      <MenuItem value="Psychologist" primaryText="Psychologist" />
                      <MenuItem value="Occupational Therapist" primaryText="Occupational Therapist" />
                      <MenuItem value="Occupational Therapy Assistant" primaryText="Occupational Therapy Assistant" />
                      <MenuItem value="Physical Therapist" primaryText="Physical Therapist" />
                      <MenuItem value="Physical Therapy Assistant" primaryText="Physical Therapy Assistant" />
                      <MenuItem value="Athletic Trainer" primaryText="Athletic Trainer" />
                      <MenuItem value="Non-certified Fitness Professional" primaryText="Non-certified Fitness Professional" />
                      <MenuItem value="Yoga / Pilates Instructor" primaryText="Yoga / Pilates Instructor" />
                      <MenuItem value="Certified Fitness Professional" primaryText="Certified Fitness Professional" />
                      <MenuItem value="Biomedical Technician/Technologist" primaryText="Biomedical Technician/Technologist" />
                      <MenuItem value="Blood Bank Technician/Technologist" primaryText="Blood Bank Technician/Technologist" />
                      <MenuItem value="Cardiology Technician/Technologist" primaryText="Cardiology Technician/Technologist" />
                      <MenuItem value="Certified Lab Technician/Technologist" primaryText="Certified Lab Technician/Technologist" />
                      <MenuItem value="Certified Medical Assistant" primaryText="Certified Medical Assistant" />
                      <MenuItem value="Clinical Lab Technician/Technologist" primaryText="Clinical Lab Technician/Technologist" />
                      <MenuItem value="Community Health Assistant" primaryText="Community Health Assistant" />
                      <MenuItem value="Community Health Technician/Technologist" primaryText="Community Health Technician/Technologist" />
                      <MenuItem value="Diagnostic Medical Sonographer" primaryText="Diagnostic Medical Sonographer" />
                      <MenuItem value="Dialysis Technician/Technologist" primaryText="Dialysis Technician/Technologist" />
                      <MenuItem value="EEG Technician/Technologist" primaryText="EEG Technician/Technologist" />
                      <MenuItem value="EKG Technician/Technologist" primaryText="EKG Technician/Technologist" />
                      <MenuItem value="Electrologist" primaryText="Electrologist" />
                      <MenuItem value="Histologic Technician/Technologist" primaryText="Histologic Technician/Technologist" />
                      <MenuItem value="Medical Laboratory Technician/Technologist" primaryText="Medical Laboratory Technician/Technologist" />
                      <MenuItem value="Medical Technician - NOC" primaryText="Medical Technician - NOC" />
                      <MenuItem value="Medical Technician/Technologist Assistant - NOC" primaryText="Medical Technician/Technologist Assistant - NOC" />
                      <MenuItem value="Medical Technologist - NOC" primaryText="Medical Technologist - NOC" />
                      <MenuItem value="Medical Assistant" primaryText="Medical Assistant" />
                      <MenuItem value="Medical Records Administrator" primaryText="Medical Records Administrator" />
                      <MenuItem value="Medical Records Technician/Technologist" primaryText="Medical Records Technician/Technologist" />
                      <MenuItem value="Nuclear Medical Technician/Technologist" primaryText="Nuclear Medical Technician/Technologist" />
                      <MenuItem value="Optometric Technician" primaryText="Optometric Technician" />
                      <MenuItem value="Orthopedic Technician" primaryText="Orthopedic Technician" />
                      <MenuItem value="Pathology Assistant" primaryText="Pathology Assistant" />
                      <MenuItem value="Phlebotomist" primaryText="Phlebotomist" />
                      <MenuItem value="Polysomnographic Sleep Technician" primaryText="Polysomnographic Sleep Technician" />
                      <MenuItem value="Radiation Therapist" primaryText="Radiation Therapist" />
                      <MenuItem value="Radiology Technician/Technologist" primaryText="Radiology Technician/Technologist" />
                      <MenuItem value="Sonographic Technician/Technologist" primaryText="Sonographic Technician/Technologist" />
                      <MenuItem value="Surgical Technician/Technologist" primaryText="Surgical Technician/Technologist" />
                      <MenuItem value="X-Ray Machine Technician/Technologist" primaryText="X-Ray Machine Technician/Technologist" />
                      <MenuItem value="Pharmacist" primaryText="Pharmacist" />
                      <MenuItem value="Pharmacy Technician" primaryText="Pharmacy Technician" />
                      <MenuItem value="EMT - Basic / Intermediate" primaryText="EMT - Basic / Intermediate" />
                      <MenuItem value="EMT - Volunteer" primaryText="EMT - Volunteer" />
                      <MenuItem value="EMT - Paramedic" primaryText="EMT - Paramedic" />
                      <MenuItem value="Registered Nurse" primaryText="Registered Nurse" />
                      <MenuItem value="Licensed Practical Nurse" primaryText="Licensed Practical Nurse" />
                      <MenuItem value="Licensed Vocational Nurse" primaryText="Licensed Vocational Nurse" /> 
                    </Field>
                  </div>
                  
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.ProfessionalAssociation`}
                      component={AutoComplete}
                      floatingLabelText="Professional Association"
                      openOnFocus
                      filter={MUIAutoComplete.fuzzyFilter}
                      dataSourceConfig={{text: 'name', value: 'name'}}
                      dataSource={professionalAssociation.professionalAssociation}
                      validate={required}
                    />
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.YearsInPractice`}
                      component={SelectField}
                      hintText="Years in Practice"
                      floatingLabelText="Years in Practice"
                      validate={required}
                    >                      
                      <MenuItem value="1" primaryText="1" />
                      <MenuItem value="2" primaryText="2" />
                      <MenuItem value="2+" primaryText="2+" />
                    </Field>
                  </div>
                  <div></div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.PatientCompensationFund`}
                      component={Toggle}
                      label="Patient compensation fund"
                      labelPosition="right"
                    />
                  </div>
                  <div>
                  <Field
                      name={`${providers}.ProviderDetail.HoursWorkPerWeek`}
                      component={TextField}
                      hintText="Work hours per week"
                      floatingLabelText="Work hours per week"
                      validate={[required,hours]}
                    />
                  </div>
                  <div>
                  <Field
                      name={`${providers}.ProviderDetail.ScheduleRatingFactor`}
                      component={TextField}
                      hintText="Schedule Rating Factor"
                      floatingLabelText="Schedule Rating Factor"
                      validate={[required, numeric]}
                    />
                  </div>
              </ListItem>
            </div>
          </ListItem>
        </div>
      ))}
    </div>
  </List>
)


const INAM = ({fields, meta: {error, submitFailed}}) => (
  <List>
    <div>
      <div style={{display: 'flex', justifyContent: 'center'}}> 
        <AddGroupIcon style={{color:'green'}}  onClick={(event) =>more(event,fields)}/>
      </div>
        {fields.map((providers, index) => (
          <div>
            <ListItem key={index}> 
              <div>
                <ListItem>
                  <hr/>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.ProviderClass`}
                      component={SelectField}
                      hintText="Provider Class"
                      floatingLabelText="Provider Class"
                      validate={required}
                    >                      
                      <MenuItem value="Accountant" primaryText="Accountant" />
                      <MenuItem value="Advertiser" primaryText="Advertiser" />
                      <MenuItem value="Beauty Salon" primaryText="Beauty Salon" />
                      <MenuItem value="Consultant" primaryText="Consultant" />
                      <MenuItem value="Field Inspector" primaryText="Field Inspector" />
                      <MenuItem value="Graphic Designer" primaryText="Graphic Designer" />
                      <MenuItem value="Insurance Agent" primaryText="Insurance Agent" />
                      <MenuItem value="Interior Designer" primaryText="Interior Designer" />
                      <MenuItem value="Interpreter/ Translator" primaryText="Interpreter/ Translator" />
                      <MenuItem value="Landscaper" primaryText="Landscaper" />
                      <MenuItem value="Notary" primaryText="Notary" />
                      <MenuItem value="Photographer/Videographer" primaryText="Photographer/Videographer" />
                      <MenuItem value="Printing" primaryText="Printing" />
                      <MenuItem value="Publisher" primaryText="Publisher" />
                      <MenuItem value="Real Estate Agent" primaryText="Real Estate Agent" />
                      <MenuItem value="Travel Agent" primaryText="Travel Agent" />                     
                    </Field>
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.ProfessionalAssociation`}
                      component={AutoComplete}
                      floatingLabelText="Professional Association"
                      openOnFocus
                      filter={MUIAutoComplete.fuzzyFilter}
                      dataSourceConfig={{text: 'name', value: 'name'}}
                      dataSource={professionalAssociation.professionalAssociation}
                      validate={required}
                    />
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.YearsInPractice`}
                      component={SelectField}
                      hintText="Years in Practice"
                      floatingLabelText="Years in Practice"
                      validate={required}
                    >                      
                      <MenuItem value="1" primaryText="1" />
                      <MenuItem value="2" primaryText="2" />
                      <MenuItem value="2+" primaryText="2+" />
                    </Field>
                  </div>
                  <div>
                  <Field
                      name={`${providers}.ProviderDetail.HoursWorkPerWeek`}
                      component={TextField}
                      hintText="Work hours per week"
                      floatingLabelText="Work hours per week"
                      validate={[required,hours]}
                    />
                  </div>
                  <div>
                  <Field
                      name={`${providers}.ProviderDetail.MeetsStudentQualification`}
                      component={TextField}
                      hintText="Meets Student Qualification"
                      floatingLabelText="Meets Student Qualification"
                      validate={[required, numeric]}
                    />
                  </div>
                  <div>
                  <Field
                      name={`${providers}.ProviderDetail.UseOfWrittenContractsFactor`}
                      component={TextField}
                      hintText="Written contracts factor"
                      floatingLabelText="Written contracts factor"
                      validate={[required, numeric]}
                    />
                  </div>
              </ListItem>
            </div>
          </ListItem>
        </div>
      ))}
    </div>
  </List>
)

const INLM = ({fields, meta: {error, submitFailed}}) => (
  <List>
    <div>
      <div style={{display: 'flex', justifyContent: 'center'}}> 
        <AddGroupIcon style={{color:'green'}}  onClick={(event) =>more(event,fields)}/>
      </div>
        {fields.map((providers, index) => (
          <div>
            <ListItem key={index}> 
              <div>
                <ListItem>
                  <hr/>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.ProviderClass`}
                      component={SelectField}
                      hintText="Provider Class"
                      floatingLabelText="Provider Class"
                      validate={required}
                    >                      
                      <MenuItem value="Accountant" primaryText="Accountant" />
                      <MenuItem value="Advertiser" primaryText="Advertiser" />
                      <MenuItem value="Beauty Salon" primaryText="Beauty Salon" />
                      <MenuItem value="Consultant" primaryText="Consultant" />
                      <MenuItem value="Field Inspector" primaryText="Field Inspector" />
                      <MenuItem value="Graphic Designer" primaryText="Graphic Designer" />
                      <MenuItem value="Insurance Agent" primaryText="Insurance Agent" />
                      <MenuItem value="Interior Designer" primaryText="Interior Designer" />
                      <MenuItem value="Interpreter/ Translator" primaryText="Interpreter/ Translator" />
                      <MenuItem value="Landscaper" primaryText="Landscaper" />
                      <MenuItem value="Notary" primaryText="Notary" />
                      <MenuItem value="Photographer/Videographer" primaryText="Photographer/Videographer" />
                      <MenuItem value="Printing" primaryText="Printing" />
                      <MenuItem value="Publisher" primaryText="Publisher" />
                      <MenuItem value="Real Estate Agent" primaryText="Real Estate Agent" />
                      <MenuItem value="Travel Agent" primaryText="Travel Agent" />                     
                    </Field>
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.ProfessionalAssociation`}
                      component={AutoComplete}
                      floatingLabelText="Professional Association"
                      openOnFocus
                      filter={MUIAutoComplete.fuzzyFilter}
                      dataSourceConfig={{text: 'name', value: 'name'}}
                      dataSource={professionalAssociation.professionalAssociation}
                      validate={required}
                    />
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.YearsInPractice`}
                      component={SelectField}
                      hintText="Years in Practice"
                      floatingLabelText="Years in Practice"
                      validate={required}
                    >                      
                      <MenuItem value="1" primaryText="1" />
                      <MenuItem value="2" primaryText="2" />
                      <MenuItem value="2+" primaryText="2+" />
                    </Field>
                  </div>
                  <div></div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.PatientCompensationFund`}
                      component={Toggle}
                      label="Patient compensation fund"
                      labelPosition="right"
                    />
                  </div>
                  <div>
                  <Field
                      name={`${providers}.ProviderDetail.HoursWorkPerWeek`}
                      component={TextField}
                      hintText="Work hours per week"
                      floatingLabelText="Work hours per week"
                      validate={[required,hours]}
                    />
                  </div>
                  <div>
                  <Field
                      name={`${providers}.ProviderDetail.MeetsStudentQualification`}
                      component={TextField}
                      hintText="Meets Student Qualification"
                      floatingLabelText="Meets Student Qualification"
                      validate={[required, numeric]}
                    />
                  </div>
                  <div>
                  <Field
                      name={`${providers}.ProviderDetail.UseOfWrittenContractsFactor`}
                      component={TextField}
                      hintText="Written contracts factor"
                      floatingLabelText="Written contracts factor"
                      validate={[required, numeric]}
                    />
                  </div>
              </ListItem>
            </div>
          </ListItem>
        </div>
      ))}
    </div>
  </List>
)

const INNM = ({fields, meta: {error, submitFailed}}) => (
  <List>
    <div>
      <div style={{display: 'flex', justifyContent: 'center'}}> 
        <AddGroupIcon style={{color:'green'}}  onClick={(event) =>more(event,fields)}/>
      </div>
        {fields.map((providers, index) => (
          <div>
            <ListItem key={index}> 
              <div>
                <ListItem>
                  <hr/>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.ProviderClass`}
                      component={SelectField}
                      hintText="Provider Class"
                      floatingLabelText="Provider Class"
                      validate={required}
                    >                      
                      <MenuItem value="Accountant" primaryText="Accountant" />
                      <MenuItem value="Advertiser" primaryText="Advertiser" />
                      <MenuItem value="Beauty Salon" primaryText="Beauty Salon" />
                      <MenuItem value="Consultant" primaryText="Consultant" />
                      <MenuItem value="Field Inspector" primaryText="Field Inspector" />
                      <MenuItem value="Graphic Designer" primaryText="Graphic Designer" />
                      <MenuItem value="Insurance Agent" primaryText="Insurance Agent" />
                      <MenuItem value="Interior Designer" primaryText="Interior Designer" />
                      <MenuItem value="Interpreter/ Translator" primaryText="Interpreter/ Translator" />
                      <MenuItem value="Landscaper" primaryText="Landscaper" />
                      <MenuItem value="Notary" primaryText="Notary" />
                      <MenuItem value="Photographer/Videographer" primaryText="Photographer/Videographer" />
                      <MenuItem value="Printing" primaryText="Printing" />
                      <MenuItem value="Publisher" primaryText="Publisher" />
                      <MenuItem value="Real Estate Agent" primaryText="Real Estate Agent" />
                      <MenuItem value="Travel Agent" primaryText="Travel Agent" />                     
                    </Field>
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.ProfessionalAssociation`}
                      component={AutoComplete}
                      floatingLabelText="Professional Association"
                      openOnFocus
                      filter={MUIAutoComplete.fuzzyFilter}
                      dataSourceConfig={{text: 'name', value: 'name'}}
                      dataSource={professionalAssociation.professionalAssociation}
                      validate={required}
                    />
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.YearsInPractice`}
                      component={SelectField}
                      hintText="Years in Practice"
                      floatingLabelText="Years in Practice"
                      validate={required}
                    >                      
                      <MenuItem value="1" primaryText="1" />
                      <MenuItem value="2" primaryText="2" />
                      <MenuItem value="2+" primaryText="2+" />
                    </Field>
                  </div>
                  <div></div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.RiskManagementDiscount`}
                      component={Toggle}
                      label="Risk management discount"
                      labelPosition="right"
                    />
                  </div>
                  <div>
                  <Field
                      name={`${providers}.ProviderDetail.HoursWorkPerWeek`}
                      component={TextField}
                      hintText="Work hours per week"
                      floatingLabelText="Work hours per week"
                      validate={[required,hours]}
                    />
                  </div>
                  <div>
                  <Field
                      name={`${providers}.ProviderDetail.MeetsStudentQualification`}
                      component={TextField}
                      hintText="Meets Student Qualification"
                      floatingLabelText="Meets Student Qualification"
                      validate={[required, numeric]}
                    />
                  </div>
                  <div>
                  <Field
                      name={`${providers}.ProviderDetail.UseOfWrittenContractsFactor`}
                      component={TextField}
                      hintText="Written contracts factor"
                      floatingLabelText="Written contracts factor"
                      validate={[required, numeric]}
                    />
                  </div>
              </ListItem>
            </div>
          </ListItem>
        </div>
      ))}
    </div>
  </List>
)

const GCAA = ({fields, meta: {error, submitFailed}}) => (
  <List>
    <div>
      <div style={{display: 'flex', justifyContent: 'center'}}> 
        <AddGroupIcon style={{color:'green'}}  onClick={(event) =>more(event,fields)}/>
      </div>
        {fields.map((providers, index) => (
          <div>
            <ListItem key={index}> 
              <div>
                <ListItem>
                  <hr/>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.FirstName`}
                      component={TextField}
                      hintText="First Name"
                      floatingLabelText="First Name"
                      validate={[required,alphanumeric]}
                    />
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.MiddleInitial`}
                      component={TextField}
                      format={null}
                      hintText="Middle Initial"
                      floatingLabelText="Middle Initial"
                      validate={[required,alphabets]}
                    />
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.LastName`}
                      component={TextField}
                      hintText="Last Name"
                      floatingLabelText="Last Name"
                      validate={[required, alphanumeric]}
                      />
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.ProfessionalAssociation`}
                      component={AutoComplete}
                      floatingLabelText="Professional Association"
                      openOnFocus
                      filter={MUIAutoComplete.fuzzyFilter}
                      dataSourceConfig={{text: 'name', value: 'name'}}
                      dataSource={professionalAssociation.professionalAssociation}
                      validate={required}
                    />
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.YearsOfPolicy`}
                      component={SelectField}
                      hintText="Years of Policy"
                      floatingLabelText="Years of Policy"
                      validate={required}
                    >                      
                      <MenuItem value="1" primaryText="1" />
                      <MenuItem value="2" primaryText="2" />
                      <MenuItem value="3" primaryText="3" />
                      <MenuItem value="4" primaryText="4" />
                      <MenuItem value="4+" primaryText="4+" />
                    </Field>
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.YearsInPractice`}
                      component={SelectField}
                      hintText="Years in Practice"
                      floatingLabelText="Years in Practice"
                      validate={required}
                    >                      
                      <MenuItem value="1" primaryText="1" />
                      <MenuItem value="2" primaryText="2" />
                      <MenuItem value="2+" primaryText="2+" />
                    </Field>
                  </div>
                  <div>
                  <Field
                      name={`${providers}.ProviderDetail.HoursWorkPerWeek`}
                      component={TextField}
                      hintText="Work hours per week"
                      floatingLabelText="Work hours per week"
                      validate={[required,hours]}
                    />
                  </div>
              </ListItem>
            </div>
          </ListItem>
        </div>
      ))}
    </div>
  </List>
)


const GCLA = ({fields, meta: {error, submitFailed}}) => (
  <List>
    <div>
      <div style={{display: 'flex', justifyContent: 'center'}}> 
        <AddGroupIcon style={{color:'green'}}  onClick={(event) =>more(event,fields)}/>
      </div>
        {fields.map((providers, index) => (
          <div>
            <ListItem key={index}> 
              <div>
                <ListItem>
                  <hr/>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.FirstName`}
                      component={TextField}
                      hintText="First Name"
                      floatingLabelText="First Name"
                      validate={[required,alphanumeric]}
                    />
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.MiddleInitial`}
                      component={TextField}
                      format={null}
                      hintText="Middle Initial"
                      floatingLabelText="Middle Initial"
                      validate={[required,alphabets]}
                    />
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.LastName`}
                      component={TextField}
                      hintText="Last Name"
                      floatingLabelText="Last Name"
                      validate={[required, alphanumeric]}
                      />
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.ProfessionalAssociation`}
                      component={AutoComplete}
                      floatingLabelText="Professional Association"
                      openOnFocus
                      filter={MUIAutoComplete.fuzzyFilter}
                      dataSourceConfig={{text: 'name', value: 'name'}}
                      dataSource={professionalAssociation.professionalAssociation}
                      validate={required}
                    />
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.YearsOfPolicy`}
                      component={SelectField}
                      hintText="Years of Policy"
                      floatingLabelText="Years of Policy"
                      validate={required}
                    >                      
                      <MenuItem value="1" primaryText="1" />
                      <MenuItem value="2" primaryText="2" />
                      <MenuItem value="3" primaryText="3" />
                      <MenuItem value="4" primaryText="4" />
                      <MenuItem value="4+" primaryText="4+" />
                    </Field>
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.YearsInPractice`}
                      component={SelectField}
                      hintText="Years in Practice"
                      floatingLabelText="Years in Practice"
                      validate={required}
                    >                      
                      <MenuItem value="1" primaryText="1" />
                      <MenuItem value="2" primaryText="2" />
                      <MenuItem value="2+" primaryText="2+" />
                    </Field>
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.PatientCompensationFund`}
                      component={Toggle}
                      label="Patient compensation fund"
                      labelPosition="right"
                    />
                  </div>
                  <div>
                  <Field
                      name={`${providers}.ProviderDetail.HoursWorkPerWeek`}
                      component={TextField}
                      hintText="Work hours per week"
                      floatingLabelText="Work hours per week"
                      validate={[required,hours]}
                    />
                  </div>
              </ListItem>
            </div>
          </ListItem>
        </div>
      ))}
    </div>
  </List>
)


const GCNA = ({fields, meta: {error, submitFailed}}) => (
  <List>
    <div>
      <div style={{display: 'flex', justifyContent: 'center'}}> 
        <AddGroupIcon style={{color:'green'}}  onClick={(event) =>more(event,fields)}/>
      </div>
        {fields.map((providers, index) => (
          <div>
            <ListItem key={index}> 
              <div>
                <ListItem>
                  <hr/>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.FirstName`}
                      component={TextField}
                      hintText="First Name"
                      floatingLabelText="First Name"
                      validate={[required,alphanumeric]}
                    />
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.MiddleInitial`}
                      component={TextField}
                      format={null}
                      hintText="Middle Initial"
                      floatingLabelText="Middle Initial"
                      validate={[required,alphabets]}
                    />
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.LastName`}
                      component={TextField}
                      hintText="Last Name"
                      floatingLabelText="Last Name"
                      validate={[required, alphanumeric]}
                      />
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.ProfessionalAssociation`}
                      component={AutoComplete}
                      floatingLabelText="Professional Association"
                      openOnFocus
                      filter={MUIAutoComplete.fuzzyFilter}
                      dataSourceConfig={{text: 'name', value: 'name'}}
                      dataSource={professionalAssociation.professionalAssociation}
                      validate={required}
                    />
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.YearsOfPolicy`}
                      component={SelectField}
                      hintText="Years of Policy"
                      floatingLabelText="Years of Policy"
                      validate={required}
                    >                      
                      <MenuItem value="1" primaryText="1" />
                      <MenuItem value="2" primaryText="2" />
                      <MenuItem value="3" primaryText="3" />
                      <MenuItem value="4" primaryText="4" />
                      <MenuItem value="4+" primaryText="4+" />
                    </Field>
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.YearsInPractice`}
                      component={SelectField}
                      hintText="Years in Practice"
                      floatingLabelText="Years in Practice"
                      validate={required}
                    >                      
                      <MenuItem value="1" primaryText="1" />
                      <MenuItem value="2" primaryText="2" />
                      <MenuItem value="2+" primaryText="2+" />
                    </Field>
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.RiskManagementDiscount`}
                      component={Toggle}
                      label="Risk management discount"
                      labelPosition="right"
                    />
                  </div>
                  <div>
                  <Field
                      name={`${providers}.ProviderDetail.HoursWorkPerWeek`}
                      component={TextField}
                      hintText="Work hours per week"
                      floatingLabelText="Work hours per week"
                      validate={[required,hours]}
                    />
                  </div>
              </ListItem>
            </div>
          </ListItem>
        </div>
      ))}
    </div>
  </List>
)



const GCAP = ({fields, meta: {error, submitFailed}}) => (
  <List>
    <div>
      <div style={{display: 'flex', justifyContent: 'center'}}> 
        <AddGroupIcon style={{color:'green'}}  onClick={(event) =>more(event,fields)}/>
      </div>
        {fields.map((providers, index) => (
          <div>
            <ListItem key={index}> 
              <div>
                <ListItem>
                  <hr/>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.FirstName`}
                      component={TextField}
                      hintText="First Name"
                      floatingLabelText="First Name"
                      validate={[required,alphanumeric]}
                    />
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.MiddleInitial`}
                      component={TextField}
                      format={null}
                      hintText="Middle Initial"
                      floatingLabelText="Middle Initial"
                      validate={[required,alphabets]}
                    />
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.LastName`}
                      component={TextField}
                      hintText="Last Name"
                      floatingLabelText="Last Name"
                      validate={[required, alphanumeric]}
                      />
                  </div>              
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.ProviderClass`}
                      component={SelectField}
                      hintText="Provider Class"
                      floatingLabelText="Provider Class"
                      validate={required}
                    >
                      <MenuItem value="Optometrist" primaryText="Optometrist" />
                      <MenuItem value="Optician" primaryText="Optician" />
                      <MenuItem value="Ophthalmic Technologist" primaryText="Ophthalmic Technologist" />
                      <MenuItem value="Audiologist (excluding IONM)" primaryText="Audiologist (excluding IONM)" />
                      <MenuItem value="Hearing Therapist" primaryText="Hearing Therapist" />
                      <MenuItem value="Speech Pathologist" primaryText="Speech Pathologist" />
                      <MenuItem value="Speech Therapist" primaryText="Speech Therapist" />
                      <MenuItem value="Respiratory Therapist" primaryText="Respiratory Therapist" />
                      <MenuItem value="Respiratory Therapy Assistant / Technician / Technologist" primaryText="Respiratory Therapy Assistant / Technician / Technologist" />
                      <MenuItem value="Orthotist / Prosthetist" primaryText="Orthotist / Prosthetist" />
                      <MenuItem value="Dietitian / Nutritionist" primaryText="Dietitian / Nutritionist" />
                      <MenuItem value="Social Worker" primaryText="Social Worker" />
                      <MenuItem value="Counselor" primaryText="Counselor" />
                      <MenuItem value="Marriage / Family Therapist" primaryText="Marriage / Family Therapist" />
                      <MenuItem value="Psychologist" primaryText="Psychologist" />
                      <MenuItem value="Occupational Therapist" primaryText="Occupational Therapist" />
                      <MenuItem value="Occupational Therapy Assistant" primaryText="Occupational Therapy Assistant" />
                      <MenuItem value="Physical Therapist" primaryText="Physical Therapist" />
                      <MenuItem value="Physical Therapy Assistant" primaryText="Physical Therapy Assistant" />
                      <MenuItem value="Athletic Trainer" primaryText="Athletic Trainer" />
                      <MenuItem value="Non-certified Fitness Professional" primaryText="Non-certified Fitness Professional" />
                      <MenuItem value="Yoga / Pilates Instructor" primaryText="Yoga / Pilates Instructor" />
                      <MenuItem value="Certified Fitness Professional" primaryText="Certified Fitness Professional" />
                      <MenuItem value="Biomedical Technician/Technologist" primaryText="Biomedical Technician/Technologist" />
                      <MenuItem value="Blood Bank Technician/Technologist" primaryText="Blood Bank Technician/Technologist" />
                      <MenuItem value="Cardiology Technician/Technologist" primaryText="Cardiology Technician/Technologist" />
                      <MenuItem value="Certified Lab Technician/Technologist" primaryText="Certified Lab Technician/Technologist" />
                      <MenuItem value="Certified Medical Assistant" primaryText="Certified Medical Assistant" />
                      <MenuItem value="Clinical Lab Technician/Technologist" primaryText="Clinical Lab Technician/Technologist" />
                      <MenuItem value="Community Health Assistant" primaryText="Community Health Assistant" />
                      <MenuItem value="Community Health Technician/Technologist" primaryText="Community Health Technician/Technologist" />
                      <MenuItem value="Diagnostic Medical Sonographer" primaryText="Diagnostic Medical Sonographer" />
                      <MenuItem value="Dialysis Technician/Technologist" primaryText="Dialysis Technician/Technologist" />
                      <MenuItem value="EEG Technician/Technologist" primaryText="EEG Technician/Technologist" />
                      <MenuItem value="EKG Technician/Technologist" primaryText="EKG Technician/Technologist" />
                      <MenuItem value="Electrologist" primaryText="Electrologist" />
                      <MenuItem value="Histologic Technician/Technologist" primaryText="Histologic Technician/Technologist" />
                      <MenuItem value="Medical Laboratory Technician/Technologist" primaryText="Medical Laboratory Technician/Technologist" />
                      <MenuItem value="Medical Technician - NOC" primaryText="Medical Technician - NOC" />
                      <MenuItem value="Medical Technician/Technologist Assistant - NOC" primaryText="Medical Technician/Technologist Assistant - NOC" />
                      <MenuItem value="Medical Technologist - NOC" primaryText="Medical Technologist - NOC" />
                      <MenuItem value="Medical Assistant" primaryText="Medical Assistant" />
                      <MenuItem value="Medical Records Administrator" primaryText="Medical Records Administrator" />
                      <MenuItem value="Medical Records Technician/Technologist" primaryText="Medical Records Technician/Technologist" />
                      <MenuItem value="Nuclear Medical Technician/Technologist" primaryText="Nuclear Medical Technician/Technologist" />
                      <MenuItem value="Optometric Technician" primaryText="Optometric Technician" />
                      <MenuItem value="Orthopedic Technician" primaryText="Orthopedic Technician" />
                      <MenuItem value="Pathology Assistant" primaryText="Pathology Assistant" />
                      <MenuItem value="Phlebotomist" primaryText="Phlebotomist" />
                      <MenuItem value="Polysomnographic Sleep Technician" primaryText="Polysomnographic Sleep Technician" />
                      <MenuItem value="Radiation Therapist" primaryText="Radiation Therapist" />
                      <MenuItem value="Radiology Technician/Technologist" primaryText="Radiology Technician/Technologist" />
                      <MenuItem value="Sonographic Technician/Technologist" primaryText="Sonographic Technician/Technologist" />
                      <MenuItem value="Surgical Technician/Technologist" primaryText="Surgical Technician/Technologist" />
                      <MenuItem value="X-Ray Machine Technician/Technologist" primaryText="X-Ray Machine Technician/Technologist" />
                      <MenuItem value="Pharmacist" primaryText="Pharmacist" />
                      <MenuItem value="Pharmacy Technician" primaryText="Pharmacy Technician" />
                      <MenuItem value="EMT - Basic / Intermediate" primaryText="EMT - Basic / Intermediate" />
                      <MenuItem value="EMT - Volunteer" primaryText="EMT - Volunteer" />
                      <MenuItem value="EMT - Paramedic" primaryText="EMT - Paramedic" />
                      <MenuItem value="Registered Nurse" primaryText="Registered Nurse" />
                      <MenuItem value="Licensed Practical Nurse" primaryText="Licensed Practical Nurse" />
                      <MenuItem value="Licensed Vocational Nurse" primaryText="Licensed Vocational Nurse" /> 
                    </Field>
                  </div>
                  
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.ProfessionalAssociation`}
                      component={AutoComplete}
                      floatingLabelText="Professional Association"
                      openOnFocus
                      filter={MUIAutoComplete.fuzzyFilter}
                      dataSourceConfig={{text: 'name', value: 'name'}}
                      dataSource={professionalAssociation.professionalAssociation}
                      validate={required}
                    />
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.YearsOfPolicy`}
                      component={SelectField}
                      hintText="Years of Policy"
                      floatingLabelText="Years of Policy"
                      validate={required}
                    >                      
                      <MenuItem value="1" primaryText="1" />
                      <MenuItem value="2" primaryText="2" />
                      <MenuItem value="3" primaryText="3" />
                      <MenuItem value="4" primaryText="4" />
                      <MenuItem value="4+" primaryText="4+" />
                    </Field>
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.YearsInPractice`}
                      component={SelectField}
                      hintText="Years in Practice"
                      floatingLabelText="Years in Practice"
                      validate={required}
                    >                      
                      <MenuItem value="1" primaryText="1" />
                      <MenuItem value="2" primaryText="2" />
                      <MenuItem value="2+" primaryText="2+" />
                    </Field>
                  </div>
                  <div>
                  <Field
                      name={`${providers}.ProviderDetail.HoursWorkPerWeek`}
                      component={TextField}
                      hintText="Work hours per week"
                      floatingLabelText="Work hours per week"
                      validate={[required,hours]}
                    />
                  </div>
                  <div>
                  <Field
                      name={`${providers}.ProviderDetail.ScheduleRatingFactor`}
                      component={TextField}
                      hintText="Schedule Rating Factor"
                      floatingLabelText="Schedule Rating Factor"
                      validate={[required, numeric]}
                    />
                  </div>
              </ListItem>
            </div>
          </ListItem>
        </div>
      ))}
    </div>
  </List>
)


const GCNP = ({fields, meta: {error, submitFailed}}) => (
  <List>
    <div>
      <div style={{display: 'flex', justifyContent: 'center'}}> 
        <AddGroupIcon style={{color:'green'}}  onClick={(event) =>more(event,fields)}/>
      </div>
        {fields.map((providers, index) => (
          <div>
            <ListItem key={index}> 
              <div>
                <ListItem>
                  <hr/>      
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.FirstName`}
                      component={TextField}
                      hintText="First Name"
                      floatingLabelText="First Name"
                      validate={[required,alphanumeric]}
                    />
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.MiddleInitial`}
                      component={TextField}
                      format={null}
                      hintText="Middle Initial"
                      floatingLabelText="Middle Initial"
                      validate={[required,alphabets]}
                    />
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.LastName`}
                      component={TextField}
                      hintText="Last Name"
                      floatingLabelText="Last Name"
                      validate={[required, alphanumeric]}
                      />
                  </div>         
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.ProviderClass`}
                      component={SelectField}
                      hintText="Provider Class"
                      floatingLabelText="Provider Class"
                      validate={required}
                    >
                      <MenuItem value="Optometrist" primaryText="Optometrist" />
                      <MenuItem value="Optician" primaryText="Optician" />
                      <MenuItem value="Ophthalmic Technologist" primaryText="Ophthalmic Technologist" />
                      <MenuItem value="Audiologist (excluding IONM)" primaryText="Audiologist (excluding IONM)" />
                      <MenuItem value="Hearing Therapist" primaryText="Hearing Therapist" />
                      <MenuItem value="Speech Pathologist" primaryText="Speech Pathologist" />
                      <MenuItem value="Speech Therapist" primaryText="Speech Therapist" />
                      <MenuItem value="Respiratory Therapist" primaryText="Respiratory Therapist" />
                      <MenuItem value="Respiratory Therapy Assistant / Technician / Technologist" primaryText="Respiratory Therapy Assistant / Technician / Technologist" />
                      <MenuItem value="Orthotist / Prosthetist" primaryText="Orthotist / Prosthetist" />
                      <MenuItem value="Dietitian / Nutritionist" primaryText="Dietitian / Nutritionist" />
                      <MenuItem value="Social Worker" primaryText="Social Worker" />
                      <MenuItem value="Counselor" primaryText="Counselor" />
                      <MenuItem value="Marriage / Family Therapist" primaryText="Marriage / Family Therapist" />
                      <MenuItem value="Psychologist" primaryText="Psychologist" />
                      <MenuItem value="Occupational Therapist" primaryText="Occupational Therapist" />
                      <MenuItem value="Occupational Therapy Assistant" primaryText="Occupational Therapy Assistant" />
                      <MenuItem value="Physical Therapist" primaryText="Physical Therapist" />
                      <MenuItem value="Physical Therapy Assistant" primaryText="Physical Therapy Assistant" />
                      <MenuItem value="Athletic Trainer" primaryText="Athletic Trainer" />
                      <MenuItem value="Non-certified Fitness Professional" primaryText="Non-certified Fitness Professional" />
                      <MenuItem value="Yoga / Pilates Instructor" primaryText="Yoga / Pilates Instructor" />
                      <MenuItem value="Certified Fitness Professional" primaryText="Certified Fitness Professional" />
                      <MenuItem value="Biomedical Technician/Technologist" primaryText="Biomedical Technician/Technologist" />
                      <MenuItem value="Blood Bank Technician/Technologist" primaryText="Blood Bank Technician/Technologist" />
                      <MenuItem value="Cardiology Technician/Technologist" primaryText="Cardiology Technician/Technologist" />
                      <MenuItem value="Certified Lab Technician/Technologist" primaryText="Certified Lab Technician/Technologist" />
                      <MenuItem value="Certified Medical Assistant" primaryText="Certified Medical Assistant" />
                      <MenuItem value="Clinical Lab Technician/Technologist" primaryText="Clinical Lab Technician/Technologist" />
                      <MenuItem value="Community Health Assistant" primaryText="Community Health Assistant" />
                      <MenuItem value="Community Health Technician/Technologist" primaryText="Community Health Technician/Technologist" />
                      <MenuItem value="Diagnostic Medical Sonographer" primaryText="Diagnostic Medical Sonographer" />
                      <MenuItem value="Dialysis Technician/Technologist" primaryText="Dialysis Technician/Technologist" />
                      <MenuItem value="EEG Technician/Technologist" primaryText="EEG Technician/Technologist" />
                      <MenuItem value="EKG Technician/Technologist" primaryText="EKG Technician/Technologist" />
                      <MenuItem value="Electrologist" primaryText="Electrologist" />
                      <MenuItem value="Histologic Technician/Technologist" primaryText="Histologic Technician/Technologist" />
                      <MenuItem value="Medical Laboratory Technician/Technologist" primaryText="Medical Laboratory Technician/Technologist" />
                      <MenuItem value="Medical Technician - NOC" primaryText="Medical Technician - NOC" />
                      <MenuItem value="Medical Technician/Technologist Assistant - NOC" primaryText="Medical Technician/Technologist Assistant - NOC" />
                      <MenuItem value="Medical Technologist - NOC" primaryText="Medical Technologist - NOC" />
                      <MenuItem value="Medical Assistant" primaryText="Medical Assistant" />
                      <MenuItem value="Medical Records Administrator" primaryText="Medical Records Administrator" />
                      <MenuItem value="Medical Records Technician/Technologist" primaryText="Medical Records Technician/Technologist" />
                      <MenuItem value="Nuclear Medical Technician/Technologist" primaryText="Nuclear Medical Technician/Technologist" />
                      <MenuItem value="Optometric Technician" primaryText="Optometric Technician" />
                      <MenuItem value="Orthopedic Technician" primaryText="Orthopedic Technician" />
                      <MenuItem value="Pathology Assistant" primaryText="Pathology Assistant" />
                      <MenuItem value="Phlebotomist" primaryText="Phlebotomist" />
                      <MenuItem value="Polysomnographic Sleep Technician" primaryText="Polysomnographic Sleep Technician" />
                      <MenuItem value="Radiation Therapist" primaryText="Radiation Therapist" />
                      <MenuItem value="Radiology Technician/Technologist" primaryText="Radiology Technician/Technologist" />
                      <MenuItem value="Sonographic Technician/Technologist" primaryText="Sonographic Technician/Technologist" />
                      <MenuItem value="Surgical Technician/Technologist" primaryText="Surgical Technician/Technologist" />
                      <MenuItem value="X-Ray Machine Technician/Technologist" primaryText="X-Ray Machine Technician/Technologist" />
                      <MenuItem value="Pharmacist" primaryText="Pharmacist" />
                      <MenuItem value="Pharmacy Technician" primaryText="Pharmacy Technician" />
                      <MenuItem value="EMT - Basic / Intermediate" primaryText="EMT - Basic / Intermediate" />
                      <MenuItem value="EMT - Volunteer" primaryText="EMT - Volunteer" />
                      <MenuItem value="EMT - Paramedic" primaryText="EMT - Paramedic" />
                      <MenuItem value="Registered Nurse" primaryText="Registered Nurse" />
                      <MenuItem value="Licensed Practical Nurse" primaryText="Licensed Practical Nurse" />
                      <MenuItem value="Licensed Vocational Nurse" primaryText="Licensed Vocational Nurse" /> 
                    </Field>
                  </div>
                  
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.ProfessionalAssociation`}
                      component={AutoComplete}
                      floatingLabelText="Professional Association"
                      openOnFocus
                      filter={MUIAutoComplete.fuzzyFilter}
                      dataSourceConfig={{text: 'name', value: 'name'}}
                      dataSource={professionalAssociation.professionalAssociation}
                      validate={required}
                    />
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.YearsOfPolicy`}
                      component={SelectField}
                      hintText="Years of Policy"
                      floatingLabelText="Years of Policy"
                      validate={required}
                    >                      
                      <MenuItem value="1" primaryText="1" />
                      <MenuItem value="2" primaryText="2" />
                      <MenuItem value="3" primaryText="3" />
                      <MenuItem value="4" primaryText="4" />
                      <MenuItem value="4+" primaryText="4+" />
                    </Field>
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.YearsInPractice`}
                      component={SelectField}
                      hintText="Years in Practice"
                      floatingLabelText="Years in Practice"
                      validate={required}
                    >                      
                      <MenuItem value="1" primaryText="1" />
                      <MenuItem value="2" primaryText="2" />
                      <MenuItem value="2+" primaryText="2+" />
                    </Field>
                  </div>
                  <div></div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.RiskManagementDiscount`}
                      component={Toggle}
                      label="Risk management discount"
                      labelPosition="right"
                    />
                  </div>
                  <div>
                  <Field
                      name={`${providers}.ProviderDetail.HoursWorkPerWeek`}
                      component={TextField}
                      hintText="Work hours per week"
                      floatingLabelText="Work hours per week"
                      validate={[required,hours]}
                    />
                  </div>
                  <div>
                  <Field
                      name={`${providers}.ProviderDetail.ScheduleRatingFactor`}
                      component={TextField}
                      hintText="Schedule Rating Factor"
                      floatingLabelText="Schedule Rating Factor"
                      validate={[required, numeric]}
                    />
                  </div>
              </ListItem>
            </div>
          </ListItem>
        </div>
      ))}
    </div>
  </List>
)

const GCLP = ({fields, meta: {error, submitFailed}}) => (
  <List>
    <div>
      <div style={{display: 'flex', justifyContent: 'center'}}> 
        <AddGroupIcon style={{color:'green'}}  onClick={(event) =>more(event,fields)}/>
      </div>
        {fields.map((providers, index) => (
          <div>
            <ListItem key={index}> 
              <div>
                <ListItem>
                  <hr/> 
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.FirstName`}
                      component={TextField}
                      hintText="First Name"
                      floatingLabelText="First Name"
                      validate={[required,alphanumeric]}
                    />
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.MiddleInitial`}
                      component={TextField}
                      format={null}
                      hintText="Middle Initial"
                      floatingLabelText="Middle Initial"
                      validate={[required,alphabets]}
                    />
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.LastName`}
                      component={TextField}
                      hintText="Last Name"
                      floatingLabelText="Last Name"
                      validate={[required, alphanumeric]}
                      />
                  </div>             
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.ProviderClass`}
                      component={SelectField}
                      hintText="Provider Class"
                      floatingLabelText="Provider Class"
                      validate={required}
                    >
                      <MenuItem value="Optometrist" primaryText="Optometrist" />
                      <MenuItem value="Optician" primaryText="Optician" />
                      <MenuItem value="Ophthalmic Technologist" primaryText="Ophthalmic Technologist" />
                      <MenuItem value="Audiologist (excluding IONM)" primaryText="Audiologist (excluding IONM)" />
                      <MenuItem value="Hearing Therapist" primaryText="Hearing Therapist" />
                      <MenuItem value="Speech Pathologist" primaryText="Speech Pathologist" />
                      <MenuItem value="Speech Therapist" primaryText="Speech Therapist" />
                      <MenuItem value="Respiratory Therapist" primaryText="Respiratory Therapist" />
                      <MenuItem value="Respiratory Therapy Assistant / Technician / Technologist" primaryText="Respiratory Therapy Assistant / Technician / Technologist" />
                      <MenuItem value="Orthotist / Prosthetist" primaryText="Orthotist / Prosthetist" />
                      <MenuItem value="Dietitian / Nutritionist" primaryText="Dietitian / Nutritionist" />
                      <MenuItem value="Social Worker" primaryText="Social Worker" />
                      <MenuItem value="Counselor" primaryText="Counselor" />
                      <MenuItem value="Marriage / Family Therapist" primaryText="Marriage / Family Therapist" />
                      <MenuItem value="Psychologist" primaryText="Psychologist" />
                      <MenuItem value="Occupational Therapist" primaryText="Occupational Therapist" />
                      <MenuItem value="Occupational Therapy Assistant" primaryText="Occupational Therapy Assistant" />
                      <MenuItem value="Physical Therapist" primaryText="Physical Therapist" />
                      <MenuItem value="Physical Therapy Assistant" primaryText="Physical Therapy Assistant" />
                      <MenuItem value="Athletic Trainer" primaryText="Athletic Trainer" />
                      <MenuItem value="Non-certified Fitness Professional" primaryText="Non-certified Fitness Professional" />
                      <MenuItem value="Yoga / Pilates Instructor" primaryText="Yoga / Pilates Instructor" />
                      <MenuItem value="Certified Fitness Professional" primaryText="Certified Fitness Professional" />
                      <MenuItem value="Biomedical Technician/Technologist" primaryText="Biomedical Technician/Technologist" />
                      <MenuItem value="Blood Bank Technician/Technologist" primaryText="Blood Bank Technician/Technologist" />
                      <MenuItem value="Cardiology Technician/Technologist" primaryText="Cardiology Technician/Technologist" />
                      <MenuItem value="Certified Lab Technician/Technologist" primaryText="Certified Lab Technician/Technologist" />
                      <MenuItem value="Certified Medical Assistant" primaryText="Certified Medical Assistant" />
                      <MenuItem value="Clinical Lab Technician/Technologist" primaryText="Clinical Lab Technician/Technologist" />
                      <MenuItem value="Community Health Assistant" primaryText="Community Health Assistant" />
                      <MenuItem value="Community Health Technician/Technologist" primaryText="Community Health Technician/Technologist" />
                      <MenuItem value="Diagnostic Medical Sonographer" primaryText="Diagnostic Medical Sonographer" />
                      <MenuItem value="Dialysis Technician/Technologist" primaryText="Dialysis Technician/Technologist" />
                      <MenuItem value="EEG Technician/Technologist" primaryText="EEG Technician/Technologist" />
                      <MenuItem value="EKG Technician/Technologist" primaryText="EKG Technician/Technologist" />
                      <MenuItem value="Electrologist" primaryText="Electrologist" />
                      <MenuItem value="Histologic Technician/Technologist" primaryText="Histologic Technician/Technologist" />
                      <MenuItem value="Medical Laboratory Technician/Technologist" primaryText="Medical Laboratory Technician/Technologist" />
                      <MenuItem value="Medical Technician - NOC" primaryText="Medical Technician - NOC" />
                      <MenuItem value="Medical Technician/Technologist Assistant - NOC" primaryText="Medical Technician/Technologist Assistant - NOC" />
                      <MenuItem value="Medical Technologist - NOC" primaryText="Medical Technologist - NOC" />
                      <MenuItem value="Medical Assistant" primaryText="Medical Assistant" />
                      <MenuItem value="Medical Records Administrator" primaryText="Medical Records Administrator" />
                      <MenuItem value="Medical Records Technician/Technologist" primaryText="Medical Records Technician/Technologist" />
                      <MenuItem value="Nuclear Medical Technician/Technologist" primaryText="Nuclear Medical Technician/Technologist" />
                      <MenuItem value="Optometric Technician" primaryText="Optometric Technician" />
                      <MenuItem value="Orthopedic Technician" primaryText="Orthopedic Technician" />
                      <MenuItem value="Pathology Assistant" primaryText="Pathology Assistant" />
                      <MenuItem value="Phlebotomist" primaryText="Phlebotomist" />
                      <MenuItem value="Polysomnographic Sleep Technician" primaryText="Polysomnographic Sleep Technician" />
                      <MenuItem value="Radiation Therapist" primaryText="Radiation Therapist" />
                      <MenuItem value="Radiology Technician/Technologist" primaryText="Radiology Technician/Technologist" />
                      <MenuItem value="Sonographic Technician/Technologist" primaryText="Sonographic Technician/Technologist" />
                      <MenuItem value="Surgical Technician/Technologist" primaryText="Surgical Technician/Technologist" />
                      <MenuItem value="X-Ray Machine Technician/Technologist" primaryText="X-Ray Machine Technician/Technologist" />
                      <MenuItem value="Pharmacist" primaryText="Pharmacist" />
                      <MenuItem value="Pharmacy Technician" primaryText="Pharmacy Technician" />
                      <MenuItem value="EMT - Basic / Intermediate" primaryText="EMT - Basic / Intermediate" />
                      <MenuItem value="EMT - Volunteer" primaryText="EMT - Volunteer" />
                      <MenuItem value="EMT - Paramedic" primaryText="EMT - Paramedic" />
                      <MenuItem value="Registered Nurse" primaryText="Registered Nurse" />
                      <MenuItem value="Licensed Practical Nurse" primaryText="Licensed Practical Nurse" />
                      <MenuItem value="Licensed Vocational Nurse" primaryText="Licensed Vocational Nurse" /> 
                    </Field>
                  </div>
                  
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.ProfessionalAssociation`}
                      component={AutoComplete}
                      floatingLabelText="Professional Association"
                      openOnFocus
                      filter={MUIAutoComplete.fuzzyFilter}
                      dataSourceConfig={{text: 'name', value: 'name'}}
                      dataSource={professionalAssociation.professionalAssociation}
                      validate={required}
                    />
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.YearsOfPolicy`}
                      component={SelectField}
                      hintText="Years of Policy"
                      floatingLabelText="Years of Policy"
                      validate={required}
                    >                      
                      <MenuItem value="1" primaryText="1" />
                      <MenuItem value="2" primaryText="2" />
                      <MenuItem value="3" primaryText="3" />
                      <MenuItem value="4" primaryText="4" />
                      <MenuItem value="4+" primaryText="4+" />
                    </Field>
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.YearsInPractice`}
                      component={SelectField}
                      hintText="Years in Practice"
                      floatingLabelText="Years in Practice"
                      validate={required}
                    >                      
                      <MenuItem value="1" primaryText="1" />
                      <MenuItem value="2" primaryText="2" />
                      <MenuItem value="2+" primaryText="2+" />
                    </Field>
                  </div>
                  <div></div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.PatientCompensationFund`}
                      component={Toggle}
                      label="Patient compensation fund"
                      labelPosition="right"
                    />
                  </div>
                  <div>
                  <Field
                      name={`${providers}.ProviderDetail.HoursWorkPerWeek`}
                      component={TextField}
                      hintText="Work hours per week"
                      floatingLabelText="Work hours per week"
                      validate={[required,hours]}
                    />
                  </div>
                  <div>
                  <Field
                      name={`${providers}.ProviderDetail.ScheduleRatingFactor`}
                      component={TextField}
                      hintText="Schedule Rating Factor"
                      floatingLabelText="Schedule Rating Factor"
                      validate={[required, numeric]}
                    />
                  </div>
              </ListItem>
            </div>
          </ListItem>
        </div>
      ))}
    </div>
  </List>
)


const GCAM = ({fields, meta: {error, submitFailed}}) => (
  <List>
    <div>
      <div style={{display: 'flex', justifyContent: 'center'}}> 
        <AddGroupIcon style={{color:'green'}}  onClick={(event) =>more(event,fields)}/>
      </div>
        {fields.map((providers, index) => (
          <div>
            <ListItem key={index}> 
              <div>
                <ListItem>
                  <hr/>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.FirstName`}
                      component={TextField}
                      hintText="First Name"
                      floatingLabelText="First Name"
                      validate={[required,alphanumeric]}
                    />
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.MiddleInitial`}
                      component={TextField}
                      format={null}
                      hintText="Middle Initial"
                      floatingLabelText="Middle Initial"
                      validate={[required,alphabets]}
                    />
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.LastName`}
                      component={TextField}
                      hintText="Last Name"
                      floatingLabelText="Last Name"
                      validate={[required, alphanumeric]}
                      />
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.ProviderClass`}
                      component={SelectField}
                      hintText="Provider Class"
                      floatingLabelText="Provider Class"
                      validate={required}
                    >                      
                      <MenuItem value="Accountant" primaryText="Accountant" />
                      <MenuItem value="Advertiser" primaryText="Advertiser" />
                      <MenuItem value="Beauty Salon" primaryText="Beauty Salon" />
                      <MenuItem value="Consultant" primaryText="Consultant" />
                      <MenuItem value="Field Inspector" primaryText="Field Inspector" />
                      <MenuItem value="Graphic Designer" primaryText="Graphic Designer" />
                      <MenuItem value="Insurance Agent" primaryText="Insurance Agent" />
                      <MenuItem value="Interior Designer" primaryText="Interior Designer" />
                      <MenuItem value="Interpreter/ Translator" primaryText="Interpreter/ Translator" />
                      <MenuItem value="Landscaper" primaryText="Landscaper" />
                      <MenuItem value="Notary" primaryText="Notary" />
                      <MenuItem value="Photographer/Videographer" primaryText="Photographer/Videographer" />
                      <MenuItem value="Printing" primaryText="Printing" />
                      <MenuItem value="Publisher" primaryText="Publisher" />
                      <MenuItem value="Real Estate Agent" primaryText="Real Estate Agent" />
                      <MenuItem value="Travel Agent" primaryText="Travel Agent" />                     
                    </Field>
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.ProfessionalAssociation`}
                      component={AutoComplete}
                      floatingLabelText="Professional Association"
                      openOnFocus
                      filter={MUIAutoComplete.fuzzyFilter}
                      dataSourceConfig={{text: 'name', value: 'name'}}
                      dataSource={professionalAssociation.professionalAssociation}
                      validate={required}
                    />
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.YearsOfPolicy`}
                      component={SelectField}
                      hintText="Years of Policy"
                      floatingLabelText="Years of Policy"
                      validate={required}
                    >                      
                      <MenuItem value="1" primaryText="1" />
                      <MenuItem value="2" primaryText="2" />
                      <MenuItem value="3" primaryText="3" />
                      <MenuItem value="4" primaryText="4" />
                      <MenuItem value="4+" primaryText="4+" />
                    </Field>
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.YearsInPractice`}
                      component={SelectField}
                      hintText="Years in Practice"
                      floatingLabelText="Years in Practice"
                      validate={required}
                    >                      
                      <MenuItem value="1" primaryText="1" />
                      <MenuItem value="2" primaryText="2" />
                      <MenuItem value="2+" primaryText="2+" />
                    </Field>
                  </div>
                  <div>
                  <Field
                      name={`${providers}.ProviderDetail.HoursWorkPerWeek`}
                      component={TextField}
                      hintText="Work hours per week"
                      floatingLabelText="Work hours per week"
                      validate={[required,hours]}
                    />
                  </div>
                  <div>
                  <Field
                      name={`${providers}.ProviderDetail.MeetsStudentQualification`}
                      component={TextField}
                      hintText="Meets Student Qualification"
                      floatingLabelText="Meets Student Qualification"
                      validate={[required, numeric]}
                    />
                  </div>
                  <div>
                  <Field
                      name={`${providers}.ProviderDetail.UseOfWrittenContractsFactor`}
                      component={TextField}
                      hintText="Written contracts factor"
                      floatingLabelText="Written contracts factor"
                      validate={[required, numeric]}
                    />
                  </div>
              </ListItem>
            </div>
          </ListItem>
        </div>
      ))}
    </div>
  </List>
)

const GCLM = ({fields, meta: {error, submitFailed}}) => (
  <List>
    <div>
      <div style={{display: 'flex', justifyContent: 'center'}}> 
        <AddGroupIcon style={{color:'green'}}  onClick={(event) =>more(event,fields)}/>
      </div>
        {fields.map((providers, index) => (
          <div>
            <ListItem key={index}> 
              <div>
                <ListItem>
                  <hr/>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.FirstName`}
                      component={TextField}
                      hintText="First Name"
                      floatingLabelText="First Name"
                      validate={[required,alphanumeric]}
                    />
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.MiddleInitial`}
                      component={TextField}
                      format={null}
                      hintText="Middle Initial"
                      floatingLabelText="Middle Initial"
                      validate={[required,alphabets]}
                    />
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.LastName`}
                      component={TextField}
                      hintText="Last Name"
                      floatingLabelText="Last Name"
                      validate={[required, alphanumeric]}
                      />
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.ProviderClass`}
                      component={SelectField}
                      hintText="Provider Class"
                      floatingLabelText="Provider Class"
                      validate={required}
                    >                      
                      <MenuItem value="Accountant" primaryText="Accountant" />
                      <MenuItem value="Advertiser" primaryText="Advertiser" />
                      <MenuItem value="Beauty Salon" primaryText="Beauty Salon" />
                      <MenuItem value="Consultant" primaryText="Consultant" />
                      <MenuItem value="Field Inspector" primaryText="Field Inspector" />
                      <MenuItem value="Graphic Designer" primaryText="Graphic Designer" />
                      <MenuItem value="Insurance Agent" primaryText="Insurance Agent" />
                      <MenuItem value="Interior Designer" primaryText="Interior Designer" />
                      <MenuItem value="Interpreter/ Translator" primaryText="Interpreter/ Translator" />
                      <MenuItem value="Landscaper" primaryText="Landscaper" />
                      <MenuItem value="Notary" primaryText="Notary" />
                      <MenuItem value="Photographer/Videographer" primaryText="Photographer/Videographer" />
                      <MenuItem value="Printing" primaryText="Printing" />
                      <MenuItem value="Publisher" primaryText="Publisher" />
                      <MenuItem value="Real Estate Agent" primaryText="Real Estate Agent" />
                      <MenuItem value="Travel Agent" primaryText="Travel Agent" />                     
                    </Field>
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.ProfessionalAssociation`}
                      component={AutoComplete}
                      floatingLabelText="Professional Association"
                      openOnFocus
                      filter={MUIAutoComplete.fuzzyFilter}
                      dataSourceConfig={{text: 'name', value: 'name'}}
                      dataSource={professionalAssociation.professionalAssociation}
                      validate={required}
                    />
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.YearsOfPolicy`}
                      component={SelectField}
                      hintText="Years of Policy"
                      floatingLabelText="Years of Policy"
                      validate={required}
                    >                      
                      <MenuItem value="1" primaryText="1" />
                      <MenuItem value="2" primaryText="2" />
                      <MenuItem value="3" primaryText="3" />
                      <MenuItem value="4" primaryText="4" />
                      <MenuItem value="4+" primaryText="4+" />
                    </Field>
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.YearsInPractice`}
                      component={SelectField}
                      hintText="Years in Practice"
                      floatingLabelText="Years in Practice"
                      validate={required}
                    >                      
                      <MenuItem value="1" primaryText="1" />
                      <MenuItem value="2" primaryText="2" />
                      <MenuItem value="2+" primaryText="2+" />
                    </Field>
                  </div>
                  <div></div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.PatientCompensationFund`}
                      component={Toggle}
                      label="Patient compensation fund"
                      labelPosition="right"
                    />
                  </div>
                  <div>
                  <Field
                      name={`${providers}.ProviderDetail.HoursWorkPerWeek`}
                      component={TextField}
                      hintText="Work hours per week"
                      floatingLabelText="Work hours per week"
                      validate={[required,hours]}
                    />
                  </div>
                  <div>
                  <Field
                      name={`${providers}.ProviderDetail.MeetsStudentQualification`}
                      component={TextField}
                      hintText="Meets Student Qualification"
                      floatingLabelText="Meets Student Qualification"
                      validate={[required, numeric]}
                    />
                  </div>
                  <div>
                  <Field
                      name={`${providers}.ProviderDetail.UseOfWrittenContractsFactor`}
                      component={TextField}
                      hintText="Written contracts factor"
                      floatingLabelText="Written contracts factor"
                      validate={[required, numeric]}
                    />
                  </div>
              </ListItem>
            </div>
          </ListItem>
        </div>
      ))}
    </div>
  </List>
)

const GCNM = ({fields, meta: {error, submitFailed}}) => (
  <List>
    <div>
      <div style={{display: 'flex', justifyContent: 'center'}}> 
        <AddGroupIcon style={{color:'green'}}  onClick={(event) =>more(event,fields)}/>
      </div>
        {fields.map((providers, index) => (
          <div>
            <ListItem key={index}> 
              <div>
                <ListItem>
                  <hr/>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.FirstName`}
                      component={TextField}
                      hintText="First Name"
                      floatingLabelText="First Name"
                      validate={[required,alphanumeric]}
                    />
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.MiddleInitial`}
                      component={TextField}
                      format={null}
                      hintText="Middle Initial"
                      floatingLabelText="Middle Initial"
                      validate={[required,alphabets]}
                    />
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.LastName`}
                      component={TextField}
                      hintText="Last Name"
                      floatingLabelText="Last Name"
                      validate={[required, alphanumeric]}
                      />
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.ProviderClass`}
                      component={SelectField}
                      hintText="Provider Class"
                      floatingLabelText="Provider Class"
                      validate={required}
                    >                      
                      <MenuItem value="Accountant" primaryText="Accountant" />
                      <MenuItem value="Advertiser" primaryText="Advertiser" />
                      <MenuItem value="Beauty Salon" primaryText="Beauty Salon" />
                      <MenuItem value="Consultant" primaryText="Consultant" />
                      <MenuItem value="Field Inspector" primaryText="Field Inspector" />
                      <MenuItem value="Graphic Designer" primaryText="Graphic Designer" />
                      <MenuItem value="Insurance Agent" primaryText="Insurance Agent" />
                      <MenuItem value="Interior Designer" primaryText="Interior Designer" />
                      <MenuItem value="Interpreter/ Translator" primaryText="Interpreter/ Translator" />
                      <MenuItem value="Landscaper" primaryText="Landscaper" />
                      <MenuItem value="Notary" primaryText="Notary" />
                      <MenuItem value="Photographer/Videographer" primaryText="Photographer/Videographer" />
                      <MenuItem value="Printing" primaryText="Printing" />
                      <MenuItem value="Publisher" primaryText="Publisher" />
                      <MenuItem value="Real Estate Agent" primaryText="Real Estate Agent" />
                      <MenuItem value="Travel Agent" primaryText="Travel Agent" />                     
                    </Field>
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.ProfessionalAssociation`}
                      component={AutoComplete}
                      floatingLabelText="Professional Association"
                      openOnFocus
                      filter={MUIAutoComplete.fuzzyFilter}
                      dataSourceConfig={{text: 'name', value: 'name'}}
                      dataSource={professionalAssociation.professionalAssociation}
                      validate={required}
                    />
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.YearsOfPolicy`}
                      component={SelectField}
                      hintText="Years of Policy"
                      floatingLabelText="Years of Policy"
                      validate={required}
                    >                      
                      <MenuItem value="1" primaryText="1" />
                      <MenuItem value="2" primaryText="2" />
                      <MenuItem value="3" primaryText="3" />
                      <MenuItem value="4" primaryText="4" />
                      <MenuItem value="4+" primaryText="4+" />
                    </Field>
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.YearsInPractice`}
                      component={SelectField}
                      hintText="Years in Practice"
                      floatingLabelText="Years in Practice"
                      validate={required}
                    >                      
                      <MenuItem value="1" primaryText="1" />
                      <MenuItem value="2" primaryText="2" />
                      <MenuItem value="2+" primaryText="2+" />
                    </Field>
                  </div>
                  <div></div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.RiskManagementDiscount`}
                      component={Toggle}
                      label="Risk management discount"
                      labelPosition="right"
                    />
                  </div>
                  <div>
                  <Field
                      name={`${providers}.ProviderDetail.HoursWorkPerWeek`}
                      component={TextField}
                      hintText="Work hours per week"
                      floatingLabelText="Work hours per week"
                      validate={[required,hours]}
                    />
                  </div>
                  <div>
                  <Field
                      name={`${providers}.ProviderDetail.MeetsStudentQualification`}
                      component={TextField}
                      hintText="Meets Student Qualification"
                      floatingLabelText="Meets Student Qualification"
                      validate={[required, numeric]}
                    />
                  </div>
                  <div>
                  <Field
                      name={`${providers}.ProviderDetail.UseOfWrittenContractsFactor`}
                      component={TextField}
                      hintText="Written contracts factor"
                      floatingLabelText="Written contracts factor"
                      validate={[required, numeric]}
                    />
                  </div>
              </ListItem>
            </div>
          </ListItem>
        </div>
      ))}
    </div>
  </List>
)


const GNAA = ({fields, meta: {error, submitFailed}}) => (
  <List>
    <div>
      <div style={{display: 'flex', justifyContent: 'center'}}> 
        <AddGroupIcon style={{color:'green'}}  onClick={(event) =>more(event,fields)}/>
      </div>
        {fields.map((providers, index) => (
          <div>
            <ListItem key={index}> 
              <div>
                <ListItem>
                  <hr/>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.FirstName`}
                      component={TextField}
                      hintText="First Name"
                      floatingLabelText="First Name"
                      validate={[required,alphanumeric]}
                    />
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.MiddleInitial`}
                      component={TextField}
                      format={null}
                      hintText="Middle Initial"
                      floatingLabelText="Middle Initial"
                      validate={[required,alphabets]}
                    />
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.LastName`}
                      component={TextField}
                      hintText="Last Name"
                      floatingLabelText="Last Name"
                      validate={[required, alphanumeric]}
                      />
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.ProfessionalAssociation`}
                      component={AutoComplete}
                      floatingLabelText="Professional Association"
                      openOnFocus
                      filter={MUIAutoComplete.fuzzyFilter}
                      dataSourceConfig={{text: 'name', value: 'name'}}
                      dataSource={professionalAssociation.professionalAssociation}
                      validate={required}
                    />
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.YearsInPractice`}
                      component={SelectField}
                      hintText="Years in Practice"
                      floatingLabelText="Years in Practice"
                      validate={required}
                    >                      
                      <MenuItem value="1" primaryText="1" />
                      <MenuItem value="2" primaryText="2" />
                      <MenuItem value="2+" primaryText="2+" />
                    </Field>
                  </div>
                  <div>
                  <Field
                      name={`${providers}.ProviderDetail.HoursWorkPerWeek`}
                      component={TextField}
                      hintText="Work hours per week"
                      floatingLabelText="Work hours per week"
                      validate={[required,hours]}
                    />
                  </div>
              </ListItem>
            </div>
          </ListItem>
        </div>
      ))}
    </div>
  </List>
)


const GNLA = ({fields, meta: {error, submitFailed}}) => (
  <List>
    <div>
      <div style={{display: 'flex', justifyContent: 'center'}}> 
        <AddGroupIcon style={{color:'green'}}  onClick={(event) =>more(event,fields)}/>
      </div>
        {fields.map((providers, index) => (
          <div>
            <ListItem key={index}> 
              <div>
                <ListItem>
                  <hr/>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.FirstName`}
                      component={TextField}
                      hintText="First Name"
                      floatingLabelText="First Name"
                      validate={[required,alphanumeric]}
                    />
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.MiddleInitial`}
                      component={TextField}
                      format={null}
                      hintText="Middle Initial"
                      floatingLabelText="Middle Initial"
                      validate={[required,alphabets]}
                    />
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.LastName`}
                      component={TextField}
                      hintText="Last Name"
                      floatingLabelText="Last Name"
                      validate={[required, alphanumeric]}
                      />
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.ProfessionalAssociation`}
                      component={AutoComplete}
                      floatingLabelText="Professional Association"
                      openOnFocus
                      filter={MUIAutoComplete.fuzzyFilter}
                      dataSourceConfig={{text: 'name', value: 'name'}}
                      dataSource={professionalAssociation.professionalAssociation}
                      validate={required}
                    />
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.YearsInPractice`}
                      component={SelectField}
                      hintText="Years in Practice"
                      floatingLabelText="Years in Practice"
                      validate={required}
                    >                      
                      <MenuItem value="1" primaryText="1" />
                      <MenuItem value="2" primaryText="2" />
                      <MenuItem value="2+" primaryText="2+" />
                    </Field>
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.PatientCompensationFund`}
                      component={Toggle}
                      label="Patient compensation fund"
                      labelPosition="right"
                    />
                  </div>
                  <div>
                  <Field
                      name={`${providers}.ProviderDetail.HoursWorkPerWeek`}
                      component={TextField}
                      hintText="Work hours per week"
                      floatingLabelText="Work hours per week"
                      validate={[required,hours]}
                    />
                  </div>
              </ListItem>
            </div>
          </ListItem>
        </div>
      ))}
    </div>
  </List>
)


const GNNA = ({fields, meta: {error, submitFailed}}) => (
  <List>
    <div>
      <div style={{display: 'flex', justifyContent: 'center'}}> 
        <AddGroupIcon style={{color:'green'}}  onClick={(event) =>more(event,fields)}/>
      </div>
        {fields.map((providers, index) => (
          <div>
            <ListItem key={index}> 
              <div>
                <ListItem>
                  <hr/>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.FirstName`}
                      component={TextField}
                      hintText="First Name"
                      floatingLabelText="First Name"
                      validate={[required,alphanumeric]}
                    />
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.MiddleInitial`}
                      component={TextField}
                      format={null}
                      hintText="Middle Initial"
                      floatingLabelText="Middle Initial"
                      validate={[required,alphabets]}
                    />
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.LastName`}
                      component={TextField}
                      hintText="Last Name"
                      floatingLabelText="Last Name"
                      validate={[required, alphanumeric]}
                      />
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.ProfessionalAssociation`}
                      component={AutoComplete}
                      floatingLabelText="Professional Association"
                      openOnFocus
                      filter={MUIAutoComplete.fuzzyFilter}
                      dataSourceConfig={{text: 'name', value: 'name'}}
                      dataSource={professionalAssociation.professionalAssociation}
                      validate={required}
                    />
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.YearsInPractice`}
                      component={SelectField}
                      hintText="Years in Practice"
                      floatingLabelText="Years in Practice"
                      validate={required}
                    >                      
                      <MenuItem value="1" primaryText="1" />
                      <MenuItem value="2" primaryText="2" />
                      <MenuItem value="2+" primaryText="2+" />
                    </Field>
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.RiskManagementDiscount`}
                      component={Toggle}
                      label="Risk management discount"
                      labelPosition="right"
                    />
                  </div>
                  <div>
                  <Field
                      name={`${providers}.ProviderDetail.HoursWorkPerWeek`}
                      component={TextField}
                      hintText="Work hours per week"
                      floatingLabelText="Work hours per week"
                      validate={[required,hours]}
                    />
                  </div>
              </ListItem>
            </div>
          </ListItem>
        </div>
      ))}
    </div>
  </List>
)



const GNAP = ({fields, meta: {error, submitFailed}}) => (
  <List>
    <div>
      <div style={{display: 'flex', justifyContent: 'center'}}> 
        <AddGroupIcon style={{color:'green'}}  onClick={(event) =>more(event,fields)}/>
      </div>
        {fields.map((providers, index) => (
          <div>
            <ListItem key={index}> 
              <div>
                <ListItem>
                  <hr/> 
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.FirstName`}
                      component={TextField}
                      hintText="First Name"
                      floatingLabelText="First Name"
                      validate={[required,alphanumeric]}
                    />
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.MiddleInitial`}
                      component={TextField}
                      format={null}
                      hintText="Middle Initial"
                      floatingLabelText="Middle Initial"
                      validate={[required,alphabets]}
                    />
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.LastName`}
                      component={TextField}
                      hintText="Last Name"
                      floatingLabelText="Last Name"
                      validate={[required, alphanumeric]}
                      />
                  </div>             
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.ProviderClass`}
                      component={SelectField}
                      hintText="Provider Class"
                      floatingLabelText="Provider Class"
                      validate={required}
                    >
                      <MenuItem value="Optometrist" primaryText="Optometrist" />
                      <MenuItem value="Optician" primaryText="Optician" />
                      <MenuItem value="Ophthalmic Technologist" primaryText="Ophthalmic Technologist" />
                      <MenuItem value="Audiologist (excluding IONM)" primaryText="Audiologist (excluding IONM)" />
                      <MenuItem value="Hearing Therapist" primaryText="Hearing Therapist" />
                      <MenuItem value="Speech Pathologist" primaryText="Speech Pathologist" />
                      <MenuItem value="Speech Therapist" primaryText="Speech Therapist" />
                      <MenuItem value="Respiratory Therapist" primaryText="Respiratory Therapist" />
                      <MenuItem value="Respiratory Therapy Assistant / Technician / Technologist" primaryText="Respiratory Therapy Assistant / Technician / Technologist" />
                      <MenuItem value="Orthotist / Prosthetist" primaryText="Orthotist / Prosthetist" />
                      <MenuItem value="Dietitian / Nutritionist" primaryText="Dietitian / Nutritionist" />
                      <MenuItem value="Social Worker" primaryText="Social Worker" />
                      <MenuItem value="Counselor" primaryText="Counselor" />
                      <MenuItem value="Marriage / Family Therapist" primaryText="Marriage / Family Therapist" />
                      <MenuItem value="Psychologist" primaryText="Psychologist" />
                      <MenuItem value="Occupational Therapist" primaryText="Occupational Therapist" />
                      <MenuItem value="Occupational Therapy Assistant" primaryText="Occupational Therapy Assistant" />
                      <MenuItem value="Physical Therapist" primaryText="Physical Therapist" />
                      <MenuItem value="Physical Therapy Assistant" primaryText="Physical Therapy Assistant" />
                      <MenuItem value="Athletic Trainer" primaryText="Athletic Trainer" />
                      <MenuItem value="Non-certified Fitness Professional" primaryText="Non-certified Fitness Professional" />
                      <MenuItem value="Yoga / Pilates Instructor" primaryText="Yoga / Pilates Instructor" />
                      <MenuItem value="Certified Fitness Professional" primaryText="Certified Fitness Professional" />
                      <MenuItem value="Biomedical Technician/Technologist" primaryText="Biomedical Technician/Technologist" />
                      <MenuItem value="Blood Bank Technician/Technologist" primaryText="Blood Bank Technician/Technologist" />
                      <MenuItem value="Cardiology Technician/Technologist" primaryText="Cardiology Technician/Technologist" />
                      <MenuItem value="Certified Lab Technician/Technologist" primaryText="Certified Lab Technician/Technologist" />
                      <MenuItem value="Certified Medical Assistant" primaryText="Certified Medical Assistant" />
                      <MenuItem value="Clinical Lab Technician/Technologist" primaryText="Clinical Lab Technician/Technologist" />
                      <MenuItem value="Community Health Assistant" primaryText="Community Health Assistant" />
                      <MenuItem value="Community Health Technician/Technologist" primaryText="Community Health Technician/Technologist" />
                      <MenuItem value="Diagnostic Medical Sonographer" primaryText="Diagnostic Medical Sonographer" />
                      <MenuItem value="Dialysis Technician/Technologist" primaryText="Dialysis Technician/Technologist" />
                      <MenuItem value="EEG Technician/Technologist" primaryText="EEG Technician/Technologist" />
                      <MenuItem value="EKG Technician/Technologist" primaryText="EKG Technician/Technologist" />
                      <MenuItem value="Electrologist" primaryText="Electrologist" />
                      <MenuItem value="Histologic Technician/Technologist" primaryText="Histologic Technician/Technologist" />
                      <MenuItem value="Medical Laboratory Technician/Technologist" primaryText="Medical Laboratory Technician/Technologist" />
                      <MenuItem value="Medical Technician - NOC" primaryText="Medical Technician - NOC" />
                      <MenuItem value="Medical Technician/Technologist Assistant - NOC" primaryText="Medical Technician/Technologist Assistant - NOC" />
                      <MenuItem value="Medical Technologist - NOC" primaryText="Medical Technologist - NOC" />
                      <MenuItem value="Medical Assistant" primaryText="Medical Assistant" />
                      <MenuItem value="Medical Records Administrator" primaryText="Medical Records Administrator" />
                      <MenuItem value="Medical Records Technician/Technologist" primaryText="Medical Records Technician/Technologist" />
                      <MenuItem value="Nuclear Medical Technician/Technologist" primaryText="Nuclear Medical Technician/Technologist" />
                      <MenuItem value="Optometric Technician" primaryText="Optometric Technician" />
                      <MenuItem value="Orthopedic Technician" primaryText="Orthopedic Technician" />
                      <MenuItem value="Pathology Assistant" primaryText="Pathology Assistant" />
                      <MenuItem value="Phlebotomist" primaryText="Phlebotomist" />
                      <MenuItem value="Polysomnographic Sleep Technician" primaryText="Polysomnographic Sleep Technician" />
                      <MenuItem value="Radiation Therapist" primaryText="Radiation Therapist" />
                      <MenuItem value="Radiology Technician/Technologist" primaryText="Radiology Technician/Technologist" />
                      <MenuItem value="Sonographic Technician/Technologist" primaryText="Sonographic Technician/Technologist" />
                      <MenuItem value="Surgical Technician/Technologist" primaryText="Surgical Technician/Technologist" />
                      <MenuItem value="X-Ray Machine Technician/Technologist" primaryText="X-Ray Machine Technician/Technologist" />
                      <MenuItem value="Pharmacist" primaryText="Pharmacist" />
                      <MenuItem value="Pharmacy Technician" primaryText="Pharmacy Technician" />
                      <MenuItem value="EMT - Basic / Intermediate" primaryText="EMT - Basic / Intermediate" />
                      <MenuItem value="EMT - Volunteer" primaryText="EMT - Volunteer" />
                      <MenuItem value="EMT - Paramedic" primaryText="EMT - Paramedic" />
                      <MenuItem value="Registered Nurse" primaryText="Registered Nurse" />
                      <MenuItem value="Licensed Practical Nurse" primaryText="Licensed Practical Nurse" />
                      <MenuItem value="Licensed Vocational Nurse" primaryText="Licensed Vocational Nurse" /> 
                    </Field>
                  </div>
                  
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.ProfessionalAssociation`}
                      component={AutoComplete}
                      floatingLabelText="Professional Association"
                      openOnFocus
                      filter={MUIAutoComplete.fuzzyFilter}
                      dataSourceConfig={{text: 'name', value: 'name'}}
                      dataSource={professionalAssociation.professionalAssociation}
                      validate={required}
                    />
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.YearsInPractice`}
                      component={SelectField}
                      hintText="Years in Practice"
                      floatingLabelText="Years in Practice"
                      validate={required}
                    >                      
                      <MenuItem value="1" primaryText="1" />
                      <MenuItem value="2" primaryText="2" />
                      <MenuItem value="2+" primaryText="2+" />
                    </Field>
                  </div>
                  <div>
                  <Field
                      name={`${providers}.ProviderDetail.HoursWorkPerWeek`}
                      component={TextField}
                      hintText="Work hours per week"
                      floatingLabelText="Work hours per week"
                      validate={[required,hours]}
                    />
                  </div>
                  <div>
                  <Field
                      name={`${providers}.ProviderDetail.ScheduleRatingFactor`}
                      component={TextField}
                      hintText="Schedule Rating Factor"
                      floatingLabelText="Schedule Rating Factor"
                      validate={[required, numeric]}
                    />
                  </div>
              </ListItem>
            </div>
          </ListItem>
        </div>
      ))}
    </div>
  </List>
)


const GNNP = ({fields, meta: {error, submitFailed}}) => (
  <List>
    <div>
      <div style={{display: 'flex', justifyContent: 'center'}}> 
        <AddGroupIcon style={{color:'green'}}  onClick={(event) =>more(event,fields)}/>
      </div>
        {fields.map((providers, index) => (
          <div>
            <ListItem key={index}> 
              <div>
                <ListItem>
                  <hr/>  
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.FirstName`}
                      component={TextField}
                      hintText="First Name"
                      floatingLabelText="First Name"
                      validate={[required,alphanumeric]}
                    />
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.MiddleInitial`}
                      component={TextField}
                      format={null}
                      hintText="Middle Initial"
                      floatingLabelText="Middle Initial"
                      validate={[required,alphabets]}
                    />
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.LastName`}
                      component={TextField}
                      hintText="Last Name"
                      floatingLabelText="Last Name"
                      validate={[required, alphanumeric]}
                      />
                  </div>             
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.ProviderClass`}
                      component={SelectField}
                      hintText="Provider Class"
                      floatingLabelText="Provider Class"
                      validate={required}
                    >
                      <MenuItem value="Optometrist" primaryText="Optometrist" />
                      <MenuItem value="Optician" primaryText="Optician" />
                      <MenuItem value="Ophthalmic Technologist" primaryText="Ophthalmic Technologist" />
                      <MenuItem value="Audiologist (excluding IONM)" primaryText="Audiologist (excluding IONM)" />
                      <MenuItem value="Hearing Therapist" primaryText="Hearing Therapist" />
                      <MenuItem value="Speech Pathologist" primaryText="Speech Pathologist" />
                      <MenuItem value="Speech Therapist" primaryText="Speech Therapist" />
                      <MenuItem value="Respiratory Therapist" primaryText="Respiratory Therapist" />
                      <MenuItem value="Respiratory Therapy Assistant / Technician / Technologist" primaryText="Respiratory Therapy Assistant / Technician / Technologist" />
                      <MenuItem value="Orthotist / Prosthetist" primaryText="Orthotist / Prosthetist" />
                      <MenuItem value="Dietitian / Nutritionist" primaryText="Dietitian / Nutritionist" />
                      <MenuItem value="Social Worker" primaryText="Social Worker" />
                      <MenuItem value="Counselor" primaryText="Counselor" />
                      <MenuItem value="Marriage / Family Therapist" primaryText="Marriage / Family Therapist" />
                      <MenuItem value="Psychologist" primaryText="Psychologist" />
                      <MenuItem value="Occupational Therapist" primaryText="Occupational Therapist" />
                      <MenuItem value="Occupational Therapy Assistant" primaryText="Occupational Therapy Assistant" />
                      <MenuItem value="Physical Therapist" primaryText="Physical Therapist" />
                      <MenuItem value="Physical Therapy Assistant" primaryText="Physical Therapy Assistant" />
                      <MenuItem value="Athletic Trainer" primaryText="Athletic Trainer" />
                      <MenuItem value="Non-certified Fitness Professional" primaryText="Non-certified Fitness Professional" />
                      <MenuItem value="Yoga / Pilates Instructor" primaryText="Yoga / Pilates Instructor" />
                      <MenuItem value="Certified Fitness Professional" primaryText="Certified Fitness Professional" />
                      <MenuItem value="Biomedical Technician/Technologist" primaryText="Biomedical Technician/Technologist" />
                      <MenuItem value="Blood Bank Technician/Technologist" primaryText="Blood Bank Technician/Technologist" />
                      <MenuItem value="Cardiology Technician/Technologist" primaryText="Cardiology Technician/Technologist" />
                      <MenuItem value="Certified Lab Technician/Technologist" primaryText="Certified Lab Technician/Technologist" />
                      <MenuItem value="Certified Medical Assistant" primaryText="Certified Medical Assistant" />
                      <MenuItem value="Clinical Lab Technician/Technologist" primaryText="Clinical Lab Technician/Technologist" />
                      <MenuItem value="Community Health Assistant" primaryText="Community Health Assistant" />
                      <MenuItem value="Community Health Technician/Technologist" primaryText="Community Health Technician/Technologist" />
                      <MenuItem value="Diagnostic Medical Sonographer" primaryText="Diagnostic Medical Sonographer" />
                      <MenuItem value="Dialysis Technician/Technologist" primaryText="Dialysis Technician/Technologist" />
                      <MenuItem value="EEG Technician/Technologist" primaryText="EEG Technician/Technologist" />
                      <MenuItem value="EKG Technician/Technologist" primaryText="EKG Technician/Technologist" />
                      <MenuItem value="Electrologist" primaryText="Electrologist" />
                      <MenuItem value="Histologic Technician/Technologist" primaryText="Histologic Technician/Technologist" />
                      <MenuItem value="Medical Laboratory Technician/Technologist" primaryText="Medical Laboratory Technician/Technologist" />
                      <MenuItem value="Medical Technician - NOC" primaryText="Medical Technician - NOC" />
                      <MenuItem value="Medical Technician/Technologist Assistant - NOC" primaryText="Medical Technician/Technologist Assistant - NOC" />
                      <MenuItem value="Medical Technologist - NOC" primaryText="Medical Technologist - NOC" />
                      <MenuItem value="Medical Assistant" primaryText="Medical Assistant" />
                      <MenuItem value="Medical Records Administrator" primaryText="Medical Records Administrator" />
                      <MenuItem value="Medical Records Technician/Technologist" primaryText="Medical Records Technician/Technologist" />
                      <MenuItem value="Nuclear Medical Technician/Technologist" primaryText="Nuclear Medical Technician/Technologist" />
                      <MenuItem value="Optometric Technician" primaryText="Optometric Technician" />
                      <MenuItem value="Orthopedic Technician" primaryText="Orthopedic Technician" />
                      <MenuItem value="Pathology Assistant" primaryText="Pathology Assistant" />
                      <MenuItem value="Phlebotomist" primaryText="Phlebotomist" />
                      <MenuItem value="Polysomnographic Sleep Technician" primaryText="Polysomnographic Sleep Technician" />
                      <MenuItem value="Radiation Therapist" primaryText="Radiation Therapist" />
                      <MenuItem value="Radiology Technician/Technologist" primaryText="Radiology Technician/Technologist" />
                      <MenuItem value="Sonographic Technician/Technologist" primaryText="Sonographic Technician/Technologist" />
                      <MenuItem value="Surgical Technician/Technologist" primaryText="Surgical Technician/Technologist" />
                      <MenuItem value="X-Ray Machine Technician/Technologist" primaryText="X-Ray Machine Technician/Technologist" />
                      <MenuItem value="Pharmacist" primaryText="Pharmacist" />
                      <MenuItem value="Pharmacy Technician" primaryText="Pharmacy Technician" />
                      <MenuItem value="EMT - Basic / Intermediate" primaryText="EMT - Basic / Intermediate" />
                      <MenuItem value="EMT - Volunteer" primaryText="EMT - Volunteer" />
                      <MenuItem value="EMT - Paramedic" primaryText="EMT - Paramedic" />
                      <MenuItem value="Registered Nurse" primaryText="Registered Nurse" />
                      <MenuItem value="Licensed Practical Nurse" primaryText="Licensed Practical Nurse" />
                      <MenuItem value="Licensed Vocational Nurse" primaryText="Licensed Vocational Nurse" /> 
                    </Field>
                  </div>
                  
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.ProfessionalAssociation`}
                      component={AutoComplete}
                      floatingLabelText="Professional Association"
                      openOnFocus
                      filter={MUIAutoComplete.fuzzyFilter}
                      dataSourceConfig={{text: 'name', value: 'name'}}
                      dataSource={professionalAssociation.professionalAssociation}
                      validate={required}
                    />
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.YearsInPractice`}
                      component={SelectField}
                      hintText="Years in Practice"
                      floatingLabelText="Years in Practice"
                      validate={required}
                    >                      
                      <MenuItem value="1" primaryText="1" />
                      <MenuItem value="2" primaryText="2" />
                      <MenuItem value="2+" primaryText="2+" />
                    </Field>
                  </div>
                  <div></div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.RiskManagementDiscount`}
                      component={Toggle}
                      label="Risk management discount"
                      labelPosition="right"
                    />
                  </div>
                  <div>
                  <Field
                      name={`${providers}.ProviderDetail.HoursWorkPerWeek`}
                      component={TextField}
                      hintText="Work hours per week"
                      floatingLabelText="Work hours per week"
                      validate={[required,hours]}
                    />
                  </div>
                  <div>
                  <Field
                      name={`${providers}.ProviderDetail.ScheduleRatingFactor`}
                      component={TextField}
                      hintText="Schedule Rating Factor"
                      floatingLabelText="Schedule Rating Factor"
                      validate={[required, numeric]}
                    />
                  </div>
              </ListItem>
            </div>
          </ListItem>
        </div>
      ))}
    </div>
  </List>
)

const GNLP = ({fields, meta: {error, submitFailed}}) => (
  <List>
    <div>
      <div style={{display: 'flex', justifyContent: 'center'}}> 
        <AddGroupIcon style={{color:'green'}}  onClick={(event) =>more(event,fields)}/>
      </div>
        {fields.map((providers, index) => (
          <div>
            <ListItem key={index}> 
              <div>
                <ListItem>
                  <hr/>                  
                  <div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.FirstName`}
                      component={TextField}
                      hintText="First Name"
                      floatingLabelText="First Name"
                      validate={[required,alphanumeric]}
                    />
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.MiddleInitial`}
                      component={TextField}
                      format={null}
                      hintText="Middle Initial"
                      floatingLabelText="Middle Initial"
                      validate={[required,alphabets]}
                    />
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.LastName`}
                      component={TextField}
                      hintText="Last Name"
                      floatingLabelText="Last Name"
                      validate={[required, alphanumeric]}
                      />
                  </div>
                    <Field
                      name={`${providers}.ProviderDetail.ProviderClass`}
                      component={SelectField}
                      hintText="Provider Class"
                      floatingLabelText="Provider Class"
                      validate={required}
                    >
                      <MenuItem value="Optometrist" primaryText="Optometrist" />
                      <MenuItem value="Optician" primaryText="Optician" />
                      <MenuItem value="Ophthalmic Technologist" primaryText="Ophthalmic Technologist" />
                      <MenuItem value="Audiologist (excluding IONM)" primaryText="Audiologist (excluding IONM)" />
                      <MenuItem value="Hearing Therapist" primaryText="Hearing Therapist" />
                      <MenuItem value="Speech Pathologist" primaryText="Speech Pathologist" />
                      <MenuItem value="Speech Therapist" primaryText="Speech Therapist" />
                      <MenuItem value="Respiratory Therapist" primaryText="Respiratory Therapist" />
                      <MenuItem value="Respiratory Therapy Assistant / Technician / Technologist" primaryText="Respiratory Therapy Assistant / Technician / Technologist" />
                      <MenuItem value="Orthotist / Prosthetist" primaryText="Orthotist / Prosthetist" />
                      <MenuItem value="Dietitian / Nutritionist" primaryText="Dietitian / Nutritionist" />
                      <MenuItem value="Social Worker" primaryText="Social Worker" />
                      <MenuItem value="Counselor" primaryText="Counselor" />
                      <MenuItem value="Marriage / Family Therapist" primaryText="Marriage / Family Therapist" />
                      <MenuItem value="Psychologist" primaryText="Psychologist" />
                      <MenuItem value="Occupational Therapist" primaryText="Occupational Therapist" />
                      <MenuItem value="Occupational Therapy Assistant" primaryText="Occupational Therapy Assistant" />
                      <MenuItem value="Physical Therapist" primaryText="Physical Therapist" />
                      <MenuItem value="Physical Therapy Assistant" primaryText="Physical Therapy Assistant" />
                      <MenuItem value="Athletic Trainer" primaryText="Athletic Trainer" />
                      <MenuItem value="Non-certified Fitness Professional" primaryText="Non-certified Fitness Professional" />
                      <MenuItem value="Yoga / Pilates Instructor" primaryText="Yoga / Pilates Instructor" />
                      <MenuItem value="Certified Fitness Professional" primaryText="Certified Fitness Professional" />
                      <MenuItem value="Biomedical Technician/Technologist" primaryText="Biomedical Technician/Technologist" />
                      <MenuItem value="Blood Bank Technician/Technologist" primaryText="Blood Bank Technician/Technologist" />
                      <MenuItem value="Cardiology Technician/Technologist" primaryText="Cardiology Technician/Technologist" />
                      <MenuItem value="Certified Lab Technician/Technologist" primaryText="Certified Lab Technician/Technologist" />
                      <MenuItem value="Certified Medical Assistant" primaryText="Certified Medical Assistant" />
                      <MenuItem value="Clinical Lab Technician/Technologist" primaryText="Clinical Lab Technician/Technologist" />
                      <MenuItem value="Community Health Assistant" primaryText="Community Health Assistant" />
                      <MenuItem value="Community Health Technician/Technologist" primaryText="Community Health Technician/Technologist" />
                      <MenuItem value="Diagnostic Medical Sonographer" primaryText="Diagnostic Medical Sonographer" />
                      <MenuItem value="Dialysis Technician/Technologist" primaryText="Dialysis Technician/Technologist" />
                      <MenuItem value="EEG Technician/Technologist" primaryText="EEG Technician/Technologist" />
                      <MenuItem value="EKG Technician/Technologist" primaryText="EKG Technician/Technologist" />
                      <MenuItem value="Electrologist" primaryText="Electrologist" />
                      <MenuItem value="Histologic Technician/Technologist" primaryText="Histologic Technician/Technologist" />
                      <MenuItem value="Medical Laboratory Technician/Technologist" primaryText="Medical Laboratory Technician/Technologist" />
                      <MenuItem value="Medical Technician - NOC" primaryText="Medical Technician - NOC" />
                      <MenuItem value="Medical Technician/Technologist Assistant - NOC" primaryText="Medical Technician/Technologist Assistant - NOC" />
                      <MenuItem value="Medical Technologist - NOC" primaryText="Medical Technologist - NOC" />
                      <MenuItem value="Medical Assistant" primaryText="Medical Assistant" />
                      <MenuItem value="Medical Records Administrator" primaryText="Medical Records Administrator" />
                      <MenuItem value="Medical Records Technician/Technologist" primaryText="Medical Records Technician/Technologist" />
                      <MenuItem value="Nuclear Medical Technician/Technologist" primaryText="Nuclear Medical Technician/Technologist" />
                      <MenuItem value="Optometric Technician" primaryText="Optometric Technician" />
                      <MenuItem value="Orthopedic Technician" primaryText="Orthopedic Technician" />
                      <MenuItem value="Pathology Assistant" primaryText="Pathology Assistant" />
                      <MenuItem value="Phlebotomist" primaryText="Phlebotomist" />
                      <MenuItem value="Polysomnographic Sleep Technician" primaryText="Polysomnographic Sleep Technician" />
                      <MenuItem value="Radiation Therapist" primaryText="Radiation Therapist" />
                      <MenuItem value="Radiology Technician/Technologist" primaryText="Radiology Technician/Technologist" />
                      <MenuItem value="Sonographic Technician/Technologist" primaryText="Sonographic Technician/Technologist" />
                      <MenuItem value="Surgical Technician/Technologist" primaryText="Surgical Technician/Technologist" />
                      <MenuItem value="X-Ray Machine Technician/Technologist" primaryText="X-Ray Machine Technician/Technologist" />
                      <MenuItem value="Pharmacist" primaryText="Pharmacist" />
                      <MenuItem value="Pharmacy Technician" primaryText="Pharmacy Technician" />
                      <MenuItem value="EMT - Basic / Intermediate" primaryText="EMT - Basic / Intermediate" />
                      <MenuItem value="EMT - Volunteer" primaryText="EMT - Volunteer" />
                      <MenuItem value="EMT - Paramedic" primaryText="EMT - Paramedic" />
                      <MenuItem value="Registered Nurse" primaryText="Registered Nurse" />
                      <MenuItem value="Licensed Practical Nurse" primaryText="Licensed Practical Nurse" />
                      <MenuItem value="Licensed Vocational Nurse" primaryText="Licensed Vocational Nurse" /> 
                    </Field>
                  </div>
                  
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.ProfessionalAssociation`}
                      component={AutoComplete}
                      floatingLabelText="Professional Association"
                      openOnFocus
                      filter={MUIAutoComplete.fuzzyFilter}
                      dataSourceConfig={{text: 'name', value: 'name'}}
                      dataSource={professionalAssociation.professionalAssociation}
                      validate={required}
                    />
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.YearsInPractice`}
                      component={SelectField}
                      hintText="Years in Practice"
                      floatingLabelText="Years in Practice"
                      validate={required}
                    >                      
                      <MenuItem value="1" primaryText="1" />
                      <MenuItem value="2" primaryText="2" />
                      <MenuItem value="2+" primaryText="2+" />
                    </Field>
                  </div>
                  <div></div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.PatientCompensationFund`}
                      component={Toggle}
                      label="Patient compensation fund"
                      labelPosition="right"
                    />
                  </div>
                  <div>
                  <Field
                      name={`${providers}.ProviderDetail.HoursWorkPerWeek`}
                      component={TextField}
                      hintText="Work hours per week"
                      floatingLabelText="Work hours per week"
                      validate={[required,hours]}
                    />
                  </div>
                  <div>
                  <Field
                      name={`${providers}.ProviderDetail.ScheduleRatingFactor`}
                      component={TextField}
                      hintText="Schedule Rating Factor"
                      floatingLabelText="Schedule Rating Factor"
                      validate={[required, numeric]}
                    />
                  </div>
              </ListItem>
            </div>
          </ListItem>
        </div>
      ))}
    </div>
  </List>
)


const GNAM = ({fields, meta: {error, submitFailed}}) => (
  <List>
    <div>
      <div style={{display: 'flex', justifyContent: 'center'}}> 
        <AddGroupIcon style={{color:'green'}}  onClick={(event) =>more(event,fields)}/>
      </div>
        {fields.map((providers, index) => (
          <div>
            <ListItem key={index}> 
              <div>
                <ListItem>
                  <hr/>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.FirstName`}
                      component={TextField}
                      hintText="First Name"
                      floatingLabelText="First Name"
                      validate={[required,alphanumeric]}
                    />
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.MiddleInitial`}
                      component={TextField}
                      format={null}
                      hintText="Middle Initial"
                      floatingLabelText="Middle Initial"
                      validate={[required,alphabets]}
                    />
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.LastName`}
                      component={TextField}
                      hintText="Last Name"
                      floatingLabelText="Last Name"
                      validate={[required, alphanumeric]}
                      />
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.ProviderClass`}
                      component={SelectField}
                      hintText="Provider Class"
                      floatingLabelText="Provider Class"
                      validate={required}
                    >                      
                      <MenuItem value="Accountant" primaryText="Accountant" />
                      <MenuItem value="Advertiser" primaryText="Advertiser" />
                      <MenuItem value="Beauty Salon" primaryText="Beauty Salon" />
                      <MenuItem value="Consultant" primaryText="Consultant" />
                      <MenuItem value="Field Inspector" primaryText="Field Inspector" />
                      <MenuItem value="Graphic Designer" primaryText="Graphic Designer" />
                      <MenuItem value="Insurance Agent" primaryText="Insurance Agent" />
                      <MenuItem value="Interior Designer" primaryText="Interior Designer" />
                      <MenuItem value="Interpreter/ Translator" primaryText="Interpreter/ Translator" />
                      <MenuItem value="Landscaper" primaryText="Landscaper" />
                      <MenuItem value="Notary" primaryText="Notary" />
                      <MenuItem value="Photographer/Videographer" primaryText="Photographer/Videographer" />
                      <MenuItem value="Printing" primaryText="Printing" />
                      <MenuItem value="Publisher" primaryText="Publisher" />
                      <MenuItem value="Real Estate Agent" primaryText="Real Estate Agent" />
                      <MenuItem value="Travel Agent" primaryText="Travel Agent" />                     
                    </Field>
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.ProfessionalAssociation`}
                      component={AutoComplete}
                      floatingLabelText="Professional Association"
                      openOnFocus
                      filter={MUIAutoComplete.fuzzyFilter}
                      dataSourceConfig={{text: 'name', value: 'name'}}
                      dataSource={professionalAssociation.professionalAssociation}
                      validate={required}
                    />
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.YearsInPractice`}
                      component={SelectField}
                      hintText="Years in Practice"
                      floatingLabelText="Years in Practice"
                      validate={required}
                    >                      
                      <MenuItem value="1" primaryText="1" />
                      <MenuItem value="2" primaryText="2" />
                      <MenuItem value="2+" primaryText="2+" />
                    </Field>
                  </div>
                  <div>
                  <Field
                      name={`${providers}.ProviderDetail.HoursWorkPerWeek`}
                      component={TextField}
                      hintText="Work hours per week"
                      floatingLabelText="Work hours per week"
                      validate={[required,hours]}
                    />
                  </div>
                  <div>
                  <Field
                      name={`${providers}.ProviderDetail.MeetsStudentQualification`}
                      component={TextField}
                      hintText="Meets Student Qualification"
                      floatingLabelText="Meets Student Qualification"
                      validate={[required, numeric]}
                    />
                  </div>
                  <div>
                  <Field
                      name={`${providers}.ProviderDetail.UseOfWrittenContractsFactor`}
                      component={TextField}
                      hintText="Written contracts factor"
                      floatingLabelText="Written contracts factor"
                      validate={[required, numeric]}
                    />
                  </div>
              </ListItem>
            </div>
          </ListItem>
        </div>
      ))}
    </div>
  </List>
)

const GNLM = ({fields, meta: {error, submitFailed}}) => (
  <List>
    <div>
      <div style={{display: 'flex', justifyContent: 'center'}}> 
        <AddGroupIcon style={{color:'green'}}  onClick={(event) =>more(event,fields)}/>
      </div>
        {fields.map((providers, index) => (
          <div>
            <ListItem key={index}> 
              <div>
                <ListItem>
                  <hr/>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.FirstName`}
                      component={TextField}
                      hintText="First Name"
                      floatingLabelText="First Name"
                      validate={[required,alphanumeric]}
                    />
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.MiddleInitial`}
                      component={TextField}
                      format={null}
                      hintText="Middle Initial"
                      floatingLabelText="Middle Initial"
                      validate={[required,alphabets]}
                    />
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.LastName`}
                      component={TextField}
                      hintText="Last Name"
                      floatingLabelText="Last Name"
                      validate={[required, alphanumeric]}
                      />
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.ProviderClass`}
                      component={SelectField}
                      hintText="Provider Class"
                      floatingLabelText="Provider Class"
                      validate={required}
                    >                      
                      <MenuItem value="Accountant" primaryText="Accountant" />
                      <MenuItem value="Advertiser" primaryText="Advertiser" />
                      <MenuItem value="Beauty Salon" primaryText="Beauty Salon" />
                      <MenuItem value="Consultant" primaryText="Consultant" />
                      <MenuItem value="Field Inspector" primaryText="Field Inspector" />
                      <MenuItem value="Graphic Designer" primaryText="Graphic Designer" />
                      <MenuItem value="Insurance Agent" primaryText="Insurance Agent" />
                      <MenuItem value="Interior Designer" primaryText="Interior Designer" />
                      <MenuItem value="Interpreter/ Translator" primaryText="Interpreter/ Translator" />
                      <MenuItem value="Landscaper" primaryText="Landscaper" />
                      <MenuItem value="Notary" primaryText="Notary" />
                      <MenuItem value="Photographer/Videographer" primaryText="Photographer/Videographer" />
                      <MenuItem value="Printing" primaryText="Printing" />
                      <MenuItem value="Publisher" primaryText="Publisher" />
                      <MenuItem value="Real Estate Agent" primaryText="Real Estate Agent" />
                      <MenuItem value="Travel Agent" primaryText="Travel Agent" />                     
                    </Field>
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.ProfessionalAssociation`}
                      component={AutoComplete}
                      floatingLabelText="Professional Association"
                      openOnFocus
                      filter={MUIAutoComplete.fuzzyFilter}
                      dataSourceConfig={{text: 'name', value: 'name'}}
                      dataSource={professionalAssociation.professionalAssociation}
                      validate={required}
                    />
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.YearsInPractice`}
                      component={SelectField}
                      hintText="Years in Practice"
                      floatingLabelText="Years in Practice"
                      validate={required}
                    >                      
                      <MenuItem value="1" primaryText="1" />
                      <MenuItem value="2" primaryText="2" />
                      <MenuItem value="2+" primaryText="2+" />
                    </Field>
                  </div>
                  <div></div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.PatientCompensationFund`}
                      component={Toggle}
                      label="Patient compensation fund"
                      labelPosition="right"
                    />
                  </div>
                  <div>
                  <Field
                      name={`${providers}.ProviderDetail.HoursWorkPerWeek`}
                      component={TextField}
                      hintText="Work hours per week"
                      floatingLabelText="Work hours per week"
                      validate={[required,hours]}
                    />
                  </div>
                  <div>
                  <Field
                      name={`${providers}.ProviderDetail.MeetsStudentQualification`}
                      component={TextField}
                      hintText="Meets Student Qualification"
                      floatingLabelText="Meets Student Qualification"
                      validate={[required, numeric]}
                    />
                  </div>
                  <div>
                  <Field
                      name={`${providers}.ProviderDetail.UseOfWrittenContractsFactor`}
                      component={TextField}
                      hintText="Written contracts factor"
                      floatingLabelText="Written contracts factor"
                      validate={[required, numeric]}
                    />
                  </div>
              </ListItem>
            </div>
          </ListItem>
        </div>
      ))}
    </div>
  </List>
)

const GNNM = ({fields, meta: {error, submitFailed}}) => (
  <List>
    <div>
      <div style={{display: 'flex', justifyContent: 'center'}}> 
        <AddGroupIcon style={{color:'green'}}  onClick={(event) =>more(event,fields)}/>
      </div>
        {fields.map((providers, index) => (
          <div>
            <ListItem key={index}> 
              <div>
                <ListItem>
                  <hr/>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.FirstName`}
                      component={TextField}
                      hintText="First Name"
                      floatingLabelText="First Name"
                      validate={[required,alphanumeric]}
                    />
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.MiddleInitial`}
                      component={TextField}
                      format={null}
                      hintText="Middle Initial"
                      floatingLabelText="Middle Initial"
                      validate={[required,alphabets]}
                    />
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.LastName`}
                      component={TextField}
                      hintText="Last Name"
                      floatingLabelText="Last Name"
                      validate={[required, alphanumeric]}
                      />
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.ProviderClass`}
                      component={SelectField}
                      hintText="Provider Class"
                      floatingLabelText="Provider Class"
                      validate={required}
                    >                      
                      <MenuItem value="Accountant" primaryText="Accountant" />
                      <MenuItem value="Advertiser" primaryText="Advertiser" />
                      <MenuItem value="Beauty Salon" primaryText="Beauty Salon" />
                      <MenuItem value="Consultant" primaryText="Consultant" />
                      <MenuItem value="Field Inspector" primaryText="Field Inspector" />
                      <MenuItem value="Graphic Designer" primaryText="Graphic Designer" />
                      <MenuItem value="Insurance Agent" primaryText="Insurance Agent" />
                      <MenuItem value="Interior Designer" primaryText="Interior Designer" />
                      <MenuItem value="Interpreter/ Translator" primaryText="Interpreter/ Translator" />
                      <MenuItem value="Landscaper" primaryText="Landscaper" />
                      <MenuItem value="Notary" primaryText="Notary" />
                      <MenuItem value="Photographer/Videographer" primaryText="Photographer/Videographer" />
                      <MenuItem value="Printing" primaryText="Printing" />
                      <MenuItem value="Publisher" primaryText="Publisher" />
                      <MenuItem value="Real Estate Agent" primaryText="Real Estate Agent" />
                      <MenuItem value="Travel Agent" primaryText="Travel Agent" />                     
                    </Field>
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.ProfessionalAssociation`}
                      component={AutoComplete}
                      floatingLabelText="Professional Association"
                      openOnFocus
                      filter={MUIAutoComplete.fuzzyFilter}
                      dataSourceConfig={{text: 'name', value: 'name'}}
                      dataSource={professionalAssociation.professionalAssociation}
                      validate={required}
                    />
                  </div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.YearsInPractice`}
                      component={SelectField}
                      hintText="Years in Practice"
                      floatingLabelText="Years in Practice"
                      validate={required}
                    >                      
                      <MenuItem value="1" primaryText="1" />
                      <MenuItem value="2" primaryText="2" />
                      <MenuItem value="2+" primaryText="2+" />
                    </Field>
                  </div>
                  <div></div>
                  <div>
                    <Field
                      name={`${providers}.ProviderDetail.RiskManagementDiscount`}
                      component={Toggle}
                      label="Risk management discount"
                      labelPosition="right"
                    />
                  </div>
                  <div>
                  <Field
                      name={`${providers}.ProviderDetail.HoursWorkPerWeek`}
                      component={TextField}
                      hintText="Work hours per week"
                      floatingLabelText="Work hours per week"
                      validate={[required,hours]}
                    />
                  </div>
                  <div>
                  <Field
                      name={`${providers}.ProviderDetail.MeetsStudentQualification`}
                      component={TextField}
                      hintText="Meets Student Qualification"
                      floatingLabelText="Meets Student Qualification"
                      validate={[required, numeric]}
                    />
                  </div>
                  <div>
                  <Field
                      name={`${providers}.ProviderDetail.UseOfWrittenContractsFactor`}
                      component={TextField}
                      hintText="Written contracts factor"
                      floatingLabelText="Written contracts factor"
                      validate={[required, numeric]}
                    />
                  </div>
              </ListItem>
            </div>
          </ListItem>
        </div>
      ))}
    </div>
  </List>
)


class ProfFormFourthPage extends Component {
  render() {
    const {  handleSubmit, pristine, submitting, policyValue, Association, professional, numClaims, programValue, stateCode, numProviders} = this.props;
    const numChange= (dispatch) =>{
      this.props.dispatch(change('prof', 'providers', null))
    }
    return (
      <form  onSubmit={handleSubmit}>
        { policyValue==="Group" &&  
          <div><small><h5>Providers</h5><em style={{color:'orange'}}>(*contact underwriter for more than 10 providers)</em></small></div>
        }
        { policyValue==="Group" && 
          <div style={{display: 'flex', justifyContent: 'center', color: 'green'}}><b>{numProviders}</b></div>
        }
        { policyValue==="Group" && 
          <div>
            <Field
              name="numOfProviders"
              component={Slider}
              defaultValue={2}
              format={null}
              min={2}
              max={10}
              step={1}
              validate={required}
              onChange={numChange}
            />
          </div>
        }
        { numProviders && <div>
          <Field
            name="NumClaims"
            component={TextField}
            hintText='Number of Claims in last 5 Years'
            floatingLabelText='Number of Claims in last 5 Years'
            validate={[required, sendProviders(numProviders)]}
          />
        </div>
        }
        { !numProviders && <div>
          <Field
            name="NumClaims"
            component={TextField}
            hintText='Number of Claims in last 5 Years'
            floatingLabelText='Number of Claims in last 5 Years'
            validate={required}
          />
        </div>
        }
        {numClaims && 
          <div>
          <small><em><label>Please click the icon</label></em></small>
          </div>
        }
        { numClaims &&
          numClaims!==0 && 
          policyValue==="Individual" && 
          stateCode !=="NV" && 
          stateCode !=="IN" && 
          stateCode !=="LA" && 
          programValue === "ASID" &&
          <div>  
          <FieldArray 
            name="providers" 
            component={ICAA}
            validate={required}
            /> 
          </div>
        }   
        { numClaims &&
          numClaims!==0 && 
          policyValue==="Individual" && 
          stateCode !=="NV" && 
          (stateCode ==="IN" ||  stateCode ==="LA" )&& 
          programValue === "ASID" &&
          <div>  
          <FieldArray 
            name="providers" 
            component={ICLA}
            validate={required}
            /> 
          </div>
        }  
        { numClaims &&
          numClaims!==0 && 
          policyValue==="Individual" && 
          stateCode ==="NV" && 
          stateCode !=="IN" && 
          stateCode !=="LA" && 
          programValue === "ASID" &&
          <div>  
          <FieldArray 
            name="providers" 
            component={ICNA}
            validate={required}
            /> 
          </div>
        }   
        { numClaims &&
          numClaims!==0 && 
          policyValue==="Individual" && 
          stateCode !=="NV" && 
          stateCode !=="IN" && 
          stateCode !=="LA" && 
          programValue === "PL" &&
          <div>  
          <FieldArray 
            name="providers" 
            component={ICAP}
            validate={required}
            /> 
          </div>
        }   
        { numClaims &&
          numClaims!==0 && 
          policyValue==="Individual" && 
          stateCode !=="NV" && 
          (stateCode ==="IN" ||  stateCode ==="LA" )&& 
          programValue === "PL" &&
          <div>  
          <FieldArray 
            name="providers" 
            component={ICLP}
            validate={required}
            /> 
          </div>
        }  
        { numClaims &&
          numClaims!==0 && 
          policyValue==="Individual" && 
          stateCode ==="NV" && 
          stateCode !=="IN" && 
          stateCode !=="LA" && 
          programValue === "PL" &&
          <div>  
          <FieldArray 
            name="providers" 
            component={ICNP}
            validate={required}
            /> 
          </div>
        }   
        { numClaims &&
          numClaims!==0 && 
          policyValue==="Individual" && 
          stateCode !=="NV" && 
          stateCode !=="IN" && 
          stateCode !=="LA" && 
          programValue === "MPL" &&
          <div>  
          <FieldArray 
            name="providers" 
            component={ICAM}
            validate={required}
            /> 
          </div>
        }   
        { numClaims &&
          numClaims!==0 && 
          policyValue==="Individual" && 
          stateCode !=="NV" && 
          (stateCode ==="IN" ||  stateCode ==="LA" )&& 
          programValue === "MPL" &&
          <div>  
          <FieldArray 
            name="providers" 
            component={ICLM}
            validate={required}
            /> 
          </div>
        }  
        { numClaims &&
          numClaims!==0 && 
          policyValue==="Individual" && 
          stateCode ==="NV" && 
          stateCode !=="IN" && 
          stateCode !=="LA" && 
          programValue === "MPL" &&
          <div>  
          <FieldArray 
            name="providers" 
            component={ICNM}
            validate={required}
            /> 
          </div>
        }   
        { numClaims &&
          numClaims===0 && 
          policyValue==="Individual" && 
          stateCode !=="NV" && 
          stateCode !=="IN" && 
          stateCode !=="LA" && 
          programValue === "ASID" &&
          <div>  
          <FieldArray 
            name="providers" 
            component={INAA}
            validate={required}
            /> 
          </div>
        }   
        { numClaims &&
          numClaims===0 && 
          policyValue==="Individual" && 
          stateCode !=="NV" && 
          (stateCode ==="IN" ||  stateCode ==="LA" )&& 
          programValue === "ASID" &&
          <div>  
          <FieldArray 
            name="providers" 
            component={INLA}
            validate={required}
            /> 
          </div>
        }  
        { numClaims &&
          numClaims===0 && 
          policyValue==="Individual" && 
          stateCode ==="NV" && 
          stateCode !=="IN" && 
          stateCode !=="LA" && 
          programValue === "ASID" &&
          <div>  
          <FieldArray 
            name="providers" 
            component={INNA}
            validate={required}
            /> 
          </div>
        }   
        { numClaims &&
          numClaims===0 && 
          policyValue==="Individual" && 
          stateCode !=="NV" && 
          stateCode !=="IN" && 
          stateCode !=="LA" && 
          programValue === "PL" &&
          <div>  
          <FieldArray 
            name="providers" 
            component={INAP}
            validate={required}
            /> 
          </div>
        }   
        { numClaims &&
          numClaims===0 && 
          policyValue==="Individual" && 
          stateCode !=="NV" && 
          (stateCode ==="IN" ||  stateCode ==="LA" )&& 
          programValue === "PL" &&
          <div>  
          <FieldArray 
            name="providers" 
            component={INLP}
            validate={required}
            /> 
          </div>
        }  
        { numClaims &&
          numClaims===0 && 
          policyValue==="Individual" && 
          stateCode ==="NV" && 
          stateCode !=="IN" && 
          stateCode !=="LA" && 
          programValue === "PL" &&
          <div>  
          <FieldArray 
            name="providers" 
            component={INNP}
            validate={required}
            /> 
          </div>
        }   
        { numClaims &&
          numClaims===0 && 
          policyValue==="Individual" && 
          stateCode !=="NV" && 
          stateCode !=="IN" && 
          stateCode !=="LA" && 
          programValue === "MPL" &&
          <div>  
          <FieldArray 
            name="providers" 
            component={INAM}
            validate={required}
            /> 
          </div>
        }   
        { numClaims &&
          numClaims===0 && 
          policyValue==="Individual" && 
          stateCode !=="NV" && 
          (stateCode ==="IN" ||  stateCode ==="LA" )&& 
          programValue === "MPL" &&
          <div>  
          <FieldArray 
            name="providers" 
            component={INLM}
            validate={required}
            /> 
          </div>
        }  
        { numClaims &&
          numClaims===0 && 
          policyValue==="Individual" && 
          stateCode ==="NV" && 
          stateCode !=="IN" && 
          stateCode !=="LA" && 
          programValue === "MPL" &&
          <div>  
          <FieldArray 
            name="providers" 
            component={INNM}
            validate={required}
            /> 
          </div>
        }   
        { numClaims &&
          numClaims!==0 && 
          policyValue==="Group" && 
          stateCode !=="NV" && 
          stateCode !=="IN" && 
          stateCode !=="LA" && 
          programValue === "ASID" &&
          <div>  
          <FieldArray 
            name="providers" 
            component={GCAA}
            validate={required}
            /> 
          </div>
        }   
        { numClaims &&
          numClaims!==0 && 
          policyValue==="Group" && 
          stateCode !=="NV" && 
          (stateCode ==="IN" ||  stateCode ==="LA" )&& 
          programValue === "ASID" &&
          <div>  
          <FieldArray 
            name="providers" 
            component={GCLA}
            validate={required}
            /> 
          </div>
        }  
        { numClaims &&
          numClaims!==0 && 
          policyValue==="Group" && 
          stateCode ==="NV" && 
          stateCode !=="IN" && 
          stateCode !=="LA" && 
          programValue === "ASID" &&
          <div>  
          <FieldArray 
            name="providers" 
            component={GCNA}
            validate={required}
            /> 
          </div>
        }   
        { numClaims &&
          numClaims!==0 && 
          policyValue==="Group" && 
          stateCode !=="NV" && 
          stateCode !=="IN" && 
          stateCode !=="LA" && 
          programValue === "PL" &&
          <div>  
          <FieldArray 
            name="providers" 
            component={GCAP}
            validate={required}
            /> 
          </div>
        }   
        { numClaims &&
          numClaims!==0 && 
          policyValue==="Group" && 
          stateCode !=="NV" && 
          (stateCode ==="IN" ||  stateCode ==="LA" )&& 
          programValue === "PL" &&
          <div>  
          <FieldArray 
            name="providers" 
            component={GCLP}
            validate={required}
            /> 
          </div>
        }  
        { numClaims &&
          numClaims!==0 && 
          policyValue==="Group" && 
          stateCode ==="NV" && 
          stateCode !=="IN" && 
          stateCode !=="LA" && 
          programValue === "PL" &&
          <div>  
          <FieldArray 
            name="providers" 
            component={GCNP}
            validate={required}
            /> 
          </div>
        }   
        { numClaims &&
          numClaims!==0 && 
          policyValue==="Group" && 
          stateCode !=="NV" && 
          stateCode !=="IN" && 
          stateCode !=="LA" && 
          programValue === "MPL" &&
          <div>  
          <FieldArray 
            name="providers" 
            component={GCAM}
            validate={required}
            /> 
          </div>
        }   
        { numClaims &&
          numClaims!==0 && 
          policyValue==="Group" && 
          stateCode !=="NV" && 
          (stateCode ==="IN" ||  stateCode ==="LA" )&& 
          programValue === "MPL" &&
          <div>  
          <FieldArray 
            name="providers" 
            component={GCLM}
            validate={required}
            /> 
          </div>
        }  
        { numClaims &&
          numClaims!==0 && 
          policyValue==="Group" && 
          stateCode ==="NV" && 
          stateCode !=="IN" && 
          stateCode !=="LA" && 
          programValue === "MPL" &&
          <div>  
          <FieldArray 
            name="providers" 
            component={GCNM}
            validate={required}
            /> 
          </div>
        }   
        { numClaims &&
          numClaims===0 && 
          policyValue==="Group" && 
          stateCode !=="NV" && 
          stateCode !=="IN" && 
          stateCode !=="LA" && 
          programValue === "ASID" &&
          <div>  
          <FieldArray 
            name="providers" 
            component={GNAA}
            validate={required}
            /> 
          </div>
        }   
        { numClaims &&
          numClaims===0 && 
          policyValue==="Group" && 
          stateCode !=="NV" && 
          (stateCode ==="IN" ||  stateCode ==="LA" )&& 
          programValue === "ASID" &&
          <div>  
          <FieldArray 
            name="providers" 
            component={GNLA}
            validate={required}
            /> 
          </div>
        }  
        { numClaims &&
          numClaims===0 && 
          policyValue==="Group" && 
          stateCode ==="NV" && 
          stateCode !=="IN" && 
          stateCode !=="LA" && 
          programValue === "ASID" &&
          <div>  
          <FieldArray 
            name="providers" 
            component={GNNA}
            validate={required}
            /> 
          </div>
        }   
        { numClaims &&
          numClaims===0 && 
          policyValue==="Group" && 
          stateCode !=="NV" && 
          stateCode !=="IN" && 
          stateCode !=="LA" && 
          programValue === "PL" &&
          <div>  
          <FieldArray 
            name="providers" 
            component={GNAP}
            validate={required}
            /> 
          </div>
        }   
        { numClaims &&
          numClaims===0 && 
          policyValue==="Group" && 
          stateCode !=="NV" && 
          (stateCode ==="IN" ||  stateCode ==="LA" )&& 
          programValue === "PL" &&
          <div>  
          <FieldArray 
            name="providers" 
            component={GNLP}
            validate={required}
            /> 
          </div>
        }  
        { numClaims &&
          numClaims===0 && 
          policyValue==="Group" && 
          stateCode ==="NV" && 
          stateCode !=="IN" && 
          stateCode !=="LA" && 
          programValue === "PL" &&
          <div>  
          <FieldArray 
            name="providers" 
            component={GNNP}
            validate={required}
            /> 
          </div>
        }   
        { numClaims &&
          numClaims===0 && 
          policyValue==="Group" && 
          stateCode !=="NV" && 
          stateCode !=="IN" && 
          stateCode !=="LA" && 
          programValue === "MPL" &&
          <div>  
          <FieldArray 
            name="providers" 
            component={GNAM}
            validate={required}
            /> 
          </div>
        }   
        { numClaims &&
          numClaims===0 && 
          policyValue==="Group" && 
          stateCode !=="NV" && 
          (stateCode ==="IN" ||  stateCode ==="LA" )&& 
          programValue === "MPL" &&
          <div>  
          <FieldArray 
            name="providers" 
            component={GNLM}
            validate={required}
            /> 
          </div>
        }  
        { numClaims &&
          numClaims===0 && 
          policyValue==="Group" && 
          stateCode ==="NV" && 
          stateCode !=="IN" && 
          stateCode !=="LA" && 
          programValue === "MPL" &&
          <div>  
          <FieldArray 
            name="providers" 
            component={GNNM}
            validate={required}
            /> 
          </div>
        }   
        { professional==="Licensed" && policyValue === "Individual" &&
            <div>
              <Field
                name="employment"
                component={SelectField}
                hintText="Employment Category"
                floatingLabelText="Employment Category"
                validate={required}
              >                      
                <MenuItem value="Employed" primaryText="Employed" />
                <MenuItem value="Self Employed" primaryText="Self Employed" />
              </Field>
            </div>
        }
        { Association && 
          
        <div>
          <button type="submit" disabled={pristine || submitting}>
            Submit
          </button>
        </div>
        }
      </form>
    );
  }
}



ProfFormFourthPage = reduxForm({
  form: 'prof',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(ProfFormFourthPage);


const selector = formValueSelector('prof') // <-- same as form name
ProfFormFourthPage = connect(
  state => {
    // can select values individually
    const programValue = selector(state, 'programName')
    const policyValue = selector(state, 'policyType')
    const stateCode = selector(state, 'state')  
    const numProviders = selector(state, 'numOfProviders')  
    const numClaims = selector(state, 'NumClaims')
    const Association = selector(state, 'providers[0]')
    const professional = selector(state, 'providers.0.ProviderDetail.ProfessionalAssociation')
    const providers = selector(state, 'providers')
    // or together as a group
    return {      
      policyValue,
      stateCode,
      programValue,
      numProviders,
      numClaims, 
      Association,
      professional,
      providers
    }
  },
  dispatch =>{
    return bindActionCreators({change}, dispatch);
  }
)(ProfFormFourthPage)

export default ProfFormFourthPage;


