import * as React from 'react';
import { Form } from 'semantic-ui-react';

interface FinancialFormProps {
  formData: Object,
  handleFormChange: Function
}

export default class FinancialForm extends React.Component<FinancialFormProps, {}> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <Form>
        <Form.Group>
          <Form.Input type='number' label='Personal Expense' width={6} name='personal_expense' onChange={(e) => this.props.handleFormChange(e)} />
          <Form.Input type='number' label='Personal Expense' width={6} name='personal_other' onChange={(e) => this.props.handleFormChange(e)} />          
        </Form.Group>
      </Form>
    )
  }
}