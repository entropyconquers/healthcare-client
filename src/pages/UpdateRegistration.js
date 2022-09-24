import {
    Heading, Input, Stack, Text, useToast, Container, Spinner
} from "@chakra-ui/react"
import { useEffect } from "react"
import { useState } from "react"
import { useAuthHeader } from "react-auth-kit"
import Back from "../components/Back"
import RedBtn from "../components/RedBtn"
import useFetch from "../hooks/useFetch"
import useTransitionHistory from "../hooks/useTransitionHistory"
import ImageUploader from "react-image-upload";
import "react-image-upload/dist/index.css";
import imageCompression from 'browser-image-compression';
import { useLocation } from "react-router"
export default () => {
    //useLocation
    const location = useLocation();
    const oldData = location.state.userData;
    //console.log(oldData);
    const [push] = useTransitionHistory();
    const toast = useToast();
    
    const [number, setnumber] = useState(oldData.whatsapp_number)
    const [name, setname] = useState(oldData.full_name)
    //email
    const [email, setemail] = useState(oldData.email)
    //age
    const [age, setage] = useState(oldData.age)
    //gender
    const [sex, setsex] = useState(oldData.sex)
    //address
    const [address,setaddress] = useState(oldData.address)
    //base64 image
    const [image, setImage] = useState("")


    const [ response, loading, error, fetchUrl ]  = useFetch()
    const authHeader = useAuthHeader()
    const [imageLoader, setImageLoader] = useState(false)
    const handleClick = () => {
        var data = {
            "full_name": name,
            "whatsapp_number": number,
            "email": email,
            "age": age,
            "address": address,
            "sex": sex
        }

        if(image.length > 0){
          data.image = image
        }
        fetchUrl(`user/profile/1`, 
        {
            method: "PUT",
            body: JSON.stringify(
              data
            )
            //include token
          },
        true, true)
        
        





    }
    useEffect(() => {
        if (response) {
            if(response.success == true){
                toast({
                    title: "Success",
                    description: "Profile Updated",
                    status: "success",
                    duration: 2000,
                    isClosable: true,
                })
                push("/dashboard")
            }
            else{
                toast({
                    title: "Error",
                    description: "Profile Update Failed",
                    status: "error",
                    duration: 2000,
                    isClosable: true,
                })
            }
        }
    }, [response])
    useEffect(() => {
        if (error) {
            if(error.message){
                //toast
                toast({
                    title: error.message,
                    status: "error",
                    isClosable: true,
                  })
            }
            else{
                toast({
                    title: "Something went wrong",
                    description: "Please try again",
                    status: "error",
                    isClosable: true,
                  })
            }
        }
    }, [error])

    async function getImageFileObject(imageFile) {
      if(Object.keys(imageFile).length !== 0){
        setImageLoader(true)
        //console.log(imageFile);
        //compress image
        const compressedFile = await imageCompression(imageFile.file, {
          maxSizeMB: 0.5,
          maxWidthOrHeight: 1920,
          useWebWorker: true
        });
        //convert image file to png file
        const file = new File([compressedFile], "image.png", {type: "image/png", lastModified: Date.now()});

        
        //console.log(compressedFile2);
        //convert to base64
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
          setImageLoader(false)
          setImage(reader.result)
          //console.log(reader.result);
        }
      }  
      
      }
      function runAfterImageDelete(file) {
        console.log({ onDele: file });
      }

    return (
      <div
        style={{
          flex: 1,
          display: "flex",
          backgroundColor: "#fff",
          justifyContent: "center",
          flexDirection: "column",
          height: "100vh",
          padding: "20px",
          paddingTop: "100px",
          paddingBottom: "100px",
          overflowY: "scroll",
        }}
      >
        <Back color={"#F6F6F6"} title={"Register"} />
        <Stack mt={170} spacing={4}>
          <Heading fontSize={{ base: "md", md: "xl" }}>
            Greetings from Healthcare,
          </Heading>
          <Heading fontSize={{ base: "xl", md: "2xl" }}>
            Registration Form
          </Heading>
          <Stack pt={1} spacing={4}>
            <Container align={"center"} position={"relative"}>
              <ImageUploader
                style={{
                  borderRadius: "10px",
                }}
                onFileAdded={(img) => getImageFileObject(img)} // function that runs to confirm that your image actually exists
                onFileRemoved={(img) => runAfterImageDelete(img)} // function runs on once you delete your image
              />

              {
               imageLoader && <Spinner
                  position={"absolute"}
                  top={"40%"}
                  left={"47%"}
                  color="red.400"
                  zIndex={1}
                />
              }
            </Container>
            <Stack spacing={1}>
              <Text
                fontFamily="body"
                fontSize={{ base: "sm", md: "md", lg: "lg" }}
              >
                Name*
              </Text>
              <Input
                fontFamily="body"
                focusBorderColor="pink.400"
                value={name}
                onChange={(e) => setname(e.target.value)}
                placeholder="Enter full name"
              />
            </Stack>
            <Stack spacing={1}>
              <Text
                fontFamily="body"
                fontSize={{ base: "sm", md: "md", lg: "lg" }}
              >
                Whatsapp Number*
              </Text>
              <Input
                fontFamily="body"
                focusBorderColor="pink.400"
                value={number}
                maxlength="10"
                onChange={(e) => setnumber(e.target.value)}
                type="tel"
                placeholder="Enter Whatsapp Number"
              />
            </Stack>
            <Stack spacing={1}>
              <Text
                fontFamily="body"
                fontSize={{ base: "sm", md: "md", lg: "lg" }}
              >
                Email*
              </Text>
              <Input
                fontFamily="body"
                focusBorderColor="pink.400"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                type="email"
                placeholder="Enter Email"
              />
            </Stack>
            <Stack spacing={1}>
              <Text
                fontFamily="body"
                fontSize={{ base: "sm", md: "md", lg: "lg" }}
              >
                Age*
              </Text>
              <Input
                fontFamily="body"
                focusBorderColor="pink.400"
                value={age}
                maxlength="3"
                onChange={(e) => setage(e.target.value)}
                type="number"
                placeholder="Enter Age"
              />
            </Stack>
            <Stack spacing={1}>
              <Text
                fontFamily="body"
                fontSize={{ base: "sm", md: "md", lg: "lg" }}
              >
                Sex*
              </Text>
              <Input
                fontFamily="body"
                focusBorderColor="pink.400"
                value={sex}
                onChange={(e) => setsex(e.target.value)}
                placeholder="Enter Sex e.g. Male"
              />
            </Stack>
            <Stack
              sx={{
                marginBottom: "20vh",
              }}
              spacing={1}
            >
              <Text
                fontFamily="body"
                fontSize={{ base: "sm", md: "md", lg: "lg" }}
              >
                Address*
              </Text>
              <Input
                fontFamily="body"
                focusBorderColor="pink.400"
                value={address}
                onChange={(e) => setaddress(e.target.value)}
                placeholder="Enter Address "
              />
            </Stack>
          </Stack>
        </Stack>
        <RedBtn
          loadingText={"Registering..."}
          isLoading={loading}
          text={"Continue"}
          handleClick={handleClick}
        />
      </div>
    );
}