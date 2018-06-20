import * as React from 'react';
import { Table } from 'semantic-ui-react';
import { ApprovalStatus } from '../models/ApplicationOptions';
import { Link } from 'react-router-dom';

interface ApplicationTableRowProps {
  appId: number | null,
  academicYear: string | null,
  award: number | null,
  status: number,
}

export default class ApplicationTableRow extends React.Component<ApplicationTableRowProps, {}> {
  render() {
    const { academicYear, award, status, appId } = this.props;
    let formattedAward = (award === null) ? 0 : award.toFixed(2);
    return (
      <Table.Row>
        <Table.Cell>{academicYear}</Table.Cell>
        <Table.Cell>${formattedAward}</Table.Cell>
        <Table.Cell>{ApprovalStatus.properties[status].name}</Table.Cell>
        <Table.Cell>
          <Link to={`view-applicaiton?id=${appId}`}>View</Link> | <Link to={'/'}>Edit</Link> | <Link to={'/'}>Remove</Link>           
        </Table.Cell>
      </Table.Row>
    )
  }
}