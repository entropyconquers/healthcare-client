import {
    Box, Button,
    Container, Flex, Stack, Text, useToast, Heading, HStack, VStack, Image, Avatar, Spacer
  } from "@chakra-ui/react";
  import { useState } from "react";
  import { useSignIn } from 'react-auth-kit';
  import { useLocation } from "react-router-dom";
  import { Swiper, SwiperSlide } from "swiper/react";
  import useTransitionHistory from "../hooks/useTransitionHistory";
  import Back from "../components/Back";
  // Import Swiper styles
  import "swiper/css";
  import "swiper/css/pagination";
  import "../css/Splash.css";
  // import required modules
  import { Autoplay, Pagination } from "swiper";
  import SkeletonImage from "../components/SkeletonImage";
  
  
 
  
  
  const Call = () => {
   
    
    
      return (
        <div
          style={{
            flex: 1,
            display: "flex",
            backgroundColor: "#FFF",
            justifyContent: "flex-start",
            flexDirection: "column",
            height: "100vh",
            position: "relative",
            width: "100%",
            textAlign: "center",
            overflowX: "hidden",
            overflowY: "auto",
          }}
        >
          <Back relative logo />
          <Container bg="gray.800" flex={1} p={0}>
            <Image
              h="100%"
              w="100%"
              objectFit={"cover"}
              position="absolute"
              top={0}
              left={0}
              zIndex={0}
              sx={{
                filter: "blur(5px) brightness(0.5)",
              }}
              blur={10}
              src="https://source.unsplash.com/random"
            />
            <VStack
              w="100%"
              h="100%"
              flex={1}
              position="absolute"
                top={0}
                left={0}
              zIndex={1}
              p={4}
              spacing={5}
              alignItems="center"
              justifyContent="center"
            >
                <Spacer></Spacer>
              <Avatar size="2xl" src="https://source.unsplash.com/random" />
                <Heading as="h1" size="md" color="#FFF" textAlign="center">
                    Dr. John Doe
                </Heading>
                <Text color="#FFF" textAlign="center">
                    Ringing...
                </Text>
                <Spacer></Spacer>
                <Button colorScheme="red" size="lg" w="100%">
                    End Call
                </Button>
            </VStack>
          </Container>
        </div>
      );
  }
  export default Call;