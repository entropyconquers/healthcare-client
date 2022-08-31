import {
    Box, Button,
    Container, Flex, Stack, Text, useToast, Heading, HStack, VStack, SimpleGrid, Skeleton
  } from "@chakra-ui/react";
  import useImage from "react-hook-image";

  export default function ImageComponent({ url, style }) {
    const { src, status } = useImage(url);
    
    return (   
        <Skeleton
            w="100%"
            h="100%"
            isLoaded={status !== "loading"}
            fadeDuration={0.5}
        >
          <img style={{ width: "100%", height:"100%" ,objectFit: "cover"}} src={src} />
        </Skeleton>
    );
  }