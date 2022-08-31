import server from './server';
import { useSignOut } from 'react-auth-kit'

const WithAxios = (props) => {
    const signOut=useSignOut();    
    server.interceptors.response.use(function (response) {
        return response;
      }, function (error) {
        if(error?.response?.status == 401)
          {
            //signOut();
          }
          else{
            return Promise.reject(error);
          }
          
      });      
    return props.children;
}

export default WithAxios;