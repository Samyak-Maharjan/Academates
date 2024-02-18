import { Box, Container, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/image/pic1.jpeg";
import img2 from "../assets/image/pic2.jpeg";
import img3 from "../assets/image/pic3.jpeg";
import img4 from "../assets/image/pic4.jpeg";
import img5 from "../assets/image/5.png";

const headingOptions1 = {
  pos: "absolute",
  left: "50%",
  top: "7%",
  transform: "translate(-50%,-50%)",
  textTransfrom: "uppercase",
  p: "4",
  size: "4xl",
};
const headingOptions = {
  pos: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%,-50%)",
  textTransfrom: "uppercase",
  p: "4",
  size: "4xl",
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Container maxW={"container.xl"} minH={"100vh"} p={"16"}>
        <Heading
          textTransform={"uppercase"}
          py={"2"}
          w={"fit-content"}
          borderBottom={"2px solid"}
          m={"auto"}
        >
          About Us
        </Heading>
        <Stack
          h="full"
          p={"4"}
          alignItems={"center"}
          direction={["column", "row"]}
        >
          <Image src={img5} h={["40", "400"]} />
          <Text
            letterSpacing={"widest"}
            lineHeight={"190%"}
            p={["4", "16"]}
            textAlign={"center"}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque nemo
            aperiam excepturi? Temporibus sit distinctio suscipit inventore
            molestiae sapiente neque cum, enim cumque autem, sed, earum mollitia
            obcaecati cupiditate quam corrupti et hic id. Unde eaque voluptatum
            quam veniam distinctio ad modi quibusdam minus necessitatibus fuga
            porro, impedit, accusamus ea rem corrupti architecto dolor
            reprehenderit! Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Soluta culpa rerum sint. Mollitia a assumenda architecto nam
            tenetur vel pariatur.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};
const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={2000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
  >
    <Box w="full" h={"90vh"}>
      <Image src={img1} />
      <Heading
        textTransform={"uppercase"}
        color={"blue.900"}
        {...headingOptions1}
      >
        Academates
      </Heading>
      <Heading bgColor={"whiteAlpha.600"} color={"black"} {...headingOptions}>
        Your Personalized Learning Platform
      </Heading>
    </Box>
    <Box w="full" h={"90vh"}>
      <Image src={img2} />
      <Heading
        textTransform={"uppercase"}
        color={"blue.900"}
        bgColor={"whiteAlpha.600"}
        {...headingOptions1}
      >
        Academates
      </Heading>
      <Heading bgColor={"whiteAlpha.600"} color={"black"} {...headingOptions}>
        Learn From The Best Teacher Of India
      </Heading>
    </Box>
    <Box w="full" h={"90vh"}>
      <Image src={img3} />
      <Heading
        textTransform={"uppercase"}
        color={"blue.900"}
        bgColor={"whiteAlpha.600"}
        {...headingOptions1}
      >
        Academates
      </Heading>
      <Heading bgColor={"whiteAlpha.600"} color={"black"} {...headingOptions}>
        Experience The Futuristic Learning
      </Heading>
    </Box>
    <Box w="full" h={"90vh"}>
      <Image src={img4} />
      <Heading
        textTransform={"uppercase"}
        bgColor={"whiteAlpha.600"}
        color={"blue.900"}
        {...headingOptions1}
      >
        Academates
      </Heading>
      <Heading bgColor={"whiteAlpha.600"} color={"black"} {...headingOptions}>
        Learn & Grow
      </Heading>
    </Box>
  </Carousel>
);

export default Home;
