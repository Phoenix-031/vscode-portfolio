import { useReducer,useEffect,createContext } from "react"
import Reducer from "./Reducer"


type AdminContextProviderType = {
    children:React.ReactNode
}

export interface AdminType {
    User:string
}

const INITIAL_STATE = {
    User:""
}

interface ContextAdminType {
    user: AdminType
    dispatch: React.Dispatch<any>
}

export const AdminContext = createContext<ContextAdminType>({
    user: INITIAL_STATE,
    dispatch: () => {}
})

export const AdminContextProvider = ({children}: AdminContextProviderType) => {
    const [state,dispatch] = useReducer(Reducer, INITIAL_STATE)

    useEffect(() => {

        localStorage.setItem('user',state.User)

        
    }, [state.User])

    return(
        <AdminContext.Provider value ={{
            user:{User : state.User},
            dispatch
        }}>
            {children}
        </AdminContext.Provider>
    )
    
}