import { Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import Divider from "../components/chat/Divider";
import Footer from "../components/chat/Footer";
import Header from "../components/chat/Header";
import Messages from "../components/chat/Messages";

const Chat = () => {
  const [messages, setMessages] = useState([
	{ from: "computer", text: "Hi, My Name is doctor" },
	{ from: "me", text: "Hey there" },
	{ from: "me", text: "Myself Vishesh" },
	{
  	from: "computer",
  	text: "Nice to meet you. You can send me message and i'll reply you with same message.",
	},
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = () => {
	if (!inputMessage.trim().length) {
  	return;
	}
	const data = inputMessage;

	setMessages((old) => [...old, { from: "me", text: data }]);
	setInputMessage("");

	setTimeout(() => {
  	setMessages((old) => [...old, { from: "computer", text: data }]);
	}, 1000);
  };

  return (
	<Flex w="100%" h="100vh" justify="center" align="center">
  	<Flex h="100%" flexDir="column">
    	<Header />
    	<Divider />
    	<Messages messages={messages} />
    	<Divider />
    	<Footer
      	inputMessage={inputMessage}
      	setInputMessage={setInputMessage}
      	handleSendMessage={handleSendMessage}
    	/>
  	</Flex>
	</Flex>
  );
};

export default Chat;