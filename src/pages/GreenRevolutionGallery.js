import {
    Box, Button,
    Container, Flex, Stack, Text, useToast, Heading, HStack, VStack, SimpleGrid, Skeleton
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
  import SkeletonImage from "../components/SkeletonImage";
  // import required modules
  import { Autoplay, Pagination } from "swiper";
  import GalleryComponent from "../components/GalleryComponent";
  
  const Gallery = () => {
    const location = useLocation();
    const [otp, setOtp] = useState("")
    const [push] = useTransitionHistory();
    const signIn = useSignIn();
    const toast = useToast()
    
    
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
          }}
        >
          <Back
            relative
            textColor={"white"}
            color={"#2CAB6E"}
            title="Green Revolution"
          />
          <Container
            mt={4}
          >
            
            <SimpleGrid columns={2} spacing={5}>
              <Box height="100px">
                <GalleryComponent
                  isLoaded={true}
                  src="https://source.unsplash.com/random"
                  
                />
              </Box>
              <Box height="100px">
                <GalleryComponent
                  isLoaded={true}
                  src="https://source.unsplash.com/random"
                  
                />
              </Box>
              <Box height="100px">
                <GalleryComponent
                  isLoaded={true}
                  src="https://source.unsplash.com/random"
                  
                />
              </Box>
              <Box height="100px">
                <GalleryComponent
                  isLoaded={true}
                  src="https://source.unsplash.com/random"
                  
                />
              </Box>
              <Box height="100px">
                <GalleryComponent
                  isLoaded={true}
                  src="https://source.unsplash.com/random"
                  
                />
              </Box>
              <Box height="100px">
                <GalleryComponent
                  isLoaded={true}
                  src="https://source.unsplash.com/random"
                  
                />
              </Box>
              <Box height="100px">
                <GalleryComponent
                  isLoaded={true}
                  src="https://source.unsplash.com/random"
                  
                />
              </Box>
              
              
            </SimpleGrid>
          </Container>
        </div>
      );
  }
  export default Gallery;