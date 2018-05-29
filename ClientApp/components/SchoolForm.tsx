import * as React from 'react';
import * as _ from 'lodash';
import { Form, Button, Checkbox, Radio, Select, TextArea } from 'semantic-ui-react';
import ApplicationInterface from '../interfaces/ApplicationInterface';

interface SchoolFormProps {
  formData: ApplicationInterface,
  step: Number,
  handleFormChange: Function,
  handleNextClick: Function
}

export default class SchoolForm extends React.Component<SchoolFormProps, {}> {
  constructor(props: any) {
    super(props);
  }

  validate() {
    const { formData, handleNextClick } = this.props;
    let errorMsg: string = '';
    formData.currentCollege == null ? errorMsg += 'Current College Required\n': '';
    formData.degreeSought == null ? errorMsg += 'Degree Being Sought Required\n': '';
    formData.collegeStanding == null ? errorMsg += 'College Standing Required\n': '';
    formData.fieldOfStudy == null ? errorMsg += 'Field of Study Required\n': '';
    formData.dateOfGraduation == null ? errorMsg += 'Date of Graduation Required\n': '';
    formData.dateFinAidNeeded == null ? errorMsg += 'Date Aid Needed Required\n': '';
    formData.highSchool.country == null ||
      formData.highSchool.state_atoll == null ||
      formData.highSchool.address == null ||
      formData.highSchool.zip == null ||
      formData.highSchool.name == null 
      ? errorMsg += 'High School Required\n': '';
        
    if (errorMsg != '') {
      alert(errorMsg);
    } else {
      handleNextClick();
    }
  }

  render() {
    const { handleFormChange, formData, step, handleNextClick } = this.props;
    return (
      <div>
        <Form>
          <label>Current College</label>
          <Form.Group widths={'equal'}>
            <Form.Input label='Country' name='country' onChange={(e, data) => handleFormChange(e, data, 'currentCollege')} />
            <Form.Input label='State/Atoll' name='state_atoll' onChange={(e, data) => handleFormChange(e, data, 'currentCollege')} />
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
                <Form.Input label='State/Atoll' name='state_atoll' onChange={(e, data) => handleFormChange(e, data, 'priorCollege')} />
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
            <Form.Input label='Country' name='country' onChange={(e, data) => handleFormChange(e, data, 'highSchool')} />
            <Form.Input label='State/Atoll' name='state_atoll' onChange={(e, data) => handleFormChange(e, data, 'highSchool')} />
            <Form.Input label='Address' name='address' onChange={(e, data) => handleFormChange(e, data, 'highSchool')} />
            <Form.Input label='Zip' name='zip' onChange={(e, data) => handleFormChange(e, data, 'highSchool')} />
          </Form.Group>
          <Form.Group widths={4}>
            <Form.Input label='Name' name='name' onChange={(e, data) => handleFormChange(e, data, 'highSchool')} />
            <Form.Input label='Start Date' name='highSchoolStartDate' type='date' value={formData.highSchool.highSchoolStartDate} onChange={(e, data) => handleFormChange(e, data, 'highSchool')}/>
            <Form.Input label='End Date' name='highSchoolEndDate' type='date' value={formData.highSchool.highSchoolEndDate} onChange={(e, data) => handleFormChange(e, data, 'highSchool')}/>
            <Form.Input label='Graduation Date' name='highSchoolGradDate' type='date' value={formData.highSchool.highSchoolGradDate} onChange={(e, data) => handleFormChange(e, data, 'highSchool')}/>
          </Form.Group>

        </Form>
        {
          step != 3 &&
          <Button onClick={() => this.validate()}>Next</Button>
        }
      </div>
    );
  }
}
