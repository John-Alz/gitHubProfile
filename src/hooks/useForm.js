import { useContext } from "react"
import { GitHubProfileContext } from "../context/GitHubProfileContext"
import { useState } from "react"


export const useForm = (initialState) => {

    const [formState, setFormState] = useState(initialState);
    const [state, dispatch] = useContext(GitHubProfileContext);

    const onChange = ({ target }) => {
        const { name, value } = target
        setFormState({
            ...formState,
            [name]: value
        })
        dispatch({
            type: 'set-username-sug',
            payload: value
        })
    }

    const onReset = () => {
        setFormState(initialState)
        dispatch({
            type: 'set-username-sug',
            payload: ''
        })
    }

    return {
        formState,
        onChange,
        onReset
    }

}