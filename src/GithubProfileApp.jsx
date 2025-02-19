import React from 'react'
import { Search } from './components/Search'
import { GitHubProfileProvider } from './context/GitHubProfileProvider'
import { Header } from './components/Header'

export const GithubProfileApp = () => {
    return (
        <div className='font-primary text-white'>
            <GitHubProfileProvider>
                <Header />
            </GitHubProfileProvider>

        </div>
    )
}
