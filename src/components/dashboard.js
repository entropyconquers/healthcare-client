import {
    Box, Button, Flex, Stack, Text
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

///////////// Pricing Box ///////////////

export const PricingBox = (props) => {
    return (
      <Box
        dropShadow="xl"
        flex={1}
        boxShadow='lg'
        borderRadius="lg"
        bgGradient={`linear(to-bl, ${props.colorScheme}.500, ${props.colorScheme}.100)`}
        align={"center"}
        p={4}
        
      >
        <Stack h="100%" spacing={4}>
          <Text
            as={"u"}
            fontWeight={"500"}
            sx={{
              fontFamily: "body",
            }}
            fontSize={{ base: "xl", md: "2xl", lg: "2xl" }}
            color="white"
          >
            {props.price + " Rs"}
          </Text>
          
          <Flex flexDir="column"
            justifyContent="center"
            alignItems="center"
            flex={1}
          >
            <Text
            fontWeight={"600"}
            sx={{
              fontFamily: "body",
            }}
            fontSize={{ base: "9", md: "12", lg: "15" }}
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
            <Button onClick={props.handleClick} mt="auto" colorScheme={props.colorScheme}>
              Buy Now
            </Button>
          </Flex>
        </Stack>
      </Box>
    );
  }
  
 /////////////// Article ///////////////

  export const Article = (props) => {
    return (
      <Box
        flex={1}
        borderRadius="xs"
        backgroundColor="#D9D9D9"
        position={"relative"}
        align={"center"}
        
        overflow="hidden"
      >
        <Stack  h="100%" spacing={2}>
          <img
             src={process.env.PUBLIC_URL + '/assets/'+props.img} 
          >
          </img>
          <Text
            pl={2}
            pr={2}
            pb={2}
            color="gray.900"
            sx={{
              fontFamily: "body",
            }}
            fontSize={{ base: "12", md: "15", lg: "18" }}
            textAlign="left"
          >
            {props.title}
          </Text>
  
         
        </Stack>
      </Box>
    );
  }

  /////////////// ConsultBox ///////////////
  
  export const ConsultBox = (props) => {
    return (
      <Box
        onClick={()=>props.handleClick()}
        dropShadow="xl"
        flex={1}
        borderRadius="lg"
        backgroundColor="white"
        position={"relative"}
        align={"center"}
        p={2}
        overflow="hidden"
      >
        <Stack mb={8} h="100%" spacing={2}>
          <Text
            as={"b"}
            sx={{
              fontFamily: "body",
            }}
            fontSize={{ base: "9", md: "12", lg: "15" }}
            textAlign="left"
            
          >
            {props.title}
          </Text>
          <Text
            color="gray.500"
            sx={{
              fontFamily: "body",
            }}
            fontSize={{ base: "8", md: "12", lg: "15" }}
            textAlign="left"
            
          >
            {props.subtitle}
          </Text>
  
          <Flex
            w="100%"
            justifyContent="center"
           pos={"absolute"} 
           sx={{
              bottom:0,
              left:0,
           }}
           bg="#2777A4" 
           flexDir="row">
            <Text
              color="white"
              sx={{
                fontFamily: "body",
              }}
              p={1}
              fontSize={{ base: "8", md: "12", lg: "15" }}
              textAlign="center"
              
            >
              {props.bottom}
            </Text>
          </Flex>
        </Stack>
      </Box>
    );
  }

  /////////////// Slide ///////////////
  
  export const Slide = (props) => {
    const [margin, setMargin] = useState(0)
    const [height, setHeight] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const h = ref.current.clientHeight
    setHeight(h)
    //convert string Xpx to number X
    
  })
  useEffect(() => {
    if(height>100){
    const h = ref.current.clientHeight
    
    //convert string Xpx to number X
    const hpx = Number(props.imgH.split('px')[0])
    
    const m = hpx > h ? hpx-h : 1
    setMargin(m)
    //console.log("Margin: "+m)
    }
  }, [height])
  useEffect(() => {
    if(margin==1){
      const x = (props.sliderHeight - ref.current.clientHeight)/4
      setMargin(x)
      //console.log(props.img+" "+x)
    }
  }, [margin])

  
  
  

    return (
      <Box
        flex={1}
        borderRadius="lg"
        
        align={"center"}
        position={"relative"}
        overflow="visible"
        minH={150}
        //mt={`${margin}px`}
        
      >
        <Flex   height="100%" flexDir={"row"}>
          <div
            style={{
              position: "absolute",
              top: `${margin}px`,
              left: 0,
              width: "100%",
              height: height,
              
              background: props.bg,
              zIndex: -1,
              borderRadius: "10px",
            }}
          >

          </div>
          <Stack
          mt={`${margin}px`}
          ref={ref} h="100%" p={4} pr={0} spacing={3}
            flex={2}
          >
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
            <Button
              size={"sm"}
              p={2}
              mt={2}
              maxW="80%"
              variant="outline"
              color={"white"}
              colorScheme={"gray"}
            >
              {props.btnText}
            </Button>
          </Stack>
          <img
            style={{
              flex: 1,
              //position: "absolute",
              
              //bottom: 0,
              //right: 0,
              marginTop: "auto",
              marginBottom: props.mb ? "auto" : "0px",
              height: props.imgH,
             //marginRight: "5px",
              objectFit: "contain",
            }}
            src={process.env.PUBLIC_URL + "/assets/" + props.img}
          ></img>
        </Flex>
        
      </Box>
    );
  };
  
