import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { forgotPassword } from '../../redux/actions/profileAction';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const { loading, message, error } = useSelector(state => state.profile);

  const dispatch = useDispatch();

  const submitHandler = e => {
    e.preventDefault();
    dispatch(forgotPassword(email));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
  }, [dispatch, message, error]);

  return (
    <Container py={16} h={'90vh'}>
      <form onSubmit={submitHandler}>
        <Heading
          fontSize={'2rem'}
          children="Forgot Password"
          my={'16'}
          textTransform="uppercase"
          textAlign={['center', 'left']}
        />
        <VStack spacing={'8'}>
          <Input
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="abc@gmail.com"
            type={'email'}
            focusBorderColor={'yellow.500'}
          />
          <Button
            isLoading={loading}
            type="submit"
            width={'full'}
            colorScheme={'yellow'}
          >
            Send{' '}
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default ForgotPassword;
