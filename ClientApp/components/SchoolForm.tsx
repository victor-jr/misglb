import * as React from 'react';
import { Form, Checkbox, Radio, Select, TextArea } from 'semantic-ui-react';
import ApplicationInterface from '../interfaces/ApplicationInterface';

interface SchoolFormProps {
  formData: ApplicationInterface,
  handleFormChange: Function
}

export default class SchoolForm extends React.Component<SchoolFormProps, {}> {
  constructor(props: any) {
    super(props);
  }

  render() {
    const { handleFormChange, formData } = this.props;
    return (
      <Form>
        <label>Current College</label>
        <Form.Group widths={'equal'}>
          <Form.Input label='Country' name='country' onChange={(e, data) => handleFormChange(e, data, 'currentCollege')} />
          <Form.Input label='State/Atoll' name='stateAtoll' onChange={(e, data) => handleFormChange(e, data, 'currentCollege')} />
          <Form.Input label='Address' name='address' onChange={(e, data) => handleFormChange(e, data, 'currentCollege')} />
          <Form.Input label='Zip' name='zip' onChange={(e, data) => handleFormChange(e, data, 'currentCollege')} />
        </Form.Group>
        <Form.Group widths={4}>
          <Form.Input label='Name' name='name' onChange={(e, data) => handleFormChange(e, data, 'currentCollege')} />
        </Form.Group>

        <Form.Group widths='equal'>
          <Form.Input label="Degree Being Sought" name="degreeSought" onChange={(e, data) => handleFormChange(e, data)} />
          <Form.Input label="College Standing" name="collegeStanding" onChange={(e, data) => handleFormChange(e, data)} />        
          <Form.Input name='fieldOfStudy' label='Field of Study' onChange={(e, data) => handleFormChange(e, data)} />
          <Form.Input label='Date of Graduation' name='dateOfGraduation' type='date' value={formData.dateOfGraduation} onChange={(e, data) => handleFormChange(e, data)}/>
          <Form.Input label='Date Aid Needed' name='dateFinAidNeeded' type='date' value={formData.dateFinAidNeeded} onChange={(e, data) => handleFormChange(e, data)}/>
        </Form.Group>

        <Form.Group>
          <Form.Checkbox width={2} name='hasPriorCollege' label='Have Prior College' checked={formData.hasPriorCollege} onChange={(e, data) => handleFormChange(e, data)}/>
        </Form.Group>        
        {
          formData.hasPriorCollege &&
          <div> 
            <label>Prior College</label>
            <Form.Group widths={'equal'}>
              <Form.Input label='Country' name='country' onChange={(e, data) => handleFormChange(e, data, 'priorCollege')} />
              <Form.Input label='State/Atoll' name='stateAtoll' onChange={(e, data) => handleFormChange(e, data, 'priorCollege')} />
              <Form.Input label='Address' name='address' onChange={(e, data) => handleFormChange(e, data, 'priorCollege')} />
              <Form.Input label='Zip' name='zip' onChange={(e, data) => handleFormChange(e, data, 'priorCollege')} />
            </Form.Group>
            <Form.Group widths={4}>
              <Form.Input label='Name' name='name' onChange={(e, data) => handleFormChange(e, data, 'priorCollege')} />
              <Form.Input name='degreeObtained' label='Degree Obtained' onChange={(e, data) => handleFormChange(e, data, 'priorCollege')} />
            </Form.Group>
        </div>
        }
          
        <label>High School</label>
        <Form.Group widths={'equal'}>
          <Form.Input label='Country' name='country' onChange={(e, data) => handleFormChange(e, data, 'highschool')} />
          <Form.Input label='State/Atoll' name='stateAtoll' onChange={(e, data) => handleFormChange(e, data, 'highschool')} />
          <Form.Input label='Address' name='address' onChange={(e, data) => handleFormChange(e, data, 'highschool')} />
          <Form.Input label='Zip' name='zip' onChange={(e, data) => handleFormChange(e, data, 'highschool')} />
        </Form.Group>
        <Form.Group widths={4}>
          <Form.Input label='Name' name='name' onChange={(e, data) => handleFormChange(e, data, 'highschool')} />
          <Form.Input label='Start Date' name='highSchoolStartDate' type='date' value={formData.highSchool.highSchoolStartDate} onChange={(e, data) => handleFormChange(e, data, 'highschool')}/>
          <Form.Input label='End Date' name='highSchoolEndDate' type='date' value={formData.highSchool.highSchoolEndDate} onChange={(e, data) => handleFormChange(e, data, 'highschool')}/>
          <Form.Input label='Graduation Date' name='highSchoolGradDate' type='date' value={formData.highSchool.highSchoolGradDate} onChange={(e, data) => handleFormChange(e, data, 'highschool')}/>
        </Form.Group>

      </Form>
    );
  }
}
