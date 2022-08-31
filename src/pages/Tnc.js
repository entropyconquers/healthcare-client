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
            title="Terms and Conditions"
          />

          <VStack mt={4} width={"100%"} p={4} alignItems="flex-start">
            <Text color="#000" textAlign="left">
              These Terms and Conditions of Use (hereinafter referred to as
              "Terms") as hereinafter appearing are published in accordance with
              the provisions laid down under Rule 3(1)(a) of Information
              Technology (Intermediary Guidelines and Digital Media Ethics Code)
              Rules, 2021 and the same constitutes "Electronic Record" within
              the meaning of Section 2(t) of the Information Technology Act,
              2000 and the Rules framed thereunder. These Terms are also
              governed by all applicable laws including but not limited to
              Indian Contract Act, 1872. These Terms being an electronic record
              does not require any signature.
            </Text>
          </VStack>
        </div>
      );
  }
  export default Article;