import {
    Box, Text
} from "@chakra-ui/react";
 
  // Import Swiper styles
  import "swiper/css";
import "swiper/css/pagination";
import SkeletonImage from "../components/SkeletonImage";
import "../css/Splash.css";
  // import required modules
  
  const GalleryComponent = (props) => {
      return (
        
          <Box  style={{width: "100%", overflow: "hidden", height: "100%", objectFit:"cover"}} position={"relative"}>
            <SkeletonImage style={{width: "100%"}} url={props.src} />
            {/* Text overlay with 50% opacity background */}
            {props.title && (
              <Box
                position="absolute"
                top={"50%"}
                left={0}
                width="100%"
                transform={`translateY(-50%)`}
                p={2}
                backgroundColor="rgba(0, 0, 0, 0.5)"
                color="white"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Text fontSize="xs" fontWeight="600">
                  {props.title}
                </Text>
              </Box>
            )}
          </Box>
        
      );

  }
 export default GalleryComponent;