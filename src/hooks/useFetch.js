import { useContext } from "react";
import { GitHubProfileContext } from "../context/GitHubProfileContext";
import { useEffect } from "react";

export const useFetch = (urlProfile, urlRepos) => {

    const [state, dispatch] = useContext(GitHubProfileContext)

    const fetchDataProfile = async () => {
        try {
            const resp = await Promise.all([fetch(urlProfile), fetch(urlRepos)]);
            const data = await Promise.all(resp.map(r => r.json()));
            console.log(data);
            dispatch({
                type: 'set-data',
                payload: { profile: data[0], repos: data[1] }
            })
        } catch (error) {
            console.error(error)
        }
    };

    useEffect(() => {
        fetchDataProfile();
    }, [urlProfile, urlRepos])


}
