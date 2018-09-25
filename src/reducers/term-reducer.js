export default function termReducer(state='beautiful love',action){
    switch(action.type){
        case 'TERM_ACTION':
        return action.payload;
        default:
        return state;
    }
}