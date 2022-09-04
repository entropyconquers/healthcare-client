import { Button } from "@chakra-ui/react"

export default ({text, handleClick}) => {

return <Button
w="90%"

mt={{base: 3}}
mb={{base: 3}}
p={{base: 4, md: 6, lg: 10}}
fontSize={{ base: "sm", md: "md", lg: "lg" }}
_hover={{ bg: 'blue.400' }}
sx={{
  fontFamily: "body",
  maxWidth: "400px",
  position: "absolute",
  bottom: "0px",
  zIndex: "5",
}}
onClick={() => handleClick()}
color="white"
bg="#46BCFF"
>{text}</Button>
}