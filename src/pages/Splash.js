import { Button, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react';

import useTransitionHistory from '../hooks/useTransitionHistory';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../css/Splash.css";
// import required modules
import { useIsAuthenticated } from 'react-auth-kit';
import { Autoplay, Pagination } from "swiper";
import RedBtn from '../components/RedBtn';
import RouteData from '../RouteData';
import useArrayFetch from '../hooks/useArrayFetch';

function Splash() {
  
  const [push] = useTransitionHistory();
  //useArrayFetch
  //urlObjectsArray = [{url: "", options: {}, type: Image}, {url: "", options: {}, type: json}]
  const urlObjectsArray = [
    {url: "https://source.unsplash.com/random?face", options: {}, type: "Image"},
    {url: "https://source.unsplash.com/random?body", options: {}, type: "Image"},
    //json placeholder
    //{url: "https://jsonplaceholder.typicode.com/todos/1", options: {}, type: "json"},
    //json placeholder
    //{url: "https://jsonplaceholder.typicode.com/todos/2", options: {}, type: "json"},
    //image
    {url: "https://source.unsplash.com/random?mouth", options: {}, type: "Image"}
  ]
  /*const [data, loading, error] = useArrayFetch(urlObjectsArray);
  useEffect(() => {
    console.log("data",data);
    console.log("loading",loading);
    console.log("error",error);
  }, [data])
  */
    
    

  const isAuthenticated = useIsAuthenticated()
  const handleClick = () => {
    push("/number")
  }
  
  useEffect(() => {
    //check if user is authenticated
    if(isAuthenticated()){
      // Redirect to Dashboard
      //push("/register")
  }

  }, [])
  
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        flex: 1,
        overflowY: "auto",
      }}
    >
      
    {
    process.env.REACT_APP_HOST_ENV === "staging"
    ?
    <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      overflowY: "auto",
      width: "100vw",
      flexDirection: "column",
      
    }}
    >
      {
        //Create buttons for each route in RouteData
        RouteData.map((route, index) => {
          return <div
            key={index}
            style={{
              margin: "30px"
            }}
          >
            <Button colorScheme={"accent"} onClick={() => push(route.path)}>{(route.path).toString().replace("/","")}</Button>
          </div>
        }
        )
      }
    </div>
    :
    <Flex
    flexDir={"column"}
    alignItems={"center"}
    backgroundColor={"#fff"}
    position={"relative"}
    h="100%"
    >
        
        <Swiper pagination={false}
        autoplay={{
          "loop" : true,
          "delay": 3000,
          "disableOnInteraction": false
        }}
         modules={[Pagination, Autoplay]}
         style={{flex: 1}}
         className="mySwiper">
            <SwiperSlide>
                <div style={{
                    flex: 1,
                    width: "100%",
                    marginTop: "auto",
                    marginBottom: "auto",
                    alignSelf: "center",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column"
                }}>
                    <Heading
                        size="xl"
                        mb={10}
                        mt={10}
                    >
                      Welcome to<br></br> Healthcare
                    </Heading>
                    <div style={{
                      flex: 1,
                    }}>
                      <img
                      style={{
                        flex: 1,
                        height: "100%",
                        width: "100%",
                        objectFit: "contain",
                        
                        
                      }}
                      src={process.env.PUBLIC_URL + '/assets/doctor.svg'}  />
                    </div>
                   
                    
                      <img
                      style={{
                        marginTop: "10%",
                        width: "40px",
                      }}
                      src={process.env.PUBLIC_URL + '/assets/iso.png'}  />
                      <Text
                        sx={{
                          fontFamily: "body",
                        }}
                        fontSize={{ base: "sm", md: "xl", lg: "2xl" }}
                        mt={4}
                        mb={4}
                        color="gray.500"
                      >
                        ISO Certified Healthcare Company
                      </Text>

                    
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div style={{
                    flex: 1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column"
                }}>
                  <div style={{
                      flex: 1,
                      
                    }}>
                      <img
                      style={{
                        flex: 1,
                        height: "100%",
                        width: "100%",
                        objectFit: "contain",
                        
                        
                      }}
                      src={process.env.PUBLIC_URL + '/assets/online-doctor-appointment.svg'}  />
                    </div>
                    <Heading
                        p={5}
                        pl={10}
                        pr={10}

                        size={{ base: "xl", md: "2xl", lg: "3xl" }}
                    >Video Consult with doctors and say good bye to doubts</Heading>
                    <Text
                        sx={{
                          fontFamily: "body",
                        }}
                        fontSize={{ base: "sm", md: "xl", lg: "2xl" }}
                        pl={10}
                        pr={10}
                        mb={4}
                        color="gray.500"
                      >
                        Get the Best Guidance for Any Health Issue with Instant Online Doctor Consultation. Instant Consultation Available 24/7 with No Appointment.
                        Consult Now!
                      </Text>
                      <Stack
                      mt={5}
                      spacing={3}
                      direction='row'
                      justifyContent='center'
                      alignItems='center'
                      >
                          <img
                          style={{
                            
                            width: "30px",
                          }}
                          src={process.env.PUBLIC_URL + '/assets/private.svg'}  />
                          <Heading
                            as = "h6"
                            size="sm"
                          >Private and Secure</Heading>
                      </Stack>
              </div>
            </SwiperSlide>
            <SwiperSlide><div style={{
                    flex: 1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column"
                }}>
                  <div style={{
                      flex: 1,
                      
                    }}>
                      <img
                      style={{
                        flex: 1,
                        height: "100%",
                        width: "100%",
                        objectFit: "contain",
                        
                        
                      }}
                      src={process.env.PUBLIC_URL + '/assets/body-checkup.svg'}  />
                    </div>
                    <Heading
                        p={5}
                        pl={10}
                        pr={10}

                        size={{ base: "xl", md: "2xl", lg: "3xl" }}
                    >Get Instant Consulation with Doctor</Heading>
                    <Text
                        sx={{
                          fontFamily: "body",
                        }}
                        fontSize={{ base: "sm", md: "xl", lg: "2xl" }}
                        pl={10}
                        pr={10}
                        mb={4}
                        color="gray.500"
                      >
                        Online doctor consultation in 5 mins with all Top Specialist Doctors. Video Call or Chat with a Doctor from Best Specialties including General Physicians, Neurologist, Oncologist, etc.
                      </Text>
                      <Stack
                      mt={5}
                      spacing={3}
                      direction='row'
                      justifyContent='center'
                      alignItems='center'
                      >
                          <img
                          style={{
                            
                            width: "30px",
                          }}
                          src={process.env.PUBLIC_URL + '/assets/plus-icon.svg'}  />
                          <Heading
                            as = "h6"
                            size="sm"
                          >Best Doctors Available</Heading>
                      </Stack>
              </div>
              </SwiperSlide>
            
      </Swiper>
      <RedBtn text={"Get Started"} handleClick={handleClick} />

    </Flex>
    }
    </div>
  )
}

export default Splash