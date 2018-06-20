import * as React from 'react';
import { Container, Menu, Label, Divider, Icon } from 'semantic-ui-react';
import Axios from 'axios';
import ApplicationInterface from '../interfaces/ApplicationInterface';
import { Application } from '../models/Application';
import PersonalAppDetail from '../components/PersonalAppDetail';
import SchoolAppDetail from '../components/SchoolAppDetail';
import FinancialAppDetail from '../components/FinancialAppDetail';
import { ApprovalStatus } from '../models/ApplicationOptions';

interface ViewApplicationProps {
  location: any
}

interface ViewApplicationStates {
  application: ApplicationInterface
  step: Number
}

export default class ViewApplication extends React.Component<ViewApplicationProps, ViewApplicationStates> {
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
    const { step, application } = this.state;

    let currentStep = <PersonalAppDetail app={application} />

    switch(step) {
      case 1: 
        currentStep = <PersonalAppDetail app={application} />
        break; 
      case 2:
        currentStep = <SchoolAppDetail app={application} />
        break;
      case 3:
        currentStep = <FinancialAppDetail app={application} />
        break;
      }
      
    let viewed = null;
    switch(application.viewed) {
      case false:
        viewed = <Label color='orange' size='massive'><Icon name='low vision' />Not Yet Viewed</Label>
        break;
      case true:
        viewed = <Label color='green' size='massive'><Icon name='eye' />Viewed</Label>
        break;
    }
    
    let approval = null;
    if (application.viewed) {
      switch(application.approvalStatus) {
        case 0:
          approval = <Label color='orange' size='massive'><Icon name='users' />{ApprovalStatus.properties[application.approvalStatus].name}</Label>
          break;
        case 1:
          approval = <Label color='green' size='massive'><Icon name='check' />{ApprovalStatus.properties[application.approvalStatus].name}</Label>
          break;
        case 2:
          approval = <Label color='red' size='massive'><Icon name='user times' />{ApprovalStatus.properties[application.approvalStatus].name}</Label>
          break;
      }
    }

    return (
      <Container>
        <br/>
        <Label size='massive'>{application.academicYear}</Label>
        <Label size='massive'><strong>Total Financial Assistance Needed:</strong> ${application.totalFinAssistanceNeeded.toFixed(2)}</Label>
        {viewed}
        {approval}
        <Menu pointing secondary>
          <Menu.Item name='Personal' active={step === 1} onClick={() => this.handleStepClick(1)} />
          <Menu.Item name='School' active={step === 2} onClick={() => this.handleStepClick(2)} />
          <Menu.Item name='Financial' active={step === 3} onClick={() => this.handleStepClick(3)} />          
        </Menu>
        <Divider />
        <div style={{ padding: '2rem 0 2rem 0' }}>
          {currentStep}
        </div>
      </Container>
    )
  }
} 