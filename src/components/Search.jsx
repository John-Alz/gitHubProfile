import React from 'react'
import { useFetch } from '../hooks/useFetch'
import { useContext } from 'react'
import { GitHubProfileContext } from '../context/GitHubProfileContext'
import { useForm } from '../hooks/useForm'

export const Search = () => {

    const [state, dispatch] = useContext(GitHubProfileContext)

    const { userName, userNameSugestion, sugention } = state;

    const { formState, onChange, onReset } = useForm({
        username: ''
    });


    const onSubmit = (name) => {
        dispatch({
            type: 'set-username',
            payload: name
        })
        onReset()
    }


    useFetch(
        `https://api.github.com/users/${userName}`,
        `https://api.github.com/users/${userName}/repos`,
        `https://api.github.com/users/${userNameSugestion}`
    )





    return (
        <div className='p-10'>
            <form onSubmit={(e) => { e.preventDefault(); onSubmit(formState.username) }} className='relative left-0 right-0 m-auto w-[500px]'>
                <input onChange={onChange} name='username' value={formState.username} className=' bg-primary w-[500px] px-8 py-3 rounded-xl' type='text' placeholder='username' />
                <img className='absolute top-3 left-1' src={'/Search.svg'} alt='search-icon' />
                {
                    userNameSugestion && <div onClick={() => onSubmit(sugention.login)} className='flex gap-3 bg-secondary text-white mt-3 p-3 rounded-2xl  items-center cursor-pointer'>
                        <img className='w-[100px] rounded-2xl' src={sugention?.avatar_url} />
                        <div>
                            <p>{sugention?.name}</p>
                            <p className='text-quartiary'>{sugention?.bio}</p>
                        </div>
                    </div>
                }
            </form>
        </div>
    )
}
