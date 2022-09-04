import { Button } from "@chakra-ui/react"

export default ({text, handleClick, isLoading, loadingText}) => {

return (
  <Button
    w="90%"
    isLoading={isLoading}
    spinnerPlacement="end"
    loadingText={loadingText ? loadingText : text}
    mt={{ base: 3 }}
    mb={{ base: 3 }}
    p={{ base: 4, md: 6, lg: 10 }}
    fontSize={{ base: "sm", md: "md", lg: "lg" }}
    _hover={{ bg: "red.400" }}
    sx={{
      fontFamily: "body",
      maxWidth: "400px",
      position: "absolute",
      bottom: "0px",
      zIndex: "5",
    }}
    onClick={() => handleClick()}
    colorScheme="accent"
  >
    {text}
  </Button>
);
}