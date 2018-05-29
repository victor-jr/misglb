import * as React from 'react';
import * as _ from 'lodash';
import axios from 'axios';
import { format } from 'date-fns';
import Auth from '../service/Auth/Auth';
import { Menu, Container, Button, Dimmer, Loader, Modal, Icon, Header } from 'semantic-ui-react';
import PersonalForm from '../components/PersonalForm';
import SchoolForm from '../components/SchoolForm';
import FinancialForm from '../components/FinancialForm';
import ErrorModal from '../components/ErrorModal';
import { Application } from '../models/Application';

interface NewApplicationState {
  step: Number,
  formData: Application,
  loading: boolean,
  showErrorModal: boolean
}

interface NewApplicationProps {
  history: any,
  auth: Auth
}

export default class NewApplication extends React.Component<NewApplicationProps, NewApplicationState> {
  MAXSTEP: Number = 3;
  
  constructor(props: any) {
    super(props);
    this.state = {
      step: 1,
      formData: new Application(),
      loading: false,
      showErrorModal: false
    };
    this.handleStepClick = this.handleStepClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCloseErrorModal = this.handleCloseErrorModal.bind(this);
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
    let { formData } = this.state;

    if (subObject) {
      let newObject: any = null;
      if (type === 'number') {
        value = parseFloat(value);
      }

      if (subObject == 'highSchool') {
        formData.highSchool = _.set(formData.highSchool, name, value);
      } else if (subObject == 'currentContact') {
        formData.currentContact = _.set(formData.currentContact, name, value);
      } else if (subObject == 'permanentContact') {
        formData.permanentContact = _.set(formData.permanentContact, name, value);
      } else if (subObject == 'emergencyContact') {
        formData.emergencyContact = _.set(formData.emergencyContact, name, value);
      } else if (subObject == 'father') {
        formData.father = _.set(formData.father, name, value);
      } else if (subObject == 'mother') {
        formData.mother = _.set(formData.mother, name, value);
      } else if (subObject == 'guardian') {
        formData.guardian = _.set(formData.guardian, name, value);
      } else if (subObject == 'currentCollege') {
        formData.currentCollege = _.set(formData.currentCollege, name, value);
      } else if (subObject == 'priorCollege') {
        formData.priorCollege = _.set(formData.priorCollege, name, value);
      }
            
    } else {
      if(type === 'checkbox') {
        value = checked;
      }

      if (type === 'number') {
        value = parseFloat(value);
      }
      
      formData = _.set(formData, name, value);    
      
      if (name === 'hasChildren') {
        formData = _.set(formData, 'children', null);
      }
        
      if (value === 'Single' || value === 'Widowed,Divorced,Seperate') {
        formData = _.set(formData, 'spouseName', null);          
      }
    }
    this.setState({
      formData
    }) 
  }

  handleSubmit() {
    const { auth } = this.props;
    const { formData, loading } = this.state;
    this.setState({
      loading: true
    });
    delete formData.id;
    // formData.userId = auth.userProfile;
    formData.academicYearStart = format(new Date(`01/01/${formData.academicYearStart}`), 'YYYY-MM-DD');
    formData.academicYearEnd = format(new Date(`01/01/${formData.academicYearEnd}`), 'YYYY-MM-DD');    
    !formData.hasFather ? delete formData.father : formData.father.alive = true;
    !formData.hasMother ? delete formData.mother : formData.mother.alive = true;
    !formData.hasGuardian ? delete formData.guardian : formData.guardian.alive = true;
    if (!formData.hasPriorCollege) {
      delete formData.priorCollege;
    }  
    axios.post('/api/Application/Create', formData)
      .then(res => {
        console.log(res.status, res.data);
        this.props.history.replace('/?newApplicationSuccess=1');
      })
      .catch(err => {
        console.log(err.response.data, err.response.status, err.response.headers);
        this.setState({
          step: 1,
          formData: new Application(),
          loading: false,
          showErrorModal: true
        })
      })
  }

  handleCloseErrorModal = () => {
    this.setState({
      showErrorModal: false
    })
  }
    
  public render() {
    const { step, loading, showErrorModal } = this.state;

    let currentStep = <PersonalForm handleFormChange={this.handleFormChange} handleNextClick={this.handleNextClick} {...this.state} />

    switch(step) {
      case 1: 
        currentStep = <PersonalForm handleFormChange={this.handleFormChange} handleNextClick={this.handleNextClick} {...this.state} />
        break; 
      case 2:
        currentStep = <SchoolForm handleFormChange={this.handleFormChange} handleNextClick={this.handleNextClick} {...this.state} />
        break;
      case 3:
        currentStep = <FinancialForm handleFormChange={this.handleFormChange} handleSubmit={this.handleSubmit} {...this.state} />
        break;
    }
    
    return (
      <div>
        <Container>
          <Menu pointing secondary>
            <Menu.Item name='Personal' active={step === 1} onClick={() => this.handleStepClick(1)} />
            <Menu.Item name='School' active={step === 2} onClick={() => this.handleStepClick(2)} />
            <Menu.Item name='Financial' active={step === 3} onClick={() => this.handleStepClick(3)} />          
          </Menu>

          <div style={{ padding: '2rem 0 2rem 0' }}>
            {currentStep}
          </div>
          
          <Dimmer active={loading}>
            <Loader>Creating Application</Loader>
          </Dimmer>
        </Container>


        <ErrorModal showErrorModal={showErrorModal} handleCloseErrorModal={this.handleCloseErrorModal} message={'Something went wrong when submitting application.'} />
      </div>
    );
  };

}