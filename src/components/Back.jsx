import { Text } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import {

  useHistory
} from "react-router-dom";
import { AppContext } from "./AppContext";



export default function Back(props) {
  const history = useHistory();
  const {
    preset,
    enterAnimation,
    exitAnimation,
    setPreset,
    setEnterAnimation,
    setExitAnimation
  } = useContext(AppContext);
  const [appliedPreset, setAppliedPreset] = useState(false);
  const bgColor = props.color ? props.color : "white";
  var applied = false;
  
  const handleClick = () => {
    if(preset === "fadeRightFadeLeft"){
      console.log("Hi")
      
    }
    else{
      setPreset("fadeRightFadeLeft");
    }
    history.goBack()
  }

  

  return (
    <div
      style={{
        position: props.relative ? "relative" : "absolute",
        top: "0",
        left: "0",
        zIndex: "2",
        width: "100%",
        padding: "10px",
        display: "flex",
        justifyContent: "center",
        backgroundColor: bgColor,
        paddingBottom: "10px",
      }}
    >
      <button 
      style={{
        position: "absolute",
        left: "10px",
        padding: "10px",
      }}
      onClick={()=>{
        handleClick()
        }}><IoMdArrowBack color={props.textColor ? props.textColor : "black"} size={25}/></button>
      <Text 
        as={"strong"} 
        p={"10px"}
        color={props.textColor ? props.textColor : "black"}
        fontSize={{ base: 18, md: 22, lg: 22 }}
        >
          <span style={{color:"#00000000"}}>.</span>
          {props.title}
      </Text>
      {props.logo && 
        <img src={process.env.PUBLIC_URL + '/assets/logo.png'} alt="logo" style={{
          position: "absolute",
          right: "10px",
          width: "60%",
          maxHeight: "50px",
          padding: "10px",
        }}/>
      }
    </div>
  );
}
