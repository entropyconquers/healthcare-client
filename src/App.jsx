import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/nunito/200.css';
import '@fontsource/nunito/300.css';
import '@fontsource/nunito/400.css';
import '@fontsource/nunito/500.css';
import '@fontsource/nunito/600.css';
import '@fontsource/nunito/700.css';
import React, { useEffect, useState } from "react";
import { AuthProvider } from 'react-auth-kit';
import { HashRouter } from "react-router-dom";
import WithAxios from './api/WithAxios';
import { AppContextProvider } from "./components/AppContext";
import { GlobalStyles } from "./components/GlobalStyles";
import { Routes } from "./components/Routes";
import theme from './theme';

import "./css/App.css";
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';
 
window.Pusher = Pusher;

window.Echo = new Echo({
  broadcaster: 'pusher',
  authEndpoint: 'https://f544-2409-4050-dc2-8820-6c12-e670-ce6c-1775.ngrok.io/api/broadcasting/auth',
  
  //key: process.env.REACT_APP_PUSHER_APP_KEY,
  key:"ba3a6a27bf30720c49f9",
  //cluster: process.env.REACT_APP_PUSHER_APP_CLUSTER,
  cluster:"ap2",
  forceTLS: true,
  auth: {
    headers: {
      'Authorization': "Bearer 5|odGIOYJpb6mflkmthpvlMr2h9CNsDR70jUWu4wMr",
      //cors
      'Access-Control-Allow-Origin': '*',
    }
  }
  /*authorizer: (channel, options) => {
    return {
        authorize: (socketId, callback) => {
            const token = "Bearer 3|af8BW6L1mqY0hCOm0jI3VbZZSVh73Ijtp6mdyiNF" ;
            
            fetch("http://0e48-2409-4050-dc2-8820-6c12-e670-ce6c-1775.ngrok.io/broadcasting/auth", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: token,
              },
              body: JSON.stringify({
                socket_id: socketId,
                channel_name: channel.name,
              }),
            })
              .then((response) => {
                callback(false, response);
              })
              .catch((error) => {
                callback(true, error);
              });
        }
    };
  }*/
});
//window.Echo.connector.pusher.config.auth.headers['Authorization'] = "Bearer 3|af8BW6L1mqY0hCOm0jI3VbZZSVh73Ijtp6mdyiNF";
const x = window.Echo.private(`users.29436883dd80719eeca1e9c18fb01a40`)
      .listen('App\\Events\\RoomCreated', (e) => {
          console.log(e);
});
/*indow.Echo.channel(`users.29436883dd80719eeca1e9c18fb01a40`)
.listenToAll((event, data) => {
  // do what you need to do based on the event name and data
  console.log(event, data)
});*/
console.log(x);

function App() {
  const [instantiated, setinstantiated] = useState(false)
  useEffect(() => {
    /*window.Echo = new Echo({
      broadcaster: 'pusher',
      //key: process.env.REACT_APP_PUSHER_APP_KEY,
      key:"ba3a6a27bf30720c49f9",
      //cluster: process.env.REACT_APP_PUSHER_APP_CLUSTER,
      cluster:"ap2",
      forceTLS: true
    });
    window.Echo.channel(`users.29436883dd80719eeca1e9c18fb01a40`)
          .listen('RoomCreated', (e) => {
              console.log(e);
    });
    return () => {
      //window.Echo.disconnect();
    }*/
  }, [])
  useEffect(() => {
    if(instantiated){
      
    }
  }, [instantiated])
  
  
  

  return (
    <ChakraProvider theme={theme}>
      <AppContextProvider>
      <AuthProvider authType = {'cookie'}
                  authName={'_auth'}
                  cookieDomain={window.location.hostname}
                  cookieSecure={window.location.protocol === "https:"}> 
          <WithAxios>
          <HashRouter>
            <GlobalStyles />
            <Routes />
          </HashRouter>
          </WithAxios>
        </AuthProvider>
      </AppContextProvider>
    </ChakraProvider>
    
   
  );
}

export default App;
