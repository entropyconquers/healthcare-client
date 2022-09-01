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
  authEndpoint: 'https://475a-47-31-167-20.ngrok.io/broadcasting/auth',
  
  //key: process.env.REACT_APP_PUSHER_APP_KEY,
  key:"ba3a6a27bf30720c49f9",
  //cluster: process.env.REACT_APP_PUSHER_APP_CLUSTER,
  cluster:"ap2",
  forceTLS: true,
  encrypted:false,
  auth: {
    headers: {
      'Authorization': "Bearer 5|odGIOYJpb6mflkmthpvlMr2h9CNsDR70jUWu4wMr",
    }
  },
});
//window.Echo.connector.pusher.config.auth.headers['Authorization'] = "Bearer 3|af8BW6L1mqY0hCOm0jI3VbZZSVh73Ijtp6mdyiNF";
const x = window.Echo.private(`users.29436883dd80719eeca1e9c18fb01a40`)
      .listen('RoomCreated', (e) => {
        /*
        {"room":{"name":"1-1662006923-1","room_id":"2f932f01-d75b-4189-9067-43e1e568eccb","privacy":"private","accepted_at":null,"url":"https://healthcaresamarth.daily.co/1-1662006923-1","config":{"start_video_off":true,"start_audio_off":true},"receiver":{"id":1,"phone_number":"9451526930","channel_name":"29436883dd80719eeca1e9c18fb01a40","created_at":"2022-08-31T07:36:45.000000Z","updated_at":"2022-08-31T07:36:45.000000Z"}}}
        */
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
