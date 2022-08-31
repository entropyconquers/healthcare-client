import React from "react";
import { Flex, Avatar, AvatarBadge, Text, VStack } from "@chakra-ui/react";
import Back from "../Back";
const Header = () => {
  return (
    <VStack
      w="100%"
      spacing={0}
    >
      <Back relative logo />
      <Flex w="100%" pt={3} px={3}>
        <Avatar size="md" name="Dan Abrahmov" src="https://bit.ly/dan-abramov">
          <AvatarBadge boxSize="1em" bg="green.500" />
        </Avatar>
        <Flex flexDirection="column" mx="5" justify="center">
          <Text fontSize="lg" fontWeight="bold">
            Vishesh Raheja
          </Text>
          <Text color="green.500">Online</Text>
        </Flex>
      </Flex>
    </VStack>
    
  );
};

export default Header;
