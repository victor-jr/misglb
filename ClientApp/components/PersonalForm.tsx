import * as React from 'react';
import { Form, Checkbox, Radio, Select, TextArea, Button } from 'semantic-ui-react';
import ApplicationInterface from '../interfaces/ApplicationInterface';

interface PersonalFormProps {
  formData: ApplicationInterface,
  step: Number,
  handleFormChange: Function,
  handleNextClick: Function
}

interface PersonalFormState {
  haveChildren: boolean
}

export default class PersonalForm extends React.Component<PersonalFormProps, PersonalFormState> {
  MARTIALOPTIONS = [
    {key: 's', value: 0, text: 'Single'},
    {key: 'm', value: 1, text: 'Married'},
    {key: 'w', value: 2, text: 'Widowed/Divorced/Seperate'}
  ];
  
  constructor(props: any) {
    super(props);
    this.state = {
      haveChildren: false
    };
    this.handleChildrenChange = this.handleChildrenChange.bind(this)
    this.validate = this.validate.bind(this);
  }

  handleChildrenChange = () => {
    const { formData, handleFormChange } = this.props;
    const { haveChildren } = this.state;
    this.setState((prevState) => {
      return {
        haveChildren: !prevState.haveChildren
      }
    })
  }

  validate() {
    const { formData, handleNextClick } = this.props;
    let errorMsg: string = '';
    formData.applicationStatus === null || formData.applicationStatus === ''  ? errorMsg += 'Current Application Status Required\n' : ''
    formData.academicYearStart === null || formData.academicYearStart === null ? errorMsg += 'Academic Year Required\n' : ''
    formData.firstName === null || formData.firstName === '' ? errorMsg += 'First Name Required\n' : ''
    formData.lastName === null || formData.lastName === '' ? errorMsg += 'Last Name Required\n' : ''
    formData.ssn === null || formData.ssn === '' ? errorMsg += 'SSN Required\n' : ''
    formData.gender === null ? errorMsg += 'Gender Required\n' : ''
    formData.dob === null ? errorMsg += 'Date of Birth Required\n' : ''
    formData.placeOfBirth === null || formData.placeOfBirth === '' ? errorMsg += 'Birth Place Required\n' : ''
    formData.age === null ? errorMsg += 'Age Required\n' : ''
    formData.homeAtoll === null || formData.homeAtoll === '' ? errorMsg += 'Home Required\n' : ''
    formData.currentContact === null ? errorMsg += 'Current Mailing Required\n' : ''
    formData.permanentContact === null ? errorMsg += 'Permanent Mailing Required\n' : ''
    formData.emergencyContact === null ? errorMsg += 'Emergencey Contact Required\n' : ''
    formData.martialStatus === null ? errorMsg += 'Martial Status Required\n' : ''
    formData.parentMartialStatus === null ? errorMsg += 'Parent Martial Status Required\n' : ''
        
    if (errorMsg != '') {
      alert(errorMsg);
    } else {
      handleNextClick();
    }
  }

