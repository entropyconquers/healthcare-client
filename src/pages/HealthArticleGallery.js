import {
  Box, Container, SimpleGrid, useToast
} from "@chakra-ui/react";
import { useState } from "react";
import { useSignIn } from 'react-auth-kit';
import { useLocation } from "react-router-dom";
import Back from "../components/Back";
import useTransitionHistory from "../hooks/useTransitionHistory";
  // Import Swiper styles
  import "swiper/css";
import "swiper/css/pagination";
import "../css/Splash.css";
  // import required modules
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
            color={"#FE7F7F"}
            title="Health Articles"
          />
          <Container
            mt={4}
          >
            
            <SimpleGrid columns={2} spacing={5}>
              <Box height="100px">
                <GalleryComponent
                  isLoaded={true}
                  src="https://source.unsplash.com/random"
                  title="To Predict Mortality, You Need a Leg to Stand On"
                />
              </Box>
              <Box height="100px">
                <GalleryComponent
                  isLoaded={true}
                  src="https://source.unsplash.com/random"
                  title="To Predict Mortality, You Need a Leg to Stand On"
                />
              </Box>
              <Box height="100px">
                <GalleryComponent
                  isLoaded={true}
                  src="https://source.unsplash.com/random"
                  title="To Predict Mortality, You Need a Leg to Stand On"
                />
              </Box>
              <Box height="100px">
                <GalleryComponent
                  isLoaded={true}
                  src="https://source.unsplash.com/random"
                  title="To Predict Mortality, You Need a Leg to Stand On"
                />
              </Box>
              <Box height="100px">
                <GalleryComponent
                  isLoaded={true}
                  src="https://source.unsplash.com/random"
                  title="To Predict Mortality, You Need a Leg to Stand On"
                />
              </Box>
              <Box height="100px">
                <GalleryComponent
                  isLoaded={true}
                  src="https://source.unsplash.com/random"
                  title="To Predict Mortality, You Need a Leg to Stand On"
                />
              </Box>
              <Box height="100px">
                <GalleryComponent
                  isLoaded={true}
                  src="https://source.unsplash.com/random"
                  title="To Predict Mortality, You Need a Leg to Stand On"
                />
              </Box>
              
            </SimpleGrid>
          </Container>
        </div>
      );
  }
  export default Gallery;