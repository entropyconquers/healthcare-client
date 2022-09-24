import {
  Heading, Stack, Text, useToast
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useAuthHeader, useSignIn } from 'react-auth-kit';
import OtpInput from 'react-otp-input';
import { useLocation } from "react-router-dom";
import server from '../api/server';
import Back from "../components/Back";
import RedBtn from "../components/RedBtn";
import useTransitionHistory from "../hooks/useTransitionHistory";
import useFetch from "../hooks/useFetch";
const OtpVerify = () => {
  const location = useLocation();
  const [otp, setOtp] = useState("")
  const [push] = useTransitionHistory();
  const signIn = useSignIn();
  const toast = useToast();
  const [loginUrl, setLoginUrl] = useState("");
  //const authHeader = 
  //useFetch
  const authHeader = useAuthHeader();
  const initLoginParams = {
    phone_number: location.state.number,
  }
  const [loginResponse, loginLoading, loginError, fetchUrl] = useFetch();
  //get user/profile
  const [profileResponse, profileLoading, profileError, fetchProfileUrl] = useFetch();
  
  //loading
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    //console.log(authHeader());
  }, [authHeader])
  


    

  
  useEffect(() => {
    fetchUrl("login?"+new URLSearchParams(initLoginParams), {
      method: "POST",
    }, true);
  }, [])
  useEffect(() => {
    if (loginResponse) {
      console.log(loginResponse);
    }
  }, [loginResponse])
  useEffect(() => {
    if(profileResponse) {
      if (profileResponse.success) {
        //navigate to dashboard
        push("/dashboard");
      } else {
        //navigate to registration
        push("/register");
      }
    }
  }, [profileResponse])
  
  
  const handleLogin = () => {
    setLoading(true);
    //push('/register');
    server.post('/login', null, { params: { phone_number: location.state.number, otp: otp } }).then((response) => {
      if(!response){
        setLoading(false);
        toast({
          title: `Incorrect OTP!`,
          status: "error",
          isClosable: true,
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
          fetchProfileUrl("user/profile", {
            method: "GET",
            //include token
            headers: {
              "Authorization": 'Bearer '+response.data.token,
              "Content-Type": "application/json",
            }
          }, true);

          // push('/dashboard');
        }

        else{
          console.log("error")
          setLoading(false);
          //Saving Token Failed
          toast({
            title: `Incorrect OTP!`,
            status: "error",
            isClosable: true,
          })
        }     
      }
      else{
        console.log("error1")
        setLoading(false);
        toast({
          title: `Some error occured!`,
          status: "error",
          isClosable: true,
        })
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
        <img src={process.env.PUBLIC_URL + '/assets/logo.png'} alt="logo" style={{
            paddingBottom: 10,
        }}/>
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
        <RedBtn 
        loadingText={"Verifying..."}
        isLoading={loading} text={"Continue"} handleClick={handleLogin}/>
      </div>
    );
}
export default OtpVerify;