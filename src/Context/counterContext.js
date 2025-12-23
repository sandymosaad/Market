import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export let CounterContext = createContext();

export default function CounterContextProvider(props){
    // let navigate = useNavigate();
    let [counter, setCounter] = useState(0);
    let [userToken, setUserToken] = useState (null)


    return <CounterContext.Provider value={{counter , setCounter, setUserToken, userToken}}>
        {props.children}
    </CounterContext.Provider>
}