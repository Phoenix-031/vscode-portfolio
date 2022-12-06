/* eslint-disable default-case */
const Reducer = (state,action) => {
    switch (action.type) {
        case "ADD_TAB":
            if(state.tabs.includes(action.payload)){
                return state
            }
            return {
               ...state,
                tabs: [...state.tabs, action.payload]
            };
        case "REMOVE_TAB":
            console.log(action.payload);
            return {
               ...state,
                tabs: state.tabs.filter(t => t.payload!== action.payload)
         };
        default:
            return state;
    }}

export default Reducer