import YTSearch from 'youtube-api-search';
const API_KEY='AIzaSyCpdDBzgC6QWYmdjPUJNvOzQpzrwruW-D8';
// export const videosAction=(data)=>{
//     // console.log("hi");
//     return {
//         type:'VIDEOS_ACTION',
//         payload:data
//     }
// }


export const videosAction=(term)=>{
    return (dispatch)=>{
        YTSearch({key:API_KEY,term:term},(data)=>{
            dispatch({
                type:'VIDEOS_ACTION',
                payload:data
            })
        })
    };
}