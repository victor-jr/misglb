import * as React from 'react'
import { Container, Label, Divider, Grid, Card } from 'semantic-ui-react';
import ApplicationInterface from '../interfaces/ApplicationInterface';
import { format } from 'date-fns';

interface SchoolAppDetailProps {
  app: ApplicationInterface
}

export default class SchoolAppDetail extends React.Component<SchoolAppDetailProps> {
  render(){
    const { app } = this.props;
    return (
      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Card.Group>
                <Card>
                  <Card.Content>
                    <Card.Header>Current College</Card.Header>
                    <Card.Description>
                      <div>
                        <strong>Country:</strong> {app.currentCollege.country}
                      </div>
                      <div>
                        <strong>State/Atoll:</strong> {app.currentCollege.state_atoll}
                      </div>
                      <div>
                        <strong>Address:</strong> {app.currentCollege.address}
                      </div>
                      <div>
                        <strong>Zip:</strong> {app.currentCollege.zip}
                      </div>
                      <div>
                        <strong>Name:</strong> {app.currentCollege.name}
                      </div>                    
                    </Card.Description>
                  </Card.Content>
                </Card>
                {
                  app.hasPriorCollege &&
                  <Card>
                    <Card.Content>
                      <Card.Header>Prior College</Card.Header>
                      <Card.Description>
                        <div>
                          <strong>Country:</strong> {app.priorCollege.country}
                        </div>
                        <div>
                          <strong>State/Atoll:</strong> {app.priorCollege.state_atoll}
                        </div>
                        <div>
                          <strong>Address:</strong> {app.priorCollege.address}
                        </div>
                        <div>
                          <strong>Zip:</strong> {app.priorCollege.zip}
                        </div>
                        <div>
                          <strong>Name:</strong> {app.priorCollege.name}
                        </div>
                        <div>
                          <strong>Degree Obtained:</strong> {app.priorCollege.degreeObtained}
                        </div>
                      </Card.Description>
                    </Card.Content>
                  </Card>
                }
                <Card>
                  <Card.Content>
                    <Card.Header>High School</Card.Header>
                    <Card.Description>
                      <div>
                        <strong>Country:</strong> {app.highSchool.country}
                      </div>
                      <div>
                        <strong>State/Atoll:</strong> {app.highSchool.state_atoll}
                      </div>
                      <div>
                        <strong>Address:</strong> {app.highSchool.address}
                      </div>
                      <div>
                        <strong>Zip:</strong> {app.highSchool.zip}
                      </div>
                      <div>
                        <strong>Name:</strong> {app.highSchool.name}
                      </div>
                      <div>
                        <strong>Date Attended:</strong> {format(app.highSchool.highSchoolStartDate, 'MM/DD/YYYY') + " " + format(app.highSchool.highSchoolEndDate, 'MM/DD/YYYY')}
                      </div>
                      <div>
                        <strong>Graduation Date:</strong> {format(app.highSchool.highSchoolGradDate, 'MM/DD/YYY')}
                      </div>
                    </Card.Description>
                  </Card.Content>
                </Card>
              </Card.Group>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}