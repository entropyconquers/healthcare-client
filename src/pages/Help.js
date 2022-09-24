import {
  Box, Container, Heading, SimpleGrid, useToast, VStack, Text, Divider
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
import {IoMdMail} from "react-icons/io" 
import {MdCall} from "react-icons/md"
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
          <Back relative />
          <VStack mt={4} p={4} spacing={4}>
            <img
              src={process.env.PUBLIC_URL + "/assets/logo.png"}
              alt="logo"
              style={{
                paddingBottom: 10,
              }}
            />
            <VStack w="100%" spacing={2} p={4} align="start">
              <Heading size="md">Need help? We're here for you.</Heading>
              <Text color="gray.500" size="sm">
                Try the following
              </Text>
            </VStack>
            <VStack
              w="100%"
              spacing={2}
              p={4}
              align="start"
              borderWidth={1}
              borderColor="gray.400"
              borderRadius={10}
            >
              <IoMdMail color="#FE7F7F" size={25} />
              <Text size="sm">Reach us through mail</Text>
              <Divider />
              <Heading size="sm" color="red.500">
                <a
                  href="mailto:support@angeldoc.com"
                >support@angeldoc.com</a>
              </Heading>
            </VStack>
            <VStack
              w="100%"
              spacing={2}
              p={4}
              align="start"
              borderWidth={1}
              borderColor="gray.400"
              borderRadius={10}
            >
              <MdCall color="#FE7F7F" size={25} />
              <Text size="sm">We're available 24/7 on call</Text>
              <Divider />
              <Heading size="sm" color="red.500">
                <a href="tel:+919999999999">+91 9999999999</a>
               
              </Heading>
            </VStack>
          </VStack>
        </div>
      );
  }
  export default Gallery;