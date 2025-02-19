import React from 'react'

export const CardRepo = ({ repo }) => {
    return (
        <div className='bg-linear-to-r from-cardP to-tertiary flex flex-col gap-3 p-4 rounded-2xl'>
            <h2 className='text-lg'>{repo.name}</h2>
            <p className='text-sm'>{repo.description}</p>
            <div className='flex gap-3'>
                <span className='flex'><img src={'/Nesting.svg'} alt='repoFork' />{repo.forks_count}</span>
                <span className='flex items-center'><img src={'/Star.svg'} alt='repoStar' />{repo.stargazers_count}</span>
                <span>{repo.updated_at}</span>
            </div>
        </div>
    )
}
