import { useContext } from "react";
import { GitHubProfileContext } from "../context/GitHubProfileContext";
import { useEffect } from "react";

export const useFetch = (url) => {

    const [state, dispatch] = useContext(GitHubProfileContext)

    const fetchData = async () => {
        try {
            const resp = await fetch(url);
            const data = await resp.json();
            dispatch({
                type: 'set-profile',
                payload: data
            })
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [url])


}
