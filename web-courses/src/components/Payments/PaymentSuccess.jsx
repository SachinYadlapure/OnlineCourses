import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { RiCheckboxFill } from 'react-icons/ri';
import { Link, useSearchParams } from 'react-router-dom';

const PaymentSuccess = () => {
  const reference = useSearchParams()[0].get('reference');

  return (
    <Container h={'90vh'} p="16">
      <Heading my={'8'} textAlign={'center'}>
        You Have Pro Pack
      </Heading>
      <VStack boxShadow={'lg'} pb="16" alignItems={'center'} borderRadius="lg">
        <Box
          w={'full'}
          bg="yellow.400"
          p={'4'}
          css={{ borderRadius: '8px 8px 0 0 ' }}
        >
          <Text color={'black'}>Payment Success</Text>
        </Box>
        <Box p={'4'}>
          <VStack textAlign={'center'} px="8" mt={'4'} spacing="8">
            <Text>
              Congratulation You're a Pro Member. Now You have to access the
              Premium content.
            </Text>
            <Heading size={'4xl'}>
              <RiCheckboxFill />
            </Heading>
          </VStack>
        </Box>
        <Link to="/profile">
          <Button colorScheme={'yellow'}>Go to profile</Button>
        </Link>
        <Heading size={'xs'}>Reference: {reference}</Heading>
      </VStack>
    </Container>
  );
};

export default PaymentSuccess;
