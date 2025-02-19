
export const GitHubProfileReducer = (state, action) => {

    switch (action.type) {
        case 'set-username':
            return { ...state, userName: action.payload };
        case 'set-profile':
            return { ...state, profile: action.payload };
        default:
            return state;
    }
}