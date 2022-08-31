import {
    Heading, Input, Stack, Text
} from "@chakra-ui/react"
import { useState } from "react"
import Back from "../components/Back"
import RedBtn from "../components/RedBtn"
import useTransitionHistory from "../hooks/useTransitionHistory"

export default () => {
    
    const [push] = useTransitionHistory();
    const handleClick = () => {
        push("/dashboard")
    }
    const [number, setnumber] = useState("")
    const [name, setname] = useState("")
    //email
    const [email, setemail] = useState("")
    //age
    const [age, setage] = useState("")
    //gender
    const [sex, setsex] = useState("")
    //address
    const [address,setaddress] = useState("")

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
          overflowY: "scroll"
        }}
      >
        <Back color={"#F6F6F6"} title={"Register"} />
        <Stack sx={{
            marginTop: "30%",
            
        }} spacing={4}>
          <Heading fontSize={{ base: "md", md: "xl" }}>
            Greetings from Healthcare,
          </Heading>
          <Heading  fontSize={{ base: "xl", md: "2xl" }}>
            Registration Form
          </Heading>
          <Stack pt={5} spacing={4} >
            <Stack spacing={1}>
                <Text fontFamily="body" fontSize={{ base: "sm", md: "md", lg: "lg" }}>
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
                <Text fontFamily="body" fontSize={{ base: "sm", md: "md", lg: "lg" }}>
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
                <Text fontFamily="body" fontSize={{ base: "sm", md: "md", lg: "lg" }}>
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
                <Text fontFamily="body" fontSize={{ base: "sm", md: "md", lg: "lg" }}>
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
                <Text fontFamily="body" fontSize={{ base: "sm", md: "md", lg: "lg" }}>
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
            <Stack sx={{
                marginBottom:"20vh"
            }} spacing={1}>
                <Text fontFamily="body" fontSize={{ base: "sm", md: "md", lg: "lg" }}>
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
        <RedBtn text={"Continue"} handleClick={handleClick}/>
      </div>
    );
}