import React from 'react';
import { ScrollView } from 'native-base';

export default function DrScrollScreen({ children }) {
  return <ScrollView px={2}>{children}</ScrollView>;
}
