import {
    Box, Button,
    Container, Flex, Stack, Text, useToast, Heading, HStack, VStack, Image, Spacer, Divider, IconButton
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
  
  import { FaCopy } from "react-icons/fa";
 
  
  
  const Refer = () => {
   
    
    
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
          <Back
            relative
            color="#FE7F7F"
            textColor="white"
            title="Refer & Earn"
          />

          <VStack
            w="100%"
            flex={1}
            p={4}
            spacing={5}
            alignItems="center"
            justifyContent="center"
          >
            <Spacer></Spacer>
            <Image
              src={process.env.PUBLIC_URL + "/assets/refer.svg"}
              h={200}
              maxW={"100%"}
              objectFit="contain"
            />
            <Text
              p={4}
              as="b"
              fontSize="md"
              color="gray.600"
              textAlign="center"
            >
              Refer your friends and earn 100 points for each referral.
            </Text>
            <Spacer></Spacer>
            <Text as="b" fontSize="md" color="black" textAlign="center">
              Total Points Earned: <u>300</u>
            </Text>
            <Divider bg={"gray.300"} w={"100%"} h={1}></Divider>
            <Container>
              <VStack>
                <Text fontSize="md" color="gray.800" textAlign="center">
                  Your referral code:
                </Text>
                <HStack>
                  <Text
                    p={2}
                    px={5}
                    bg="black"
                    as="b"
                    fontSize="xl"
                    color="white"
                    borderRadius={"xl"}
                    textAlign="center"
                  >
                    KXY34553
                  </Text>
                  <IconButton
                    colorScheme={"accent"}
                    icon={<FaCopy />}
                  ></IconButton>
                </HStack>
              </VStack>
            </Container>
          </VStack>
        </div>
      );
  }
  export default Refer;