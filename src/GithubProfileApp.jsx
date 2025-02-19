import React from 'react'
import { Search } from './components/Search'
import { GitHubProfileProvider } from './context/GitHubProfileProvider'
import { Header } from './components/Header'
import { Profile } from './components/Profile'
import { Repos } from './components/Repos'

export const GithubProfileApp = () => {
    return (
        <div className='font-primary text-white bg-primary '>
            <GitHubProfileProvider>
                <Header />
                <Profile />
                <Repos />
            </GitHubProfileProvider>

        </div>
    )
}
