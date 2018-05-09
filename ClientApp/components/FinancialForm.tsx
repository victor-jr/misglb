import * as React from 'react';
import { Form, Select } from 'semantic-ui-react';
import ApplicationInterface from '../interfaces/ApplicationInterface';

interface FinancialFormProps {
  formData: ApplicationInterface,
  handleFormChange: Function
}

export default class FinancialForm extends React.Component<FinancialFormProps, {}> {
  EXPENSE_TERM_TYPES = [
    {key: 'p', value: 'Per Academic Year', text: 'Per Academic Year'},
    {key: 'o', value: 'One Term', text: 'One Term'},
    {key: 's', value: 'Summer', text: 'Summer'}
  ]

  EXPENSE_TERM_SPECIFIC_SEMESTER = [
    {key: 'f', value: 'Fall', text: 'Fall'},
    {key: 's', value: 'Spring', text: 'Spring'},
  ]

  TUTITION_TYPE = [
    {key: 'r', value: 'Resident', text: 'Resident'},
    {key: 'n', value: 'Non-Resident', text: 'Non-Resident'},
    {key: 'na', value: 'N/A', text: 'N/A'},    
  ]

  constructor(props: any) {
    super(props);
  }

  render() {
    const { formData, handleFormChange } = this.props;
    const totalExpense = formData.tuiton + formData.supplies + formData.roomAndBoard + formData.healthInsurance + formData.miscellaneous + formData.transportation + formData.airfare;
    const totalFinancialExpense = formData.pellGrant + formData.collegeScholarship + formData.parentalSupport + formData.otherScholarship + formData.personalAssets + formData.othersFinancial;    

    return (
      <Form>
        <label>Available Financial Resources</label>
        <Form.Group widths='equal'>
          <Form.Input type='number' name='savingsDividendsInterests' label="Savings/Dividends/Interests" onChange={(e, data) => handleFormChange(e, data)} />
          <Form.Input type='number' name='employmentIncome' label="Employment Income" onChange={(e, data) => handleFormChange(e, data)} />
          <Form.Input type='number' name='spouseIncome' label="Spouse Income" onChange={(e, data) => handleFormChange(e, data)} />
          <Form.Input type='number' name='governmentSalary' label="Government Salary" onChange={(e, data) => handleFormChange(e, data)} />
          <Form.Input type='number' name='compensation' label="Compensation" onChange={(e, data) => handleFormChange(e, data)} />
          <Form.Input type='number' name='othersResources' label="Other Resources" onChange={(e, data) => handleFormChange(e, data)} />
        </Form.Group>

      <Form.Group>
        <Form.Checkbox width={5} name='receivedFinAidBefore' label='Recieved MISGLB Financial Aid Before' checked={formData.receivedFinAidBefore} onChange={(e, data) => handleFormChange(e, data)}/>
      </Form.Group>        
      {
        formData.receivedFinAidBefore &&
        <Form.Input width={5} label='Date MISGLB Received Before' name='receivedFinAidBeforeDate' type='date' value={formData.receivedFinAidBeforeDate} onChange={(e, data) => handleFormChange(e, data)}/>
      }

      <Form.Field width={3} name='educationExpenseTermType' control={Select} label='Educational Expense Term Type' options={this.EXPENSE_TERM_TYPES} onChange={(e: any, data: any) => handleFormChange(e, data)} />          
      {
        formData.educationExpenseTermType === 'One Term' && 
        <Form.Field width={3} name='expenseTermSemesterSpecific' control={Select} label='Semester' options={this.EXPENSE_TERM_SPECIFIC_SEMESTER} onChange={(e: any, data: any) => handleFormChange(e, data)} />
      }

      
      <Form.Field width={3} name='tuitionType' control={Select} label='Tuition Type' options={this.TUTITION_TYPE} onChange={(e: any, data: any) => handleFormChange(e, data)} />          
      <Form.Group widths='equal'>
        <Form.Input type='number' name='tuition' label='Tuition' onChange={(e: any, data: any) => handleFormChange(e, data)} />
        <Form.Input type='number' name='supplies' label='Supplies' onChange={(e: any, data: any) => handleFormChange(e, data)} />      
        <Form.Input type='number' name='roomAndBoardMonths' label='Months for Room and Board' onChange={(e: any, data: any) => handleFormChange(e, data)} />      
        <Form.Input type='number' name='roomAndBoard' label='Room and Board' onChange={(e: any, data: any) => handleFormChange(e, data)} />      
        <Form.Input type='number' name='healthInsurance' label='Health Insurance' onChange={(e: any, data: any) => handleFormChange(e, data)} />      
        <Form.Input type='number' name='miscellaneous' label='Miscellaneous' onChange={(e: any, data: any) => handleFormChange(e, data)} />      
        <Form.Input type='number' name='transporation' label='Transportation' onChange={(e: any, data: any) => handleFormChange(e, data)} />      
        <Form.Input type='number' name='airfare' label='Airfare' onChange={(e: any, data: any) => handleFormChange(e, data)} />
      </Form.Group>

      <label>Total Expenses: ${totalExpense}</label>

      <Form.Field width={3} name='financialExpenseTermType' control={Select} label='Financial Expense Term Type' options={this.EXPENSE_TERM_TYPES} onChange={(e: any, data: any) => handleFormChange(e, data)} />          
      {
        formData.financialExpenseTermType === 'One Term' && 
        <Form.Field width={3} name='financialExpenseSemesterSpecific' control={Select} label='Semester' options={this.EXPENSE_TERM_SPECIFIC_SEMESTER} onChange={(e: any, data: any) => handleFormChange(e, data)} />
      }  

      <Form.Group widths='equal'>
        <Form.Input type='number' name='pellGrant' label='Pell Grant' onChange={(e: any, data: any) => handleFormChange(e, data)} />      
        <Form.Input type='number' name='collegeScholarship' label='College Scholarship' onChange={(e: any, data: any) => handleFormChange(e, data)} />      
        <Form.Input type='number' name='otherScholarship' label='Other Scholarship' onChange={(e: any, data: any) => handleFormChange(e, data)} />      
        <Form.Input type='number' name='parentalSupport' label='Parental Support' onChange={(e: any, data: any) => handleFormChange(e, data)} />      
        <Form.Input type='number' name='personalAssets' label='Personal Assets' onChange={(e: any, data: any) => handleFormChange(e, data)} />      
        <Form.Input type='number' name='otherFinancial' label='Other Financial' onChange={(e: any, data: any) => handleFormChange(e, data)} />
      </Form.Group>
      
      <div>
        <label>Total Resources: ${totalFinancialExpense}</label>
      </div>
      <div>
        <label>Total Financial Assistance Needed: ${totalExpense - totalFinancialExpense}</label>
      </div>
      </Form>
    )
  }
}