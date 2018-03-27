import * as React from 'react';
import { Form } from 'semantic-ui-react';

interface SchoolFormProps {
  formData: Object,
  handleFormChange: Function
}

export default class SchoolForm extends React.Component<SchoolFormProps, {}> {
  constructor(props: any) {
    super(props);
  }
  
  render() {
    return (
      <Form>
        <Form.Group>
          <Form.Input label='Name' width={6} name="school_name" onChange={(e) => this.props.handleFormChange(e)} />
          <Form.Input label='Country' width={6} name="school_country" onChange={(e) => this.props.handleFormChange(e)} />          
        </Form.Group>
      </Form>
    );
  }
}