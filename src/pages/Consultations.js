import {
    Box, Button,
    Container, Flex, Stack, Text, useToast, Heading, HStack, VStack, Image, Spacer, Divider, Avatar, AvatarBadge
  } from "@chakra-ui/react";
  import { useEffect, useState } from "react";
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
import RedBtn from "../components/RedBtn";
const DocComp = (props) => {
  return (
    <Box my={5} w="100%" p={3} bg="#F3F3F3" borderRadius={"xl"} py={3}>
      <HStack spacing={3} w="100%" align={"center"}>
        <Avatar
          size="lg"
          name={props.name}
          //src="https://bit.ly/dan-abramov"
          src={props.img}
        >
          <AvatarBadge boxSize="0.8em" bg={props.online?"green.500":"orange.500"} />
        </Avatar>
        <VStack ml="1" align="flex-start" w="100%" spacing={3}>
          <Flex flexDirection="row" align="center" justify={"flex-start"}>
            <Text
              bg="white"
              p={0.5}
              px={2}
              borderRadius="xl"
              fontSize="md"
              fontWeight="bold"
            >
              {"Dr. "+props.name}
            </Text>
            <Text ml={2} color={props.online?"green.500":"orange.500"}>
              {props.online?"Online":"Away"}
            </Text>
          </Flex>
          <HStack w="100%" spacing={3}>
            <Text fontSize="sm" bg="white" p={0.5} px={2} borderRadius="xl">
              {props.speciality}
            </Text>
            <Text fontSize="sm" color="gray.600">
              {props.languages}
            </Text>
          </HStack>
        </VStack>
      </HStack>
      <VStack w="100%" mt={4} spacing={3}>
        <HStack w="100%" spacing={3}>
          <Text
            fontSize="xs"
            
            bg="gray.200"
            textAlign={"left"}
            p={2}
            px={3}
            borderRadius="xl"
          >
            <b>Last Consulatation date:</b> {props.lastConsultationDate}
          </Text>
        </HStack>
        <Flex w="100%" justify="flex-end">
          <Button
            colorScheme="green"
            variant="solid"
            size="sm"
            borderRadius="lg"
            px={3}
            py={2}
          >
            {props.online?"Consult Now":"Schedule Appointment"}
          </Button>
        </Flex>
      </VStack>
    </Box>
  );
}


  
  
  const Consultations = () => {
    const [consultationHistory, setConsultationHistory] = useState([]);
    useEffect(() => {
      setConsultationHistory([
        {
          name: "Naman Gupta",
          img: "https://bit.ly/dan-abramov",
          speciality: "Dentist",
          languages: "English, Hindi",
          lastConsultationDate: "23:00, 23/12/2019",
          online: false
        },
        {
          name: "Divya Garg",
          img: "https://source.unsplash.com/random?female",
          speciality: "Psychiatrist",
          languages: "English, Hindi",
          lastConsultationDate: "23:00, 23/12/2019",
          online: true
        },
        {
          name: "Naman Gupta",
          img: "https://bit.ly/dan-abramov",
          speciality: "Dentist",
          languages: "English, Hindi",
          lastConsultationDate: "23:00, 23/12/2019",
          online: false
        },
        {
          name: "Divya Garg",
          img: "https://source.unsplash.com/random?female",
          speciality: "Psychiatrist",
          languages: "English, Hindi",
          lastConsultationDate: "23:00, 23/12/2019",
          online: true
        },
      ]);
    }, [])
    
    
    const consultNow = () => {

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
            overflowY: "auto",
          }}
        >
          <Back
            relative
            color="#FE7F7F"
            textColor="white"
            title="Previous Consultations"
          />
          {consultationHistory.length > 0 ? (
            <VStack w="100%" flex={1} p={4} alignItems="flex-start">
              <Text mt={4} p={4} pl={0} as="u" fontSize="xl" color="gray.600">
                <b>Previous Consultations</b>
              </Text>
              {
                consultationHistory.map((item, index) => {
                  return (
                    <DocComp key={index} {...item} />
                  )
                })
              }
              
            </VStack>
          ) : (
            <Flex
              flex={1}
              justify="center"
              align="center"
              position={"relative"}
              mb={4}
            >
              <VStack>
                <Image
                  w={"80px"}
                  objectFit="cover"
                  src={process.env.PUBLIC_URL + "/assets/consultationsempty.svg"}
                />
                <Text fontSize="md" fontWeight="bold" color="#000">
                  No Consultations found!
                </Text>
                <Text fontSize="xs" color="gray.500">
                  Consult with trusted doctors
                </Text>
                <RedBtn text={"Consult Now!"} handleClick={consultNow} />
              </VStack>
            </Flex>
          )}
        </div>
      );
  }
  export default Consultations;