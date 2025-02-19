import { useContext } from "react"
import { GitHubProfileContext } from "../context/GitHubProfileContext"


export const useForm = () => {

    const [state, dispatch] = useContext(GitHubProfileContext)

    const onChange = (e) => {
        console.log(e.target.value);
        dispatch({
            type: 'set-username',
            payload: e.target.value
        })
        console.log(state);
    }

    return {
        onChange
    }

}