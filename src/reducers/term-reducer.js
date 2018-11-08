export default function termReducer(state='',action){
    switch(action.type){
        case 'TERM_ACTION':
        return action.payload;
        default:
        return state;
    }
}