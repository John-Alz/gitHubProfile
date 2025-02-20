import React, { useContext } from 'react'
import { GitHubProfileContext } from '../context/GitHubProfileContext'
import { CardRepo } from './CardRepo'
import { useState } from 'react';

export const Repos = () => {

    const [state] = useContext(GitHubProfileContext);

    const [flag, setflag] = useState(false);

    const { repos } = state;

    console.log(state);

    const showRepos = () => {
        setflag(prev => !prev)
    }

    const visibleRepos = flag ? repos : repos.slice(0, 4);

    return (
        <div className='w-[80%] m-auto'>
            <div className='grid grid-cols-2 gap-4'>
                {
                    visibleRepos.map((repo) => (
                        <CardRepo key={repo.id} repo={repo} />
                    ))
                }
            </div>
            <div className='flex justify-center p-6'>
                <button className='cursor-pointer' onClick={showRepos}>{!flag ? 'View all respositories' : 'Hide repositories'}</button>
            </div>
        </div>
    )
}
