import { useReducer,useEffect,createContext } from "react"
import Reducer from "./Reducer"

const INITIAL_STATE = {
    User:false
}

export const AdminContext = createContext(INITIAL_STATE)

export const AdminContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(Reducer, INITIAL_STATE)

    useEffect(() => {

        localStorage.setItem('user',state.User)

        
    }, [state.User])

    return(
        <AdminContext.Provider value={{
            user:state.User,
            dispatch
        }}>
            {children}
        </AdminContext.Provider>
    )
    
}