import React, { useContext } from 'react'
import { GitHubProfileContext } from '../context/GitHubProfileContext'
import { CardRepo } from './CardRepo'
import { useState } from 'react';

export const Repos = () => {

    const [state] = useContext(GitHubProfileContext);

    const [flag, setflag] = useState(false);

    const { repos, profile } = state;

    console.log(state);

    const showRepos = () => {
        setflag(prev => !prev)
    }

    const visibleRepos = flag ? repos : repos.slice(0, 4);

    return (
        <div className='w-[90%] lg:w-[80%] m-auto'>
            <div className='mb-4 translate-y-[-40%]'>
                <h2 className='text-3xl'>{profile?.name}</h2>
                <p className='font-light'>{profile?.bio}</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
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
