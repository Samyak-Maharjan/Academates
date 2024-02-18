import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import photo from '../assets/image/cover.jpg';
import {
  Container,
  VStack,
  HStack,
  Heading,
  Image,
  Input,
  Button,
  Text,
  Checkbox,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });
  const [alert, setAlert] = useState(null);
  const navigate = useNavigate();

  const onChange = e => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (
      credentials.username === 'aayushma' &&
      credentials.password === 'aayushma'
    ) {
      setAlert('Login successfull');

      setTimeout(() => {
        setAlert(null);
        navigate('/home');
      }, 2000);
    } else {
      setAlert('Login failed');
      setCredentials({ username: '', password: '' });
      setTimeout(() => {
        setAlert(null);
      }, 2000);
    }
  };

  return (
    <>
      <Container maxW={'container.xl'}>
        <HStack>
          <Image src={photo} h={'100vh'} w={'60%'} />
          <form>
            <VStack
              alignItems={'stretch'}
              spacing={'8'}
              w={['full', '96']}
              m={'auto'}
              my={'16'}
              marginLeft={'20'}
            >
              <Heading
                as="h2"
                size="2xl"
                alignSelf={'center'}
                colorScheme={'blue'}
              >
                Academates
              </Heading>
              {alert && <p id="alert-text">{alert}</p>}
              <Input
                placeholder={'Username'}
                type={'text'}
                id="username"
                name="username"
                required
                focusBorderColor={'purple.500'}
                value={credentials.username}
                onChange={onChange}
              />
              <Input
                placeholder={'Password'}
                type={'password'}
                id="password"
                name="password"
                required
                focusBorderColor={'purple.500'}
                value={credentials.password}
                onChange={onChange}
              />

              <Checkbox defaultChecked>keep me logged in</Checkbox>
              <Button variant={'link'} alignSelf={'flex-end'}>
                <Link to={'/forgetpassword'}>Forget Password?</Link>
              </Button>
              <Button
                onClick={handleSubmit}
                colorScheme={'purple'}
                type={'submit'}
              >
                Login
              </Button>
              <Text as="b" textAlign={'right'}>
                New User?{' '}
                <Button variant={'link'} colorScheme={'Blue'}>
                  <Link to={'/Signup'}>
                    <Text as="b">Register</Text>
                  </Link>
                </Button>
              </Text>
            </VStack>
          </form>
        </HStack>
      </Container>
    </>
  );
};

export default Login;
