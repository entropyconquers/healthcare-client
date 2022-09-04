import { Avatar, AvatarBadge, Text, useDisclosure, VStack } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  useHistory
} from "react-router-dom";
import { AppContext } from "./AppContext";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Flex,
  Button,
  DrawerCloseButton, HStack
} from '@chakra-ui/react'
import { useSwipeable } from "react-swipeable";
import {MdRequestPage} from "react-icons/md";
import {RiMessage2Fill} from "react-icons/ri";
import {FaFilePrescription} from "react-icons/fa"
import {FaHandHoldingMedical} from "react-icons/fa";
import {MdPrivacyTip} from "react-icons/md";
import {FiChevronRight} from "react-icons/fi";
import {IoIosHelpCircle} from "react-icons/io";
import {MdHealthAndSafety} from "react-icons/md";
import {BsFillShareFill} from "react-icons/bs";
import useTransitionHistory from "../hooks/useTransitionHistory";



export default function Back(props) {

  const [push] = useTransitionHistory();
  
  const {ref} = useSwipeable({
    onSwiped: (eventData) => {
      if(eventData.dir === "Right"){
        //onOpen();
      }
      else{
        onClose();
      }

    }
    
  });
  useEffect(() => {
    ref(document)
  }, [])
  
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement, setPlacement] = React.useState('left')
  //get current year
  const year = new Date().getFullYear();

  return (
    <div
      style={{
        position: "relative",
        top: "0",
        left: "0",
        zIndex: "2",
        width: "100%",
        padding: "10px",
        display: "flex",
        justifyContent: "center",
        paddingBottom: "20px",
        paddingTop: "20px",
      }}
    >
      <button
        style={{
          position: "absolute",
          left: "0px",
          padding: "10px",
        }}
        onClick={onOpen}
      >
        <GiHamburgerMenu
          color={props.textColor ? props.textColor : "black"}
          size={25}
        />
      </button>

      {
        <img
          src={process.env.PUBLIC_URL + "/assets/logo.png"}
          alt="logo"
          style={{
            position: "absolute",
            right: "0px",
            width: "60%",
            maxHeight: "50px",
            padding: "10px",
          }}
        />
      }
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            <HStack spacing={5} w="100%" align={"center"}>
              <Avatar
                size="lg"
                name="John Doe"
                src="https://bit.ly/dan-abramov"
              ></Avatar>
              <VStack spacing={0} align={"left"}>
                <Text fontSize="xl" fontWeight="bold">
                  John Doe
                </Text>
                <Text color="accent.200" fontSize="xs">
                  View Profile
                </Text>
              </VStack>
            </HStack>
          </DrawerHeader>
          <DrawerBody p={0}>
            <Button
              m={0}
              align="left"
              justifyContent={"left"}
              w="100%"
              borderRadius="0px"
              leftIcon={<MdRequestPage color="#FE7F7F" size={20} />}
              rightIcon={
                <FiChevronRight
                  style={{
                    position: "absolute",
                    right: 10,
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                  color="#FE7F7F"
                  size={20}
                />
              }
              colorScheme="gray"
              variant="solid"
              fontWeight="bold"
              fontSize="md"
              borderBottomColor={"gray.300"}
              borderBottomWidth={"1px"}
              onClick={() => {
                onClose();
                push("/orders");
              }}
            >
              Orders
            </Button>
            <Button
              m={0}
              align="left"
              justifyContent={"left"}
              w="100%"
              borderRadius="0px"
              leftIcon={<RiMessage2Fill color="#FE7F7F" size={20} />}
              colorScheme="gray"
              variant="solid"
              fontWeight="bold"
              fontSize="md"
              borderBottomColor={"gray.300"}
              borderBottomWidth={"1px"}
              rightIcon={
                <FiChevronRight
                  style={{
                    position: "absolute",
                    right: 10,
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                  color="#FE7F7F"
                  size={20}
                />
              }
              onClick={() => {
                onClose();
                push("/consultations");
              }}
            >
              Consultations
            </Button>
            <Button
              m={0}
              align="left"
              justifyContent={"left"}
              w="100%"
              borderRadius="0px"
              leftIcon={<FaFilePrescription color="#FE7F7F" size={20} />}
              colorScheme="gray"
              variant="solid"
              fontWeight="bold"
              fontSize="md"
              borderBottomColor={"gray.300"}
              borderBottomWidth={"1px"}
              rightIcon={
                <FiChevronRight
                  style={{
                    position: "absolute",
                    right: 10,
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                  color="#FE7F7F"
                  size={20}
                />
              }
              onClick={() => {
                onClose();
                push("/prescriptions");
              }}
            >
              E-Prescriptions
            </Button>
            <Button
              m={0}
              align="left"
              justifyContent={"left"}
              w="100%"
              borderRadius="0px"
              leftIcon={<FaHandHoldingMedical color="#FE7F7F" size={20} />}
              colorScheme="gray"
              variant="solid"
              fontWeight="bold"
              fontSize="md"
              borderBottomColor={"gray.300"}
              borderBottomWidth={"1px"}
              rightIcon={
                <FiChevronRight
                  style={{
                    position: "absolute",
                    right: 10,
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                  color="#FE7F7F"
                  size={20}
                />
              }
              onClick={() => {
                onClose();
                push("/doctors");
              }}
            >
              Doctors
            </Button>
            <Button
              m={0}
              align="left"
              justifyContent={"left"}
              w="100%"
              borderRadius="0px"
              leftIcon={<MdPrivacyTip color="#FE7F7F" size={20} />}
              colorScheme="gray"
              variant="solid"
              fontWeight="bold"
              fontSize="md"
              borderBottomColor={"gray.300"}
              borderBottomWidth={"1px"}
              rightIcon={
                <FiChevronRight
                  style={{
                    position: "absolute",
                    right: 10,
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                  color="#FE7F7F"
                  size={20}
                />
              }
              onClick={() => {
                onClose();
                push("/privacypolicy");
              }}
            >
              Privacy Policy
            </Button>
            <Button
              m={0}
              align="left"
              justifyContent={"left"}
              w="100%"
              borderRadius="0px"
              leftIcon={<IoIosHelpCircle color="#FE7F7F" size={20} />}
              colorScheme="gray"
              variant="solid"
              fontWeight="bold"
              fontSize="md"
              borderBottomColor={"gray.300"}
              borderBottomWidth={"1px"}
              rightIcon={
                <FiChevronRight
                  style={{
                    position: "absolute",
                    right: 10,
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                  color="#FE7F7F"
                  size={20}
                />
              }
              onClick={() => {
                onClose();
                push("/help");
              }}
            >
              Help
            </Button>
            <Button
              m={0}
              align="left"
              justifyContent={"left"}
              w="100%"
              borderRadius="0px"
              leftIcon={<MdHealthAndSafety color="#FE7F7F" size={20} />}
              colorScheme="gray"
              variant="solid"
              fontWeight="bold"
              fontSize="md"
              borderBottomColor={"gray.300"}
              borderBottomWidth={"1px"}
              rightIcon={
                <FiChevronRight
                  style={{
                    position: "absolute",
                    right: 10,
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                  color="#FE7F7F"
                  size={20}
                />
              }
              onClick={() => {
                onClose();
                push("/galleryha");
              }}
            >
              Health articles
            </Button>
            <Button
              m={0}
              align="left"
              justifyContent={"left"}
              w="100%"
              borderRadius="0px"
              leftIcon={<BsFillShareFill color="#FE7F7F" size={20} />}
              colorScheme="gray"
              variant="solid"
              fontWeight="bold"
              fontSize="md"
              borderBottomColor={"gray.300"}
              borderBottomWidth={"1px"}
              rightIcon={
                <FiChevronRight
                  style={{
                    position: "absolute",
                    right: 10,
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                  color="#FE7F7F"
                  size={20}
                />
              }
              onClick={() => {
                onClose();
                push("/refer");
              }}
            >
              Share now and get 100 points
            </Button>
          </DrawerBody>
          <DrawerFooter p={4} >
            <Flex
              w="100%"
              h="100%"
              align="center"
              justify="center"
              direction="column"

            >
              <Text fontSize="xs" color="gray.500" textAlign={"center"}>
                © {year} AngelDoc Healthcare. <br></br> All rights reserved.
              </Text>
              <Text
              onClick={() => {
                onClose();
                push("/tnc");
              }
              }

              p={4} fontSize="xs" color="gray.500" textAlign={"center"}>
                <u>Terms & Conditions</u> 
              </Text>
            </Flex>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
