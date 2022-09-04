import {
  Box, Button,
  Container, Flex, Spacer, Stack, Text, useToast
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { useSignIn } from 'react-auth-kit';
import { useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import useTransitionHistory from "../hooks/useTransitionHistory";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../css/Splash.css";
// import required modules
import { Autoplay, Pagination } from "swiper";


//import components
import {PricingBox, ConsultBox, Slide, Article} from "../components/dashboard";
import Drawer from "../components/Drawer";

const Dashboard = () => {
  const location = useLocation();
  const [otp, setOtp] = useState("")
  const [push] = useTransitionHistory();
  const signIn = useSignIn();
  const toast = useToast()
  const [priceOneTime, setpriceOneTime] = useState(99);
  const [priceYearly, setpriceYearly] = useState(499);
  //slider container height
  const [sliderHeight, setsliderHeight] = useState(0);
  const sliderRef = useRef(null);
  

  useEffect(() => {
    setsliderHeight(sliderRef.current.clientHeight);
    //console.log(sliderRef.current.clientHeight);
  }, [sliderRef]);
  
    const handleBuyOneTime = () => {
        push("/buyonetime", {price: priceOneTime})
    }
    const handleBuyYearly = () => {
      push("/buyyearly", {price: priceYearly});
    }
  
    return (
      <div
        style={{
          flex: 1,
          display: "flex",
          backgroundColor: "#EDEDED",
          justifyContent: "center",
          flexDirection: "column",
          height: "100vh",

          position: "relative",

          width: "100%",
          overflowX: "hidden",
          overflowY: "scroll",
        }}
      >
        
        <Flex
          position={"absolute"}
          top={0}
          width="100vw"
          p={"20px"}
          pt={"0px"}
          flexDir={"column"}
        >
          <Drawer relative />
          
          <Container mt={10} p={0}>
            <Flex>
              <PricingBox
                colorScheme="blue"
                price={priceOneTime}
                content="Only 1 time Online Doctor Consultancy are Available "
                handleClick = {handleBuyOneTime}
              />
              <Box w={5}></Box>
              <PricingBox
                colorScheme="purple"
                price={priceYearly}
                handleClick = {handleBuyYearly}
                content="1 Year Subscription Plan 
              (Unlimited Online Doctor Consultancy are free in one year for One person Family). "
              />
            </Flex>
          </Container>
          <Container mt={8} p={0}>
            <Flex w="100%">
              <ConsultBox
                title="Consult with Expert Physicians"
                subtitle="Consult with Specialist anytime for any problem."
                bottom="Only in 99 Rs"
                handleClick = {handleBuyOneTime}
              />
              <Box w={2}></Box>
              <ConsultBox
                title="Get E-Prescription"
                subtitle="Get free E-prescription everytime and maintain your health records."
                bottom="Consult Now"
                handleClick = {handleBuyYearly}
              />
              <Box w={2}></Box>
              <ConsultBox
                title="24/7 Service Available"
                subtitle="We are available 24/7, get consultation only on one click."
                bottom="Know More"
                handleClick = {handleBuyYearly}
              />
            </Flex>
          </Container>
          <Container
          ref={sliderRef}
          mt={8} p={0}>
            <Swiper
              pagination={true}
              autoplay={{
                loop: true,
                delay: 2000,
                disableOnInteraction: false,
              }}
              modules={[Pagination,
                 Autoplay
                ]}
              style={{
                backgroundColor: "#EDEDED",
                
              }}
            >
              <SwiperSlide>
                <Slide
                  title="You are in safe hands"
                  subtitle="Choose the experts for better health consultancy."
                  btnText="Know more"
                  bg="#2FA1A8"
                  img="/slides/slide1.png"
                  imgH="180px"
                  sliderHeight={sliderHeight}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Slide
                  title="Specialist Doctors are available 24/7 for consultancy"
                  subtitle="you and your family member can consult with our specialist at any time for entire year"
                  btnText="Consult Now"
                  bg="#46BCFF"
                  img="/slides/slide2.png"
                  imgH="210px"
                  sliderHeight={sliderHeight}
                  
                />
              </SwiperSlide>
              <SwiperSlide>
                <Slide
                  title="Get all-in-one-Health consultancy package for family"
                  subtitle="Consult any health issue at anytime from 
              anywhere. "
                  btnText="Consult Now"
                  bg="#DF85FF"
                  img="/slides/slide3.svg"
                  sliderHeight={sliderHeight}
                  imgH="100px"
                  mb
                />
              </SwiperSlide>
              <SwiperSlide>
                <Slide
                  title="Get free E-Prescription "
                  subtitle="Get a legal prescription online from a board-certified doctor. Set up an appointment to discuss your symptoms and medical history."
                  btnText="Consult Now"
                  bg="#C5B25E"
                  img="/slides/slide4.png"
                  imgH="200px"
                  sliderHeight={sliderHeight}
                  mb
                />
              </SwiperSlide>
              <SwiperSlide>
                <Slide
                  title="Why to go anywhere when we are here?"
                  subtitle="Here at  Healthcare, we have specialist team of Physicians who are avilable 24/7 for consultancy."
                  btnText="Consult Now"
                  bg="#57AFEE"
                  img="/slides/slide5.png"
                  imgH="200px"
                  sliderHeight={sliderHeight}
                  mb
                />
              </SwiperSlide>
              <SwiperSlide>
                <Slide
                  title="We increase plantation in the name of our all users"
                  subtitle="Here at  Healthcare, we support green revolution and plant more and more plants in all over the india."
                  btnText="Know more"
                  bg="#2CAB6E"
                  img="/slides/slide6.svg"
                  imgH="80px"
                  sliderHeight={sliderHeight}
                  mb
                />
              </SwiperSlide>
            </Swiper>
          </Container>
          <Container mt={8} p={0}>
            <Flex w="100%" flexDir={"row"} justifyContent={"space-between"}>
              <Text
                as={"b"}
                color="black"
                sx={{
                  fontFamily: "body",
                }}
                fontSize={{ base: "md", md: "lg", lg: "2xl" }}
                textAlign="left"
              >
                Health Articles
              </Text>
              <Text
                onClick={() => push("/galleryha")}
                as={"b"}
                color="gray.500"
                sx={{
                  fontFamily: "body",
                }}
                fontSize={{ base: "md", md: "lg", lg: "2xl" }}
                textAlign="left"
              >
                View All
              </Text>
            </Flex>
            <Flex mt={2} w="100%">
              <Article
                title="A Simple guide to improve health and happyness in life"
                img="test.png"
              />
              <Box w={2}></Box>
              <Article
                title="How to improve health and fitness using best nutrition diets?"
                img="test.png"
              />
            </Flex>
          </Container>
          <Container mt={8} p={0}>
            <Flex w="100%" flexDir={"row"} justifyContent={"space-between"}>
              <Text
                as={"b"}
                color="black"
                sx={{
                  fontFamily: "body",
                }}
                fontSize={{ base: "md", md: "lg", lg: "2xl" }}
                textAlign="left"
              >
                Green Revolution
              </Text>
              <Text
                onClick={() => push("/gallerygr")}
                as={"b"}
                color="gray.500"
                sx={{
                  fontFamily: "body",
                }}
                fontSize={{ base: "md", md: "lg", lg: "2xl" }}
                textAlign="left"
              >
                View All
              </Text>
            </Flex>
            <Flex mt={2} w="100%">
              <img
                style={{borderRadius:15, width: "40%" ,flex:1, objectFit: "cover" }}
                src={process.env.PUBLIC_URL + "/assets/test.png"}
              ></img>
              <Box w={2}></Box>
              <img
                 style={{borderRadius:15, width: "40%",flex:1, objectFit: "cover" }}
                src={process.env.PUBLIC_URL + "/assets/test.png"}
              ></img>
              
            </Flex>
          </Container>
        </Flex>
      </div>
    );
}
export default Dashboard;