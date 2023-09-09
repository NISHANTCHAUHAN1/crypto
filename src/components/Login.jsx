import { Button, Container, Heading, Input, VStack, Text} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={'8'}
          w={['full' , '96']}
          m={'auto'}
          my={'16'}
        >
          <Heading>Welcome Back</Heading>
          <Input
            placeholder="Email"
            type="email"
            required
            focusBorderColor="green.500"
          />
           <Input
            placeholder="Password"
            type="password"
            required
            focusBorderColor="green.500"
          />

          <Button variant={Link} alignSelf={'flex-end'}>
            <Link to={"/forgetpassword"}>Forget Password</Link>
          </Button>

          <Button colorScheme='purple' type='submit'> Log In</Button>
          <Text textAlign={'right'}>New User? {' '}
          <Button variant={'link'} colorScheme={'green'}>
                <Link to={'/Signup'}>Signup</Link>
              </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Login;
