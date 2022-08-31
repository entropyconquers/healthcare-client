import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { AppContext } from "../components/AppContext";
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
    useEffect(() => {
        //console.log("push", history.location.pathname);
        //if(history.location.pathname !== page)
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