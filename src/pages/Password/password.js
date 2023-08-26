import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  FormControl,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleResetRequest = () => {
    // Here, you would typically send a request to your backend
    // to initiate the password reset process, passing the user's email.
    // This is where the backend logic for sending reset emails and managing tokens would come into play.
    // For now, let's just log the email to the console.
    console.log('Email for password reset:', email);
  };

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack
        spacing={4}
        w={'full'}
        maxW={'md'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={12}>
        <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
          Forgot your password?
        </Heading>
        <Text
          fontSize={{ base: 'sm', sm: 'md' }}
          color={useColorModeValue('gray.800', 'gray.400')}>
          You'll get an email with a reset link
        </Text>
        <FormControl id="email">
          <Input
            placeholder="your-email@example.com"
            _placeholder={{ color: 'gray.500' }}
            type="email"
            value={email}
            onChange={handleEmailChange}
          />
        </FormControl>
        <Stack spacing={6}>
        <Link to="/Resetpassword">
        <Button
            bg={'blue.400'}
            color={'white'}
            _hover={{
              bg: 'blue.500',
            }}
            onClick={handleResetRequest}>
            Request Reset
          </Button>

        </Link> 
        
        </Stack>
      </Stack>
    </Flex>
  );
}
