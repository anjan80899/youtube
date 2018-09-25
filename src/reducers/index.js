import {combineReducers} from 'redux';
import VideoReducer from './video-reducer';
import SelectedVideoReducer from './selectedVideo-reducer';
import TermReducer from './term-reducer';
import CommentReducer from './comment-reducer';

export const allReducers=combineReducers({
    videos:VideoReducer,
    selectedVideo:SelectedVideoReducer,
    term:TermReducer,
    comment:CommentReducer
});