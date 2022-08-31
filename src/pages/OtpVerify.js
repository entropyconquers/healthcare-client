import {
  Heading, Stack, Text, useToast
} from "@chakra-ui/react";
import { useState } from "react";
import { useSignIn } from 'react-auth-kit';
import OtpInput from 'react-otp-input';
import { useLocation } from "react-router-dom";
import server from '../api/server';
import Back from "../components/Back";
import RedBtn from "../components/RedBtn";
import useTransitionHistory from "../hooks/useTransitionHistory";
const OtpVerify = () => {
  const location = useLocation();
  const [otp, setOtp] = useState("")
  const [push] = useTransitionHistory();
  const signIn = useSignIn();
  const toast = useToast()
  const handleLogin = () => {
    push('/register');
    server.post('/test/login', null, { params: { phone_number: location.state.number, otp: otp } }).then((response) => {
      if(!response){
        toast({
          title: `Incorrect OTP!`,
          status: "error",
          isClosable: false,
        })
      }
      if(response.status){
        if(signIn({
          token: response.data.token,
          tokenType: "Bearer",
          expiresIn: 24000,
          authState: {}
        }))
        {
          server.interceptors.request.use(function (config) {
              config.headers.Authorization =  'Bearer '+response.data.token;           
              return config;
            }, function (error) {
              return Promise.reject(error);
          }); 
          toast.closeAll()
          push('/dashboard');
        }

        else{
          console.log("error")
          //Saving Token Failed
          toast({
            title: `Incorrect Email or Password`,
            status: "error",
            isClosable: true,
          })
        }     
      }
      else{
        console.log("error1")
        //Login Failed, Show Error
        

      }
    });
  }
  
    return (
      <div
        style={{
          flex: 1,
          display: "flex",
          backgroundColor: "#fff",
          justifyContent: "center",
          flexDirection: "column",
          height: "100%",
          padding: "20px",
        }}
      >
        <Back />
        <Stack spacing={4}>
          <Heading fontSize={{ base: "md", md: "xl" }}>
            Enter the 6-digit OTP sent to
            <br></br>
            +91 {location.state.number}
          </Heading>
          <OtpInput
            onChange={setOtp}
            value={otp}
            numInputs={6}
            otpType="number"
            shouldAutoFocus
            isInputNum
            inputStyle="otp-input"
            isDisabled={false}
            separator={"-"}
          />
          <Text
            color="gray.500"
            fontFamily="body"
            fontSize={{ base: "sm", md: "md", lg: "lg" }}
          >
            Didn’t receive the code?
            <br></br>
            <u style={{ color: "#000" }}>Get OTP again</u>
          </Text>
        </Stack>
        <RedBtn text={"Continue"} handleClick={handleLogin}/>
      </div>
    );
}
export default OtpVerify;