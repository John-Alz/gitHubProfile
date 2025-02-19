
export const GitHubProfileReducer = (state, action) => {

    switch (action.type) {
        case 'set-username':
            return { ...state, userName: action.payload };
        case 'set-data':
            return { ...state, profile: action.payload.profile, repos: action.payload.repos };
        default:
            return state;
    }
}