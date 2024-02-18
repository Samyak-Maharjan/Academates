import React from 'react';
import {
  Container,
  VStack,
  Heading,
  Input,
  Button,
  Text,
  Avatar,
  Select,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
const Signup = () => {
  return (
    <Container maxW={'container.xl'}>
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={'8'}
          w={['full', '96']}
          m={'auto'}
          my={'16'}
        >
          <Heading alignSelf={'center'}>Academates</Heading>
          <Avatar alignSelf={'center'} boxSize={'32'} />
          <Input
            placeholder={'Name'}
            type={'text'}
            required
            focusBorderColor={'purple.500'}
          />
          <Input
            placeholder={'Email'}
            type={'email'}
            required
            focusBorderColor={'purple.500'}
          />
          <Input
            placeholder={'Password'}
            type={'password'}
            required
            focusBorderColor={'purple.500'}
          />
          <Select placeholder="Register As">
            <option value="teacher">Teacher</option>
            <option value="student">Student</option>
          </Select>

          <Button colorScheme={'purple'} type={'submit'}>
            Sign Up
          </Button>
          <Text textAlign={'right'}>
            Already Registerd?{' '}
            <Button variant={'link'} colorScheme={'purple'}>
              <Link to={'/Login'}>Login</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Signup;
