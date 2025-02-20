
export const GitHubProfileReducer = (state, action) => {


    switch (action.type) {
        case 'set-username':
            return { ...state, userName: action.payload };
        case 'set-username-sug':
            return { ...state, userNameSugestion: action.payload };
        case 'set-data':
            return { ...state, profile: action.payload.profile, repos: action.payload.repos, sugention: action.payload.sug };
        default:
            return state;
    }
}