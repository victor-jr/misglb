import * as React from 'react';
import { Form, Checkbox } from 'semantic-ui-react';
import ApplicationInterface from '../interfaces/ApplicationInterface';

interface PersonalFormProps {
  formData: ApplicationInterface,
  handleFormChange: Function
}

export default class PersonalForm extends React.Component<PersonalFormProps, {}> {
  constructor(props: any) {
    super(props);
  }

  render() {
    const { handleFormChange, formData } = this.props;

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
          <Checkbox name='isSummerApplication' label='Summer Application' checked={formData.isSummerApplication} onChange={(e, data) => handleFormChange(e, data)}/>
        </Form.Group>

        <Form.Group widths={5}>
          <Form.Input label='First Name' name='firstName' onChange={(e, data) => handleFormChange(e, data)} />
          <Form.Input label='Last Name' name='lastName' onChange={(e, data) => handleFormChange(e, data)} />
          <Form.Input label='Nickname' name='nickName' onChange={(e, data) => handleFormChange(e, data)} />
          <Form.Input label='SSN' name='ssn' onChange={(e, data) => handleFormChange(e, data)} />
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
        
      </Form>
    );
  }
}
