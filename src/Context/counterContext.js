import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export let CounterContext = createContext();

export default function CounterContextProvider(props){

    let [userToken, setUserToken] = useState (null)


    return <CounterContext.Provider value={{ setUserToken, userToken}}>
        {props.children}
    </CounterContext.Provider>
}