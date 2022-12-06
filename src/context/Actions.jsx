export const AddTab = (tabname) => ({
    type:"ADD_TAB",
    payload:tabname
})

export const RemoveTab = (tabname) => ({
    type:"REMOVE_TAB",
    payload:tabname
})