import { useContext } from "react";
import { GitHubProfileContext } from "../context/GitHubProfileContext";
import { useEffect } from "react";

export const useFetch = (urlProfile) => {

    const [state, dispatch] = useContext(GitHubProfileContext)

    const fetchDataProfile = async () => {
        try {
            const resp = await fetch(urlProfile);
            const data = await resp.json();
            dispatch({
                type: 'set-profile',
                payload: data
            })
        } catch (error) {
            console.error(error)
        }
    };

    useEffect(() => {
        fetchDataProfile();
    }, [urlProfile])


}
