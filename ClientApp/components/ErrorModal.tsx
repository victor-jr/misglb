import * as React from 'react'
import { Menu, Container, Button, Dimmer, Loader, Modal, Icon, Header } from 'semantic-ui-react';

interface ErrorModalProps {
  showErrorModal: boolean,
  handleCloseErrorModal: Function,
  message: string
}

export default class ErroModal extends React.Component<ErrorModalProps, {}> {
  render() {
    const { showErrorModal, handleCloseErrorModal, message } = this.props;
    return (
      <Modal
        style={{height: '300px'}}
        open={showErrorModal}
        onClose={() => handleCloseErrorModal()}
        basic
        size='mini'
      >
        <Header icon='warning sign' content='Error' />
        <Modal.Content>
          <h3>{message}</h3>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={() => handleCloseErrorModal()} inverted>
            OK
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}