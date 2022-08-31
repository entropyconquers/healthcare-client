import {
    Box, Button,
    Container, Flex, Stack, Text, useToast, Heading, HStack, VStack
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
  
  
  
 
  
  
  const Article = () => {
   
    
    
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
            title="Privacy Policy"
          />

          <VStack mt={4} width={"100%"} p={4} alignItems="flex-start">
            <Heading as="h1" size="sm" color="#000" textAlign="left">
              Preface
            </Heading>
            <Text color="#000" textAlign="left">
              Tata Industries Limited, DHP Division, a company incorporated
              under the laws of India having its registered office at Bombay
              House, 24 Homi Modi Street, Mumbai 400001 and having one of its
              office at 1504, 19th Main, Sector 1, HSR Layout, Bangalore 560102
            </Text>
          </VStack>
        </div>
      );
  }
  export default Article;