import {
    Box, Button,
    Container, Flex, Stack, Text, useToast, Heading, HStack, VStack, Avatar, AvatarBadge
  } from "@chakra-ui/react";
  import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

  import Back from "../components/Back";
  // Import Swiper styles
  import "swiper/css";
  import "swiper/css/pagination";
  import "../css/Splash.css";
  // import required modules
  import { Autoplay, Pagination } from "swiper";
  
  
  const DocComp = (props) => {
    return (
      <Box my={5} w="100%" p={3} bg="#F3F3F3" borderRadius={"xl"} py={3}>
        <HStack spacing={3} w="100%" align={"center"}>
          <Avatar
            size="lg"
            name="Dan Abrahmov"
            src="https://bit.ly/dan-abramov"
          >
            <AvatarBadge boxSize="0.8em" bg="green.500" />
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
                Dr. Neelam Sharma
              </Text>
              <Text ml={2} color="green.500">
                Online
              </Text>
            </Flex>
            <HStack w="100%" spacing={3}>
              <Text fontSize="sm" bg="white" p={0.5} px={2} borderRadius="xl">
                MBBS, MD
              </Text>
              <Text fontSize="sm" color="gray.600">
                Hindi | English
              </Text>
            </HStack>
          </VStack>
        </HStack>
        <VStack w="100%" mt={4} spacing={3}>
          <HStack w="100%" spacing={3}>
            <Text
              fontSize="9"
              bg="gray.200"
              textAlign={"left"}
              p={2}
              px={3}
              borderRadius="xl"
            >
              Neha Sharma is an Indian actress and model. Sharma made her acting
              debut with the Telugu film Chirutha and her Hindi film debut with
              Crook.
            </Text>
          </HStack>
          <Flex w="100%" justify="flex-end">
            <Button
              colorScheme="accent"
              variant="solid"
              size="sm"
              borderRadius="lg"
              px={3}
              py={2}
            >
              Consult Now
            </Button>
          </Flex>
        </VStack>
      </Box>
    );
  }
 
  
  
  const Article = () => {
   
    
    
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
          <Back relative color="#FE7F7F" textColor="white" title="Doctors" />

          <VStack mt={5} width={"100%"}alignItems="center">
            <Tabs p={0} w="100%" colorScheme={"accent"}>
              <TabList>
                <Tab>Available</Tab>
                <Tab>Online</Tab>
                
              </TabList>

              <TabPanels>
                <TabPanel>
                  <DocComp />
                  <DocComp />
                  <DocComp />

                </TabPanel>
                <TabPanel>
                  <p>two!</p>
                </TabPanel>
                
              </TabPanels>
            </Tabs>
          </VStack>
        </div>
      );
  }
  export default Article;