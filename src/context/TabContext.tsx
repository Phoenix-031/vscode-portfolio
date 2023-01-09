import { createContext, useReducer, useEffect } from "react";
import Reducer from './Reducer'

export interface TabType {
    tabs:string[],
    terminal:boolean
}

const INITIAL_STATE = {
    tabs:["/"],
    terminal:false,
}

interface TabContextValue {
    tabs: string[]
    terminal: boolean,
    dispatch:React.Dispatch<any>
}

type TabContextProviderType = {
    children:React.ReactNode
}

export const TabContext = createContext<TabContextValue>({
    tabs: [],
    terminal: false,
    dispatch: () => {},
})

export const TabContextProvider = ({children} : TabContextProviderType) => {
    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE)

    useEffect(() => {
        localStorage.setItem("tabs",JSON.stringify(state.tabs))
    }, [state.tabs])

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