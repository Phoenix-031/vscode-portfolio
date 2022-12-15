import { createContext, useReducer, useEffect } from "react";
import Reducer from './Reducer'

const INITIAL_STATE = {
    tabs:["/open"],
    terminal:false,
}

export const TabContext = createContext(INITIAL_STATE)

export const TabContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE)

    useEffect(() => {
        localStorage.setItem("tabs",JSON.stringify(state.tabs))
    }, [state.tabs,state.terminal])

    return (
        <TabContext.Provider value={{
            tabs: state.tabs,
            terminal: state.terminal,
            dispatch,
        }}>
            {children}
        </TabContext.Provider>
    )
    
}