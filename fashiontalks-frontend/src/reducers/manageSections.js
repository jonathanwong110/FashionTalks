export default function manageSections (state = {
    sections: []
}, action) {
    switch (action.type) {
        case 'LOADING_SECTIONS':
            return {
                ...state,
                sections: [...state.sections]
        }
        case 'SECTIONS_LOADED':
            return {
                ...state,
                sections: action.sections
        }
        default:
            return state
    }
}