import { PageTransition } from "@steveeeie/react-page-transition";
import React, { useContext } from "react";
import { Route, Switch } from "react-router-dom";
import { AppContext } from "./AppContext";

import useTransitionHistory from "../hooks/useTransitionHistory";
import RouteData from "../RouteData";
import { useAuthHeader } from "react-auth-kit";
import Splash from "../pages/Splash";

export function Routes() {
  const { preset, enterAnimation, exitAnimation } = useContext(AppContext);
  const [push] = useTransitionHistory();
  const authHeader = useAuthHeader()
  return (
    <>
      <Route
        render={({ location }) => (
          <PageTransition
            preset={preset}
            transitionKey={location.pathname}
            enterAnimation={enterAnimation}
            exitAnimation={exitAnimation}
          >
            <Switch location={location}>
              {
                // Routes
                RouteData.map((route, index) => (
                  //private route
                  
                  <Route
                    key={index}
                    exact path={route.path}
                    
                    render={() => {
                      if(route.needsAuth){
                        if(authHeader().length > 0){
                          return <route.component/>
                        }
                        else{
                          
                          return <Splash/>
                        }
                      }
                      return <route.component/>
                    }
                      
                  } />

                ))
              }
              {/*<Route exact path="/" render={() => <Splash />} />
              <Route exact path="/number" render={() => <EnterNumber />} />
              <Route exact path="/otp" render={() => <OtpVerify />} />
              <Route exact path="/register" render={() => <Registration />} />
              <Route exact path="/dashboard" render={() => <Dashboard />} />
              <Route exact path="/buy99" render={() => <Buy99 />} />
              <Route exact path="/buy499" render={() => <Buy499 />} />
              <Route exact path="/gallerygr" render={() => <GreenRevolutionGallery />} />
              <Route exact path="/galleryha" render={() => <HealthArticleGallery />} />
            <Route exact path="/chat" render={() => <Chat />} />*/}
            </Switch>
          </PageTransition>
        )}
      />
    </>
  );
}
