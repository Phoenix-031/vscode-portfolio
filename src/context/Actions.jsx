import { ACTION_TYPES } from "./ActionTypes"

export const AddTab = (tabname) => ({
    type:ACTION_TYPES.ADD_TAB,
    payload:tabname
})

export const RemoveTab = (tabname) => ({
    type:ACTION_TYPES.REMOVE_TAB,
    payload:tabname
})

export const TerminalToggle = (val) => ({
    type:ACTION_TYPES.TERMINAL_TOGGLE,
    payload:val
})
