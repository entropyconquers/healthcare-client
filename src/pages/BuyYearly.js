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
  
  
  //import components
  const PricingBox = (props) => {
    return (
      <Box
        dropShadow="xl"
        flex={1}
        boxShadow='xl'
        //maxH="350px"
        minH = "90%"
        borderRadius="lg"
        bgGradient={`linear(to-bl, #657AEA, #D06CFF69)`}
        align={"center"}
        p={4}
        
      >
        <Stack h="100%" spacing={7}>
          <Text
            as={"u"}
            fontWeight={"500"}
            sx={{
              fontFamily: "body",
            }}
            fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
            color="white"
          >
            {props.price + " Rs"}
          </Text>
          
          <Flex flexDir="column"
            justifyContent="center"
            alignItems="center"
            flex={2}
          >
            <Text
            fontWeight={"600"}
            sx={{
              fontFamily: "body",
            }}
            fontSize={{ base: "lg", md: "12", lg: "15" }}
            color="white"
          >
            {props.content}
          </Text>
          </Flex>
          <Flex flexDir="column"
            justifyContent="flex-end"
            alignItems="center"
            flex={1}
          >
            <Button onClick={()=>props.handleClick()} mt="auto" colorScheme={props.colorScheme}>
              Buy Now
            </Button>
          </Flex>
        </Stack>
      </Box>
    );
  }
  
 
  
  
  const Dashboard = () => {
    const location = useLocation();
    const [otp, setOtp] = useState("")
    const [push] = useTransitionHistory();
    const signIn = useSignIn();
    const toast = useToast()
    
    //state location
    const {state} = location;
    
    const handleClick = () => {
      push("/revieworder", {plan: "yearly"})
    }
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
          <Back relative logo />

          <Box
            bg="#657AEA"
            p={4}
            color="white"
            fontSize="md"
            as="b"
            align="center"
          >
            Are you Suffering from <u>Fever</u>
          </Box>
          <Heading as="h5" pt={5} px={12} fontSize={["xl", "2xl", "3xl"]}>
            Consult with Trusted & Experienced Consultant Physicians
          </Heading>
          <Text mb={5}>only in</Text>
          <Flex flexDir="column" flex={1} justifyContent="center">
            <Flex
            py={"auto"}
            flex={2} px={"20"}>
              <PricingBox
                colorScheme="purple"
                price={state && state.price ? state.price : "499"}
                content="1 Year Subscription Plan 
                (Unlimited Online Doctor Consultancy are free in one year for One family)."
                handleClick={handleClick}
              />
            </Flex>
            <Flex flex={1.5} align="center">
              <HStack
                spacing={5}
                p={5}
                mt={5}
                flex={1}
                justifyContent="center"
                align="start"
              >
                <VStack flex={1} w="28%">
                  <img
                    style={{
                      width: "30px",
                    }}
                    src={process.env.PUBLIC_URL + "/assets/buy499/priv.svg"}
                  />
                  <Text fontSize={"xs"}>Private & Secure Platform</Text>
                </VStack>
                <VStack flex={1} w="28%">
                  <img
                    style={{
                      width: "30px",
                    }}
                    src={process.env.PUBLIC_URL + "/assets/buy499/video.svg"}
                  />
                  <Text fontSize={"xs"}>Convenient Call/Video Connects</Text>
                </VStack>
                <VStack flex={1} w="28%">
                  <img
                    style={{
                      width: "30px",
                    }}
                    src={process.env.PUBLIC_URL + "/assets/buy499/doc.svg"}
                  />
                  <Text fontSize={"10"}>
                    All Catogories of doctors are available
                  </Text>
                </VStack>
              </HStack>
            </Flex>
          </Flex>
        </div>
      );
  }
  export default Dashboard;