
/* eslint-disable default-case */
const Reducer = (state,action) => {
    switch (action.type) {
        case "REMOVE_TAB":
            return {
               ...state,
                tabs: (state.tabs).filter(t => t!== action.payload)
         };
        case "ADD_TAB":
            if(state.tabs.includes(action.payload)){
                return state
            }
            return {
               ...state,
                tabs: [...state.tabs, action.payload]
            };
        default:
            return state;
    }}

export default Reducer