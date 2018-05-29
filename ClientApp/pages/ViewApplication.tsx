import * as React from 'react';
import { Container, Menu } from 'semantic-ui-react';
import Axios from 'axios';
import ApplicationInterface from '../interfaces/ApplicationInterface';
import { Application } from '../models/Application';

interface ViewApplicationProps {
  location: any
}

interface ViewApplicationStates {
  application: ApplicationInterface
  step: number
}

export default class ViewApplication extends React.Component<ViewApplicationProps, {}> {
  constructor(props: any) {
    super(props);
    this.state = {
      step: 1,
      application: new Application()
    }
    this.handleStepClick = this.handleStepClick.bind(this);    
  }
  
  componentDidMount() {
    if (this.props.location.search) {
      let query = new URLSearchParams(this.props.location.search);
      let appId = query.get('id');
      Axios.get(`api/Application/${appId}`)
        .then(res => {
          this.setState({ application: res.data });
        })
        .catch(err => {
          console.log(err);
        })
    } 
  }

  handleStepClick = (step: Number) => {
    this.setState({
      step
    })
  }
  
  render() {
    const { step } = this.state;

    let currentStep = <PersonalAppDetail handleFormChange={this.handleFormChange} handleNextClick={this.handleNextClick} {...this.state} />

    switch(step) {
      case 1: 
        currentStep = <PersonalAppDetail handleFormChange={this.handleFormChange} handleNextClick={this.handleNextClick} {...this.state} />
        break; 
      case 2:
        currentStep = <SchoolAppDetail handleFormChange={this.handleFormChange} handleNextClick={this.handleNextClick} {...this.state} />
        break;
      case 3:
        currentStep = <FinancialAppDetail handleFormChange={this.handleFormChange} handleSubmit={this.handleSubmit} {...this.state} />
        break;
    }

    return (
      <Container>
        <Menu pointing secondary>
          <Menu.Item name='Personal' active={step === 1} onClick={() => this.handleStepClick(1)} />
          <Menu.Item name='School' active={step === 2} onClick={() => this.handleStepClick(2)} />
          <Menu.Item name='Financial' active={step === 3} onClick={() => this.handleStepClick(3)} />          
        </Menu>

        <div style={{ padding: '2rem 0 2rem 0' }}>
          {currentStep}
        </div>
      </Container>
    )
  }
} 