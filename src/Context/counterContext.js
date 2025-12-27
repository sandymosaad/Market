import { createContext, useState } from "react";

export let CounterContext = createContext();

export default function CounterContextProvider(props){

    let [userToken, setUserToken] = useState (null)
    let savedToken = localStorage.getItem("userToken")
    if (savedToken && !userToken){
        setUserToken (savedToken)
    }

    return <CounterContext.Provider value={{ setUserToken, userToken}}>
        {props.children}
    </CounterContext.Provider>
}