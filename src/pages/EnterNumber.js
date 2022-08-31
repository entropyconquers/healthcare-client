import {
    Heading, Input, InputGroup, InputLeftAddon, Stack, Text
} from "@chakra-ui/react"
import { useState } from "react"
import Back from "../components/Back"
import RedBtn from "../components/RedBtn"
import useTransitionHistory from "../hooks/useTransitionHistory"

export default () => {
    
    const [push] = useTransitionHistory();
    const handleClick = () => {
        push("/otp", {
            number: number
        })
    }
    const [number, setnumber] = useState("")
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
            Enter your mobile number
          </Heading>
          <InputGroup>
            <InputLeftAddon fontFamily="body" children="+91" />
            <Input
              fontFamily="body"
              focusBorderColor="pink.400"
              value={number}
              maxlength="10"
              onChange={(e) => setnumber(e.target.value)}
              type="tel"
              placeholder="Mobile Number"
            />
          </InputGroup>
          <Text color="gray.500" fontFamily="body" fontSize={{ base: "sm", md: "md", lg: "lg" }}>
          By continuing, you agree to our <br></br>
        <u style={{color:"#000"}}>Terms & Conditions</u>
            </Text>
        </Stack>
        <RedBtn text={"Continue"} handleClick={handleClick}/>
      </div>
    );
}