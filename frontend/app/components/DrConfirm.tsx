import React from 'react';
import { Button, Modal } from 'native-base';

type PropType = {
  title: string;
  content: string;
  isOpen: boolean;
  onClose: any;
  onConfirm: any;
};

const DrConfirm: React.FC<PropType> = props => {
  const { isOpen, onClose, onConfirm, title, content } = props;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.Content>
        <Modal.CloseButton />
        <Modal.Header fontSize="4xl" fontWeight="bold">
          {title}
        </Modal.Header>
        <Modal.Body>{content}</Modal.Body>
        <Modal.Footer>
          <Button mr="1" onPress={onClose} w={20}>
            取消
          </Button>
          <Button onPress={onConfirm} w={20}>
            确认
          </Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};

export default DrConfirm;
