export default function videoReducer(state=[],action){
    switch(action.type){
        case 'VIDEOS_ACTION':
        return action.payload;
        default:
        return state;
    }
}