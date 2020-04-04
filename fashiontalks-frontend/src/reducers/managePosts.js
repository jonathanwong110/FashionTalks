export default function managePosts (state = {
    posts: []
}, action) {
    switch (action.type) {
        case 'LOADING_POSTS':
            return {
                ...state,
                posts: [...state.posts]
        }
        case 'POSTS_LOADED':
            return {
                ...state,
                posts: action.posts
        }
        default:
            return state
    }
}