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
  import SkeletonImage from "../components/SkeletonImage";
import useFetch from "../hooks/useFetch";
  
  
 
  
  
  const Article = () => {
   
      //useFetch
      const [articleResponse, articleLoading, articleError, articleFetchUrl] = useFetch();


      
    
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
            title="Health Articles"
          />
          <VStack w="100%" flex={1} p={4} spacing={5} alignItems="flex-start">
            <div style={{
              width: "100%",
              height: "250px",
              maxHeight: "250px"
            }}>
              <SkeletonImage url = "https://source.unsplash.com/random"/>
            </div>
            
            <VStack width={"100%"} alignItems="flex-start">
              <Heading as="h1" size="md" color="#000" textAlign="left">
                Article Title
              </Heading>
              <Text color="#000" textAlign="left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                condimentum, nisl ut ultricies lacinia, nunc nisl ultricies
                nisl, nec aliquet nunc nisl euismod nunc. Sed condimentum, nisl
                ut ultricies lacinia, nunc nisl ultricies nisl, nec aliquet nunc
                nisl euismod nunc. Sed condimentum, nisl ut ultricies lacinia,
                nunc nisl ultricies nisl, nec aliquet nunc nisl euismod nunc.
                Sed condimentum, nisl ut ultricies lacinia, nunc nisl ultricies
                nisl, nec aliquet nunc nisl euismod nunc. Sed condimentum, nisl
                ut ultricies lacinia, nunc nisl ultricies nisl,
              </Text>
            </VStack>
          </VStack>
        </div>
      );
  }
  export default Article;