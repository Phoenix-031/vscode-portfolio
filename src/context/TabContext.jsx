import { createContext, useReducer, useEffect } from "react";
import Reducer from './Reducer'

const INITIAL_STATE = {
    tabs:["/"]
}

export const TabContext = createContext(INITIAL_STATE)

export const TabContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE)

    useEffect(() => {
        localStorage.setItem("tabs",JSON.stringify(state.tabs))
    }, [state.tabs])

    return (
        <TabContext.Provider value={{
            tabs: state.tabs,
            dispatch,
        }}>
            {children}
        </TabContext.Provider>
    )
    
}