import React, { useContext } from 'react'
import { GitHubProfileContext } from '../context/GitHubProfileContext'
import { CardRepo } from './CardRepo'

export const Repos = () => {

    const [state, dispatch] = useContext(GitHubProfileContext);

    const { userName, repos } = state;

    console.log(state);


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
