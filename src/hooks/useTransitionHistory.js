import { useContext, useEffect, useState } from "react";
import { useAuthHeader } from "react-auth-kit";
import { useHistory } from "react-router-dom";
import { AppContext } from "../components/AppContext";
//import RouteData
import RouteData from "../RouteData";
export default function useTransitionHistory(){
    const {
        preset,
        enterAnimation,
        exitAnimation,
        setPreset,
        setEnterAnimation,
        setExitAnimation
      } = useContext(AppContext);
    const history = useHistory();
    const [page, setPage] = useState("")
    const [state, setState] = useState({})
    //useAuthHeader
    const authHeader = useAuthHeader();
    
    useEffect(() => {
        //console.log("push", history.location.pathname);
        //if(history.location.pathname !== page)
        /*var exactPath = page
        if(exactPath === "") exactPath = "/"
        let obj = RouteData.find(o => o.path === exactPath);
        console.log(exactPath);
        if(obj.needsAuth === true){
            
            if(authHeader() === null){
                console.log("needs auth");
                history.push("/login")
                return;
            }
        }*/
        history.push({
            pathname: page,
            state: state
        });
        
    }, [page, state])
    
    const push = (page, state={})=>{
        setPreset("fadeLeftFadeRight");
        setPage(page);
        setState(state);
        
    }

    return [push]
}