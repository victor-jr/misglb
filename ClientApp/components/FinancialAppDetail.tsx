import * as React from 'react'
import { Container, Label, Divider, Grid } from 'semantic-ui-react';
import ApplicationInterface from '../interfaces/ApplicationInterface';
import { format } from 'date-fns';
import { TermType, Semester, TuitionType } from '../models/ApplicationOptions';
import { Pie, Bar } from 'react-chartjs-2';
import * as _ from 'lodash';

interface FinancialAppDetailProps {
  app: ApplicationInterface
}

export default class FinancialAppDetail extends React.Component<FinancialAppDetailProps> {
  render(){
    const { app } = this.props;
    const totalExpenses = _.sum([app.tuition, app.supplies, app.roomAndBoard, app.healthInsurance, app.miscellaneous, app.transportation, app.airfare]);
    const totalFinancial = _.sum([app.pellGrant, app.collegeScholarship, app.otherScholarship, app.parentalSupport, app.personalAssets, app.othersFinancial, app.airfare]);
    const barData = {
      labels: ['Expenses', 'Finances'],
      datasets: [{
        label: 'Expenses Vs Finances',
        backgroundColor: ['#db2828', '#e03997'],
        borderColor: ['#db2828', '#e03997'],
        data: [totalExpenses, totalFinancial]
      }]
    };
    const expenseData = {
      labels: ['tuition', 'supplies', 'rooom & board', 'health', 'miscellaneous', 'transportation', 'airfare'],
      datasets: [{
      label: "Expenses",
      backgroundColor: ['#db2828', '#e03997', '#a333c8', '#6435c9', '#337ab7', '#2185d0', '#21ba45'],
      borderColor: ['#db2828', '#e03997', '#a333c8', '#6435c9', '#337ab7', '#2185d0', '#21ba45'],
      data: [app.tuition, app.supplies, app.roomAndBoard, app.healthInsurance, app.miscellaneous, app.transportation, app.airfare],
      }]
    }
    const financeData = {
      labels: ['pell grant', 'college scholarship', 'other scholarship', 'parental support', 'personal assets', 'other'],
      datasets: [{
      label: "Finances",
      backgroundColor: ['#db2828', '#e03997', '#a333c8', '#6435c9', '#337ab7', '#2185d0', '#21ba45'],
      borderColor: ['#db2828', '#e03997', '#a333c8', '#6435c9', '#337ab7', '#2185d0', '#21ba45'],
      data: [app.pellGrant, app.collegeScholarship, app.otherScholarship, app.parentalSupport, app.personalAssets, app.othersFinancial, app.airfare],
      }]
    }
    var chartOptions = {
        scales: {
          yAxes: [{
              ticks: {
                  beginAtZero:true,
                  min: 0,
                  max: 25000    
              }
            }]
        }
    }
    return (
      <Container>
        <Grid>
          <Grid.Row columns={1} centered>
            <Grid.Column>
              <Bar data={barData} options={chartOptions} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={2}>
            <Grid.Column>
              <h3>Expenses</h3>
              <Pie data={expenseData} />
            </Grid.Column>
            <Grid.Column>
              <h3>Finances</h3>
              <Pie data={financeData} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={2}>  
            <Grid.Column>
              <Divider />              
              <h4>Expenses</h4>
              <div>
                <strong>Education Expense Term Type:</strong> {TermType.properties[app.educationExpenseTermType].name}
              </div>
              {
                app.educationExpenseTermType != 0 &&
                <div>
                  <strong>Educatin Expense Specific Semester:</strong> {Semester.properties[app.expenseTermSemesterSpecific].name}
                </div>
              }
              <div>
                <strong>Tution Type:</strong> {TuitionType.properties[app.tuitionType].name}
              </div>
              <div>
                <strong>Tution:</strong> ${app.tuition.toFixed(2)}
              </div>
              <div>
                <strong>Supplies:</strong> ${app.supplies.toFixed(2)}
              </div>
              <div>
                <strong>Room and Board Months Duration:</strong> {app.roomAndBoardMonths}
              </div>
              <div>
                <strong>Room and Board:</strong> ${app.roomAndBoard.toFixed(2)}
              </div>
              <div>
                <strong>Health Insurance:</strong> ${app.healthInsurance.toFixed(2)}
              </div>
              <div>
                <strong>Miscellaneous:</strong> ${app.miscellaneous.toFixed(2)}
              </div>
              <div>
                <strong>Transportation:</strong> ${app.transportation.toFixed(2)}
              </div>
              <div>
                <strong>Airfare:</strong> ${app.airfare.toFixed(2)}
              </div>
              <br/>
              <h4>Total</h4>
              <div>
                <strong>Total Expenses:</strong> ${app.totalExpenses.toFixed(2)}
              </div>
              <div>
                <strong>Total Resources:</strong> ${app.totalFinancial.toFixed(2)}
              </div>
              <div>
                <strong>Total Financial Assistance Needed:</strong> ${app.totalFinAssistanceNeeded.toFixed(2)}
              </div>
            </Grid.Column>
            <Grid.Column>
              <Divider />
              <h4>Finances</h4>
              <div>
                <strong>Financial Expense Term Type:</strong> {TermType.properties[app.financialExpenseTermType].name}
              </div>
              {
                app.financialExpenseTermType != 0 &&
                <div>
                  <strong>Financial Expense Specific Semester:</strong> {Semester.properties[app.financialExpenseSemesterSpecific].name}
                </div>
              }
              <div>
                <strong>Pell Grant:</strong> ${app.pellGrant.toFixed(2)}
              </div>
              <div>
                <strong>College Scholarship:</strong> ${app.collegeScholarship.toFixed(2)}
              </div>
              <div>
                <strong>Other Scholarship:</strong> ${app.otherScholarship.toFixed(2)}
              </div>
              <div>
                <strong>Parental Support:</strong> ${app.parentalSupport.toFixed(2)}
              </div>
              <div>
                <strong>Personal Assets:</strong> ${app.personalAssets.toFixed(2)}
              </div>
              <div>
                <strong>Other Financials:</strong> ${app.othersFinancial.toFixed(2)}
              </div>
              <br/>
              <h4>Available Financial Resources:</h4>
              <div>
                <strong>Savings/Dividends/Intersets:</strong> ${app.savingsDividendsInterests.toFixed(2)}
              </div>
              <div>
                <strong>Employment Income:</strong> ${app.employmentIncome.toFixed(2)}
              </div>
              <div>
                <strong>Spouse Income:</strong> ${app.spouseIncome.toFixed(2)}
              </div>
              <div>
                <strong>Government Salary:</strong> ${app.governmentSalary.toFixed(2)}
              </div>
              <div>
                <strong>Compensation:</strong> ${app.compensation.toFixed(2)}
              </div>
              <div>
                <strong>Other Resources:</strong> ${app.othersResources.toFixed(2)}
              </div> 
              <br/>
              <div>
                <strong>Received Financial Aid Before:</strong> {app.receivedFinAidBefore ? 'Yes' : 'No'}
              </div>
              {
                app.receivedFinAidBefore &&
                <div>
                  <strong>Date Received:</strong> {format(app.receivedFinAidBeforeDate, 'MM/DD/YYYY')}
                </div>
              }
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}