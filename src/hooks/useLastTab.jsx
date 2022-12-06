import { useNavigate } from "react-router-dom";

function useLastTab(tab) {
    useNavigate(tab)
}

export default useLastTab