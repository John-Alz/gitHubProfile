import React from 'react'
import { Search } from './components/Search'
import { GitHubProfileProvider } from './context/GitHubProfileProvider'
import { Header } from './components/Header'
import { Profile } from './components/Profile'

export const GithubProfileApp = () => {
    return (
        <div className='font-primary text-white bg-primary '>
            <GitHubProfileProvider>
                <Header />
                <Profile />
            </GitHubProfileProvider>

        </div>
    )
}
