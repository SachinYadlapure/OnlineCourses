import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { buySubscription } from '../../redux/actions/userAction';
import { server } from '../../redux/store';
import logo from '../../assets/images/logo.png';

const Subscribe = ({ user }) => {
  const { loading, error, subscriptionId } = useSelector(
    state => state.subscription
  );
  // const { error: courseError } = useSelector(state => state.course);
  const dispatch = useDispatch();
  const [key, setKey] = useState('');

  const subscribeHandler = async () => {
    const { data } = await axios.get(`${server}/razorpaykey`);

    setKey(data.key);
    dispatch(buySubscription());
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    // if (courseError) {
    //   toast.error(courseError);
    //   dispatch({ type: 'clearError' });
    // }
    if (subscriptionId) {
      const openPopUp = () => {
        const options = {
          key,
          name: 'CourseForLearning',
          description: 'Get access to all premium users',
          image: logo,
          subscription_id: subscriptionId,
          callback_url: `${server}/paymentverification`,
          prefill: {
            name: user.name,
            email: user.email,
            contact: '',
          },
          notes: {
            address: 'sachin yadlapure',
          },
          theme: {
            color: '#FFC800',
          },
        };

        const razor = new window.Razorpay(options);
        razor.open();
      };
      openPopUp();
    }
  }, [
    dispatch,
    subscriptionId,
    error,
    key,
    user.name,
    user.email,
    // courseError,
  ]);

  return (
    <Container h={'90vh'} p="16">
      <Heading children="Welcome" my={'8'} textAlign={'center'} />
      <VStack
        boxShadow={'lg'}
        spacing={'0'}
        alignItems={'stretch'}
        borderRadius={'lg'}
      >
        <Box bg={'yellow.400'} p="4" css={{ borderRadius: '8px 8px 0 0' }}>
          <Text color={'black'} children={`Pro Pack - ₹299.00`} />
        </Box>
        <Box p={'4'}>
          <VStack textAlign={'center'} px="8" mt={'4'} spacing="8">
            <Text children={`Join Pro Pack and get access to all contents.`} />
            <Heading children={`₹299.00 Only`} size={'md'} />
          </VStack>
          <Button
            onClick={subscribeHandler}
            colorScheme={'yellow'}
            my="8"
            w={'full'}
            isLoading={loading}
          >
            Buy Now
          </Button>
        </Box>
        <Box bg={'blackAlpha.600'} p="4" css={{ borderRadius: '0 0 8px 8px' }}>
          <Heading
            size={'sm'}
            color="white"
            textTransform={'uppercase'}
            children={`100% Refund at Cancellation`}
          />
          <Text
            fontSize={'xs'}
            color={'white'}
            children={`*Terms and Condition Apply`}
          />
        </Box>
      </VStack>
    </Container>
  );
};

export default Subscribe;
