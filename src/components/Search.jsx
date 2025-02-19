import React from 'react'
import { useFetch } from '../hooks/useFetch'
import { useContext } from 'react'
import { GitHubProfileContext } from '../context/GitHubProfileContext'
import { useForm } from '../hooks/useForm'

export const Search = () => {

    const [state] = useContext(GitHubProfileContext)

    const { userName, profile } = state;

    const { onChange } = useForm();

    useFetch(`https://api.github.com/users/${userName}`)

    console.log(state);

    return (
        <div className='p-10'>
            <form className='relative left-0 right-0 m-auto w-[500px]'>
                <input onChange={onChange} className=' bg-primary w-[500px] px-8 py-3 rounded-xl' type='text' placeholder='username' />
                <img className='absolute top-3 left-1' src={'/Search.svg'} alt='search-icon' />
                {
                    userName.length > 0 && <div className='flex gap-3 bg-secondary text-white mt-3 p-3 rounded-2xl  items-center'>
                        <img className='w-[100px] rounded-2xl' src={profile?.avatar_url} />
                        <div>
                            <p>{profile?.name}</p>
                            <p className='text-quartiary'>{profile?.bio}</p>
                        </div>
                    </div>
                }
            </form>
        </div>
    )
}
