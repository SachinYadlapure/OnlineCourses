import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { resetPassword } from '../../redux/actions/profileAction';

const ResetPassword = () => {
  const [password, setPassword] = useState('');

  const params = useParams();

  const { loading, message, error } = useSelector(state => state.profile);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = e => {
    e.preventDefault();
    dispatch(resetPassword(params.token, password));
  };
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
      navigate('/login');
    }
  }, [dispatch, message, error, navigate]);
  return (
    <Container py={16} h={'90vh'}>
      <form onSubmit={submitHandler}>
        <Heading
          fontSize={'2rem'}
          children="Reset Password"
          my={'16'}
          textTransform="uppercase"
          textAlign={['center', 'left']}
        />
        <VStack spacing={'8'}>
          <Input
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="New Password"
            type={'password'}
            focusBorderColor={'yellow.500'}
          />
          <Button
            isLoading={loading}
            type="submit"
            width={'full'}
            colorScheme={'yellow'}
          >
            Reset Password
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default ResetPassword;
