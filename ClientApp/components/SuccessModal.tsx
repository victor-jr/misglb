import * as React from 'react'
import { Menu, Container, Button, Dimmer, Loader, Modal, Icon, Header } from 'semantic-ui-react';

interface SuccessModalProps {
  showSuccessModal: boolean,
  handleCloseSuccessModal: Function,
  message: string
}

export default class ErroModal extends React.Component<SuccessModalProps, {}> {
  render() {
    const { showSuccessModal, handleCloseSuccessModal, message } = this.props;
    return (
      <Modal
        style={{height: '300px'}}
        open={showSuccessModal}
        onClose={() => handleCloseSuccessModal()}
        basic
        size='mini'
      >
        <Header icon='info' content='Success' />
        <Modal.Content>
          <h3>{message}</h3>
        </Modal.Content>
        <Modal.Actions>
          <Button color='green' onClick={() => handleCloseSuccessModal()} inverted>
            OK
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}