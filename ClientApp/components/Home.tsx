import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Button, Grid, Table, Header, Container, Loader, Dimmer } from 'semantic-ui-react';
import SuccessModal from './SuccessModal';
import axios from 'axios';
import { Application } from '../models/Application';
import Auth from '../service/Auth/Auth';
import ApplicationTableRow from './ApplicationTableRow';

interface HomeProps {
	location: any
	auth: Auth
}

interface HomeStates {
	showSuccessModal: boolean,
	applications: Array<Application>,
	loading: boolean
}

export class Home extends React.Component<HomeProps, HomeStates> {
	constructor(props: any) {
		super(props);
		this.state = {
			showSuccessModal: false,
			applications: [],
			loading: false
		}
	}
	
	componentDidMount() {
		this.setState({ loading: true });
		const { auth } = this.props;
		const { applications } = this.state;
		auth.getProfile((err: any, profile: any) => {
			if (!err) {
				axios.post('/api/Application/user_applications', profile)
					.then(res => {
						let justCreatedApplication = false;
						if (this.props.location.search) {
							let query = new URLSearchParams(this.props.location.search);
							if (query.get('newApplicationSuccess') === '1') {
								justCreatedApplication = true;
							}
						}
						this.setState({
							applications: res.data,
							showSuccessModal: justCreatedApplication,
							loading: false,		
						})
					})
					.catch(err => {
						console.log(err.response.data, err.response.status, err.response.headers);
					})
			} else {
				console.log(err);
			}
		});
	}

	handleClosedSuccessModal = () => {
		this.setState({
			showSuccessModal: false 
		})
	}

	public render() {
		const { applications, loading } = this.state;
		return <div>
			<Dimmer active={loading}>
				<Loader>Fetching Applications</Loader>
			</Dimmer>
			<Container>
				<Grid>
					<Grid.Row>
						<Header as='h1'>Summary</Header>
					</Grid.Row>
					<Grid.Row>
					<Table celled>
						<Table.Header>
							<Table.Row>
								<Table.HeaderCell>Academic Year</Table.HeaderCell>
								<Table.HeaderCell>Award Amount</Table.HeaderCell>
								<Table.HeaderCell>Status</Table.HeaderCell>
								<Table.HeaderCell>Actions</Table.HeaderCell>
							</Table.Row>
						</Table.Header>

						<Table.Body>
							{
								applications.map((app, index) => <ApplicationTableRow key={index} appId={app.id} academicYear={app.academicYear} award={app.awardAmount} status={app.approvalStatus} />)
							}
						</Table.Body>

						<Table.Footer>
							<Table.Row>
								<Table.HeaderCell colSpan='4'>
								</Table.HeaderCell>
							</Table.Row>
						</Table.Footer>
					</Table>
					</Grid.Row>
				</Grid>
			
				<SuccessModal showSuccessModal={this.state.showSuccessModal} handleCloseSuccessModal={this.handleClosedSuccessModal} message={'Successfully Created New Application.'} />
			</Container>
		</div>;
	}
}
