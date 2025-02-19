import React from 'react'
import { GitHubProfileContext } from './GitHubProfileContext'
import { useReducer } from 'react'
import { GitHubProfileReducer } from '../reducers/GitHubProfileReducer'

const initialState = {
    userName: '',
    userNameChange: 'GitHub',
    profile: null,
    repos: []
}

export const GitHubProfileProvider = ({ children }) => {

    const [state, dispatch] = useReducer(GitHubProfileReducer, initialState)

    return (
        <GitHubProfileContext.Provider value={[state, dispatch]}>
            {children}
        </GitHubProfileContext.Provider>
    )
}
