import React, { useContext } from 'react'
import { use } from 'react'
import { useFetch } from '../hooks/useFetch'
import { GitHubProfileContext } from '../context/GitHubProfileContext'
import { useEffect } from 'react'
import { CardRepo } from './CardRepo'

export const Repos = () => {

    const [state, dispatch] = useContext(GitHubProfileContext);

    const { userName, repos } = state;

    const fetchDataRepos = async () => {
        try {
            const resp = await fetch(`https://api.github.com/users/${userName}/repos`);
            const data = await resp.json();
            dispatch({
                type: 'set-repos',
                payload: data
            })
        } catch (error) {
            console.error(error)
        }
    };

    useEffect(() => {
        fetchDataRepos();
    }, [])

    return (
        <div className='w-[80%] m-auto'>
            <div className='grid grid-cols-2 gap-4'>
                {
                    repos.map((repo) => (
                        <CardRepo key={repo.id} repo={repo} />
                    ))
                }
            </div>
        </div>
    )
}
