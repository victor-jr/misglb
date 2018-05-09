import * as React from 'react';
import { Form, Checkbox, Radio, Select, TextArea } from 'semantic-ui-react';
import ApplicationInterface from '../interfaces/ApplicationInterface';

interface PersonalFormProps {
  formData: ApplicationInterface,
  handleFormChange: Function
}

interface PersonalFormState {
  haveChildren: boolean
}

export default class PersonalForm extends React.Component<PersonalFormProps, PersonalFormState> {
  MARTIALOPTIONS = [
    {key: 's', value: 'Single', text: 'Single'},
    {key: 'm', value: 'Married', text: 'Married'},
    {key: 'w', value: 'Widowed/Divorced/Seperate', text: 'Widowed/Divorced/Seperate'}
  ];
  
  constructor(props: any) {
    super(props);
    this.state = {
      haveChildren: false
    };
    this.handleChildrenChange = this.handleChildrenChange.bind(this)
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

  render() {
    const { handleFormChange, formData } = this.props;
    const { haveChildren } = this.state;
    return (
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
          <Form.Radio label='Male' name='gender' value='Male' checked={formData.gender === 'Male'} onChange={(e, data) => handleFormChange(e, data)} />
          <Form.Radio label='Female' name='gender' value='Female' checked={formData.gender === 'Female'} onChange={(e, data) => handleFormChange(e, data)} />          
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
          <Form.Input label='State/Atoll' name='stateAtoll' onChange={(e, data) => handleFormChange(e, data, 'currentContact')} />
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
          <Form.Input label='State/Atoll' name='stateAtoll' onChange={(e, data) => handleFormChange(e, data, 'permanentContact')} />
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
            formData.martialStatus === 'Married' && 
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

      </Form>
    );
  }
}
