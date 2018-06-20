import * as React from 'react'
import { Container, Label, Divider, Grid, Card } from 'semantic-ui-react';
import ApplicationInterface from '../interfaces/ApplicationInterface';
import { Gender, MartialStatus } from '../models/ApplicationOptions';
import { format } from 'date-fns';

interface PersonalAppDetailProps {
  app: ApplicationInterface
}

export default class PersonalAppDetail extends React.Component<PersonalAppDetailProps> {
  render(){
    const { app } = this.props;
    return (
      <Container>
        <Grid>
          <Grid.Row columns={1}>
              <Card>
                <Card.Content>
                  <Card.Header>{app.fullName}</Card.Header>
                  <Card.Description>
                    <div>
                      <strong>Nickname:</strong> {app.nickName}
                    </div>
                    <div>
                      <strong>SSN:</strong> {app.ssn}
                    </div>
                    <div>
                      <strong>Gender:</strong> {Gender.properties[app.gender].name}
                    </div>
                    <div>
                      <strong>Date of Birth:</strong> {format(app.dob, 'MM/DD/YYYY')}
                    </div>
                    <div>
                      <strong>Age:</strong> {app.age}
                    </div>
                    <div>
                      <strong>Place of Birth:</strong> {app.placeOfBirth}
                    </div>
                    <div>
                      <strong>Home Atoll:</strong> {app.homeAtoll}
                    </div>
                    <div>
                      <strong>Ebeye Kwaj Resident or Landowner:</strong> {app.ebeyeKwajResOrLandOwner}
                    </div>
                    <div>
                      <strong>Martial Status:</strong> {MartialStatus.properties[app.martialStatus].name}
                    </div>  
                    {
                      app.martialStatus === 1 &&
                      <div>
                        <strong>Name of Spouse</strong> {app.spouseIncome}
                      </div>
                    }
                    {
                      app.hasChildren &&
                      <div>
                        <strong>Children:</strong> {app.children}
                      </div>
                    }
                  </Card.Description>
                </Card.Content>
              </Card>  
              <Card.Group>
                <Card>
                  <Card.Content>
                    <Card.Header>Current Mailing</Card.Header>
                    <Card.Description>
                      <div>
                        <strong>Country:</strong> {app.currentContact.country}
                      </div>
                      <div>
                        <strong>Address:</strong> {app.currentContact.address}
                      </div>
                      <div>
                        <strong>State/Atoll:</strong> {app.currentContact.state_atoll}
                      </div>
                      <div>
                        <strong>Zip:</strong> {app.currentContact.zip}
                      </div>
                      <div>
                        <strong>Phone:</strong> {app.currentContact.phone}
                      </div>
                      <div>
                        <strong>Email:</strong> {app.currentContact.email}                                
                      </div>
                    </Card.Description>
                  </Card.Content>
                </Card>
                <Card>
                  <Card.Content>
                    <Card.Header>Permanent Mailing</Card.Header>
                    <Card.Description>
                      <div>
                        <strong>Country:</strong> {app.permanentContact.country}
                      </div>
                      <div>
                        <strong>Address:</strong> {app.permanentContact.address}
                      </div>
                      <div>
                        <strong>State/Atoll:</strong> {app.permanentContact.state_atoll}
                      </div>
                      <div>
                        <strong>Zip:</strong> {app.permanentContact.zip}
                      </div>
                      <div>
                        <strong>Phone:</strong> {app.permanentContact.phone}
                      </div>
                    </Card.Description>
                  </Card.Content>
                </Card>
                <Card>
                  <Card.Content>
                    <Card.Header>Emergency Mailing</Card.Header>
                    <Card.Description>
                      <div>
                        <strong>Name:</strong> {app.emergencyContact.firstName + " " + app.emergencyContact.lastName}  
                      </div>
                      <div>
                        <strong>Relationship:</strong> {app.emergencyContact.relationship}
                      </div>
                      <div>
                        <strong>Phone:</strong> {app.emergencyContact.phone}
                      </div>
                      <div>
                        <strong>Email:</strong> {app.emergencyContact.email}                                
                      </div>
                    </Card.Description>
                  </Card.Content>
                </Card>
              </Card.Group>
          </Grid.Row>  
          <Grid.Row columns={1}>
            <Grid.Column width={16}>
              <div>
                <Divider/>
                <strong>Parent Martial Status:</strong> {MartialStatus.properties[app.parentMartialStatus].name}
              </div>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
              <Card.Group>
                {
                  app.father &&
                  <Card>
                    <Card.Content>
                      <Card.Header>Father</Card.Header>
                      <Card.Description>
                        <div>
                          <strong>Name:</strong> {app.father.firstName + " " + app.father.lastName}
                        </div>
                        <div>
                          <strong>Age:</strong> {app.father.age}
                        </div>
                        <div>
                          <strong>Employer:</strong> {app.father.employer}
                        </div>
                        <div>
                          <strong>Annual Income:</strong> {app.father.annualIncome}
                        </div>
                      </Card.Description>
                    </Card.Content>
                  </Card>
                }
                {
                  app.mother &&
                  <Card>
                    <Card.Content>
                      <Card.Header>Mother</Card.Header>
                      <Card.Description>
                        <div>
                          <strong>Name:</strong> {app.mother.firstName + " " + app.mother.lastName}
                        </div>
                        <div>
                          <strong>Age:</strong> {app.mother.age}
                        </div>
                        <div>
                          <strong>Employer:</strong> {app.mother.employer}
                        </div>
                        <div>
                          <strong>Annual Income:</strong> {app.mother.annualIncome}
                        </div>
                      </Card.Description>
                    </Card.Content>
                  </Card>
                }
                {
                  app.guardian &&
                  <Card>
                    <Card.Content>
                      <Card.Header>Guardian</Card.Header>
                      <Card.Description>
                        <div>
                          <strong>Name:</strong> {app.guardian.firstName + " " + app.guardian.lastName}
                        </div>
                        <div>
                          <strong>Age:</strong> {app.guardian.age}
                        </div>
                        <div>
                          <strong>Employer:</strong> {app.guardian.employer}
                        </div>
                        <div>
                          <strong>Annual Income:</strong> {app.guardian.annualIncome}
                        </div>
                      </Card.Description>
                    </Card.Content>
                  </Card>
                }
              </Card.Group>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}