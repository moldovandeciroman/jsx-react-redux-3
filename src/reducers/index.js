import {combineReducers} from 'redux'

const songsReducer = () =>
{
    return [
        {
            title : 'No Scrubs',
            duration: '4:20'
        },

        {
            title : 'Omul din Lift',
            duration: '2:10'
        },

        {
            title : 'Lacrimi de Ceara',
            duration: '1:05'
        },

        {
            title : 'Antimilitie',
            duration: '8:40'
        }
    ]
}

const selectedSongReducer = (selectedSong = null, action) =>
{
    if(action.type === 'SONG_SELECTED')
    {
        return action.payload;
    }

    return selectedSong;
}


export default combineReducers({
    songs: songsReducer,
    selectedSong : selectedSongReducer,
});

