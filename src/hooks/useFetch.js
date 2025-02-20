import { useContext } from "react";
import { GitHubProfileContext } from "../context/GitHubProfileContext";
import { useEffect } from "react";

export const useFetch = (urlProfile, urlRepos, urlSug) => {

    const [state, dispatch] = useContext(GitHubProfileContext)

    const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

    const fetchDataProfile = async () => {
        try {

            const headers = {
                Authorization: `Bearer ${GITHUB_TOKEN}`,
                Accept: "application/vnd.github.v3+json"
            };

            const resp = await Promise.all([
                fetch(urlProfile, { headers }),
                fetch(urlRepos, { headers }),
                fetch(urlSug, { headers })
            ]); const data = await Promise.all(resp.map(r => r.json()));
            console.log(data);
            dispatch({
                type: 'set-data',
                payload: { profile: data[0], repos: data[1], sug: data[2] }
            })
        } catch (error) {
            console.error(error)
        }
    };

    useEffect(() => {
        fetchDataProfile();
    }, [urlProfile, urlRepos, urlSug])


}
