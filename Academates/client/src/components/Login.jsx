import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import photo from "../assets/image/cover.png";
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
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [alert, setAlert] = useState(null);
  const navigate = useNavigate();

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {email, password} = credentials;
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, password})
    });

    const json = await response.json()
    console.log(json);

    if(json.success){
      setAlert("Login success");
      setTimeout(() => {
        navigate("/home");
      }, 2000);
     } 
     else {
      setAlert("Login failed");
      setCredentials({ email: "", password: "" });
      setTimeout(() => {
      }, 2000);
    }
  };

  return (
    <>
      <Container maxW={"container.xl"}>
        <HStack>
          <Image src={photo} h={"100vh"} w={"60%"} />
          <form>
            <VStack
              alignItems={"stretch"}
              spacing={"8"}
              w={["full", "96"]}
              m={"auto"}
              my={"16"}
              marginLeft={"20"}
            >
              <Heading
                as="h2"
                size="2xl"
                alignSelf={"center"}
                colorScheme={"blue"}
              >
                Academates
              </Heading>
              {alert && <p id="alert-text">{alert}</p>}
              <Input
                placeholder={"Email"}
                type={"text"}
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

              <Checkbox defaultChecked>keep me logged in</Checkbox>
              <Button variant={"link"} alignSelf={"flex-end"}>
                <Link to={"/forgetpassword"}>Forget Password?</Link>
              </Button>
              <Button
                onClick={handleSubmit}
                colorScheme={"blue"}
                type={"submit"}
              >
                Login
              </Button>
              <Text as="b" textAlign={"right"}>
                New User?{" "}
                <Button variant={"link"} colorScheme={"Blue"}>
                  <Link to={"/Signup"}>
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
