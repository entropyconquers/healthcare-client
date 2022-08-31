import { useIsAuthenticated, withAuthHeader } from 'react-auth-kit';
import server from "../api/server";

const WithAuthHeader= (props)=>{
  const isAuthenticated = useIsAuthenticated();
  const header=props.authHeader;    

  //Setting Auth Header
if(isAuthenticated){
    server.interceptors.request.use(function (config) {
      config.headers.Authorization = header;
      return config;
    }, function (error) {
      return Promise.reject(error);
    }); 
  }
  else{
    console.log('Not Authenticated');
  }
    return props.children;
};
export default withAuthHeader(WithAuthHeader)
