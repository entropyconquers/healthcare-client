import {
    Box, Button,
    Container, Flex, Stack, Text, useToast, Heading, HStack, VStack, Avatar, AvatarBadge, Divider, Spacer
  } from "@chakra-ui/react";
  import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
  import { Radio, RadioGroup } from '@chakra-ui/react'
  import Back from "../components/Back";
  // Import Swiper styles
  import "swiper/css";
  import "swiper/css/pagination";
  import "../css/Splash.css";
  
  // import required modules
  import { Autoplay, Pagination } from "swiper";
import BlueBtn from "../components/BlueBtn";
import RedBtn from "../components/RedBtn";
import { useLocation } from "react-router";
import { useEffect, useState } from "react";
  const Slide = (props) => {
    return (
      <Box
        flex={1}
        borderRadius="lg"
        bg={props.bg}
        align={"center"}
        overflow="hidden"
        minH={150}
      >
        <Flex height="100%" flexDir={"row"}>
          <Stack h="100%" flex={2} p={4} pr={0} spacing={3}>
            <Text
              as={"b"}
              color="white"
              sx={{
                fontFamily: "body",
              }}
              fontSize={{ base: "md", md: "lg", lg: "2xl" }}
              textAlign="left"
            >
              {props.title}
            </Text>
            <Text
              color="white"
              sx={{
                fontFamily: "body",
              }}
              fontSize={{ base: "xs", md: "md", lg: "lg" }}
              textAlign="left"
            >
              {props.subtitle}
            </Text>
            <Text
              color="white"
              sx={{
                fontFamily: "body",
                fontWeight: "bold",
              }}
              fontSize={{ base: "xs", md: "md", lg: "lg" }}
              textAlign="left"
              mt={2}
            >
              {props.validity}
            </Text>
            <Button
              size={"sm"}
              p={2}
              mt={-2}
              maxW="80%"
              variant="solid"
              color={"#46BCFF"}
              colorScheme={"gray"}
            >
              {props.btnText}
            </Button>
          </Stack>
          <img
            style={{
              flex: 1,
              marginTop: "auto",
              marginBottom: props.mb ? "auto" : "0px",
              height: props.imgH,
              marginRight: "5px",
              objectFit: "contain",
            }}
            src={process.env.PUBLIC_URL + "/assets/" + props.img}
          ></img>
        </Flex>
      </Box>
    );
  };
  
  
  const ReviewOrder = () => {
    const location = useLocation();
    const BuyOneTimeDetails = {
      title: "One-Time Doctor Consultancy",
      subtitle: "Get one-time online doctor consultancy with our general physicians.",
      validity:"1 Time Validity",
      price: "99",
      fullPrice: "399",
      planCode: "one_time",

    }
    const BuyYearlyDetails = {
      title: "Family Doctor",
      subtitle: "Get unlimited online doctor consultancy with our general physicians.",
      validity:"1 Year Validity",
      price: "499",
      fullPrice: "899",
      planCode: "yearly",
    }
    
    const [BuyDetails, setBuyDetails] = useState(
      {}
    )
    const {state} = location;
    useEffect(() => {
      if(state && state.plan === "one_time") {
        setBuyDetails(BuyOneTimeDetails)
      }
      else if(state && state.plan === "yearly") {
        setBuyDetails(BuyYearlyDetails)
      }
      
    }, [])
    
    
    const handlePayment = () => {

    }
    
      return (
        <div
          style={{
            flex: 1,
            display: "flex",
            backgroundColor: "#FFF",
            justifyContent: "flex-start",
            alignItems: "center",
            flexDirection: "column",
            height: "100vh",
            position: "relative",
            width: "100%",
            textAlign: "center",
            overflowX: "hidden",
            overflowY: "auto",
          }}
        >
          <Back relative title="Review Order" />
          <VStack>
            <Container p={4}>
              <Slide
                /*title="One-Time Doctor Consultancy"
                subtitle="Get one-time online doctor consultancy with our general physicians."
                
                validity="1 Time Validity"*/
                title={BuyDetails.title}
                subtitle={BuyDetails.subtitle}
                validity={BuyDetails.validity}
                
                btnText="Consult Now"
                bg="#46BCFF"
                img="revieworder.svg"
                imgH="100px"
                mb
              />
            </Container>
            <Divider bg={"gray.200"} h={4} />
            <Flex
              w="100%"
              flex={1}
              flexDir="row"
              justify={"flex-start"}
              align={"flex-start"}
              p={4}
            >
              <VStack align={"flex-start"} p={2} w="100%" spacing={4}>
                <Text as={"b"} fontSize={"md"} color={"#000"}>
                  Order Summary
                </Text>
                <Flex w="100%">
                  <VStack spacing={0} align={"flex-start"}>
                    <Text fontSize={"sm"} color={"#000"}>
                      {BuyDetails.price} Rs package
                    </Text>
                    <Text size={5} fontSize="xs" color={"gray.400"}>
                      {BuyDetails.validity} 
                    </Text>
                  </VStack>
                  <Spacer />
                  <Text fontSize={"sm"} color={"gray.300"}>
                    <s>{BuyDetails.fullPrice} Rs</s>
                  </Text>
                  <Text ml={2} fontSize={"sm"} color={"#000"}>
                    {BuyDetails.price} Rs
                  </Text>
                </Flex>
                <Divider bg={"gray.300"} />
                <Text as={"b"} fontSize={"md"} color={"#000"}>
                  Payment Method
                </Text>
                <RadioGroup defaultValue="1">
                  
                    <Radio
                    fontSize={"sm"}
                    size={"sm"}
                    colorScheme="blue" value="1">
                      Online Payment
                    </Radio>
                    
                </RadioGroup>
              </VStack>
            </Flex>
          </VStack>

          <BlueBtn text={`Pay ${BuyDetails.price} Rs`} handleClick={handlePayment} />
        </div>
      );
  }
  export default ReviewOrder;