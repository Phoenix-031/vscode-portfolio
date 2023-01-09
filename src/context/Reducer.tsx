// // import { useNavigate } from "react-router-dom";
// import { TabType } from "./TabContext";
// import { AdminType } from "./AdminContext";

/* eslint-disable default-case */
const Reducer = (state : any,action :any)  => {

    // const navigate = useNavigate()
    
    switch (action.type) {
        case "REMOVE_TAB":
            return {
               ...state,
                tabs: (state.tabs).filter((t:any) => t!== action.payload)
         };
        case "ADD_TAB":

            // navigate(action.payload)
            if(state.tabs.includes(action.payload)){
                return state
            }
            return {
               ...state,
                tabs: [...state.tabs, action.payload]
            };

        case "TERMINAL_TOGGLE" :
            
        return {
            ...state,terminal: action.payload
        }

        case "ADMIN_LOGIN":
            return {
                User: action.payload
            }

        case "ADMIN_LOGOUT":
            return {
                User: action.payload
            }

        default:
            return state;
    }}

export default Reducer