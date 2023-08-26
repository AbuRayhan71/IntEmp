import React from 'react';
import { Link } from 'react-router-dom';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaGoogle, FaApple } from 'react-icons/fa';

export default function Register() {
  const handleGoogleSignIn = () => {
    // Perform Google sign-in logic here
  };

  const handleAppleSignIn = () => {
    // Perform Apple sign-in logic here
  };

  return (
    <Flex
      minH={'100vh'}
      align={'top'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Create an Account</Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="firstName" isRequired>
              <FormLabel>First Name</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="lastName">
              <FormLabel>Last Name</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Checkbox>Agree to terms and conditions</Checkbox>
              <Button colorScheme="teal">Register</Button>
              <p><center>or</center></p>
              <Stack direction="row" spacing={4}>
                <Button
                  onClick={handleGoogleSignIn}
                  leftIcon={<FaGoogle />}
                  colorScheme="red"
                >
                  Sign up with Google
                </Button>
                <Button
                  onClick={handleAppleSignIn}
                  leftIcon={<FaApple />}
                  colorScheme="gray"
                >
                  Sign up with Apple
                </Button>
              </Stack>
            </Stack>
          </Stack>
          <br></br>
          <Text color={'purple.600'}>Already have an account? <Link to="/login">Login</Link></Text>
        </Box>
        
      </Stack>
    </Flex>
  );
}
