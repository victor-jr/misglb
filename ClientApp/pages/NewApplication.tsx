import * as React from 'react';
import * as _ from 'lodash';
import { Menu, Container, Button } from 'semantic-ui-react';
import PersonalForm from '../components/PersonalForm';
import SchoolForm from '../components/SchoolForm';
import FinancialForm from '../components/FinancialForm';
import Application from '../Application';

interface NewApplicationState {
  step: Number,
  formData: Application,
}

export default class NewApplication extends React.Component<{}, NewApplicationState> {
  MAXSTEP: Number = 3;
  
  constructor(props: any) {
    super(props);
    this.state = {
      step: 1,
      formData: new Application()
    };
    this.handleStepClick = this.handleStepClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
  }

  handleStepClick = (step: Number) => {
    this.setState({
      step
    })
  }

  handleNextClick = () => {
    if (this.state.step < this.MAXSTEP) {
      this.setState((prevState: any) => ({
        step: prevState.step + 1
      }));
    }
  }

  handleFormChange = (e: React.FormEvent<HTMLInputElement>, data: any, subObject?: string) => {
    let { value, name, type, checked } = data;      
    console.log(subObject);

    if(type === 'checkbox') {
      value = checked;
    }
    
    if (type === 'number') {
      value = parseFloat(value);
    }

    this.setState((prevState: any) => ({
      formData: {
        ...prevState.formData,
        [name]: value
      }
    }))
  }
  
  public render() {
    const { step } = this.state;

    let currentStep = <PersonalForm handleFormChange={this.handleFormChange} {...this.state} />

    switch(step) {
      case 1: 
        currentStep = <PersonalForm handleFormChange={this.handleFormChange} {...this.state} />
        break; 
      case 2:
        currentStep = <SchoolForm handleFormChange={this.handleFormChange} {...this.state} />
        break;
      case 3:
        currentStep = <FinancialForm handleFormChange={this.handleFormChange} {...this.state} />
        break;
    }
    
    return (
      <Container>
        <Menu pointing secondary>
          <Menu.Item name='Personal' active={step === 1} onClick={() => this.handleStepClick(1)} />
          <Menu.Item name='School' active={step === 2} onClick={() => this.handleStepClick(2)} />
          <Menu.Item name='Financial' active={step === 3} onClick={() => this.handleStepClick(3)} />          
        </Menu>

        {currentStep}

        <Button onClick={this.handleNextClick}>Next</Button>
      </Container>
    );
  };

}