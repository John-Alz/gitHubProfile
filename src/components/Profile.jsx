import React from 'react'
import { useContext } from 'react'
import { GitHubProfileContext } from '../context/GitHubProfileContext'

export const Profile = () => {

    const [state] = useContext(GitHubProfileContext);

    const { profile } = state;

    return (
        <div className=''>
            <div className='w-[80%] m-auto flex gap-5 items-end translate-y-[-55px]'>
                <img className='w-[150px] rounded-2xl border-4 border-primary ' src={profile?.avatar_url} alt={profile?.name} />
                <div className='bg-secondary flex px-2 py-4 rounded-xl h-[56px]'>
                    <p className='border-r pr-3 pl-3'>Followers</p>
                    <p className='pr-3 pl-3'>{profile?.followers}</p>
                </div>
                <div className='bg-secondary flex px-2 py-4 rounded-xl h-[56px]'>
                    <p className='border-r pr-3 pl-3'>Following</p>
                    <p className='pr-3 pl-3'>{profile?.following}</p>
                </div>
                <div className='bg-secondary flex px-2 py-4 rounded-xl h-[56px]'>
                    <p className='border-r pr-3 pl-3'>Location</p>
                    <p className='pr-3 pl-3'>{profile?.location}</p>
                </div>
            </div>
        </div>

    )
}
