export default function commentReducer(state=[],action){
    switch(action.type){
        case 'COMMENT_ACTION':
        // console.log(action.payload);
        state={
            ...state,
            data:action.payload.slice()
        }
        break;
        default:
        break;
    }
    // console.log(state);
    return state;
}