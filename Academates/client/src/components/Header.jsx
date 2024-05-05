import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
import { BiMenuAltLeft } from "react-icons/bi";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        pos={"fixed"}
        top={"4"}
        left={"4"}
        colorScheme="blue"
        p={"0"}
        width={"10"}
        h={"10"}
        borderRadius={"full"}
        zIndex={"overlay"}
        onClick={onOpen}
      >
        <BiMenuAltLeft size={"20"} />
      </Button>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>ACADEMATES</DrawerHeader>
          <DrawerBody>
            <VStack alignItems={"flex-start"}>
              <Button onClick={onClose} variant={"ghost"} colorScheme={"blue"}>
                <Link to={"/"}>Home</Link>
              </Button>
              <Button onClick={onClose} variant={"ghost"} colorScheme={"blue"}>
                <Link to={"/videos"}>My Profile</Link>
              </Button>
              <Button onClick={onClose} variant={"ghost"} colorScheme={"blue"}>
                <Link to={"/videos?category=free"}>Lecture Schedule</Link>
              </Button>
              <Button onClick={onClose} variant={"ghost"} colorScheme={"blue"}>
                <Link to={"/upload"}>Lecture Notes</Link>
              </Button>
            </VStack>

            <HStack
              pos={"absolute"}
              bottom={"10"}
              left={"0"}
              w={"full"}
              justifyContent={"space-evenly"}
            >
              <Button onClick={onClose} colorScheme={"blue"}>
                <Link to={"/login"}>Login</Link>
              </Button>
              <Button
                onClick={onClose}
                colorScheme={"blue"}
                variant={"outline"}
              >
                <Link to={"/signup"}>Sign Up</Link>
              </Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
