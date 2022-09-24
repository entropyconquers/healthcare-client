import {
    Box, Button,
    Container, Flex, Stack, Text, useToast, Heading, HStack, VStack, Image, Spacer, Divider, Spinner
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
import useFetch from "../hooks/useFetch";

 const Order = (props) => {
  
  return (
    <VStack w="100%">
      <Divider borderColor="gray.200" borderWidth="3px" />
      <Flex p={4} w="100%">
        <VStack spacing={0} align={"flex-start"}>
          <Text fontSize={"sm"} color={"#000"}>
            {props.package}
          </Text>
          <Text size={5} fontSize="xs" color={"gray.500"}>
            {props.details}
          </Text>
          <VStack
            pt={4}
            align="flex-start"
            spacing={0}
          >
            <Text size={5} fontSize="xs">
              <b>Purchase Date :</b> {props.date}
            </Text>
            <Text size={5} fontSize="xs">
              <b>Expiry Date :</b> {props.expiry}
            </Text>
          </VStack>
        </VStack>
        <Spacer />
        <Text fontSize={"sm"} color={"gray.300"}>
          <s>{props.fullprice} Rs</s>
        </Text>
        <Text as="b" ml={2} fontSize={"lg"} color={"#000"}>
          {props.price} Rs
        </Text>
      </Flex>
      <Divider borderColor="gray.200" borderWidth="3px" />
    </VStack>
  );
 }
  
 


  const Orders = () => {
    const [orderResponse, orderLoading, orderError, fetchUrl] = useFetch()
    const [orderHistory, setOrderHistory] = useState([]);
    useEffect(() => {
      fetchUrl("/user/orders", {
        method: "GET",
      },
      true, true)
      /*setOrderHistory([
        {
          id: 1,
          package: "499 Rs Package",
          details: "Family- 1 Year Doctor Consult",
          date: "2020-01-01",
          expiry: "2021-01-01",
          price: "499",
          fullprice: "899",
        },
        {
          id: 2,
          package: "99 Rs Package",
          details: "One time Doctor Consult",
          date: "2020-01-01",
          expiry: "2021-01-01",
          price: "99",
          fullprice: "399",
        },
        

      ]);*/
    }, [])
    useEffect(() => {
      if (orderResponse) {
        setOrderHistory(orderResponse)
      }
    }, [orderResponse])
    
    useEffect(() => {
      //error
      if (orderError) {
        console.log(orderError);
      }
    }, [orderError])
    
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
          <Back relative color="#FE7F7F" textColor="white" title="My Orders" />
          {orderHistory.length > 0 ? (
            <VStack
              w="100%"
              flex={1}
              
              spacing={0}
              alignItems="flex-start"
            >
              <Text mt={4} p={4} as="u" fontSize="xl" color="gray.600">
                <b>Order History</b>
              </Text>
              {orderHistory.map((order) => (
                <Order 
                  key={order.id}
                  id={order.id} 
                  package={order.title}
                  details={order.desc}
                  date={order.purchase_date}
                  expiry={order.expiry_date}
                  price={order.offer_price}
                  fullprice={order.price}

                />
              ))}
            </VStack>
          ) : (
            <Flex flex={1} justify="center" align="center" position={"relative"} mb={4}>
              <VStack>
                <Image
                  w={"80px"}
                  objectFit="cover"
                  src={process.env.PUBLIC_URL + "/assets/ordersempty.svg"}
                />
                <Text fontSize="md" fontWeight="bold" color="#000">
                  No Orders Found
                </Text>
                <Text fontSize="xs" color="gray.500">
                  Consult with trusted doctors
                </Text>
                <br />
                {orderLoading && <Spinner mt={5} color='red.500' />}
                <RedBtn
                  text={"Consult Now!"}
                  handleClick={consultNow}
                />
              </VStack>
              

            </Flex>
          )}
        </div>
      );
  }
  export default Orders;