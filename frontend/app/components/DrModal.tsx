import { StyleSheet } from 'react-native';
import React from 'react';
import { Modal } from 'native-base';

export default function DrModal({ children, isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} safeAreaTop={true}>
      <Modal.Content style={{ marginTop: 'auto', width: '100%', height: 500 }}>
        {children}
      </Modal.Content>
    </Modal>
  );
}

const styles = StyleSheet.create({});
