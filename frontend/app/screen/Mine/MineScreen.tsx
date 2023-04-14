import DrScreen from '@sb/components/DrScreen';
import colors from '@sb/config/colors';
import { Box, Flex, Heading, Row, Text } from 'native-base';
import React from 'react';

export default function MineScreen({ navigation }) {
  React.useEffect(() => {
    navigation.setOptions({
      headerTitle: '更多',
    });
  }, [navigation]);

  return (
    <DrScreen>
      <Text variant="h6">功能</Text>
      <Row flexWrap="wrap">
        <Box w="33%" p={2}>
          <Flex h={20} bgColor="#F7F8F3" justify="center" align="center" borderRadius={8} borderWidth={1} borderColor={colors.cardBorder}>
            <Text>数据概览</Text>
          </Flex>
        </Box>
        <Box w="33%" p={2}>
          <Flex h={20} bgColor="#F7F8F3" justify="center" align="center" borderRadius={8} borderWidth={1} borderColor={colors.cardBorder}>
            <Text>数据概览</Text>
          </Flex>
        </Box>
        <Box w="33%" p={2}>
          <Flex h={20} bgColor="#F7F8F3" justify="center" align="center" borderRadius={8} borderWidth={1} borderColor={colors.cardBorder}>
            <Text>数据概览</Text>
          </Flex>
        </Box>
        <Box w="33%" p={2}>
          <Flex h={20} bgColor="#F7F8F3" justify="center" align="center" borderRadius={8} borderWidth={1} borderColor={colors.cardBorder}>
            <Text>数据概览</Text>
          </Flex>
        </Box>
      </Row>
    </DrScreen>
  );
}