  render() {
    const { handleFormChange, handleNextClick, formData, step } = this.props;
    const { haveChildren } = this.state;
    return (
      <div>
        <Form>
          <Form.Group inline>
            <label>Current Application Status:</label>
            <Form.Radio label='New' value='New' name='applicationStatus' checked={formData.applicationStatus === 'New'} onChange={(e, data) => handleFormChange(e,data)} />
            <Form.Radio label='Ongoing' value='Ongoing' name='applicationStatus' checked={formData.applicationStatus === 'Ongoing'} onChange={(e, data) => handleFormChange(e,data)} />
            <Form.Radio label='Returning' value='Returning' name='applicationStatus' checked={formData.applicationStatus === 'Returning'} onChange={(e, data) => handleFormChange(e,data)} /> 
          </Form.Group>

          <Form.Group inline>
            <label>Academic Year:</label>
            <Form.Input name='academicYearStart' placeholder={new Date().getFullYear()} onChange={(e,data) => handleFormChange(e,data)} /> -to- &nbsp;&nbsp;&nbsp; 
            <Form.Input name='academicYearEnd' placeholder={new Date().getFullYear() + 1} onChange={(e,data) => handleFormChange(e,data)} />     
            <Form.Checkbox name='isSummerApplication' label='Summer Application' checked={formData.isSummerApplication} onChange={(e, data) => handleFormChange(e, data)}/>
          </Form.Group>

          <Form.Group widths={5}>
            <Form.Input label='First Name' name='firstName' onChange={(e, data) => handleFormChange(e, data)} />
            <Form.Input label='Last Name' name='lastName' onChange={(e, data) => handleFormChange(e, data)} />
            <Form.Input label='Nickname' name='nickName' onChange={(e, data) => handleFormChange(e, data)} />
            <Form.Input label='SSN' name='ssn' onChange={(e, data) => handleFormChange(e, data)} />
          </Form.Group>

          <Form.Group inline>
            <label>Gender</label>
            <Form.Radio label='Male' name='gender' value='1' checked={formData.gender === 0} onChange={(e, data) => handleFormChange(e, data)} />
            <Form.Radio label='Female' name='gender' value='2' checked={formData.gender === 1} onChange={(e, data) => handleFormChange(e, data)} />          
          </Form.Group>

          <Form.Group>
            <Form.Input label='Date of Birth' name='dob' type='date' value={formData.dob} onChange={(e, data) => handleFormChange(e, data)}/>
            <Form.Input label='Place of Birth' name='placeOfBirth' onChange={(e, data) => handleFormChange(e, data)} />
            <Form.Input label='Age' name='age' onChange={(e, data) => handleFormChange(e, data)} type='number' />
            <Form.Input label='Home Atoll' name='homeAtoll' onChange={(e, data) => handleFormChange(e, data)} />
            <Form.Checkbox name='ebeyeKwajResOrLandOwner' label='Ebeye/Kwaj Landowner' checked={formData.ebeyeKwajResOrLandOwner} onChange={(e, data) => handleFormChange(e, data)}/>
          </Form.Group>      
            
          <label>Current Mailing Address:</label>
          <Form.Group widths={'equal'}>
            <Form.Input label='Country' name='country' onChange={(e, data) => handleFormChange(e, data, 'currentContact')} />
            <Form.Input label='State/Atoll' name='state_atoll' onChange={(e, data) => handleFormChange(e, data, 'currentContact')} />
            <Form.Input label='Address' name='address' onChange={(e, data) => handleFormChange(e, data, 'currentContact')} />
            <Form.Input label='Zip' name='zip' onChange={(e, data) => handleFormChange(e, data, 'currentContact')} />
          </Form.Group>
          <Form.Group widths={4}>
            <Form.Input label='Phone' name='phone' onChange={(e, data) => handleFormChange(e, data, 'currentContact')} />
            <Form.Input label='Email' name='email' onChange={(e, data) => handleFormChange(e, data, 'currentContact')} />
          </Form.Group>

          <label>Permanent Mailing Address:</label>
          <Form.Group widths={'equal'}>
            <Form.Input label='Country' name='country' onChange={(e, data) => handleFormChange(e, data, 'permanentContact')} />
            <Form.Input label='State/Atoll' name='state_atoll' onChange={(e, data) => handleFormChange(e, data, 'permanentContact')} />
            <Form.Input label='Address' name='address' onChange={(e, data) => handleFormChange(e, data, 'permanentContact')} />
            <Form.Input label='Zip' name='zip' onChange={(e, data) => handleFormChange(e, data, 'permanentContact')} />
          </Form.Group>
          <Form.Group widths={4}>
            <Form.Input label='Phone' name='phone' onChange={(e, data) => handleFormChange(e, data, 'permanentContact')} />
          </Form.Group>

          <label>Emergency Contact:</label>
          <Form.Group widths={'equal'}>
            <Form.Input label='First Name' name='firstName' onChange={(e, data) => handleFormChange(e, data, 'emergencyContact')} />
            <Form.Input label='Last Name' name='lastName' onChange={(e, data) => handleFormChange(e, data, 'emergencyContact')} />          
            <Form.Input label='Relationship' name='relationship' onChange={(e, data) => handleFormChange(e, data, 'emergencyContact')} />
          </Form.Group>
          <Form.Group widths={4}>
            <Form.Input label='Phone' name='phone' onChange={(e, data) => handleFormChange(e, data, 'emergencyContact')} />
            <Form.Input label='Email' name='email' onChange={(e, data) => handleFormChange(e, data, 'emergencyContact')} />
          </Form.Group>

          <Form.Group>
            <Form.Field width={3} name='martialStatus' control={Select} label='Martial Status' options={this.MARTIALOPTIONS} onChange={(e: any, data: any) => handleFormChange(e, data)} />
            {
              formData.martialStatus === 1 && 
              <Form.Input width={4} label='Name of Husband or Wife' name='spouseName' onChange={(e, data) => handleFormChange(e, data)} />
            }
          </Form.Group>

          <Form.Group>
            <Form.Checkbox width={2} name='hasChildren' label='Have Children' checked={formData.hasChildren} onChange={(e, data) => handleFormChange(e, data)}/>
            {
              formData.hasChildren && 
              <Form.Field width={5} control={TextArea} label='Name of Children' name='children' onChange={(e: any, data: any) => handleFormChange(e, data)} />
            }
          </Form.Group>

          <label>Parents</label>
          <Form.Group>
            <Form.Field width={3} name='parentMartialStatus' control={Select} label='Parents Martial Status' options={this.MARTIALOPTIONS} onChange={(e: any, data: any) => handleFormChange(e, data)} />          
            <Form.Checkbox width={2} name='hasFather' label='Father' checked={formData.hasFather} onChange={(e, data) => handleFormChange(e, data)}/>                    
            <Form.Checkbox width={2} name='hasMother' label='Mother' checked={formData.hasMother} onChange={(e, data) => handleFormChange(e, data)}/>                    
            <Form.Checkbox width={2} name='hasGuardian' label='Guardian' checked={formData.hasGuardian} onChange={(e, data) => handleFormChange(e, data)}/>                    
          </Form.Group>
          {
            formData.hasFather &&
            <div>
              <label>Father</label>
              <Form.Group>
                <Form.Input label='First Name' name='firstName' onChange={(e, data) => handleFormChange(e, data, 'father')} />
                <Form.Input label='Last Name' name='lastName' onChange={(e, data) => handleFormChange(e, data, 'father')} />
                <Form.Input type='number' label='Age' name='age' onChange={(e, data) => handleFormChange(e, data, 'father')} />
                <Form.Input label='Employer' name='employer' onChange={(e, data) => handleFormChange(e, data, 'father')} />
                <Form.Input type='number' label='Annual Income' name='annualIncome' onChange={(e, data) => handleFormChange(e, data, 'father')} />
              </Form.Group>
            </div>
          }
          {
            formData.hasMother &&
            <div>
              <label>Mother</label>
              <Form.Group>
                <Form.Input label='First Name' name='firstName' onChange={(e, data) => handleFormChange(e, data, 'mother')} />
                <Form.Input label='Last Name' name='lastName' onChange={(e, data) => handleFormChange(e, data, 'mother')} />
                <Form.Input type='number' label='Age' name='age' onChange={(e, data) => handleFormChange(e, data, 'mother')} />
                <Form.Input label='Employer' name='employer' onChange={(e, data) => handleFormChange(e, data, 'mother')} />
                <Form.Input type='number' label='Annual Income' name='annualIncome' onChange={(e, data) => handleFormChange(e, data, 'mother')} />
              </Form.Group>
            </div>
          }
          {
            formData.hasGuardian &&
            <div>
              <label>Guardian</label>
              <Form.Group>
                <Form.Input label='First Name' name='firstName' onChange={(e, data) => handleFormChange(e, data, 'guardian')} />
                <Form.Input label='Last Name' name='lastName' onChange={(e, data) => handleFormChange(e, data, 'guardian')} />
                <Form.Input type='number' label='Age' name='age' onChange={(e, data) => handleFormChange(e, data, 'guardian')} />
                <Form.Input label='Employer' name='employer' onChange={(e, data) => handleFormChange(e, data, 'guardian')} />
                <Form.Input type='number' label='Annual Income' name='annualIncome' onChange={(e, data) => handleFormChange(e, data, 'guardian')} />
              </Form.Group>
            </div>
          }

        </Form>
        {
          step != 3 &&
          <Button onClick={this.validate}>Next</Button>
        }
      </div>
    );
  }
}
