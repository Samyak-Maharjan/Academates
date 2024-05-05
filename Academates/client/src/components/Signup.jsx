import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import {
  Container,
  VStack,
  Heading,
  Input,
  Button,
  Text,
  Avatar,
  Select,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Signup = () => {
    const [credentials, setCredentials] = useState({name: "", email: "", password: ""});
    let naviagate = useNavigate();

    const handleSignup = async (e) => {
      e.preventDefault();
      const {name, email, password} = credentials;
      const response = await fetch("http://localhost:5000/api/auth/register", {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({name, email, password})
      });
      const json = await response.json()

      if(json.success){
          naviagate('/login');
      }else{

      }
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };


  return (
    <Container maxW={"container.xl"}>
      <form>
        <VStack
          alignItems={"stretch"}
          spacing={"8"}
          w={["full", "96"]}
          m={"auto"}
          my={"16"}
        >
          <Heading alignSelf={"center"}>Academates</Heading>
          <Avatar alignSelf={"center"} boxSize={"32"} />
          <Input
            placeholder={"Name"}
            type={"text"}
            id="name"
            name="name"
            required
            focusBorderColor={"blue.500"}
            value={credentials.name}
            onChange={onChange}
          />
          <Input
            placeholder={"Email"}
            type={"email"}
            id="email"
            name="email"
            required
            focusBorderColor={"blue.500"}
            value={credentials.email}
            onChange={onChange}
          />
          <Input
            placeholder={"Password"}
            type={"password"}
            id="password"
            name="password"
            required
            focusBorderColor={"blue.500"}
            value={credentials.password}
            onChange={onChange}
          />
          <Select placeholder="Register As">
            <option value="teacher">Teacher</option>
            <option value="student">Student</option>
          </Select>

          <Button onClick={handleSignup} colorScheme={"blue"} type={"submit"}>
            Sign Up
          </Button>
          <Text textAlign={"right"}>
            Already Registerd?{" "}
            <Button variant={"link"} colorScheme={"blue"}>
              <Link to={"/Login"}>Login</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Signup;
