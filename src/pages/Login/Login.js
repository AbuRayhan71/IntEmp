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
import { FaGoogle, FaApple } from 'react-icons/fa'; // Icons for Google and Apple

export default function Login() {
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
          <Heading fontSize={'4xl'}>Sign in with your E-mail</Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}
              >
                <Checkbox>Remember me</Checkbox>
                <Link to="/password">

                <Text color={'blue.400'}>Forgot password?</Text>
                </Link>
                
              </Stack>
              
              <Button colorScheme="teal">
                Continue
              </Button>
              <p ><center>or</center></p>
              <Stack >
                <Button
                  onClick={handleGoogleSignIn}
                  leftIcon={<FaGoogle />}
                  colorScheme="red"
                >
                  Sign in with Google
                </Button>
                
              </Stack>
            <Stack>
            <Button
                  onClick={handleAppleSignIn}
                  leftIcon={<FaApple />}
                  colorScheme="gray"
                >
                  Sign in with Apple
                </Button>
            </Stack>
            <Text color={'purple.600'}>Don't have an account? Create your account</Text> 
            
            <Flex justify="center">
                <Link to="/register">
                  <Button colorScheme="yellow">
                    Create your account
                  </Button>
                </Link>
              </Flex>
            
            

              
            
          </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
